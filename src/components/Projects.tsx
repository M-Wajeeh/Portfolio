import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { portfolioData, Project } from '../data/portfolioData';

interface ProjectCardProps {
    project: Project;
    index: number;
    total: number;
    progress: MotionValue<number>;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, total, progress }) => {
    // Each card starts stacking as we scroll. 
    // The scale decreases slightly as new cards come on top.
    const scale = useTransform(progress, [index / total, (index + 1) / total], [1, 0.9]);
    const opacity = useTransform(progress, [index / total, (index + 0.5) / total], [1, 1]);

    // Calculate sticky top offset to create the "stack" look
    const topOffset = 100 + (index * 40);

    return (
        <motion.div
            style={{
                scale,
                opacity,
                top: `${topOffset}px`,
                willChange: "transform, opacity"
            }}
            className="project-stack-card"
            onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
            role="button"
            tabIndex={0}
            onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                }
            }}
        >
            <div className="project-card-inner">
                <div className="project-visual-side">
                    <div className="project-icon-bg">
                        {project.icon && <project.icon size={48} />}
                    </div>
                </div>

                <div className="project-info-side">
                    <div className="project-meta">
                        <span className="project-num">0{index + 1}</span>
                        <span className="project-category-tag">{project.category}</span>
                    </div>

                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="project-tech-stack">
                        {project.tags.map((tag, i) => (
                            <span key={i} className="tech-pill"># {tag}</span>
                        ))}
                    </div>

                    <div className="project-links-row">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-project-link">
                            VIEW GITHUB <ArrowRight size={16} />
                        </a>
                        <div className="project-ext-links">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="ext-icon"><Github size={20} /></a>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="ext-icon"><ExternalLink size={20} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div >
    );
};

const Projects = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const projects = portfolioData.projects;

    return (
        <section id="projects" className="projects-stack-section">
            <div className="container overflow-visible">
                <div className="section-frame projects-header-frame">
                    <div className="projects-sticky-header">
                        <span className="section-label">Archive</span>
                        <h2>SELECTED <span className="gradient-text">PROJECTS</span></h2>
                        <p className="projects-intro">
                            Each project represents a unique challenge in data architecture or model optimization.
                            Scroll to explore the stacking case studies.
                        </p>
                    </div>
                </div>

                <div ref={containerRef} className="projects-stack-container">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                            total={projects.length}
                            progress={smoothProgress}
                        />
                    ))}
                </div>
            </div>

            <style>{`
                .projects-stack-section {
                    padding: 0 0 10vh 0;
                    position: relative;
                }

                .projects-sticky-header {
                    margin-bottom: 0;
                }

                .projects-header-frame {
                    margin-bottom: 100px;
                    padding: 3rem 4rem;
                }

                .projects-intro {
                    font-size: 1.125rem;
                    color: var(--color-text-secondary);
                    max-width: 500px;
                    margin-top: 1rem;
                }

                .projects-stack-container {
                    position: relative;
                    min-height: 400vh; 
                    padding-bottom: 50vh;
                }

                .project-stack-card {
                    position: sticky;
                    width: 100%;
                    max-width: 1000px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transform-origin: top center;
                    cursor: pointer;
                }

                .project-card-inner {
                    display: grid;
                    grid-template-columns: 0.8fr 1.2fr;
                    background: var(--color-bg-secondary);
                    border-radius: var(--radius-2xl);
                    padding: 3rem;
                    width: 100%;
                    box-shadow: var(--shadow-xl);
                    border: 1px solid var(--color-border);
                    transition: all 0.3s ease;
                }

                .project-stack-card:hover .project-card-inner {
                    border-color: var(--color-primary);
                    transform: translateY(-5px);
                }

                .project-visual-side {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-right: 1px solid var(--color-border);
                    margin-right: 3rem;
                }

                .project-icon-bg {
                    width: 120px;
                    height: 120px;
                    border-radius: 50%;
                    background: var(--color-bg-primary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--color-primary);
                    border: 1px solid var(--color-border);
                }

                .project-info-side {
                    display: flex;
                    flex-direction: column;
                }

                .project-meta {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    margin-bottom: 1.5rem;
                }

                .project-num {
                    font-family: 'monospace';
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: var(--color-text-tertiary);
                    opacity: 0.3;
                }

                .project-category-tag {
                    font-size: 0.75rem;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    color: var(--color-primary);
                    text-transform: uppercase;
                }

                .project-info-side h3 {
                    font-size: 2.25rem;
                    font-weight: 800;
                    margin-bottom: 1.5rem;
                    letter-spacing: -0.02em;
                    color: var(--color-text-primary);
                }

                .project-info-side p {
                    color: var(--color-text-secondary);
                    font-size: 1.1rem;
                    line-height: 1.7;
                    margin-bottom: 2rem;
                }

                .project-tech-stack {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                    margin-bottom: 3rem;
                }

                .tech-pill {
                    font-family: 'monospace';
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: var(--color-text-tertiary);
                    padding: 0.3rem 0.6rem;
                    background: var(--color-bg-primary);
                    border-radius: var(--radius-sm);
                    border: 1px solid var(--color-border);
                }

                .project-links-row {
                    margin-top: auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 2rem;
                    border-top: 1px solid var(--color-border);
                }

                .btn-project-link {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    text-decoration: none;
                    color: var(--color-text-primary);
                    font-weight: 700;
                    font-size: 0.85rem;
                    letter-spacing: 0.1em;
                    transition: all 0.3s ease;
                }

                .btn-project-link:hover {
                    color: var(--color-primary);
                    transform: translateX(5px);
                }

                .project-ext-links {
                    display: flex;
                    gap: 1.5rem;
                }

                .ext-icon {
                    color: var(--color-text-tertiary);
                    transition: color 0.3s ease;
                }

                .ext-icon:hover {
                    color: var(--color-primary);
                }

                @media (max-width: 968px) {
                    .project-card-inner {
                        grid-template-columns: 1fr;
                        padding: 2rem;
                    }
                    .project-visual-side {
                        display: none;
                    }
                    .project-info-side h3 {
                        font-size: 1.75rem;
                    }
                }
            `}</style>
        </section >
    );
};

export default Projects;
