// Interactive Developer Terminal
(function () {
  const terminalBody = document.getElementById('terminal-body');
  const terminalInput = document.getElementById('terminal-input');
  if (!terminalBody || !terminalInput) return;

  const history = [];
  let historyIndex = -1;

  const commands = {
    help: () => `
<div class="text-[#FF4D00] font-bold mb-1">Commandes disponibles :</div>
<div class="grid grid-cols-2 sm:grid-cols-3 gap-1 text-slate-300">
  <span><b class="text-sky-400">whoami</b> : Identité</span>
  <span><b class="text-sky-400">experience</b> : Stages & Expériences</span>
  <span><b class="text-sky-400">skills</b> : Compétences</span>
  <span><b class="text-sky-400">projects</b> : Projets phares</span>
  <span><b class="text-sky-400">education</b> : Formation EMSI</span>
  <span><b class="text-sky-400">contact</b> : Coordonnées</span>
  <span><b class="text-sky-400">github</b> : Profil GitHub</span>
  <span><b class="text-sky-400">clear</b> : Effacer l'écran</span>
</div>
<div class="text-xs text-slate-400 mt-2">Astuce : Vous pouvez aussi cliquer sur les boutons ci-dessus !</div>
`,
    experience: () => `
<div class="space-y-3.5 text-slate-300">
  <div class="border-l-2 border-[#FF4D00] pl-3 py-1 bg-white/[0.02]">
    <div class="flex flex-wrap items-center justify-between gap-1 mb-0.5">
      <span class="text-white font-bold text-xs sm:text-sm">1. Software Development Intern — <span class="text-[#FF4D00]">IKSATECH Digital Services, Tanger</span></span>
      <span class="text-[10px] font-mono text-[#FF4D00] border border-[#FF4D00]/40 px-1.5 py-0.5">Juillet 2026 – Août 2026</span>
    </div>
    <div class="text-xs text-slate-300 leading-relaxed mt-1">
      Conception et développement d’un agent commercial (BDR) basé sur l’IA : qualification des prospects, prospection personnalisée multicanal (email, LinkedIn) et gestion des objections.
    </div>
    <div class="text-[11px] font-mono text-slate-400 mt-1.5"><span class="text-[#FF4D00] font-semibold">Stack :</span> Python (FastAPI), LangChain / LangGraph, NLP</div>
  </div>

  <div class="border-l-2 border-sky-400 pl-3 py-1 bg-white/[0.02]">
    <div class="flex flex-wrap items-center justify-between gap-1 mb-0.5">
      <span class="text-white font-bold text-xs sm:text-sm">2. Software Development Intern — <span class="text-sky-300">Techium Sarl, Tétouan</span></span>
      <span class="text-[10px] font-mono text-sky-400 border border-sky-400/40 px-1.5 py-0.5">Juin 2025 – Juillet 2025</span>
    </div>
    <div class="text-xs text-slate-300 leading-relaxed mt-1">
      Développement d’un système automatisé de gestion de certificats : création, génération et administration.<br>
      Support au dépannage logiciel et amélioration des outils internes.
    </div>
  </div>

  <div class="border-l-2 border-emerald-400 pl-3 py-1 bg-white/[0.02]">
    <div class="flex flex-wrap items-center justify-between gap-1 mb-0.5">
      <span class="text-white font-bold text-xs sm:text-sm">3. Specialized Technician Intern — <span class="text-emerald-300">Lwilaye de Laayoune Sakia El-Hamra</span></span>
      <span class="text-[10px] font-mono text-emerald-400 border border-emerald-400/40 px-1.5 py-0.5">Mai 2024 – Juillet 2024</span>
    </div>
    <div class="text-xs text-slate-300 leading-relaxed mt-1">
      Développement d’une application de gestion des stagiaires (Python, Java, SQL) et optimisation des bases de données.<br>
      Création de petites applications web (HTML, CSS, PHP) et résolution de problèmes logiciels, en équipe et dans les délais.
    </div>
  </div>

  <div class="border-l-2 border-amber-400 pl-3 py-1 bg-white/[0.02]">
    <div class="flex flex-wrap items-center justify-between gap-1 mb-0.5">
      <span class="text-white font-bold text-xs sm:text-sm">4. Software Development Technician Intern — <span class="text-amber-300">Lwilaye de Laayoune Sakia El-Hamra</span></span>
      <span class="text-[10px] font-mono text-amber-400 border border-amber-400/40 px-1.5 py-0.5">Mai 2023 – Juin 2023</span>
    </div>
    <div class="text-xs text-slate-300 leading-relaxed mt-1">
      Résolution de problèmes matériels et logiciels, développement de petits projets (Python, Java, HTML) et maintenance des systèmes existants.
    </div>
  </div>
</div>
`,
    experiences: () => commands.experience(),
    stages: () => commands.experience(),
    stage: () => commands.experience(),
    internship: () => commands.experience(),
    internships: () => commands.experience(),
    whoami: () => `
<div class="text-slate-200">
  <span class="text-emerald-400 font-semibold">Anass Chenguiti</span> — Ingénieur en Ingénierie Informatique & Réseaux (EMSI).
  <br><span class="text-sky-300 font-semibold">Spécialité :</span> Développement Digital & Systèmes d'Information.
  <br><span class="text-indigo-400 font-semibold">Profil :</span> Ingénieur Full-Stack & DevOps (Docker, CI/CD, Microservices, IA & Cybersécurité).
  <br><span class="text-amber-300">Localisation :</span> Tanger, Maroc / Remote.
  <br><span class="text-emerald-400 font-semibold">Statut :</span> Disponible pour Stage PFE & Opportunités CDI.
</div>
`,
    skills: () => `
<div class="space-y-1 text-slate-300">
  <div><span class="text-indigo-400 font-semibold">• Backend :</span> Spring Boot, Spring Cloud, Java, Node.js, Python (FastAPI/Django), REST, GraphQL</div>
  <div><span class="text-sky-400 font-semibold">• Frontend/Mobile :</span> React, Next.js, TypeScript, Flutter, Tailwind CSS</div>
  <div><span class="text-purple-400 font-semibold">• DevOps & Cloud :</span> Docker, Kubernetes, CI/CD Actions, Linux, AWS, Grafana</div>
  <div><span class="text-amber-400 font-semibold">• Big Data & BD :</span> PostgreSQL, MongoDB, Redis, Hadoop MapReduce, Apache Hive</div>
  <div><span class="text-rose-400 font-semibold">• IA & Data :</span> Agents IA autonomes, PyTorch, Scikit-Learn, Orchestration LLM</div>
</div>
`,
    projects: () => `
<div class="space-y-2 text-slate-300">
  <div><b class="text-indigo-400">1. AI Sales Agent</b> — Système multi-agents intelligent d'aide à la vente & orchestration prédictive.</div>
  <div><b class="text-sky-400">2. Odoo 19 ERP Cabinet Médical</b> — Module ERP complet conteneurisé (Python, PostgreSQL, Docker).</div>
  <div><b class="text-emerald-400">3. Cluster Big Data Hadoop</b> — Traitement distribué HDFS + YARN & analyses Hive en cluster Docker.</div>
  <div><b class="text-purple-400">4. Spring Cloud Microservices</b> — Plateforme hautement disponible avec Eureka, Gateway & Kafka.</div>
</div>
`,
    education: () => `
<div class="text-slate-300">
  <div class="text-indigo-400 font-bold">EMSI (École Marocaine des Sciences de l'Ingénieur)</div>
  <div>Diplôme d'Ingénieur d'État — Ingénierie Informatique & Réseaux (2021 - 2026)</div>
  <div class="text-sky-300 font-semibold text-xs mt-0.5">Spécialité : Développement Digital & Systèmes d'Information</div>
  <div class="text-xs text-slate-400 mt-1">Modules d'excellence : Développement Full-Stack, Systèmes d'Information, DevOps & CI/CD, Microservices, Cloud Computing, Cybersécurité (SOC), Big Data & IA.</div>
</div>
`,
    contact: () => `
<div class="text-slate-300 space-y-1">
  <div>Email : <a href="mailto:anasschenguiti@gmail.com" class="text-sky-400 underline">anasschenguiti@gmail.com</a></div>
  <div>GitHub : <a href="https://github.com/anasschenguiti" target="_blank" class="text-indigo-400 underline">github.com/anasschenguiti</a></div>
  <div>LinkedIn : <a href="https://www.linkedin.com/in/anass-chenguiti/" target="_blank" class="text-indigo-400 underline">linkedin.com/in/anass-chenguiti</a></div>
  <div>Localisation : Tanger, Maroc / Remote</div>
</div>
`,
    github: () => {
      window.open('https://github.com/anasschenguiti', '_blank');
      return `<div class="text-emerald-400">Ouverture de https://github.com/anasschenguiti dans un nouvel onglet...</div>`;
    },
    quote: () => `
<div class="italic text-amber-300">
  « Simplicity is prerequisite for reliability. » — Edsger W. Dijkstra
</div>
`,
    clear: () => {
      terminalBody.innerHTML = '';
      return null;
    }
  };

  window.executeTerminalCommand = function (cmdText) {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    // Echo input
    const inputEcho = document.createElement('div');
    inputEcho.className = 'flex items-center gap-2 text-slate-400 text-xs sm:text-sm font-mono mt-2';
    inputEcho.innerHTML = `<span class="text-indigo-400">guest@chenguiti-macbook:~$</span> <span>${escapeHtml(trimmed)}</span>`;
    terminalBody.appendChild(inputEcho);

    // Process output
    const outputDiv = document.createElement('div');
    outputDiv.className = 'text-xs sm:text-sm font-mono py-1';

    if (commands[trimmed]) {
      const result = commands[trimmed]();
      if (result !== null) {
        outputDiv.innerHTML = result;
        terminalBody.appendChild(outputDiv);
      }
    } else {
      outputDiv.innerHTML = `<span class="text-rose-400">Commande non reconnue : "${escapeHtml(trimmed)}". Tapez <b class="text-sky-400">help</b> pour voir les commandes.</span>`;
      terminalBody.appendChild(outputDiv);
    }

    terminalBody.scrollTop = terminalBody.scrollHeight;
  };

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = terminalInput.value;
      if (val.trim()) {
        history.push(val);
        historyIndex = history.length;
        window.executeTerminalCommand(val);
        terminalInput.value = '';
      }
    } else if (e.key === 'ArrowUp') {
      if (historyIndex > 0) {
        historyIndex--;
        terminalInput.value = history[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex < history.length - 1) {
        historyIndex++;
        terminalInput.value = history[historyIndex];
      } else {
        historyIndex = history.length;
        terminalInput.value = '';
      }
    }
  });

  function escapeHtml(text) {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
})();

