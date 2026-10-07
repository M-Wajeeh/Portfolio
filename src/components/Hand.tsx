import React, { useEffect, useRef } from 'react';
import { annotate } from 'rough-notation';
import rough from 'roughjs';

/* Pen colors, read from CSS so there's one source of truth. */
const pen = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Run `fn` once the element is on screen and the fonts have settled the layout. */
const whenVisible = (el: Element, fn: () => void) => {
    let done = false;
    const io = new IntersectionObserver(([e]) => {
        if (!e.isIntersecting || done) return;
        done = true;
        io.disconnect();
        document.fonts.ready.then(fn);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
};

type MarkType = 'underline' | 'circle' | 'highlight' | 'box' | 'strike-through';

interface MarkProps {
    type: MarkType;
    color?: string;
    children: React.ReactNode;
    delay?: number;
    multiline?: boolean;
    padding?: number;
}

/** Pen marks drawn over text when it scrolls into view: underlines, circles, highlighter. */
export const Mark = ({ type, color, children, delay = 0, multiline = true, padding }: MarkProps) => {
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const el = ref.current!;
        const c = color ?? (type === 'highlight' ? pen('--highlighter') : pen('--red-pen'));
        const a = annotate(el, {
            type,
            color: c,
            strokeWidth: type === 'highlight' ? 1 : 2,
            padding: padding ?? (type === 'circle' ? 10 : type === 'highlight' ? 2 : 3),
            multiline,
            iterations: type === 'highlight' ? 1 : 2,
            animate: !reduceMotion(),
            animationDuration: type === 'highlight' ? 700 : 600,
        });
        let t: ReturnType<typeof setTimeout>;
        const stop = whenVisible(el, () => { t = setTimeout(() => a.show(), delay); });
        return () => { stop(); clearTimeout(t); a.remove(); };
    }, [type, color, delay, multiline, padding]);

    return <span ref={ref} className={`mark mark--${type}`}>{children}</span>;
};

interface SketchProps {
    steps: string[];
    loopTo?: number;
    seed: number;
    label: string;
}

/**
 * A project's system drawn by hand: boxes for stages, pen arrows between them,
 * snaking across rows so the drawing fits any width.
 */
export const Sketch = ({ steps, loopTo, seed, label }: SketchProps) => {
    const wrapRef = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const wrap = wrapRef.current!;
        const svg = svgRef.current!;
        let drawn = false;

        const draw = () => {
            const width = wrap.clientWidth;
            if (!width) return;
            const ink = pen('--ink');
            const red = pen('--red-pen');
            const n = steps.length;
            const gapX = 40, gapY = 44, boxH = 58, padR = loopTo !== undefined ? 34 : 6;
            const cols = Math.max(1, Math.min(n, 4, Math.floor((width - padR + gapX) / (124 + gapX))));
            const boxW = Math.min(190, (width - padR - (cols - 1) * gapX) / cols);
            const rows = Math.ceil(n / cols);
            const height = rows * boxH + (rows - 1) * gapY + 14;

            const pos = steps.map((_, i) => {
                const r = Math.floor(i / cols);
                const c = r % 2 === 0 ? i % cols : cols - 1 - (i % cols);
                return { x: 4 + c * (boxW + gapX), y: 6 + r * (boxH + gapY), r, c };
            });

            svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
            svg.setAttribute('height', String(height));
            svg.replaceChildren();
            const rc = rough.svg(svg);
            const opts = { seed, roughness: 1.4, bowing: 1.2, stroke: ink, strokeWidth: 1.5 };
            let order = 0;
            const add = (node: SVGGElement, cls = 'ink') => {
                node.setAttribute('class', cls);
                node.style.setProperty('--i', String(order++));
                node.querySelectorAll('path').forEach(p => p.setAttribute('pathLength', '1'));
                svg.appendChild(node);
            };
            const arrowHead = (x: number, y: number, angle: number, stroke: string) => {
                const len = 10, spread = 0.5;
                for (const s of [-spread, spread]) {
                    add(rc.line(x, y, x - len * Math.cos(angle + s), y - len * Math.sin(angle + s), { ...opts, stroke, roughness: 0.8 }));
                }
            };

            pos.forEach((p, i) => {
                add(rc.rectangle(p.x, p.y, boxW, boxH, opts));
                const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                t.setAttribute('x', String(p.x + boxW / 2));
                t.setAttribute('y', String(p.y + boxH / 2));
                t.setAttribute('class', 'sketch-label');
                t.style.setProperty('--i', String(order++));
                const size = Math.min(19, (boxW - 14) / (steps[i].length * 0.48));
                t.style.fontSize = `${Math.max(12, size)}px`;
                t.textContent = steps[i];
                svg.appendChild(t);

                const q = pos[i + 1];
                if (!q) return;
                if (q.r === p.r) {
                    const dir = q.x > p.x ? 1 : -1;
                    const x1 = dir > 0 ? p.x + boxW + 6 : p.x - 6;
                    const x2 = dir > 0 ? q.x - 6 : q.x + boxW + 6;
                    const y = p.y + boxH / 2;
                    add(rc.line(x1, y, x2, y, opts));
                    arrowHead(x2, y, dir > 0 ? 0 : Math.PI, ink);
                } else {
                    const x = p.x + boxW / 2;
                    add(rc.line(x, p.y + boxH + 6, x, q.y - 6, opts));
                    arrowHead(x, q.y - 6, Math.PI / 2, ink);
                }
            });

            // feedback loop, in red pen
            if (loopTo !== undefined) {
                const a = pos[n - 1], b = pos[loopTo];
                const loopOpts = { ...opts, stroke: red, strokeWidth: 1.6 };
                if (a.c === b.c && Math.abs(a.r - b.r) === 1) {
                    const x = a.x + boxW / 2 + (a.c === pos[n - 2]?.c ? 18 : 0);
                    const [y1, y2] = a.r > b.r ? [a.y - 6, b.y + boxH + 6] : [a.y + boxH + 6, b.y - 6];
                    add(rc.line(x, y1, x, y2, loopOpts), 'ink red');
                    arrowHead(x, y2, a.r > b.r ? -Math.PI / 2 : Math.PI / 2, red);
                } else {
                    const ax = a.x + boxW + 4, ay = a.y + boxH / 2;
                    const bx = b.x + boxW + 4, by = b.y + boxH / 2;
                    const bulge = Math.max(ax, bx) + 26;
                    add(rc.curve([[ax, ay], [bulge, ay], [bulge, by], [bx + 4, by]], loopOpts), 'ink red');
                    arrowHead(bx + 4, by, Math.PI, red);
                }
            }
        };

        const ro = new ResizeObserver(() => { draw(); if (drawn) svg.classList.add('is-drawn'); });
        ro.observe(wrap);
        const stop = whenVisible(wrap, () => { draw(); drawn = true; svg.classList.add('is-drawn'); });
        return () => { ro.disconnect(); stop(); };
    }, [steps, loopTo, seed]);

    return (
        <div ref={wrapRef} className="sketch">
            <svg ref={svgRef} role="img" aria-label={`Sketch of how ${label} works: ${steps.join(', then ')}.`} width="100%" />
        </div>
    );
};

/** A small hand-drawn arrow for margin notes. */
export const Doodle = ({ kind, className = '' }: { kind: 'arrow-left' | 'arrow-down-left' | 'arrow-right'; className?: string }) => {
    const paths: Record<string, string> = {
        'arrow-left': 'M60 18 C 44 8, 26 26, 6 16 M14 8 L5 16 L15 23',
        'arrow-down-left': 'M58 4 C 54 22, 34 36, 8 38 M16 30 L7 38 L17 44',
        'arrow-right': 'M4 20 C 20 6, 40 30, 58 14 M48 9 L58 14 L52 24',
    };
    return (
        <svg className={`doodle ${className}`} viewBox="0 0 64 48" aria-hidden="true">
            <path d={paths[kind]} pathLength={1} />
        </svg>
    );
};
