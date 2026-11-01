// Core Portfolio Logic for Anass Chenguiti — Engineering Blueprint Edition
document.addEventListener('DOMContentLoaded', () => {
  // Enforce English language and Blueprint Navy theme
  let currentLang = localStorage.getItem('portfolio_lang') || 'en';
  let currentProjectFilter = 'all';

  // Permanent Blueprint Navy theme
  document.documentElement.setAttribute('data-theme', 'dark');
  document.documentElement.classList.add('dark');

  // Set initial language indicator
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const langIndicator = document.getElementById('lang-indicator');
  if (langIndicator) langIndicator.textContent = currentLang.toUpperCase();

  // Translations dictionary for static UI elements (strictly preserved)
  const uiTranslations = {
    fr: {
      navAbout: "À PROPOS",
      navSkills: "COMPÉTENCES",
      navProjects: "PROJETS",
      navEducation: "ÉDUCATION",
      navTimeline: "ÉDUCATION",
      navExperience: "EXPÉRIENCES",
      navContact: "CONTACT",
      btnContactMe: "ME CONTACTER",
      badgeAvailable: "Disponible pour Stage PFE & Opportunités CDI",
      heroGreeting: "BONJOUR, JE SUIS",
      heroCtaProjects: "EXPLORER LES PROJETS",
      heroCtaCv: "Télécharger mon CV",
      sectionAboutTitle: "À Propos de Moi",
      sectionAboutSubtitle: "INGÉNIEUR LOGICIEL ANIMÉ PAR L'EXCELLENCE TECHNIQUE ET L'INNOVATION APPLIQUÉE",
      aboutTextLead: "<p class='mb-3'>Élève-ingénieur à l'EMSI (filière Ingénierie Informatique & Réseaux, parcours Développement Digital et Systèmes d'Information), passionné par le développement de logiciels scalables et prêts pour la production sur l'ensemble de la stack : backend, frontend, mobile et orchestration IA.</p><p>J'accorde une importance primordiale à la clean architecture, la qualité du code, l'automatisation et l'apprentissage continu. J'aime mener un projet de sa conception (UML, architecture) jusqu'à son déploiement (Docker, Kubernetes, CI/CD).</p>",
      aboutHighlightsTitle: "Ce qui définit mon approche :",
      aboutPillar1Title: "ARCHITECTURE SOLIDE & ÉVOLUTIVE",
      aboutPillar1Desc: "Systèmes microservices découplés, design patterns éprouvés, modélisation UML rigoureuse et principes SOLID.",
      aboutPillar2Title: "CLOUD-NATIVE & CULTURE DEVOPS",
      aboutPillar2Desc: "Conteneurisation systématique (Docker), clusters distribués, pipelines CI/CD automatisés et observabilité.",
      aboutPillar3Title: "INTELLIGENCE ARTIFICIELLE APPLIQUÉE",
      aboutPillar3Desc: "Agents IA autonomes, pipelines NLP, et intégration d'outils analytiques résolvant des cas d'usage métiers réels.",
      sectionSkillsTitle: "Compétences & Stack",
      sectionSkillsSubtitle: "UN ARSENAL TECHNIQUE DIVERSIFIÉ COUVRANT L'ENSEMBLE DU CYCLE DE VIE LOGICIEL",
      sectionProjectsTitle: "Projets Réalisés",
      sectionProjectsSubtitle: "Architectures de production, systèmes distribués et applications à fort impact",
      filterAll: "TOUS (14)",
      filterAi: "IA & AGENTS",
      filterSecurity: "CYBERSÉCURITÉ & SOC",
      filterEnterprise: "ERP & SYSTÈMES",
      filterMobile: "MOBILE & APPS",
      sectionEducationTitle: "Éducation & Diplômes",
      sectionEducationSubtitle: "PARCOURS ACADÉMIQUE, DIPLÔMES D'INGÉNIEUR & SPÉCIALISATIONS",
      sectionTimelineTitle: "Éducation & Diplômes",
      sectionTimelineSubtitle: "PARCOURS ACADÉMIQUE, DIPLÔMES D'INGÉNIEUR & SPÉCIALISATIONS",
      navCertifications: "CERTIFICATIONS",
      sectionCertificationsTitle: "Certifications & Accréditations",
      sectionCertificationsSubtitle: "ACCRÉDITATIONS PROFESSIONNELLES, COURS CERTIFIÉS & SPÉCIALISATIONS TECHNIQUES",
      filterCertAll: "TOUS (9)",
      filterCertAi: "IA & MACHINE LEARNING",
      filterCertDev: "DÉVELOPPEMENT & JS/C++",
      filterCertData: "BIG DATA & NOSQL",
      filterCertMgmt: "AGILE & PROJETS",
      sectionExperienceTitle: "Expériences & Stages",
      sectionExperienceSubtitle: "STAGES TECHNIQUES, DÉVELOPPEMENT LOGICIEL & AGENTS IA DE PRODUCTION",
      sectionContactTitle: "Démarrons une Collaboration",
      sectionContactSubtitle: "Vous avez un projet, une opportunité ou un stage PFE ? Discutons-en !",
      contactDirectEmail: "Email direct",
      contactDirectPhone: "GitHub & Réseaux",
      contactCopySuccess: "Email copié dans le presse-papiers !",
      contactCopyBtn: "Copier",
      contactLocationLabel: "Localisation",
      contactLocationValue: "Tanger, Maroc · Remote OK",
      formSpecHeader: "// FORMULAIRE DE TRANSMISSION DES SPÉCIFICATIONS",
      formNameLabel: "Nom / Entreprise",
      formNamePlaceholder: "Votre Nom / Entreprise",
      formEmailLabel: "Email",
      formEmailPlaceholder: "votre.email@entreprise.com",
      formSubjectLabel: "Sujet",
      formSubjectPlaceholder: "Sujet (ex: Opportunité Stage PFE / Mission)",
      formMessageLabel: "Message",
      formMessagePlaceholder: "Bonjour Anass, j'aimerais échanger avec vous concernant...",
      formSubmitBtn: "Envoyer le Message",
      footerRights: "Tous droits réservés. Développé avec passion.",
      modalClose: "Fermer la Spécification",
      viewCode: "Voir le Code Source",
      viewLive: "Démo en Ligne"
    },
    en: {
      navAbout: "ABOUT",
      navSkills: "SKILLS",
      navProjects: "PROJECTS",
      navEducation: "EDUCATION",
      navTimeline: "EDUCATION",
      navExperience: "EXPERIENCES",
      navContact: "CONTACT",
      btnContactMe: "CONTACT ME",
      badgeAvailable: "OPEN FOR GRADUATION INTERNSHIP & FULL-TIME ROLES",
      heroGreeting: "HELLO, I AM",
      heroCtaProjects: "EXPLORE PROJECTS",
      heroCtaCv: "Download Resume",
      sectionAboutTitle: "About Me",
      sectionAboutSubtitle: "SOFTWARE ENGINEER DRIVEN BY TECHNICAL EXCELLENCE AND APPLIED INNOVATION",
      aboutTextLead: "<p class='mb-3'>Software engineering student at EMSI (Computer Engineering & Networks, Digital Development and Information Systems tracks), passionate about building scalable, production-ready software across the whole stack: backend, frontend, mobile, and AI orchestration.</p><p>I care about clean architecture, code quality, automation, and continuous learning. I enjoy taking a project from design (UML, architecture) all the way to deployment (Docker, Kubernetes, CI/CD).</p>",
      aboutHighlightsTitle: "Core Engineering Principles:",
      aboutPillar1Title: "ROBUST & SCALABLE ARCHITECTURE",
      aboutPillar1Desc: "Decoupled microservices, proven design patterns, rigorous UML modeling, and clean SOLID codebases.",
      aboutPillar2Title: "CLOUD-NATIVE & DEVOPS MINDSET",
      aboutPillar2Desc: "Systematic containerization with Docker, distributed systems orchestration, CI/CD automation and metrics monitoring.",
      aboutPillar3Title: "APPLIED ARTIFICIAL INTELLIGENCE",
      aboutPillar3Desc: "Autonomous AI agents, NLP pipelines, and machine learning models tailored to concrete enterprise needs.",
      sectionSkillsTitle: "Skills & Tech Stack",
      sectionSkillsSubtitle: "A BATTLE-TESTED TECHNICAL ARSENAL COVERING THE FULL SOFTWARE LIFECYCLE",
      sectionProjectsTitle: "Featured Projects",
      sectionProjectsSubtitle: "Production-grade codebases, distributed clusters, and enterprise applications",
      filterAll: "ALL (14)",
      filterAi: "AI & AGENTS",
      filterSecurity: "CYBERSECURITY & SOC",
      filterEnterprise: "ERP & SYSTEMS",
      filterMobile: "MOBILE & APPS",
      sectionEducationTitle: "Education & Degrees",
      sectionEducationSubtitle: "ACADEMIC BACKGROUND, ENGINEERING DEGREE & SPECIALIZATIONS",
      sectionTimelineTitle: "Education & Degrees",
      sectionTimelineSubtitle: "ACADEMIC BACKGROUND, ENGINEERING DEGREE & SPECIALIZATIONS",
      navCertifications: "CERTIFICATIONS",
      sectionCertificationsTitle: "Certifications & Credentials",
      sectionCertificationsSubtitle: "PROFESSIONAL CREDENTIALS, CERTIFIED COURSEWORK & TECHNICAL SPECIALIZATIONS",
      filterCertAll: "ALL (9)",
      filterCertAi: "AI & MACHINE LEARNING",
      filterCertDev: "DEVELOPMENT & JS/C++",
      filterCertData: "BIG DATA & NOSQL",
      filterCertMgmt: "AGILE & MANAGEMENT",
      sectionExperienceTitle: "Internships & Experience",
      sectionExperienceSubtitle: "TECHNICAL INTERNSHIPS, SOFTWARE ENGINEERING & APPLIED AI AGENTS",
      sectionContactTitle: "Start a Collaboration",
      sectionContactSubtitle: "HAVE A PROJECT, AN OPPORTUNITY OR A GRADUATION INTERNSHIP? LET'S TALK!",
      contactDirectEmail: "Direct Email",
      contactDirectPhone: "GitHub & Socials",
      contactCopySuccess: "Email copied to clipboard!",
      contactCopyBtn: "Copy",
      contactLocationLabel: "Location",
      contactLocationValue: "Tangier, Morocco · Remote OK",
      formSpecHeader: "// SPECIFICATION TRANSMISSION FORM",
      formNameLabel: "Name / Organization",
      formNamePlaceholder: "Your Name / Organization",
      formEmailLabel: "Email",
      formEmailPlaceholder: "your.email@company.com",
      formSubjectLabel: "Subject",
      formSubjectPlaceholder: "Subject (e.g., Internship / Career Opportunity)",
      formMessageLabel: "Message",
      formMessagePlaceholder: "Hi Anass, I'd like to discuss an opportunity with you...",
      formSubmitBtn: "Send Message",
      footerRights: "All rights reserved. Built with passion & precision.",
      modalClose: "Close Specification",
      viewCode: "View Source Code",
      viewLive: "Live Demo"
    }
  };

  // --- Typewriter Effect ---
  let typewriterTimeout = null;
  function startTypewriter() {
    clearTimeout(typewriterTimeout);
    const target = document.getElementById('hero-typewriter');
    if (!target) return;

    const list = portfolioData.profile.subtitles[currentLang];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function tick() {
      const currentPhrase = list[phraseIndex];
      if (isDeleting) {
        target.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
      } else {
        target.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? 25 : 60;

      if (!isDeleting && charIndex === currentPhrase.length) {
        speed = 2400;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % list.length;
        speed = 400;
      }

      typewriterTimeout = setTimeout(tick, speed);
    }

    tick();
  }

  // --- Apply Translations ---
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);

    if (langIndicator) langIndicator.textContent = lang.toUpperCase();
    const mobileLangIndicator = document.getElementById('mobile-lang-indicator');
    if (mobileLangIndicator) mobileLangIndicator.textContent = lang.toUpperCase();

    // Update static data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (uiTranslations[lang] && uiTranslations[lang][key]) {
        el.innerHTML = uiTranslations[lang][key];
      }
    });

    // Update placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (uiTranslations[lang] && uiTranslations[lang][key]) {
        el.setAttribute('placeholder', uiTranslations[lang][key]);
      }
    });

    // Update bio & status
    const bioEl = document.getElementById('profile-bio');
    if (bioEl) bioEl.innerHTML = portfolioData.profile.bio[lang];

    const statusEl = document.getElementById('status-text');
    if (statusEl) statusEl.textContent = portfolioData.profile.status[lang];

    // Re-render blueprint components
    renderStats();
    renderSkills();
    renderProjects(currentProjectFilter);
    renderEducation();
    if (window.renderCertificates) {
      window.renderCertificates();
    }
    renderExperiences();
    startTypewriter();

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Theme is permanently Blueprint Navy
  window.setTheme = function () {};
  window.toggleBlueprintTheme = function () {};


  // --- Render Profile Stats (Technical Specification Plates - Image 1) ---
  function renderStats() {
    const container = document.getElementById('stats-grid');
    if (!container) return;
    const icons = ['code-2', 'briefcase', 'cpu', 'zap'];
    container.innerHTML = portfolioData.profile.stats.map((s, i) => `
      <div class="stat-plate corner-crosshair">
        <div class="flex items-center justify-between text-[var(--accent)] font-mono text-[10px] mb-2">
          <i data-lucide="${icons[i]}" class="w-3.5 h-3.5"></i>
          <span class="text-[var(--ink-muted)]">SPEC 0${i + 1}</span>
        </div>
        <div class="text-3xl sm:text-4xl font-serif text-[var(--ink)] font-normal mb-1 tracking-tight">${s.value}</div>
        <div class="text-[10px] font-mono text-[var(--ink-muted)] tracking-wider uppercase">${s.label[currentLang]}</div>
      </div>
    `).join('');
    if (window.lucide) window.lucide.createIcons();
  }

  // --- Render Skills Section (Tech Matrix Plates - Image 3) ---
  function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;

    container.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        ${portfolioData.skills.map((cat, idx) => `
          <div class="skill-plate">
            <div class="skill-plate-header">
              <div class="flex items-center gap-2 font-mono text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                <i data-lucide="${cat.icon}" class="w-4 h-4 text-[var(--accent)]"></i>
                <span>${cat.category[currentLang]}</span>
              </div>
              <span class="font-mono text-[10px] text-[var(--ink-muted)]">SEC. 0${idx + 1}</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 p-3">
              ${cat.items.map(item => `
                <div class="skill-tag-plate">
                  <span class="text-[var(--accent)] text-[9px] shrink-0">▪</span>
                  <span class="truncate">${item.name}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
  }

  // --- Render Projects Section (Technical Blueprint Card Grid) ---
  function renderProjects(filter = 'all') {
    const container = document.getElementById('projects-grid');
    if (!container) return;

    currentProjectFilter = filter;

    const filtered = filter === 'all'
      ? portfolioData.projects
      : portfolioData.projects.filter(p => p.category === filter);

    const catLabels = {
      ai: 'IA & AGENTS',
      security: 'CYBERSÉCURITÉ & SOC',
      enterprise: 'ERP & SYSTÈMES',
      mobile: 'MOBILE & APPS'
    };

    container.innerHTML = filtered.map((p, i) => {
      const catLabel = catLabels[p.category] || p.category.toUpperCase();
      const figNumber = String(i + 1).padStart(2, '0');
      const refCode = p.id ? p.id.replace(/^-+/, '').toUpperCase().replace(/_/g, '-') : `PLATE-${figNumber}`;

      return `
        <div class="blueprint-card group" onclick="window.openProjectModal('${p.id}')">
          <!-- Top Technical Meta Strip -->
          <div class="blueprint-card-topbar">
            <span class="blueprint-card-meta-left">
              FIG. ${figNumber} // ${catLabel}
            </span>
            ${p.metrics ? `
              <span class="blueprint-card-meta-right">
                ${p.metrics.toUpperCase().replace(/•/g, '·')}
              </span>
            ` : ''}
          </div>

          <!-- Photo Container with Ref Badge -->
          <div class="blueprint-card-photo-box">
            <img src="${p.image}" alt="${p.title[currentLang]}" loading="lazy" class="blueprint-card-photo">
            <div class="blueprint-card-ref-badge">
              REF // ${refCode}
            </div>
          </div>

          <!-- White Content Body -->
          <div class="blueprint-card-content">
            <h3 class="blueprint-card-title">
              ${p.title[currentLang]}
            </h3>
            <p class="blueprint-card-description">
              ${p.description[currentLang]}
            </p>
            <div class="flex flex-wrap gap-1.5 pt-2">
              ${p.tags.map(t => `<span class="blueprint-tag">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // --- Project Filter Buttons ---
  const filterBtns = document.querySelectorAll('[data-project-filter]');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-indigo-600', 'text-white');
      });
      btn.classList.add('active');
      renderProjects(btn.getAttribute('data-project-filter'));
    });
  });

  // --- Project Modal (Technical Specification Sheet) ---
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-content-area');

  window.openProjectModal = function (id) {
    const proj = portfolioData.projects.find(p => p.id === id);
    if (!proj || !modal || !modalBody) return;

    const catLabels = currentLang === 'fr' ? { ai: 'IA & Agents', security: 'Cybersécurité & SOC', enterprise: 'ERP & Systèmes', mobile: 'Mobile & Apps' } : { ai: 'AI & Agents', security: 'Cybersecurity & SOC', enterprise: 'ERP & Systems', mobile: 'Mobile & Apps' };

    modalBody.innerHTML = `
      <div class="space-y-6 font-mono text-left">
        <!-- Title Block Header -->
        <div class="border-b border-[var(--hairline-heavy)] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div class="text-[10px] text-[var(--accent)] uppercase tracking-widest">// SPECIFICATION SHEET · DRAWING SPEC</div>
            <h2 class="text-xl sm:text-2xl font-bold text-[var(--ink)] font-sans mt-1">${proj.title[currentLang]}</h2>
          </div>
          <div class="text-[11px] text-[var(--ink-muted)]">
            <span>DOMAIN: </span><span class="text-[var(--ink)] font-semibold">${catLabels[proj.category] || proj.category}</span>
          </div>
        </div>

        <!-- Technical Drawing Visual -->
        <div class="relative border border-[var(--hairline-heavy)] bg-[var(--paper-sunken)] p-2">
          <div class="relative h-56 sm:h-64 overflow-hidden">
            <img src="${proj.image}" alt="${proj.title[currentLang]}" class="w-full h-full object-cover">
          </div>
          <div class="mt-2 flex items-center justify-between text-[10px] text-[var(--ink-muted)] pt-1 border-t border-[var(--hairline)]">
            <span>FIG. SPEC // CAMERA ASPECT RATIO 16:9</span>
            ${proj.metrics ? `<span class="text-[var(--accent)] font-bold">METRIC: ${proj.metrics}</span>` : ''}
          </div>
        </div>

        <!-- Engineering Description -->
        <div class="space-y-2">
          <div class="text-[11px] font-bold text-[var(--ink)] uppercase tracking-wider">// 01. TECHNICAL SCOPE & ARCHITECTURE</div>
          <div class="p-4 border border-[var(--hairline)] bg-[var(--paper-elevated)] text-[var(--ink-secondary)] text-sm font-sans leading-relaxed">
            ${proj.longDescription[currentLang]}
          </div>
        </div>

        <!-- Tech Stack Arsenal -->
        <div class="space-y-2">
          <div class="text-[11px] font-bold text-[var(--ink)] uppercase tracking-wider">// 02. STACK COMPONENTS & TOOLCHAIN</div>
          <div class="flex flex-wrap gap-2">
            ${proj.tags.map(t => `<span class="skill-tag text-xs font-semibold">${t}</span>`).join('')}
          </div>
        </div>

        <!-- Action Controls -->
        <div class="flex items-center gap-3 pt-4 border-t border-[var(--hairline-heavy)]">
          <a href="${proj.github}" target="_blank" rel="noopener noreferrer"
             class="flex-1 btn-blueprint py-3 text-xs flex items-center justify-center gap-2">
            <i data-lucide="github" class="w-4 h-4"></i>
            <span>${uiTranslations[currentLang].viewCode}</span>
            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          </a>
          <button onclick="window.closeProjectModal()" class="btn-outline py-3 px-5 text-xs">
            ${uiTranslations[currentLang].modalClose}
          </button>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (window.lucide) window.lucide.createIcons();
  };

  window.closeProjectModal = function () {
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    if (modalBody) modalBody.innerHTML = '';
  };

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        window.closeProjectModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      window.closeProjectModal();
    }
  });


  // --- Render Education Section (Blueprint Timeline Schedule) ---
  function renderEducation() {
    const container = document.getElementById('education-container') || document.getElementById('timeline-container');
    if (!container) return;
    const eduList = portfolioData.education || portfolioData.timeline;
    if (!eduList) return;

    container.innerHTML = `
      <div class="blueprint-timeline">
        ${eduList.map((item) => {
          const periodText = typeof item.period === 'object' ? item.period[currentLang] : item.period;
          const locText = typeof item.location === 'object' ? item.location[currentLang] : item.location;
          const badgeText = typeof item.badge === 'object' ? item.badge[currentLang] : item.badge;
          const domainsList = Array.isArray(item.domains) ? item.domains : (item.domains ? item.domains[currentLang] : []);

          return `
            <div class="blueprint-timeline-item">
              <div class="timeline-period">[${periodText}]</div>
              <h4 class="timeline-title">${item.title[currentLang]}</h4>

              <div class="timeline-institution-badge">
                <i data-lucide="${item.icon || 'graduation-cap'}" class="w-4 h-4 text-[var(--accent)] shrink-0"></i>
                <span class="timeline-institution-name">${item.institution}</span>
                ${locText ? `<span class="timeline-institution-loc">· ${locText}</span>` : ''}
              </div>

              <p class="text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed max-w-2xl mt-1">
                ${item.description[currentLang]}
              </p>
              ${domainsList && domainsList.length ? `
                <div class="mt-2.5 flex flex-wrap items-center gap-1.5">
                  <span class="font-mono text-[10px] text-[var(--ink-muted)] uppercase mr-1">${currentLang === 'fr' ? 'DOMAINES :' : 'DOMAINS:'}</span>
                  ${domainsList.map(d => `
                    <span class="px-2 py-0.5 bg-[var(--paper)] border border-[var(--accent)]/30 text-[10px] font-mono text-[var(--accent)]">
                      ${d}
                    </span>
                  `).join('')}
                </div>
              ` : badgeText ? `
                <div class="mt-2.5 inline-block font-mono text-[10px] text-[var(--accent)] border border-[var(--accent)]/30 px-2.5 py-0.5">
                  SPEC: ${badgeText}
                </div>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
  }
  window.renderTimeline = renderEducation;

  // --- Render Professional Experience Section (Timeline with Duration) ---
  function renderExperiences() {
    const container = document.getElementById('experiences-container');
    if (!container || !portfolioData.experiences) return;

    container.innerHTML = `
      <div class="blueprint-timeline">
        ${portfolioData.experiences.map((exp) => {
          const periodText = typeof exp.period === 'object' ? exp.period[currentLang] : exp.period;
          const locText = typeof exp.location === 'object' ? exp.location[currentLang] : exp.location;
          const durText = exp.duration ? (typeof exp.duration === 'object' ? exp.duration[currentLang] : exp.duration) : null;

          return `
            <div class="blueprint-timeline-item">
              <div class="flex flex-wrap items-center gap-2 mb-1.5">
                <span class="timeline-period">[${periodText}]</span>
                ${durText ? `
                  <span class="font-mono text-[10px] text-[var(--accent)] bg-[var(--accent-muted)] border border-[var(--accent)]/30 px-2 py-0.5 tracking-wider uppercase font-semibold">
                    ${currentLang === 'fr' ? 'DURÉE :' : 'DURATION:'} ${durText}
                  </span>
                ` : ''}
              </div>
              <h4 class="timeline-title">${exp.role[currentLang]}</h4>

              <div class="timeline-institution-badge">
                <i data-lucide="building-2" class="w-4 h-4 text-[var(--accent)] shrink-0"></i>
                <span class="timeline-institution-name">${exp.company}</span>
                ${locText ? `<span class="timeline-institution-loc">· ${locText}</span>` : ''}
              </div>

              <p class="text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed max-w-2xl mt-1">${exp.description[currentLang]}</p>
              ${exp.stack && exp.stack.length ? `
                <div class="mt-2.5 inline-block font-mono text-[10px] text-[var(--accent)] border border-[var(--accent)]/30 px-2.5 py-0.5">
                  STACK: ${exp.stack.join(' · ')}
                </div>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
  }


  // --- Copy to Clipboard ---
  window.copyEmail = function () {
    navigator.clipboard.writeText(portfolioData.profile.email).then(() => {
      const tooltip = document.getElementById('copy-feedback');
      if (tooltip) {
        tooltip.textContent = uiTranslations[currentLang].contactCopySuccess;
        tooltip.classList.remove('opacity-0', 'pointer-events-none');
        setTimeout(() => {
          tooltip.classList.add('opacity-0', 'pointer-events-none');
        }, 3000);
      }
    });
  };

  // --- Contact Form Submission ---
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const subject = document.getElementById('contact-subject').value;
      const msg = document.getElementById('contact-message').value;

      const mailtoUrl = `mailto:${portfolioData.profile.email}?subject=${encodeURIComponent(subject || 'Prise de contact Portfolio')}&body=${encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`)}`;
      window.location.href = mailtoUrl;

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = `<span>✓ MESSAGE PRÉPARÉ DANS VOTRE MESSAGERIE</span>`;
        submitBtn.style.background = 'var(--accent)';
        submitBtn.style.color = 'var(--accent-ink)';
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = '';
          submitBtn.style.color = '';
          contactForm.reset();
        }, 4000);
      }
    });
  }

  // --- Mobile Menu Toggle ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      if (window.lucide) window.lucide.createIcons();
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  // Desktop & Mobile Language Toggle Buttons
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'fr' : 'en';
      applyLanguage(nextLang);
    });
  }

  const mobileLangBtn = document.getElementById('mobile-lang-btn');
  if (mobileLangBtn) {
    mobileLangBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'fr' : 'en';
      applyLanguage(nextLang);
    });
  }

  window.toggleLanguage = function () {
    const nextLang = currentLang === 'en' ? 'fr' : 'en';
    applyLanguage(nextLang);
  };

  // --- Circle Cursor with Dot Inside Logic ---
  const cursorDot = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');

  if (cursorDot && cursorRing && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;
    let isCursorActive = false;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Pinpoint dot directly under mouse cursor
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

      if (!isCursorActive) {
        isCursorActive = true;
        ringX = mouseX;
        ringY = mouseY;
        cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
        cursorDot.style.opacity = '1';
        cursorRing.style.opacity = '1';
        document.body.classList.add('has-custom-cursor');
      }
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      cursorDot.style.opacity = '0';
      cursorRing.style.opacity = '0';
      isCursorActive = false;
    });

    document.addEventListener('mouseenter', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      ringX = mouseX;
      ringY = mouseY;
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      cursorDot.style.opacity = '1';
      cursorRing.style.opacity = '1';
      isCursorActive = true;
    });

    // Smooth physics loop for the outer circle ring
    function animateRing() {
      if (isCursorActive) {
        ringX += (mouseX - ringX) * 0.22;
        ringY += (mouseY - ringY) * 0.22;
        cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      requestAnimationFrame(animateRing);
    }
    requestAnimationFrame(animateRing);

    // Dynamic hover states for interactive elements
    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('a, button, input, textarea, select, [role="button"], .blueprint-card, .stat-plate, .pillar-plate, .skill-tag-plate, .skill-plate, [data-cursor-hover]');
      if (target) {
        cursorRing.classList.add('cursor-hover');
      } else {
        cursorRing.classList.remove('cursor-hover');
      }
    }, { passive: true });
  }

  // Initial trigger
  applyLanguage(currentLang);
});
