const it = {
  // Navbar
  nav_about:      'Chi sono',
  nav_skills:     'Competenze',
  nav_experience: 'Esperienza',
  nav_projects:   'Progetti',
  nav_contact:    'Contatti',
  nav_theme_dark:  'Passa alla modalità scura',
  nav_theme_light: 'Passa alla modalità chiara',
  nav_menu_toggle: 'Apri menu',

  // Hero
  hero_label:    'Frontend Engineer · Palermo, Italia',
  hero_tagline1: 'Creo esperienze digitali',
  hero_tagline2: 'con precisione e cura.',
  hero_cta:      'Inizia un progetto',

  // About
  about_label: 'Chi sono',
  about_quote: '"Costruisco cose che si sentono bene quanto si vedono."',
  about_bio_1: "Sono un frontend engineer con sede a Palermo, Italia. Mi interessa profondamente il punto di incontro tra design e codice — quel luogo in cui una tipografia ben scelta incontra un'interazione perfettamente calibrata.",
  about_bio_2: 'Negli ultimi quattro anni ho sviluppato prodotti nel travel tech, SaaS e nel web consumer, sempre con un\'ossessione per i dettagli che fanno la differenza tra buono e',
  about_bio_2_em: 'straordinario',
  about_location: 'Palermo, Italia',
  about_stat_experience: 'Anni di esperienza',
  about_stat_companies:  'Aziende in cui ho lavorato',
  about_stat_projects:   'Progetti realizzati',
  about_stat_problems:   'Problemi risolti',

  // Skills
  skills_label: 'Competenze',
  skills_also:  'Anche',

  // Experience
  experience_label:       'Esperienza',
  exp_tuimusement_role:   'Frontend Engineer',
  exp_tuimusement_date:   'Giu 2021 – Presente',
  exp_tuimusement_b1:     'Sviluppato e mantenuto librerie di componenti React utilizzate da più team di prodotto.',
  exp_tuimusement_b2:     'Ottimizzati i Core Web Vitals — ridotto LCP da 4,8s a 1,9s sulle principali landing page.',
  exp_tuimusement_b3:     'Collaborato con i designer in Figma per realizzare UI accessibili e pixel-perfect.',
  exp_9000_role:          'Frontend Developer',
  exp_9000_date:          '2024 – 2025',
  exp_9000_b1:            'Sviluppato applicazioni web interattive con React e TypeScript.',
  exp_9000_b2:            'Introdotto pattern di design system che hanno ridotto le inconsistenze UI del 60%.',
  exp_govisit_role:       'Frontend Engineer',
  exp_govisit_date:       'Gen 2025 – Presente',
  exp_govisit_b1:         'Responsabile dello sviluppo frontend di una piattaforma SaaS nel settore travel tech.',
  exp_govisit_b2:         "Progettata un'applicazione Next.js performante con ISR ed edge caching.",

  // Projects
  projects_label:        'Progetti',
  projects_header_index: '#',
  projects_header_name:  'Progetto',
  projects_header_stack: 'Stack',
  projects_header_year:  'Anno',

  // Projects accordion labels
proj_label_role:      'Ruolo',
  proj_label_duration:  'Durata',
  proj_label_stack:     'Stack',
  proj_label_learnings: 'Cosa ho imparato',
  proj_label_visit:     'Visita il Progetto',
  proj_label_code:      'Vedi il Codice',

  // Project 01 — TuiMusement
  proj_01_desc: 'Ricostruzione completa della piattaforma TuiMusement rivolta ai clienti, usata da milioni di viaggiatori in Europa. La sfida: modernizzare una codebase legacy in produzione attiva — zero downtime, migrazione completa del team.',
  proj_01_role:     'Senior Frontend Engineer',
  proj_01_duration: '~18 mesi',
  proj_01_highlights: [
    'Bundle ridotto del 42% con code-splitting e tree-shaking',
    'LCP abbassato da 4,8s a 1,9s sulle pagine ad alto traffico',
    'Layer di design token condiviso adottato da 3 squad di prodotto',
    'Lighthouse CI su ogni PR — baseline 90+ garantita',
  ],
  proj_01_learnings: 'Lavorare su scala mi ha insegnato a bilanciare rigore tecnico e velocità di consegna. Ho approfondito i performance budget, il design delle API dei componenti e come migrare codebase enormi senza bloccare i team.',
  proj_01_url: 'https://tuimusement.com',
  proj_01_url_code: '',

  // Project 02 — GoVisit
  proj_02_desc: "GoVisit è una piattaforma di telemedicina che consente consulti medici urgenti e programmati interamente online. La sfida principale è stata orchestrare due distinti flussi di prenotazione multi-step — cure urgenti immediate e appuntamenti programmati — integrandoli con disponibilità in tempo reale, pagamenti Stripe e videochiamate live, mantenendo un'esperienza fluida anche su mobile.",
  proj_02_role:     'Frontend Engineer',
  proj_02_duration: '~4 mesi (Dic 2025 – Mar 2026)',
  proj_02_highlights: [
    'Due flussi di prenotazione completi (urgente 3 step, programmato 5 step) con logica di pagamento condivisa via hook useRecapPayment, -40% codice duplicato',
    'Stream.io Video SDK per videoconsulti in tempo reale con accesso token-based e UI personalizzata',
    'Pagamenti Stripe con codici promozionali (sconti % e fissi) e short-circuit per prenotazioni gratuite',
    'Layer di caching Zustand con TTL per tipi di documento, zero chiamate API ridondanti in sessione',
  ],
  proj_02_learnings: "Lavorare in un dominio delicato come quello sanitario mi ha insegnato quanto la fiducia dell'utente dipenda da piccole decisioni UX — uno step confuso nel flusso di prenotazione non è solo un bug, è un paziente che non riceve assistenza. Ho anche affinato la capacità di progettare hook condivisi che riducono davvero la duplicazione senza diventare astrazioni aggrovigliate.",
  proj_02_url: 'https://app.govisit.it',
  proj_02_url_code: '',

  // Project 03 — Design System
  proj_03_desc: 'Un design system cross-prodotto che connette Figma e codice, con 30+ componenti accessibili e tematizzabili usati su tutte le proprietà web. Costruito per essere la fonte unica di verità per ogni team.',
  proj_03_role:     'Design System Engineer',
  proj_03_duration: '~8 mesi',
  proj_03_highlights: [
    '30+ componenti con Storybook e test di regressione visiva',
    'Tema chiaro/scuro via CSS custom properties — zero overhead JS',
    'Ridotto il CSS per prodotto di circa il 60%',
    'Pubblicato come pacchetto npm interno con versioning semantico',
  ],
  proj_03_learnings: 'I design system vivono e muoiono per il design delle loro API. Ho imparato a ossessionarmi su naming, documentazione e compatibilità. La parte più difficile non è costruire i componenti — è convincere i team ad adottarli.',
  proj_03_url: '#',
  proj_03_url_code: '',

  // Project 04 — Portfolio
  proj_04_desc: 'Questo portfolio, costruito da zero senza librerie UI. Un playground per il mestiere — tipografia editoriale, geometrie bauhaus, e un\'attenzione maniacale alla sensazione di ogni interazione.',
  proj_04_role:     'Designer & Developer',
  proj_04_duration: '~3 settimane',
  proj_04_highlights: [
    '100/100 Lighthouse su Performance, Accessibilità e Best Practice',
    'Zero dipendenze oltre React e Vite',
    'i18n EN/IT completo con persistenza in localStorage',
    'Animazioni CSS pure + mouse parallax RAF — nessuna libreria',
  ],
  proj_04_learnings: 'Costruire il proprio portfolio è la valutazione più onesta che puoi fare di te stesso. Ogni decisione è tua. Ho riscoperto quanto ami i vincoli del CSS vanilla e fin dove puoi spingerlo.',
  proj_04_url: '#',
  proj_04_url_code: 'https://github.com/salvatoreviscode/portfolio',

  // Project 05 — Blokko
  proj_05_desc: "Blokko è un editor di preventivi basato su blocchi per freelance e agenzie, dove le proposte professionali vengono costruite trascinando e riordinando 11 tipi di blocchi strutturati — da tabelle prezzi a scadenze di pagamento fino ai blocchi firma. La sfida principale è stata progettare un sistema di blocchi fluido da modificare nel browser che generasse anche PDF puliti, il tutto all'interno di un rigoroso linguaggio visivo Swiss brutalist.",
  proj_05_role:     'Sviluppatore Full-Stack',
  proj_05_duration: '~1 settimana (feb 2026)',
  proj_05_highlights: [
    'Progettati e implementati 11 tipi di blocchi distinti con un canvas drag-and-drop unificato tramite dnd-kit',
    'Store Zustand con auto-salvataggio a debounce di 1s e feedback visivo in tempo reale idle/saving/saved/error',
    'Layer di sicurezza completo nel middleware Next.js: rate limiting per IP, blocco bot, CSRF, CSP dettagliata',
    'Export PDF via jsPDF + autotable che riproduce fedelmente il design system Swiss brutalist',
  ],
  proj_05_learnings: "Costruire un editor a blocchi per la modifica interattiva e l'output PDF mi ha costretto a ragionare su come i design token si traducono tra contesti di rendering. Ho scoperto che centralizzare la sicurezza nel middleware — invece di distribuire i controlli tra le route — rende il modello di autenticazione molto più semplice da gestire.",
  proj_05_url: '#',
  proj_05_url_code: '',

  // Project 06 — 9000ABCD
  proj_06_desc: "9000ABCD è un simulatore strategico aziendale dove i giocatori gestiscono un'impresa virtuale in 8 scenari economici — bilanciando investimenti in R&S, decisioni di pricing, politiche HR e posizionamento di mercato contro concorrenti dinamici. Costruito per insegnare il pensiero strategico attraverso il gameplay basato sulle conseguenze, senza tutorial.",
  proj_06_role: 'Frontend Developer',
  proj_06_duration: '~6 mesi (2024–2025)',
  proj_06_highlights: [
    'Sviluppato un motore decisionale in React + TypeScript che valuta 15+ variabili interdipendenti per ogni round di simulazione',
    'Introdotta una libreria di componenti design system che ha ridotto le inconsistenze UI del 60% su tutte le schermate',
    'Dashboard KPI animate con transizioni grafiche in tempo reale — i giocatori sentono l\'impatto di ogni decisione',
    'Layout responsive per il deployment in aula su tablet e browser desktop',
  ],
  proj_06_learnings: 'Costruire un simulatore mi ha insegnato a modellare macchine a stati complesse in modo chiaro con React — quando la tua UI è guidata da 15 variabili interconnesse, i confini dei componenti e il flusso dei dati devono essere giusti fin dall\'inizio. Ho anche capito che le migliori interfacce educative si fanno da parte: la chiarezza batte sempre l\'ingegnosità.',
  proj_06_url: '#',
  proj_06_url_code: '',

  // Contact
  contact_label:       'Contatti',
  contact_title_1:     'Costruiamo qualcosa',
  contact_title_em:    'di straordinario.',
  contact_footer_made: 'Fatto con cura a Palermo.',
}

export default it
