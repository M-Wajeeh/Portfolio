# M. Wajeeh - Portfolio

A bold, editorial-style portfolio built with React, TypeScript, and Vite. Showcasing expertise in **ML Engineering**, **Data Analytics**, and **Generative AI** with a warm gold-on-dark design language.

🔗 **[Live Demo](#)** | 📧 **[Contact](mailto:wajeeh9233@gmail.com)**

---

## Features

- **Editorial Design** - Bold typography, numbered sections, and warm gold accents
- **Dark/Light Mode** - Seamless theme switching with curated color palettes
- **Fully Responsive** - Optimized for all devices and screen sizes
- **TypeScript** - Type-safe codebase for better maintainability
- **Framer Motion** - Smooth scroll-triggered and entrance animations
- **SEO Optimized** - Proper meta tags, keywords, and semantic HTML
- **Fast Performance** - Built with Vite for instant HMR and optimized builds

---

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Vanilla CSS with CSS Variables
- **Icons**: Lucide React
- **Animations**: Framer Motion

---

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/M-Wajeeh/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

## Project Structure

```
Portfolio/
├── public/              # Static assets (favicon, resume PDFs)
├── src/
│   ├── assets/          # Images (portrait)
│   ├── components/      # React components
│   │   ├── Hero.tsx         # Bold headline + CTA + resume dropdown
│   │   ├── About.tsx        # 01 // ORIGINS - Bio + portrait + stats
│   │   ├── Skills.tsx       # 02 // ARSENAL - Skill grid + marquee
│   │   ├── Projects.tsx     # 03 // WORK - Project list
│   │   ├── Experience.tsx   # 04 // JOURNEY - Timeline
│   │   ├── Contact.tsx      # 05 // CONNECT - CTA + footer
│   │   ├── Navbar.tsx       # Fixed nav with section links
│   │   └── ThemeToggle.tsx  # Dark/light switch
│   ├── data/
│   │   └── portfolioData.ts # Central data source for all content
│   ├── App.tsx
│   ├── index.css        # Design system (variables, reset, utilities)
│   └── main.tsx
└── index.html
```

---

## Configuration

### Environment Variables (Optional)

Create a `.env` file in the root directory to customize personal information:

```env
VITE_USER_NAME="Your Name"
VITE_USER_EMAIL="your.email@example.com"
VITE_USER_GITHUB="https://github.com/yourusername"
VITE_USER_LINKEDIN="https://linkedin.com/in/yourusername"
VITE_USER_RESUME_URL="/AI-ML.pdf"
VITE_USER_RESUME_PRIMARY_LABEL="AI/ML"
VITE_USER_RESUME_PRIMARY_URL="/AI-ML.pdf"
VITE_USER_RESUME_SECONDARY_LABEL="Data Analytics"
VITE_USER_RESUME_SECONDARY_URL="/DataAnalytics-Wajeeh.pdf"
```

### Customization

All portfolio content lives in `src/data/portfolioData.ts`:
- Personal info, roles, and bio
- Skills categories and marquee items
- Projects with descriptions and GitHub links
- Experience timeline entries
- Stats displayed in the About section

---

## Design

- **Color Palette** - Warm gold (`#c8a55a`) accent on near-black (`#0a0a0b`)
- **Typography** - Inter font, heavy weights, tight letter-spacing
- **Sections** - Numbered editorial style (`01 // ORIGINS`, `02 // ARSENAL`, etc.)
- **Interactions** - Gold-accented hover states across cards, buttons, and links
- **Layout** - Clean vertical flow with generous whitespace

---

## Author

**Muhammad Wajeeh Ul Hassan**
Data Analyst | ML Engineer | AI Engineer

- GitHub: [@M-Wajeeh](https://github.com/M-Wajeeh)
- LinkedIn: [hassanwajeeh](https://www.linkedin.com/in/hassanwajeeh)

---

## Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Built with [Vite](https://vitejs.dev/)
