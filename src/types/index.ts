export interface Project {
    title: string;
    description: string;
    technologies: string[];
    link: string;
    github?: string;
    image: string;
    category: string;
}

export interface Skill {
    name: string;
    icon: string;
    category: string;
    level: number;
}

export interface Experience {
    company: string;
    role: string;
    period: string;
    description: string[];
}

export interface PortfolioData {
    name: string;
    roles: string[];
    bio: string;
    email: string;
    github: string;
    linkedin: string;
    projects: Project[];
    skills: Skill[];
    experience: Experience[];
}
