// Centralized Data for Anass Chenguiti Portfolio
const portfolioData = {
  profile: {
    name: "Anass Chenguiti",
    role: {
      fr: "Ingénieur en Ingénierie Informatique & Réseaux · Spécialité Développement Digital & Systèmes d'Information | Full-Stack & DevOps",
      en: "Computer & Network Engineer · Digital Development & Information Systems | Full-Stack & DevOps"
    },
    subtitles: {
      fr: [
        "Spécialité Développement Digital & Systèmes d'Information",
        "Ingénieur en Ingénierie Informatique & Réseaux",
        "Ingénieur Full-Stack & DevOps",
        "Architectures Microservices & Cloud-Native",
        "Solutions IA Appliquée & Cybersécurité"
      ],
      en: [
        "Computer & Network Engineer",
        "Digital Development & Information Systems Major",
        "Full-Stack & DevOps Engineer",
        "Cloud-Native & Microservices Architect",
        "Applied AI & Cybersecurity Specialist"
      ]
    },
    bio: {
      fr: "<p class='mb-3'>Élève-ingénieur à l'EMSI (filière Ingénierie Informatique & Réseaux, parcours Développement Digital et Systèmes d'Information), passionné par le développement de logiciels scalables et prêts pour la production sur l'ensemble de la stack : backend, frontend, mobile et orchestration IA.</p><p>J'accorde une importance primordiale à la clean architecture, la qualité du code, l'automatisation et l'apprentissage continu. J'aime mener un projet de sa conception (UML, architecture) jusqu'à son déploiement (Docker, Kubernetes, CI/CD).</p>",
      en: "<p class='mb-3'>Software engineering student at EMSI (Computer Engineering & Networks, Digital Development and Information Systems tracks), passionate about building scalable, production-ready software across the whole stack: backend, frontend, mobile, and AI orchestration.</p><p>I care about clean architecture, code quality, automation, and continuous learning. I enjoy taking a project from design (UML, architecture) all the way to deployment (Docker, Kubernetes, CI/CD).</p>"
    },
    status: {
      available: true,
      fr: "Disponible pour Stage PFE & Opportunités CDI",
      en: "Available for Graduation Internship & Full-time Roles"
    },
    location: "Tanger, Maroc / Remote",
    github: "https://github.com/anasschenguiti",
    linkedin: "https://www.linkedin.com/in/anass-chenguiti/",
    email: "anasschenguiti@gmail.com",
    stats: [
      { value: "14+", label: { fr: "Projets GitHub", en: "GitHub Repositories" } },
      { value: "5+", label: { fr: "Domaines d'expertise", en: "Domains Mastered" } },
      { value: "100%", label: { fr: "Conteneurisé & Testé", en: "Containerized & Tested" } },
      { value: "2026", label: { fr: "Promotion EMSI", en: "EMSI Class" } }
    ]
  },

  skills: [
    {
      category: {
        fr: "Backend & Architectures",
        en: "Backend & Architectures"
      },
      icon: "server",
      items: [
        { name: "Spring Boot / Cloud", level: "Avancé" },
        { name: "Java / JEE", level: "Avancé" },
        { name: "Python (FastAPI, Django, Flask)", level: "Avancé" },
        { name: "Node.js / Express / NestJS", level: "Avancé" },
        { name: "RESTful APIs & GraphQL", level: "Avancé" },
        { name: "Microservices & Design Patterns", level: "Maîtrisé" }
      ]
    },
    {
      category: {
        fr: "Frontend & Mobile",
        en: "Frontend & Mobile"
      },
      icon: "layout",
      items: [
        { name: "React.js / Next.js", level: "Avancé" },
        { name: "TypeScript / Modern JavaScript", level: "Avancé" },
        { name: "Tailwind CSS & Responsive UI", level: "Avancé" },
        { name: "Flutter (Dart)", level: "Avancé" },
        { name: "Android Natif", level: "Intermédiaire" }
      ]
    },
    {
      category: {
        fr: "DevOps & Cybersécurité",
        en: "DevOps & Cybersecurity"
      },
      icon: "shield",
      items: [
        { name: "Docker & Docker Compose", level: "Avancé" },
        { name: "CI/CD (GitHub Actions)", level: "Avancé" },
        { name: "SOC & Intrusion Detection", level: "Avancé" },
        { name: "Log Sandbox & SIEM", level: "Avancé" },
        { name: "Linux / Bash Scripting", level: "Avancé" }
      ]
    },
    {
      category: {
        fr: "ERP, Cloud & Données",
        en: "ERP, Cloud & Databases"
      },
      icon: "database",
      items: [
        { name: "Odoo 19 (Modules Métiers)", level: "Avancé" },
        { name: "PostgreSQL & MySQL", level: "Avancé" },
        { name: "MongoDB & Redis (NoSQL)", level: "Avancé" },
        { name: "Cloud AWS / Firebase", level: "Intermédiaire" },
        { name: "Modélisation UML & Merise", level: "Avancé" }
      ]
    },
    {
      category: {
        fr: "IA & Systèmes Intelligents",
        en: "AI & Intelligent Systems"
      },
      icon: "cpu",
      items: [
        { name: "Multi-Agent AI Systems", level: "Avancé" },
        { name: "Healthcare AI & Diagnostic", level: "Avancé" },
        { name: "Scikit-Learn & PyTorch", level: "Intermédiaire" },
        { name: "Orchestration LLM & NLP", level: "Avancé" },
        { name: "Pandas & Data Processing", level: "Avancé" }
      ]
    }
  ],

  projects: [
    {
      id: "trucker-fleet-logistics",
      category: "enterprise",
      title: {
        fr: "Trucker - Gestion de Flotte & Logistique",
        en: "Trucker - Fleet Management & Freight Logistics"
      },
      description: {
        fr: "Système complet de gestion et pilotage de flotte de transport routier : affectation des chauffeurs, suivi du fret, maintenance des véhicules et optimisation logistique.",
        en: "End-to-end freight fleet management platform: driver dispatching, shipment tracking, vehicle maintenance scheduling, and operational logistics optimization."
      },
      longDescription: {
        fr: "Solution logicielle conçue pour les transporteurs routiers et gestionnaires de flottes. Gestion du cycle complet des ordres de transport, suivi des kilomètres et du carburant, plannings de maintenance préventive des camions, et tableau de bord opérationnel pour maximiser la rentabilité de la flotte.",
        en: "Enterprise fleet software engineered for road haulage and logistics dispatchers. End-to-end freight order tracking, driver shifts and duty-hour logs, preventive fleet maintenance management, and operational dashboards maximizing vehicle uptime."
      },
      tags: ["Logistics", "Fleet Management", "Java / Spring", "PostgreSQL", "Tracking", "REST API"],
      featured: true,
      metrics: "Gestion de Flotte • Dispatch Fret",
      github: "https://github.com/anasschenguiti/Trucker",
      demo: null,
      icon: "truck",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
      accentColor: "#f97316"
    },
    {
      id: "agent-ia-commercial",
      category: "ai",
      title: {
        fr: "Agent IA Commercial (Multi-Agents)",
        en: "Autonomous Commercial AI Agent"
      },
      description: {
        fr: "Système complet multi-agents IA d'aide à la vente : qualification dynamique des leads, orchestration prédictive et interface de pilotage analytique.",
        en: "Autonomous multi-agent AI sales platform: dynamic lead qualification, predictive orchestration, and real-time analytical control dashboard."
      },
      longDescription: {
        fr: "Architecture multi-agents intelligente capable d'analyser le comportement client, de recommander des actions commerciales ciblées et d'automatiser le cycle de vente. Conçu avec API REST performantes, conteneurisation Docker et modélisation architecturale complète.",
        en: "Intelligent multi-agent architecture analyzing customer behavioral signals, recommending targeted sales actions, and automating pipeline stages. Built with scalable REST APIs, Docker containerization, and full architectural modeling."
      },
      tags: ["Python", "AI Agents", "FastAPI", "React", "Docker", "NLP"],
      featured: true,
      metrics: "Multi-Agents IA • Temps réel",
      github: "https://github.com/anasschenguiti/-agent-ia-commercial",
      demo: null,
      icon: "bot",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      accentColor: "#8b5cf6"
    },
    {
      id: "odoo-cabinet-medical",
      category: "enterprise",
      title: {
        fr: "Cabinet Médical - Module ERP Odoo 19",
        en: "Medical Practice ERP Module - Odoo 19"
      },
      description: {
        fr: "Module ERP sur-mesure pour cabinets et cliniques médicales : consultations, dossiers patients, ordonnances, facturation et planning sous Docker.",
        en: "Custom ERP module for clinic and practice management: medical records, consultations, prescriptions, invoicing, and appointments containerized with Docker."
      },
      longDescription: {
        fr: "Développement d'un module ERP complet sous Odoo 19. Gestion sécurisée des dossiers médicaux, automatisation du cycle de consultation, génération d'ordonnances et de factures conformes, déploiement conteneurisé Docker avec base PostgreSQL optimisée.",
        en: "End-to-end ERP module built on Odoo 19. Secure medical records handling, automated consultation workflows, compliant invoicing and prescriptions, Docker containerized deployment with optimized PostgreSQL schema."
      },
      tags: ["Odoo 19", "Python", "PostgreSQL", "Docker", "XML / QWeb"],
      featured: true,
      metrics: "100% Conteneurisé • ERP Métier",
      github: "https://github.com/anasschenguiti/odoo-cabinet-medical",
      demo: null,
      icon: "activity",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      accentColor: "#10b981"
    },
    {
      id: "soc-intrusion-detector",
      category: "security",
      title: {
        fr: "SOC Intrusion Detector (Cybersécurité)",
        en: "SOC Intrusion Detector & Security Monitoring"
      },
      description: {
        fr: "Système de détection d'intrusions réseau pour Security Operations Center (SOC) : analyse des paquets, alertes temps réel et corrélation de menaces.",
        en: "Network intrusion detection system for Security Operations Centers (SOC): packet inspection, real-time alerting, and threat correlation rules."
      },
      longDescription: {
        fr: "Outil de monitoring et de détection d'intrusions développé pour analyser les flux réseau, identifier les signatures malveillantes (DDoS, scan de ports, injections) et générer des alertes pour les analystes SOC. Intègre des dashboards de suivi et des règles de détection heuristiques.",
        en: "Monitoring and intrusion detection engine built to inspect network traffic, identify malicious signatures (DDoS, port scans, injection attempts), and dispatch actionable SOC alerts with heuristic correlation."
      },
      tags: ["Cybersecurity", "Python", "SOC", "Network Analysis", "Intrusion Detection"],
      featured: true,
      metrics: "Alerting SOC • Détection Réseau",
      github: "https://github.com/anasschenguiti/soc-intrusion-detector",
      demo: null,
      icon: "shield-alert",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
      accentColor: "#ef4444"
    },
    {
      id: "healthcare-ai-starter",
      category: "ai",
      title: {
        fr: "Healthcare AI Starter Kit",
        en: "Healthcare AI Starter & Predictive Models"
      },
      description: {
        fr: "Plateforme d'intelligence artificielle appliquée à la santé : modèles prédictifs d'aide au diagnostic clinique et pipeline de traitement de données médicales.",
        en: "Healthcare AI platform: predictive diagnostic assistance models, medical dataset preprocessing pipelines, and clinical data insights."
      },
      longDescription: {
        fr: "Pipeline complet de Machine Learning dédié aux données de santé. Prétraitement rigoureux, entraînement de modèles de classification de pathologies, interprétabilité des résultats et API de prédiction pour les professionnels de santé.",
        en: "End-to-end Machine Learning pipeline tailored for healthcare data. Rigorous clinical data cleansing, disease classification model training, interpretability layer, and production prediction API."
      },
      tags: ["Python", "Machine Learning", "Healthcare AI", "FastAPI", "Pandas"],
      featured: true,
      metrics: "Modèles Cliniques • ML Pipeline",
      github: "https://github.com/anasschenguiti/healthcare-ai-starter",
      demo: null,
      icon: "brain",
      image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80",
      accentColor: "#06b6d4"
    },
    {
      id: "certiflow",
      category: "security",
      title: {
        fr: "CertiFlow - Automatisation des Certificats",
        en: "CertiFlow - Certificate Automation & Verification"
      },
      description: {
        fr: "Système automatisé de génération, signature numérique et délivrance en masse de certificats & diplômes avec validation par QR code.",
        en: "Automated certificate issuance, digital signing, and batch diploma generation platform with instant cryptographic QR verification."
      },
      longDescription: {
        fr: "Plateforme d'automatisation complète du cycle de vie des certificats académiques et professionnels. Génération dynamique de documents PDF certifiés, signature cryptographique automatisée, envoi par lots et portail de vérification d'authenticité instantanée.",
        en: "Comprehensive platform automating the lifecycle of academic and professional certifications: dynamic certified PDF generation, automated cryptographic signing, bulk distribution, and public tamper-proof verification portal."
      },
      tags: ["Automation", "Certificates", "Digital Signatures", "Python", "REST API", "QR Code"],
      featured: false,
      metrics: "Génération en Masse • QR Sécurisé",
      github: "https://github.com/anasschenguiti/certiflow",
      demo: null,
      icon: "check-circle",
      image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=800&q=80",
      accentColor: "#3b82f6"
    },
    {
      id: "logsandbox",
      category: "security",
      title: {
        fr: "LogSandbox - Analyse & Sandbox de Logs",
        en: "LogSandbox - Log Ingestion & Analytics Sandbox"
      },
      description: {
        fr: "Environnement d'expérimentation et d'ingestion de logs serveurs et applicatifs pour le débogage, le parsing et l'audit de sécurité.",
        en: "Testing sandbox and ingestion environment for server and application logs: parsing, security auditing, and forensic analysis."
      },
      longDescription: {
        fr: "Plateforme sandbox conçue pour injecter, formater et auditer des volumes de logs hétérogènes (Apache, Nginx, Syslog, Auth). Algorithmes de détection d'anomalies et requêtage rapide pour audits DevOps et sécurité.",
        en: "Sandbox environment engineered to ingest, normalize, and audit heterogeneous logs (Nginx, Syslog, Auth). Includes anomaly detection filters and fast querying for DevOps and security investigations."
      },
      tags: ["DevOps", "Log Analysis", "Security", "Python", "Docker"],
      featured: false,
      metrics: "Parsing multi-formats • Audit Logs",
      github: "https://github.com/anasschenguiti/LogSandbox",
      demo: null,
      icon: "terminal",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      accentColor: "#f59e0b"
    },
    {
      id: "mhealth-app",
      category: "mobile",
      title: {
        fr: "mHealth - Application Mobile Healthcare",
        en: "mHealth - Mobile Healthcare & Telemedicine App"
      },
      description: {
        fr: "Application mobile de santé connectée (Mobile Healthcare) : téléconsultations, suivi des constantes vitales, rappels de traitement et carnet de santé numérique.",
        en: "Mobile healthcare application: telemedicine consultations, vital health monitoring, patient care records, and push medication reminders."
      },
      longDescription: {
        fr: "Application mobile moderne (Mobile Healthcare) dédiée à la télémédecine et au suivi des patients. Interface intuitive optimisée pour smartphone, alertes de prise de médicaments, synchronisation cloud chiffrée et carnet de santé numérique accessible partout.",
        en: "Modern Mobile Healthcare application dedicated to telemedicine and digital patient monitoring. Responsive smartphone UI, automated medication adherence notifications, encrypted cloud synchronization, and digital health records."
      },
      tags: ["Mobile Healthcare", "Flutter", "mHealth", "Telemedicine", "Firebase", "iOS & Android"],
      featured: true,
      metrics: "Télémédecine • iOS & Android",
      github: "https://github.com/anasschenguiti/mhealth-app",
      demo: null,
      icon: "smartphone",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      accentColor: "#ec4899"
    },
    {
      id: "hotel-management-system",
      category: "enterprise",
      title: {
        fr: "Hotel Management System",
        en: "Enterprise Hotel Management System"
      },
      description: {
        fr: "Système complet de gestion hôtelière : réservations de chambres, services clients, facturation automatique et rapports d'occupation.",
        en: "Comprehensive hospitality management software: room bookings, guest billing, occupancy reports, and staff workflows."
      },
      longDescription: {
        fr: "Application de gestion hôtelière d'entreprise. Modélisation relationnelle complète (chambres, réservations, factures, clients), reporting analytique des revenus et interface de gestion intuitive pour la réception.",
        en: "Enterprise hotel management system with complete relational modeling (rooms, reservations, invoicing, guests), analytical revenue reports, and front-desk operational dashboard."
      },
      tags: ["Java", "Spring / JEE", "MySQL", "Desktop / Web", "Design Patterns"],
      featured: false,
      metrics: "Architecture Relationnelle • Facturation",
      github: "https://github.com/anasschenguiti/hotel-management-system",
      demo: null,
      icon: "home",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      accentColor: "#14b8a6"
    },
    {
      id: "school-management-system",
      category: "enterprise",
      title: {
        fr: "School Management System",
        en: "School & Academic Management System"
      },
      description: {
        fr: "Plateforme de gestion d'établissements scolaires : inscriptions, suivi des notes, emplois du temps, présences et bulletins scolaires.",
        en: "Academic institution management platform: student admissions, grade tracking, scheduling, attendance, and report cards."
      },
      longDescription: {
        fr: "Gestion centralisée du cycle de vie académique. Gestion des rôles (Directeur, Enseignants, Étudiants, Parents), calcul automatisé des moyennes avec coefficients et génération PDF de bulletins.",
        en: "Centralized academic administration suite. Role-based access control (Admin, Teachers, Students), automated weighted GPA computations, and printable report-card generators."
      },
      tags: ["Java / Web", "MySQL", "Architecture MVC", "UML Modeling"],
      featured: false,
      metrics: "Rôles RBAC • Génération Bulletins",
      github: "https://github.com/anasschenguiti/School-Management-System",
      demo: null,
      icon: "graduation-cap",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      accentColor: "#6366f1"
    },
    {
      id: "digital-library-management",
      category: "enterprise",
      title: {
        fr: "Digital Library Management System",
        en: "Digital Library Management System"
      },
      description: {
        fr: "Système de bibliothèque numérique : catalogue d'ouvrages, gestion des emprunts, relances automatisées et recherche multicritère.",
        en: "Digital library system: book cataloging, circulation and loan tracking, automated overdue notifications, and search indexing."
      },
      longDescription: {
        fr: "Solution logicielle pour médiathèques et bibliothèques universitaires. Gestion des stocks d'ouvrages physiques et numériques, calcul des pénalités de retard et interface de recherche plein texte rapide.",
        en: "Library management solution with physical and digital resource cataloging, automated late fee calculations, user quotas, and fast faceted search indexing."
      },
      tags: ["Full-Stack", "Database Design", "REST API", "MVC Pattern"],
      featured: false,
      metrics: "Recherche Rapide • Suivi Emprunts",
      github: "https://github.com/anasschenguiti/digital-library-management-system.",
      demo: null,
      icon: "book-open",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
      accentColor: "#d97706"
    },
    {
      id: "personal-finance-manager",
      category: "mobile",
      title: {
        fr: "Personal Finance Manager",
        en: "Personal Finance & Budget Manager"
      },
      description: {
        fr: "Gestionnaire de finances personnelles : suivi des dépenses/revenus, graphiques budgétaires et alertes de dépassement.",
        en: "Personal finance and budgeting tracker: income/expense categories, interactive spending graphs, and savings goal alerts."
      },
      longDescription: {
        fr: "Application analytique de gestion de trésorerie personnelle. Visualisation graphique des postes de dépenses, catégorisation automatique et prévisions budgétaires mensuelles.",
        en: "Analytical cash-flow tracker. Interactive visual breakdown of spending habits, automatic categorization, and monthly budget forecasting."
      },
      tags: ["JavaScript / React", "Chart.js", "Local Storage", "Finance"],
      featured: false,
      metrics: "Visualisations Données • Budget",
      github: "https://github.com/anasschenguiti/personal-finance-manager",
      demo: null,
      icon: "dollar-sign",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      accentColor: "#10b981"
    },
    {
      id: "smarter-quiz-platform",
      category: "ai",
      title: {
        fr: "Smarter Quiz Platform",
        en: "Smarter Quiz & Assessment Platform"
      },
      description: {
        fr: "Plateforme interactive d'évaluations et quiz intelligents avec chronométrage, scoring dynamique et analyse des acquis.",
        en: "Interactive adaptive quiz platform featuring dynamic scoring, countdown timers, and competency breakdown analytics."
      },
      longDescription: {
        fr: "Application d'apprentissage interactif intégrant la génération de questionnaires, l'évaluation immédiate et des dashboards de progression pédagogique par compétence.",
        en: "Interactive assessment platform featuring randomized question sets, instant grading engines, and competency progression tracking dashboards."
      },
      tags: ["Web", "Full-Stack", "EdTech", "Interactive UI"],
      featured: false,
      metrics: "Scoring Dynamique • Analytics",
      github: "https://github.com/anasschenguiti/smarter-quiz-platform",
      demo: null,
      icon: "award",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
      accentColor: "#8b5cf6"
    },
    {
      id: "eduflex",
      category: "enterprise",
      title: {
        fr: "EduFlex - Plateforme E-Learning",
        en: "EduFlex - E-Learning Platform"
      },
      description: {
        fr: "Plateforme moderne de cours en ligne, modules de formation interactifs et collaboration étudiants-enseignants.",
        en: "Modern online learning platform with interactive course modules, resource sharing, and student-instructor collaboration."
      },
      longDescription: {
        fr: "Architecture e-learning modulaire conçue pour une expérience d'apprentissage fluide. Suivi de progression par module, quiz intégrés et système d'échange.",
        en: "Modular e-learning environment offering structured chapter progression, integrated knowledge checks, and instructor interaction channels."
      },
      tags: ["Web Platform", "EdTech", "Frontend / Backend", "Responsive"],
      featured: false,
      metrics: "Plateforme Modulaire • E-Learning",
      github: "https://github.com/anasschenguiti/eduflex",
      demo: null,
      icon: "monitor",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      accentColor: "#0ea5e9"
    }
  ],

  education: [
    {
      period: "2024 – 2026 (dernière année)",
      title: {
        fr: "Diplôme d’Ingénieur en Informatique & Réseaux (DDSI)",
        en: "Engineering Degree in Computer Science & Networks (DDSI)"
      },
      institution: "EMSI Tanger",
      location: "Tanger, Maroc",
      description: {
        fr: "Spécialisation : Développement Digital et Systèmes d’Information.<br>Domaines : développement full-stack, DevOps, data mining / Big Data, intelligence artificielle.",
        en: "Specialization: Digital Development and Information Systems (DDSI).<br>Core domains: Full-Stack development, DevOps, data mining / Big Data, artificial intelligence."
      },
      badge: "Dernière Année (DDSI)",
      domains: ["Développement Full-Stack", "DevOps", "Data Mining / Big Data", "Intelligence Artificielle"],
      icon: "graduation-cap"
    },
    {
      period: "2022 – 2024",
      title: {
        fr: "DUT en Génie Informatique",
        en: "DUT in Computer Engineering"
      },
      institution: "École Supérieure de Technologie de Laâyoune",
      location: "Laâyoune, Maroc",
      description: {
        fr: "Diplôme Universitaire de Technologie en Génie Informatique : algorithmique avancée, bases de données relationnelles, programmation orientée objet, systèmes d'exploitation et réseaux informatiques.",
        en: "Two-year university degree in Computer Engineering: advanced algorithms, relational databases, object-oriented programming, operating systems, and computer networking."
      },
      badge: "DUT Génie Informatique",
      domains: ["Génie Informatique", "Algorithmique & BD", "POO & Systèmes", "Réseaux"],
      icon: "award"
    }
  ],

  experiences: [
    {
      id: "exp-01",
      number: "01",
      role: {
        fr: "Software Development Intern",
        en: "Software Development Intern"
      },
      company: "IKSATECH Digital Services",
      location: "Tanger, Maroc",
      period: {
        fr: "Juillet 2026 – Août 2026",
        en: "July 2026 – August 2026"
      },
      description: {
        fr: "Conception et développement d’un agent commercial (BDR) basé sur l’IA : qualification des prospects, prospection personnalisée multicanal (email, LinkedIn) et gestion des objections.",
        en: "Design and development of an AI-powered Commercial BDR Agent: prospect qualification, personalized multi-channel outreach (email, LinkedIn), and objection handling."
      },
      stack: ["Python (FastAPI)", "LangChain / LangGraph", "NLP"]
    },
    {
      id: "exp-02",
      number: "02",
      role: {
        fr: "Software Development Intern",
        en: "Software Development Intern"
      },
      company: "Techium Sarl",
      location: "Tétouan, Maroc",
      period: {
        fr: "Juin 2025 – Juillet 2025",
        en: "June 2025 – July 2025"
      },
      description: {
        fr: "Développement d’un système automatisé de gestion de certificats : création, génération et administration. Support au dépannage logiciel et amélioration des outils internes.",
        en: "Development of an automated certificate management system: creation, generation, and administration. Software troubleshooting support and internal tooling enhancement."
      },
      stack: ["Automatisation", "Gestion Certificats", "Tooling"]
    },
    {
      id: "exp-03",
      number: "03",
      role: {
        fr: "Specialized Technician Intern",
        en: "Specialized Technician Intern"
      },
      company: "Lwilaye de Laayoune Sakia El-Hamra",
      location: "Laâyoune, Maroc",
      period: {
        fr: "Mai 2024 – Juillet 2024",
        en: "May 2024 – July 2024"
      },
      description: {
        fr: "Développement d’une application de gestion des stagiaires (Python, Java, SQL) et optimisation des bases de données. Création de petites applications web (HTML, CSS, PHP) et résolution de problèmes logiciels, en équipe et dans les délais.",
        en: "Development of an intern management application (Python, Java, SQL) and database optimization. Built web utilities (HTML, CSS, PHP) and resolved software tickets under tight deadlines."
      },
      stack: ["Python", "Java", "SQL", "PHP", "Web"]
    },
    {
      id: "exp-04",
      number: "04",
      role: {
        fr: "Software Development Technician Intern",
        en: "Software Development Technician Intern"
      },
      company: "Lwilaye de Laayoune Sakia El-Hamra",
      location: "Laâyoune, Maroc",
      period: {
        fr: "Mai 2023 – Juin 2023",
        en: "May 2023 – June 2023"
      },
      description: {
        fr: "Résolution de problèmes matériels et logiciels, développement de petits projets (Python, Java, HTML) et maintenance des systèmes existants.",
        en: "Hardware and software troubleshooting, development of lightweight applications (Python, Java, HTML), and maintenance of legacy systems."
      },
      stack: ["Python", "Java", "HTML", "Maintenance Systèmes"]
    }
  ],


  certificates: [
    {
      id: "cert-interactivity-js",
      previewImage: "images/certificates/cert-interactivity-js.png",
      title: {
        fr: "Interactivity with JavaScript",
        en: "Interactivity with JavaScript"
      },
      filePath: "certificats/Certificat Interactivity with JavaScript.pdf",
      fileType: "pdf",
      issuer: "University of Michigan (Coursera)",
      date: {
        fr: "21 Novembre 2024",
        en: "November 21, 2024"
      },
      link: "https://coursera.org/verify/RD0YNB5VXHPL",
      credentialId: "RD0YNB5VXHPL",
      category: "dev"
    },
    {
      id: "cert-intro-oop-cpp",
      previewImage: "images/certificates/cert-intro-oop-cpp.png",
      title: {
        fr: "Introduction à la programmation orientée objet en C++",
        en: "Introduction to Object-Oriented Programming in C++"
      },
      filePath: "certificats/Certificat Introduction à la programmation orientée objet.pdf",
      fileType: "pdf",
      issuer: "École Polytechnique Fédérale de Lausanne (Coursera)",
      date: {
        fr: "06 Janvier 2025",
        en: "January 6, 2025"
      },
      link: "https://coursera.org/verify/751B0A+DD9-9",
      credentialId: "751B0A+DD9-9",
      category: "dev"
    },
    {
      id: "cert-big-data",
      previewImage: "images/certificates/cert-big-data.png",
      title: {
        fr: "Introduction to Big Data",
        en: "Introduction to Big Data"
      },
      filePath: "certificats/Coursera RSFMYY110802.pdf",
      fileType: "pdf",
      issuer: "University of California San Diego (Coursera)",
      date: {
        fr: "08 Mai 2026",
        en: "May 8, 2026"
      },
      link: "https://coursera.org/verify/RSFMYY110802",
      credentialId: "RSFMYY110802",
      category: "data"
    },
    {
      id: "cert-agile-pm",
      previewImage: "images/certificates/cert-agile-pm.png",
      title: {
        fr: "Agile Project Management",
        en: "Agile Project Management"
      },
      filePath: "certificats/Coursera Z0BWNIGVHUT5.pdf",
      fileType: "pdf",
      issuer: "Google (Coursera)",
      date: {
        fr: "08 Mai 2026",
        en: "May 8, 2026"
      },
      link: "https://coursera.org/verify/Z0BWNIGVHUT5",
      credentialId: "Z0BWNIGVHUT5",
      category: "management"
    },
    {
      id: "cert-software-design",
      previewImage: "images/certificates/cert-software-design.png",
      title: {
        fr: "Software Design and Project Management",
        en: "Software Design and Project Management"
      },
      filePath: "certificats/Software Design and Project Management.pdf",
      fileType: "pdf",
      issuer: "The Hong Kong University of Science and Technology (Coursera)",
      date: {
        fr: "19 Avril 2025",
        en: "April 19, 2025"
      },
      link: "https://coursera.org/verify/QUW7LDUHFW0D",
      credentialId: "QUW7LDUHFW0D",
      category: "management"
    },
    {
      id: "cert-intro-ml",
      previewImage: "images/certificates/cert-intro-ml.png",
      title: {
        fr: "Introduction to Machine Learning",
        en: "Introduction to Machine Learning"
      },
      filePath: "certificats/certificat_Introduction to Machine Learning.pdf",
      fileType: "pdf",
      issuer: "Duke University (Coursera)",
      date: {
        fr: "15 Janvier 2026",
        en: "January 15, 2026"
      },
      link: "https://coursera.org/verify/46H91F2RSFLI",
      credentialId: "46H91F2RSFLI",
      category: "ai"
    },
    {
      id: "cert-ml-python",
      previewImage: "images/certificates/cert-ml-python.png",
      title: {
        fr: "Machine Learning with Python",
        en: "Machine Learning with Python"
      },
      filePath: "certificats/certificat_Machine Learning with Python.pdf",
      fileType: "pdf",
      issuer: "IBM (Coursera)",
      date: {
        fr: "15 Janvier 2026",
        en: "January 15, 2026"
      },
      link: "https://coursera.org/verify/TCH409YZ35MX",
      credentialId: "TCH409YZ35MX",
      category: "ai"
    },
    {
      id: "cert-nosql",
      previewImage: "images/certificates/cert-nosql.png",
      title: {
        fr: "Introduction to NoSQL Databases",
        en: "Introduction to NoSQL Databases"
      },
      filePath: "certificats/certificat_NoSql.pdf",
      fileType: "pdf",
      issuer: "IBM (Coursera)",
      date: {
        fr: "15 Janvier 2026",
        en: "January 15, 2026"
      },
      link: "https://coursera.org/verify/UM35AZ1JXW8F",
      credentialId: "UM35AZ1JXW8F",
      category: "data"
    },
    {
      id: "cert-python-web",
      previewImage: "images/certificates/cert-python-web.png",
      title: {
        fr: "Using Python to Access Web Data",
        en: "Using Python to Access Web Data"
      },
      filePath: "certificats/python certificate.pdf",
      fileType: "pdf",
      issuer: "University of Michigan (Coursera)",
      date: {
        fr: "29 Avril 2025",
        en: "April 29, 2025"
      },
      link: "https://coursera.org/verify/JX7UQBCTCO0X",
      credentialId: "JX7UQBCTCO0X",
      category: "dev"
    }
  ],
  terminalCommands: {
    help: "Commandes disponibles: whoami, experience, skills, projects, education, contact, github, clear",
    whoami: "Anass Chenguiti - Ingénieur en Ingénierie Informatique & Réseaux, spécialité Développement Digital & Systèmes d'Information (EMSI). Développeur Full-Stack & DevOps passionné par le Cloud, la Cybersécurité et l'IA.",
    experience: "4 Expériences professionnelles & stages: IKSATECH Digital Services (Tanger, 2026), Techium Sarl (Tétouan, 2025), Lwilaye Laayoune (2024), Lwilaye Laayoune (2023)",
    repos: "14 Repos GitHub: Trucker, -agent-ia-commercial, odoo-cabinet-medical, soc-intrusion-detector, healthcare-ai-starter, certiflow, LogSandbox, mhealth-app, hotel-management-system, School-Management-System, digital-library-management-system, personal-finance-manager, smarter-quiz-platform, eduflex",
    skills: "Full-Stack: Spring Boot, React, Node.js, Python, Flutter | DevOps: Docker, CI/CD, Linux, K8s | Systèmes: Odoo 19, Trucker Fleet | Sécurité: SOC, Détection d'intrusions, LogSandbox | IA: Agents IA, PyTorch",
    projects: "14 projets réels disponibles avec photos et liens GitHub directs sur les cartes ci-dessus !",
    contact: "Email: anasschenguiti@gmail.com | LinkedIn: https://www.linkedin.com/in/anass-chenguiti/ | GitHub: github.com/anasschenguiti",
    education: "EMSI - Diplôme d'Ingénieur d'État en Ingénierie Informatique & Réseaux (Spécialité Développement Digital & Systèmes d'Information, 2021-2026)",
    github: "Profil GitHub: https://github.com/anasschenguiti"
  }
};

// Backward-compatible alias
portfolioData.timeline = portfolioData.education;
window.portfolioData = portfolioData;

