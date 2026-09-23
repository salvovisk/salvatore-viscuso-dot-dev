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
  hero_tagline1: 'React and React Native, from web to phone.',
  hero_cta: 'Talk about a role',
  hero_cta_work: 'See the work',

  // About
  about_label: 'About',
  about_quote: '"If I can\'t measure it, I don\'t claim it."',
  about_bio_1: "I'm a frontend engineer in Palermo, Italy. I build the things people open every day — a study planner, a telemedicine platform, an AI search interface for accountants — mostly in React and TypeScript, increasingly in React Native.",
  about_bio_2: "Five years across travel tech, healthcare, fintech and consumer web. The work I'm proudest of is usually the part nobody notices: a page that stopped refetching on every visit, one component that replaced sixteen hand-rolled copies, an exam session that survives a closed",
  about_bio_2_em: 'tab',
  about_location: 'Palermo, Italy',
  about_stat_experience: 'Years shipping frontend',
  about_stat_companies: 'Companies',
  about_stat_projects: 'Projects shipped',
  about_stat_platforms: 'Platforms: web, iOS, Android',

  // Skills
  skills_label: 'Skills',
  skills_also:  'Also',

  // Experience
  experience_label: 'Experience',
  experience_roles: 'roles',
  exp_tuimusement_role: "Software Engineer",
  exp_tuimusement_date: 'Jun 2021 – Present',
  exp_tuimusement_b1: "Develop and maintain a cross-platform Flutter mobile app; helped take a new app to a production-ready release within a few months.",
  exp_tuimusement_b2: "Build web frontends with Vue.js, React and Next.js, and designed a template engine for transactional emails.",
  exp_tuimusement_b3: "Contribute to GitLab CI/CD pipelines and AWS S3 deployments, in agile sprints with design and backend teams.",
  exp_9000_role: "Software Engineer & UI/UX Designer · Contract",
  exp_9000_date: "2024 – 2026",
  exp_9000_b1: "Sole frontend engineer and designer: a Next.js web app and an iOS/Android app with React Native and Expo, on one shared domain layer.",
  exp_9000_b2: "Two design systems, web and native, with light and dark themes generated from a single token source.",

  exp_yuxme_role: 'Frontend Engineer · Contract',
  exp_yuxme_date: 'Nov 2025 – Apr 2026',
  exp_yuxme_b1: 'Built the React interface for SEIA, the AI search engine of an accounting-automation platform: users ask about documents and revenue in conversation and fill in invoices automatically.',
  exp_yuxme_b2: 'Built the multi-step onboarding that syncs securely with the Italian tax portal (Cassetto Fiscale), and reworked high-traffic pages for faster rendering.',  exp_govisit_role: "Software Engineer & UI/UX Designer · Contract",
  exp_govisit_date: 'Jan 2025 – Mar 2026',
  exp_govisit_b1: "Design and build the frontend of a telemedicine platform for urgent and scheduled doctor consultations.",
  exp_govisit_b2: "Booking flows, Stripe payments and real-time video consultations with the Stream.io SDK, in Next.js and TypeScript.",
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
  proj_label_private: 'No public link',
  proj_label_this_site: "You're looking at it",
  contact_copy: 'Copy address',
  contact_copied: 'Copied',
  proj_label_code: 'View Code',

  // Project 01 — TuiMusement
  proj_01_desc: "Mobile and web work at TuiMusement, the tours-and-activities booking platform, as part of a cross-functional product team: the Flutter mobile app, the web frontends, and the delivery tooling around them.",
  proj_01_role: "Software Engineer",
  proj_01_duration: "Jun 2021 – present",
  proj_01_highlights: [
    "Develop and maintain a cross-platform Flutter mobile app; helped take a new app to a production-ready release within a few months",
    "Build scalable, performant web frontends with Vue.js, React and Next.js",
    "Designed and implemented a template engine for transactional emails, automating email production",
    "Contribute to GitLab CI/CD pipelines and AWS S3 deployments; code reviews in agile sprints with design and backend teams",
  ],
  proj_01_learnings: "A long stretch on one product in a large team taught me how much delivery depends on the unglamorous parts: a pipeline everyone trusts, reviews that catch problems early, and staying close to the designers and backend engineers who share the work.",
  proj_01_url: 'https://tuimusement.com',
  proj_01_url_code: '',

  // Project 02 — GoVisit
  proj_02_desc: 'GoVisit is a telemedicine platform enabling urgent and scheduled doctor consultations entirely online. The core challenge was orchestrating two distinct multi-step booking flows — instant urgent care and full scheduled appointments — with real-time availability, Stripe payments, and live video calls, all while keeping the UX smooth on mobile.',
  proj_02_role: "Software Engineer & UI/UX Designer (contract)",
  proj_02_duration: "Jan 2025 – Mar 2026",
  proj_02_highlights: [
    "Built two full booking flows (urgent 3-step, scheduled 5-step) sharing payment logic via a single useRecapPayment hook",
    "Integrated Stream.io Video SDK for real-time video consultations with token-based call access and custom UI",
    "Stripe payment processing with promo code support (percentage and fixed discounts) and free-booking short-circuit",
    "TTL-based Zustand caching layer for document types, removing redundant API calls within a session",
  ],
  proj_02_learnings: "Working on a domain as sensitive as healthcare taught me how much user trust depends on small UX decisions — a confusing step in a booking flow or a broken payment redirect isn't just a bug, it's a patient not getting care. I also got much better at designing shared hooks that genuinely reduce duplication without becoming a tangled abstraction.",
  proj_02_url: 'https://web.govisit.it',
  proj_02_url_code: '',

  // Project 03 — Design System

  // Project 04 — Portfolio
  proj_04_desc: 'This portfolio. React and Vite, no UI library, no CSS framework — every rule hand-written. Three typefaces, one accent, a project list set as a ledger rather than a card grid.',
  proj_04_role: 'Designer & Developer',
  proj_04_duration: '~3 weeks',
  proj_04_highlights: [
    'Hand-written CSS, no UI framework — 34 kB of styles, 7 kB gzipped',
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
  proj_06_desc: 'A study method for Italian public-competition exams (concorsi), drawn like a timetable read under one lamp. The client teaches the method; I built the product that runs it — a Next.js web app from 2024, and from 2026 an Expo app that shares its domain layer line for line. Both are frontend only: all business logic sits behind an external REST API.',
  proj_06_role: 'Sole frontend engineer and designer, to a client brief',
  proj_06_duration: '2024–2026 · web, iOS, Android',
  proj_06_highlights: [
    'Web: 27 routes across 3 App Router groups, one force-dynamic layout as the single auth gate — 464 commits, 28,366 lines',
    'Mobile: 11 screens, 5 tabs, iOS and Android from one Expo codebase — 178 commits, 17,454 lines in three months',
    'Domain layer ported to React Native verbatim: 7 Zustand stores, 0 rewritten business rules',
    'Two design systems, one discipline: 43 web primitives on OKLCH tokens, 33 native primitives, both themes generated from a single source',
    'Landing data fetch no-store → revalidate: 300; licences fetched 3× per page → 1×',
    'Cards hand-rolled inline 16× → 1 primitive; ~15 hardcoded #000 → 1 onAccent token',
    'Exam sessions compressed with lz-string before storage — a closed tab is not a lost morning',
  ],
  proj_06_learnings: 'Porting a product to a second platform is mostly a test of whether the first one had a domain layer at all. The stores, the models and the aggregation moved to Expo unchanged; everything I had to rewrite — session, storage, navigation, charts — was the part I had let touch the platform directly. The second lesson came from the client rather than from me: they told me early that the app is used before dawn, by people preparing for an exam that decides whether they are employed. I treated that as context. It was a specification, and the hardest edits I made were the ones that removed something I liked in order to make somebody else\'s morning shorter.',
  proj_06_url: '#',
  proj_06_url_code: '',

  // Project 06 — product journey (ledger of frames)
  proj_journey_label: 'Product journey',
  proj_journey_intro: 'Eight frames, in the order a candidate meets them. The same engine in two bodies.',
  proj_journey_pending: 'Frame pending',
  proj_journey_alt_web: 'web app screen',
  proj_journey_alt_app: 'mobile app screen',

  j06_01_title: 'Arrival',
  j06_01_cap: 'Every figure on this page is real and comes off the API. There is no marketing number.',
  j06_01_note: 'The page was no-store: visitors paid for two fresh round-trips before first paint.',

  j06_02_title: 'The directory',
  j06_02_cap: 'Thirteen active concorsi, each with its official question bank — the questions the real exam is drawn from. The list lives in one place, where the question is actually asked.',
  j06_02_note: 'Each force gets a mark and a tint, never coloured text: the category is never the only thing carrying the meaning.',

  j06_03_title: 'The gate',
  j06_03_cap: 'One auth gate for the entire private app: a layout that decodes the JWT, redirects to sign-in if it is absent and to renewal if the membership has expired. Every page added inside the group inherits it.',
  j06_03_note: 'No middleware. No per-page guard. Nothing to forget.',

  j06_04_title: 'The morning',
  j06_04_cap: 'The same account on both, in the same reading order: greeting, today\'s task, then how it is going. One column narrower on the phone, and the primary action is the only filled surface on either screen.',
  j06_04_note: 'Neither has a plan running, so both say so in the same place the plan would be. The empty state is carried by the copy, not by a second layout.',

  j06_05_title: 'Where a plan starts',
  j06_05_cap: 'A plan is built from a question bank and then spent day by day. A study day is not one pass over it: it is n cycles over the same block, and the questions you failed survive into the next cycle.',

  j06_06_title: 'The run',
  j06_06_cap: 'One orchestrator, three sources: a scheduled study day, a range of the question bank, or a custom configuration. The session is compressed and written to storage at every step, so a closed app is not a lost morning.',
  j06_06_note: 'The phase changes the rules, so the screen says which one is running: in Studio a wrong answer does not become a critical, and the question itself tells you that before you answer.',

  j06_07_title: 'Choosing the questions',
  j06_07_cap: 'Four ways in: a range of the bank, the questions you keep failing, a single topic, or the full exam under its own timer. The wizard is the one place in the product where the machinery is visible.',

  j06_08_title: 'The residue',
  j06_08_cap: 'Wrong answers are not discarded. They accumulate into a personal set — 138 here, across seventeen subjects — that you can then study as a question bank of its own.',
  j06_08_note: 'Get one right four times running and it leaves the list on its own. Nothing to tidy up.',

  // Featured — 9000ABCD, lifted out of the project list
  featured_label: 'Selected work',
  featured_lede: 'A study platform for Italian public-exam candidates. I designed and built both products: the Next.js web app and the Expo app for iOS and Android, on one shared domain layer.',
  featured_proof: [
    'Domain layer ported to React Native verbatim: 7 Zustand stores, 0 rewritten business rules',
    'Mobile: 11 screens, iOS and Android from one Expo codebase, in three months',
    'Exam sessions compressed before storage: a closed tab is not a lost morning',
  ],
  featured_more_open: 'Read the full case study · 8 frames',
  featured_more_close: 'Close the case study',

  // Contact
  contact_label: 'Contact',
  contact_title_1: "Tell me what you're",
  contact_title_em: 'shipping.',
  contact_footer_made: 'Made with care in Palermo.',
}

export default en
