/**
 * Certifications Section & Viewer Component Architecture
 * Developer Portfolio — Anass Chenguiti
 * Blueprint Edition — Compact Cards with Real Document Previews
 */

(function () {
  // Global state for certificates
  let currentCertFilter = 'all';
  let currentCertIndex = 0;
  let activeTriggerElement = null;

  // Helper to reliably retrieve certificates
  function getCertificates() {
    if (typeof portfolioData !== 'undefined' && portfolioData && Array.isArray(portfolioData.certificates)) {
      return portfolioData.certificates;
    }
    if (typeof window !== 'undefined' && window.portfolioData && Array.isArray(window.portfolioData.certificates)) {
      return window.portfolioData.certificates;
    }
    return [];
  }

  // --- CertificateCard Component ---
  const CertificateCard = {
    render(cert, index, lang) {
      const title = typeof cert.title === 'object' ? cert.title[lang] : cert.title;
      const date = cert.date ? (typeof cert.date === 'object' ? cert.date[lang] : cert.date) : null;
      const figNum = String(index + 1).padStart(2, '0');
      const viewLabel = lang === 'fr' ? 'Consulter le certificat' : 'View certificate';
      const previewImg = cert.previewImage || `images/certificates/${cert.id}.png`;

      return `
        <article 
          class="blueprint-card certificate-card group focus-visible:outline-2 focus-visible:outline-[var(--accent)] cursor-pointer" 
          tabindex="0"
          role="button"
          aria-haspopup="dialog"
          aria-label="${title} — ${cert.issuer || 'Certification'}"
          data-cert-id="${cert.id}"
          data-cert-index="${index}"
          onclick="window.CertificateViewer.open('${cert.id}', this)"
          onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault(); window.CertificateViewer.open('${cert.id}', this);}"
        >
          <!-- Compact Card Topbar -->
          <div class="px-3 py-1.5 bg-[var(--surface-sunken)] border-b border-[var(--line)] flex items-center justify-between gap-2 min-h-[30px]">
            <span class="font-mono text-[10px] font-bold text-[var(--accent)] tracking-wider uppercase">
              DOC. ${figNum} // SPEC
            </span>
            ${cert.credentialId ? `
              <span class="font-mono text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 bg-[var(--surface)] border border-[var(--line)] text-[var(--text-muted)]">
                ID // ${cert.credentialId.replace(/[^A-Za-z0-9]/g, '')}
              </span>
            ` : ''}
          </div>

          <!-- Real Document Image Preview Box (Compact height) -->
          <div class="relative h-44 sm:h-48 bg-[#070D18] overflow-hidden border-b border-[var(--line)] flex items-center justify-center">
            <img 
              src="${previewImg}" 
              alt="${title}"
              loading="lazy"
              class="w-full h-full object-cover object-top filter brightness-[0.95] contrast-[1.02] group-hover:scale-105 group-hover:brightness-100 transition-all duration-300"
              onerror="this.style.display='none'; document.getElementById('cert-fallback-${cert.id}').classList.remove('hidden');"
            />
            
            <!-- Fallback Badge if image fails -->
            <div id="cert-fallback-${cert.id}" class="hidden absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
              <i data-lucide="award" class="w-8 h-8 text-[var(--accent)] mb-2"></i>
              <div class="font-mono text-[10px] text-[var(--text-muted)] uppercase">DOCUMENT VÉRIFIÉ</div>
            </div>

            <!-- Subtle hover overlay with view button -->
            <div class="absolute inset-0 bg-[#0A1220]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none p-3">
              <span class="font-mono text-[11px] font-bold text-[var(--accent)] uppercase tracking-wider flex items-center gap-1.5 bg-[var(--surface)] border border-[var(--accent)] px-3 py-1.5 shadow-xl">
                <i data-lucide="eye" class="w-3.5 h-3.5 text-[var(--accent)]"></i>
                <span>${viewLabel}</span>
                <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 text-[var(--accent)]"></i>
              </span>
            </div>
          </div>

          <!-- Card Content (Tighter padding & clear typography) -->
          <div class="p-3.5 flex-1 flex flex-col justify-between bg-[var(--surface)]">
            <div>
              <h3 class="font-serif text-sm sm:text-base font-semibold text-[var(--text)] line-clamp-2 leading-snug group-hover:text-[var(--accent)] transition-colors mb-1.5">
                ${title}
              </h3>

              ${cert.issuer ? `
                <div class="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-mono mb-2">
                  <i data-lucide="building-2" class="w-3 h-3 text-[var(--accent)] shrink-0"></i>
                  <span class="truncate font-medium">${cert.issuer}</span>
                </div>
              ` : ''}
            </div>

            <!-- Footer row with date & badge -->
            <div class="pt-2.5 border-t border-[var(--line)] flex items-center justify-between font-mono text-[10px]">
              ${date ? `
                <span class="text-[var(--text-muted)] flex items-center gap-1">
                  <i data-lucide="calendar" class="w-3 h-3 text-[var(--accent)]"></i>
                  <span>${date}</span>
                </span>
              ` : '<span></span>'}
              <span class="text-[var(--accent)] font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                <i data-lucide="file-check-2" class="w-3 h-3"></i>
                <span>VÉRIFIÉ</span>
              </span>
            </div>
          </div>
        </article>
      `;
    }
  };

  // --- CertificatesSection Component ---
  const CertificatesSection = {
    render(filter = 'all') {
      const container = document.getElementById('certificates-grid');
      const certs = getCertificates();
      if (!container || certs.length === 0) return;

      currentCertFilter = filter;
      const lang = localStorage.getItem('portfolio_lang') || 'en';

      const filtered = filter === 'all'
        ? certs
        : certs.filter(c => c.category === filter);

      container.innerHTML = filtered.map((c, idx) => CertificateCard.render(c, idx, lang)).join('');

      if (window.lucide) window.lucide.createIcons();
    }
  };

  // --- CertificateViewer (Modal Lightbox) Component ---
  const CertificateViewer = {
    open(id, triggerElement) {
      const certs = getCertificates();
      const index = certs.findIndex(c => c.id === id);
      if (index === -1) return;

      currentCertIndex = index;
      activeTriggerElement = triggerElement || document.activeElement;

      this.updateView();

      const modal = document.getElementById('certificate-modal');
      if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.classList.add('overflow-hidden');

        // Trap focus to close button
        const closeBtn = document.getElementById('cert-modal-close');
        if (closeBtn) closeBtn.focus();
      }
    },

    updateView() {
      const certs = getCertificates();
      const cert = certs[currentCertIndex];
      if (!cert) return;

      const lang = localStorage.getItem('portfolio_lang') || 'en';
      const title = typeof cert.title === 'object' ? cert.title[lang] : cert.title;
      const date = cert.date ? (typeof cert.date === 'object' ? cert.date[lang] : cert.date) : null;
      const total = certs.length;
      const previewImg = cert.previewImage || `images/certificates/${cert.id}.png`;

      // Update text details
      const titleEl = document.getElementById('cert-modal-title');
      const counterEl = document.getElementById('cert-modal-counter');
      const issuerEl = document.getElementById('cert-modal-issuer');
      const dateEl = document.getElementById('cert-modal-date');
      const verifyLink = document.getElementById('cert-modal-verify');
      const newTabLink = document.getElementById('cert-modal-newtab');

      if (titleEl) titleEl.textContent = title;
      if (counterEl) counterEl.textContent = `[${String(currentCertIndex + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}]`;

      if (issuerEl) {
        if (cert.issuer) {
          issuerEl.textContent = cert.issuer;
          issuerEl.parentElement.classList.remove('hidden');
        } else {
          issuerEl.parentElement.classList.add('hidden');
        }
      }

      if (dateEl) {
        if (date) {
          dateEl.textContent = date;
          dateEl.parentElement.classList.remove('hidden');
        } else {
          dateEl.parentElement.classList.add('hidden');
        }
      }

      if (verifyLink) {
        if (cert.link) {
          verifyLink.href = cert.link;
          verifyLink.classList.remove('hidden');
        } else {
          verifyLink.classList.add('hidden');
        }
      }

      if (newTabLink) newTabLink.href = cert.filePath;

      // Update viewer area: high-res image with zoom + toggle to PDF embed
      const viewerArea = document.getElementById('cert-viewer-area');
      if (viewerArea) {
        viewerArea.innerHTML = `
          <div class="relative w-full h-full flex flex-col items-center justify-center bg-[#070D18] p-2 sm:p-4 overflow-auto">
            <div class="relative max-w-full max-h-full flex items-center justify-center">
              <img 
                id="cert-modal-main-img"
                src="${previewImg}" 
                alt="${title}" 
                class="max-w-full max-h-[72vh] object-contain shadow-2xl border border-[var(--line)] cursor-zoom-in transition-transform duration-200"
                onclick="this.classList.toggle('scale-150'); this.classList.toggle('cursor-zoom-out');"
                title="Cliquez pour zoomer"
              />
            </div>
            
            <div class="mt-3 flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
              <span class="text-[var(--text-muted)] text-[11px]">
                <i data-lucide="zoom-in" class="w-3.5 h-3.5 inline text-[var(--accent)] mr-1"></i>Cliquez sur l'image pour zoomer
              </span>
              <span class="text-[var(--line)]">|</span>
              <a href="${cert.filePath}" target="_blank" rel="noopener noreferrer" class="text-[var(--accent)] hover:underline flex items-center gap-1 font-bold">
                <i data-lucide="file-text" class="w-3.5 h-3.5"></i>
                <span>Ouvrir le fichier PDF original</span>
              </a>
            </div>
          </div>
        `;
      }

      if (window.lucide) window.lucide.createIcons();
    },

    next() {
      const total = getCertificates().length;
      if (total === 0) return;
      currentCertIndex = (currentCertIndex + 1) % total;
      this.updateView();
    },

    prev() {
      const total = getCertificates().length;
      if (total === 0) return;
      currentCertIndex = (currentCertIndex - 1 + total) % total;
      this.updateView();
    },

    close() {
      const modal = document.getElementById('certificate-modal');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.classList.remove('overflow-hidden');

        // Clear viewer area to release memory
        const viewerArea = document.getElementById('cert-viewer-area');
        if (viewerArea) viewerArea.innerHTML = '';

        // Return focus to triggered card
        if (activeTriggerElement && typeof activeTriggerElement.focus === 'function') {
          activeTriggerElement.focus();
        }
      }
    }
  };

  // Keyboard navigation & accessibility handlers
  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('certificate-modal');
    if (!modal || modal.classList.contains('hidden')) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      CertificateViewer.close();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      CertificateViewer.next();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      CertificateViewer.prev();
    } else if (e.key === 'Tab') {
      const focusableEls = modal.querySelectorAll('button, a, [tabindex]:not([tabindex="-1"])');
      if (focusableEls.length === 0) return;
      const firstEl = focusableEls[0];
      const lastEl = focusableEls[focusableEls.length - 1];

      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    }
  });

  // Modal backdrop click
  document.addEventListener('click', (e) => {
    const modal = document.getElementById('certificate-modal');
    if (modal && e.target === modal) {
      CertificateViewer.close();
    }
  });

  // Filter button handlers
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-cert-filter]');
    if (!btn) return;
    const filter = btn.getAttribute('data-cert-filter');
    document.querySelectorAll('[data-cert-filter]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    CertificatesSection.render(filter);
  });

  // Expose to window for integration with main.js and global triggers
  window.CertificateCard = CertificateCard;
  window.CertificatesSection = CertificatesSection;
  window.CertificateViewer = CertificateViewer;
  window.renderCertificates = CertificatesSection.render;

  // Auto-render on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      CertificatesSection.render();
    });
  } else {
    setTimeout(() => CertificatesSection.render(), 10);
  }
})();
