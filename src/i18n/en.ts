const en = {
  // Navbar
  nav_about: 'About',
  nav_skills: 'Skills',
  nav_experience: 'Experience',
  nav_projects: 'Projects',
  nav_contact: 'Contact',
  nav_theme_dark: 'Switch to dark mode',
  nav_theme_light: 'Switch to light mode',
  nav_menu_toggle: 'Toggle menu',

  // Hero
  hero_label: 'Frontend Engineer · Palermo, Italy',
  hero_tagline1: 'Crafting digital experiences',
  hero_tagline2: 'with precision and care.',
  hero_cta: 'Start a project',

  // About
  about_label: 'About',
  about_quote: '"I build things that feel as good as they look."',
  about_bio_1: "I'm a frontend engineer based in Palermo, Italy. I care deeply about the intersection of design and code — the place where a well-chosen typeface meets a perfectly-tuned interaction.",
  about_bio_2: "Over the past four years I've shipped products across travel tech, SaaS, and consumer web, always with an obsession for the details that make the difference between good and",
  about_bio_2_em: 'remarkable',
  about_location: 'Palermo, Italy',
  about_stat_experience: 'Years of experience',
  about_stat_companies: 'Companies worked at',
  about_stat_projects: 'Projects shipped',
  about_stat_problems: 'Problems solved',

  // Skills
  skills_label: 'Skills',
  skills_also:  'Also',

  // Experience
  experience_label: 'Experience',
  exp_tuimusement_role: 'Frontend Engineer',
  exp_tuimusement_date: 'Jun 2021 – Present',
  exp_tuimusement_b1: 'Built and maintained React component libraries consumed by multiple product teams.',
  exp_tuimusement_b2: 'Optimised Core Web Vitals — reduced LCP from 4.8s to 1.9s across key landing pages.',
  exp_tuimusement_b3: 'Collaborated closely with designers in Figma to ship pixel-perfect, accessible UIs.',
  exp_9000_role: 'Frontend Developer',
  exp_9000_date: '2024 – 2025',
  exp_9000_b1: 'Developed interactive web applications with React and TypeScript.',
  exp_9000_b2: 'Introduced design-system patterns that cut UI inconsistencies by 60%.',
  exp_govisit_role: 'Frontend Engineer',
  exp_govisit_date: 'Jan 2025 – Present',
  exp_govisit_b1: 'Leading front-end development for a travel-tech SaaS platform.',
  exp_govisit_b2: 'Architected a performant Next.js application with ISR and edge caching.',

  // Projects
  projects_label: 'Projects',
  projects_header_index: '#',
  projects_header_name: 'Project',
  projects_header_stack: 'Stack',
  projects_header_year: 'Year',

  // Projects accordion labels
proj_label_role: 'Role',
  proj_label_duration: 'Duration',
  proj_label_stack: 'Stack',
  proj_label_learnings: 'What I learned',
  proj_label_visit: 'Visit Project',
  proj_label_code: 'View Code',

  // Project 01 — TuiMusement
  proj_01_desc: 'End-to-end rebuild of the TuiMusement customer-facing platform serving millions of travellers across Europe. The challenge was modernising a legacy codebase under a live production environment — zero downtime, full team migration.',
  proj_01_role: 'Senior Frontend Engineer',
  proj_01_duration: '~18 months',
  proj_01_highlights: [
    'Reduced bundle size by 42% via code-splitting and tree-shaking',
    'Cut LCP from 4.8s to 1.9s across high-traffic landing pages',
    'Built a shared design-token layer adopted across 3 product squads',
    'Introduced Lighthouse CI on every PR — baseline 90+ enforced',
  ],
  proj_01_learnings: 'Working at scale taught me how to balance engineering rigour with delivery pace. I deepened my understanding of performance budgets, component API design, and how to gradually migrate large codebases without disrupting teams.',
  proj_01_url: 'https://tuimusement.com',
  proj_01_url_code: '',

  // Project 02 — GoVisit
  proj_02_desc: 'GoVisit is a telemedicine platform enabling urgent and scheduled doctor consultations entirely online. The core challenge was orchestrating two distinct multi-step booking flows — instant urgent care and full scheduled appointments — with real-time availability, Stripe payments, and live video calls, all while keeping the UX smooth on mobile.',
  proj_02_role: 'Frontend Engineer',
  proj_02_duration: '~12 months (Mar 2025 – Mar 2026)',
  proj_02_highlights: [
    'Built two full booking flows (urgent 3-step, scheduled 5-step) sharing payment logic via a single useRecapPayment hook, reducing duplicated code by ~40%',
    'Integrated Stream.io Video SDK for real-time video consultations with token-based call access and custom UI',
    'Stripe payment processing with promo code support (percentage and fixed discounts) and free-booking short-circuit',
    'TTL-based Zustand caching layer for document types, cutting redundant API calls within a session to zero',
  ],
  proj_02_learnings: "Working on a domain as sensitive as healthcare taught me how much user trust depends on small UX decisions — a confusing step in a booking flow or a broken payment redirect isn't just a bug, it's a patient not getting care. I also got much better at designing shared hooks that genuinely reduce duplication without becoming a tangled abstraction.",
  proj_02_url: 'https://web.govisit.it',
  proj_02_url_code: '',

  // Project 03 — Design System
  proj_03_desc: 'A cross-product design system bridging Figma and code, delivering 30+ accessible, themeable components used across all web properties. Built to be the single source of truth for every product team.',
  proj_03_role: 'Design System Engineer',
  proj_03_duration: '~8 months',
  proj_03_highlights: [
    '30+ components with Storybook docs and visual regression tests',
    'Dark/light theming via CSS custom properties — zero JS overhead',
    'Reduced per-product CSS footprint by ~60%',
    'Published as internal npm package with semantic versioning',
  ],
  proj_03_learnings: 'Design systems live and die by their API design. I learned to obsess over naming, documentation, and backwards compatibility — and that the hardest part isn\'t building components, it\'s getting teams to adopt them.',
  proj_03_url: '#',
  proj_03_url_code: '',

  // Project 04 — Portfolio
  proj_04_desc: 'This portfolio, built entirely from scratch with no UI libraries. A playground for craft — editorial typography, Bauhaus-inspired geometry, and a relentless focus on the feel of every interaction.',
  proj_04_role: 'Designer & Developer',
  proj_04_duration: '~3 weeks',
  proj_04_highlights: [
    '100/100 Lighthouse across Performance, Accessibility, Best Practices',
    'Zero dependencies beyond React and Vite',
    'Full EN/IT i18n with localStorage persistence',
    'Pure CSS animations + RAF mouse parallax — no animation library',
  ],
  proj_04_learnings: 'Building your own portfolio is the most honest self-assessment you can do. Every decision is yours. I rediscovered how much I love the constraints of vanilla CSS and how far you can push it.',
  proj_04_url: '#',
  proj_04_url_code: 'https://github.com/salvatoreviscode/portfolio',

  // Project 05 — Blokko
  proj_05_desc: "Blokko is a block-based quote builder for freelancers and agencies, where professional proposals are composed by dragging and arranging 11 structured content blocks — from pricing tables to payment schedules to signature fields. The core challenge was designing a flexible block system that felt fluid to edit in-browser while also rendering cleanly to PDF, all within a strict Swiss brutalist visual language.",
  proj_05_role: 'Full-Stack Developer',
  proj_05_duration: '~1 week (Feb 2026)',
  proj_05_highlights: [
    'Designed and implemented 11 distinct block types with a unified drag-and-drop canvas powered by dnd-kit',
    'Zustand store with 1s debounce auto-save and real-time idle/saving/saved/error feedback',
    'Full security layer in Next.js middleware: per-IP rate limiting, bot blocking, CSRF validation, strict CSP',
    'PDF export via jsPDF + autotable faithfully reproducing the Swiss brutalist design system',
  ],
  proj_05_learnings: "Building a block editor for both interactive editing and static PDF output forced me to think carefully about how design tokens and layout rules translate across rendering contexts. I also found that front-loading security at the middleware layer — rather than sprinkling checks across routes — makes the auth model much easier to reason about.",
  proj_05_url: '#',
  proj_05_url_code: '',

  // Project 06 — 9000ABCD
  proj_06_desc: '9000ABCD is a strategic business simulator where players manage a virtual company across 8 economic scenarios — balancing R&D investment, pricing decisions, HR policies, and market positioning against dynamic competitors. Built to teach strategic thinking through consequence-driven gameplay rather than tutorials.',
  proj_06_role: 'Frontend Developer',
  proj_06_duration: '~6 months (2024–2025)',
  proj_06_highlights: [
    'Built a React + TypeScript decision engine that evaluates 15+ interdependent variables each simulation round',
    'Introduced a design-system component library that cut UI inconsistencies by 60% across all game screens',
    'Animated KPI dashboards with real-time chart transitions — players feel the impact of every decision',
    'Responsive layout supporting classroom deployment on tablets and desktop browsers',
  ],
  proj_06_learnings: 'Building a simulator taught me how to model complex state machines clearly in React — when your UI is driven by 15 interlocked variables, component boundaries and data flow need to be right from the start. I also learned that the best educational interfaces get out of the way: clarity beats cleverness every time.',
  proj_06_url: '#',
  proj_06_url_code: '',

  // Contact
  contact_label: 'Contact',
  contact_title_1: "Let's build something",
  contact_title_em: 'remarkable.',
  contact_footer_made: 'Made with care in Palermo.',
}

export default en
