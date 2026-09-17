/**
 * DEONTECH MAGAZINE - BLOG EDITORIAL DE ÉTICA, TECNOLOGÍA Y SOCIEDAD
 * Lógica de Interfaz, Visualización Dinámica, Lector de Artículos y Feed
 * Universidad Científica del Sur (UCSUR) - HUM-010 (2026-2)
 */

let allTrabajos = [];
let currentFilter = 'all';
let currentCategory = 'all';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  initBlog();
});

function initBlog() {
  allTrabajos = loadTrabajos();

  renderSidebarWidgets();
  renderKeywordsDropdown();
  renderAuthorsGrid();
  renderWorks();
  setupEventListeners();
}

/**
 * Renderiza los componentes de la barra lateral (Sidebar)
 */
function renderSidebarWidgets() {
  // 1. Avatares del Colectivo
  const avatarStack = document.getElementById('sidebar-avatars');
  if (avatarStack) {
    avatarStack.innerHTML = TEAM_MEMBERS.map(m => `
      <div class="author-avatar-circle" style="border-color: ${m.color};" title="${m.name} (${m.career})">
        ${m.name.split(' ')[0][0]}${m.name.split(' ')[1] ? m.name.split(' ')[1][0] : ''}
      </div>
    `).join('');
  }

  // 2. Píldoras Filosóficas
  const pillarsBox = document.getElementById('sidebar-pillars');
  if (pillarsBox && typeof PHILOSOPHICAL_PILLARS !== 'undefined') {
    pillarsBox.innerHTML = PHILOSOPHICAL_PILLARS.map(p => `
      <div class="pillar-mini-card" onclick="openPillarModal('${p.author}')" title="Ver marco conceptual de ${p.author}">
        <div class="pillar-mini-head">
          <span class="pillar-author">${p.author}</span>
          <span class="pillar-tag">${p.concept}</span>
        </div>
        <p class="pillar-quote">${p.quote}</p>
      </div>
    `).join('');
  }
}

/**
 * Renderiza la Nube de Palabras Clave en el Desplegable del Feed
 */
function renderKeywordsDropdown() {
  const tagsBox = document.getElementById('feed-tags-cloud');
  if (!tagsBox || typeof BLOG_TAGS === 'undefined') return;

  tagsBox.innerHTML = BLOG_TAGS.map(tag => {
    const cleanTag = tag.replace('#', '');
    const isActive = searchQuery.toLowerCase() === cleanTag.toLowerCase();
    return `
      <button type="button" class="tag-cloud-item ${isActive ? 'active' : ''}" onclick="selectKeyword('${cleanTag}')">
        #${cleanTag}
      </button>
    `;
  }).join('');
}

/**
 * Alterna la visibilidad del desplegable de palabras clave
 */
function toggleKeywordsDropdown() {
  const btn = document.getElementById('keywords-dropdown-btn');
  const panel = document.getElementById('keywords-dropdown-panel');
  if (!btn || !panel) return;

  const isOpen = panel.classList.contains('open');
  if (isOpen) {
    panel.classList.remove('open');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    const textEl = btn.querySelector('.keywords-toggle-text');
    if (textEl) textEl.textContent = 'Ver temas';
  } else {
    panel.classList.add('open');
    btn.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    const textEl = btn.querySelector('.keywords-toggle-text');
    if (textEl) textEl.textContent = 'Ocultar temas';
  }
}

/**
 * Selecciona una palabra clave para filtrar ensayos
 */
function selectKeyword(tag) {
  if (searchQuery.toLowerCase() === tag.toLowerCase()) {
    clearKeywordFilter();
    return;
  }

  searchQuery = tag;
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = tag;

  updateKeywordBadge(tag);
  renderKeywordsDropdown();
  renderWorks();
  showToast(`Filtrando ensayos con la etiqueta #${tag}`, 'info');

  const feedElem = document.getElementById('blog-posts-container');
  if (feedElem) {
    feedElem.scrollTop = 0;
  }
}

/**
 * Limpia el filtro de palabra clave
 */
function clearKeywordFilter() {
  searchQuery = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';

  updateKeywordBadge(null);
  renderKeywordsDropdown();
  renderWorks();
  showToast('Filtro de palabra clave eliminado', 'info');
}

/**
 * Actualiza la insignia (badge) en el botón desplegable
 */
function updateKeywordBadge(tag) {
  const badge = document.getElementById('active-keyword-badge');
  const clearBtn = document.getElementById('clear-keywords-btn');
  if (badge) {
    if (tag) {
      badge.textContent = `#${tag}`;
      badge.style.display = 'inline-block';
    } else {
      badge.textContent = '';
      badge.style.display = 'none';
    }
  }
  if (clearBtn) {
    clearBtn.style.display = tag ? 'inline-flex' : 'none';
  }
}

/**
 * Renderiza la Cuadrícula del Equipo Editorial y Investigadores
 */
function renderAuthorsGrid() {
  const grid = document.getElementById('authors-grid');
  if (!grid) return;

  const careerIcons = {
    "Ingeniería de Software": "💻",
    "Ingeniería Empresarial y de Sistemas": "🏢",
    "Agronomía y Negocios": "🌱",
    "Ingeniería Económica y de Negocios": "📊"
  };

  grid.innerHTML = TEAM_MEMBERS.map(member => `
    <article class="author-profile-card">
      <div class="author-profile-avatar" style="border-color: ${member.color};">
        ${careerIcons[member.career] || '✍️'}
      </div>
      <h3 class="author-profile-name">${member.name}</h3>
      <div class="author-profile-career">${member.career}</div>
      <p class="author-profile-bio">${member.bio}</p>
      <div class="author-profile-column">
        Columna: ${member.role.split(/\s*(?:&| y | Y )\s*/)[0].trim()}
      </div>
    </article>
  `).join('');
}

/**
 * Renderiza el Feed Principal de Artículos de Blog
 */
function renderWorks() {
  const container = document.getElementById('blog-posts-container');
  if (!container) return;

  // Filtrado múltiple
  const filtered = allTrabajos.filter(work => {
    // Filtro por estado (todos, publicados, en redacción, próximos)
    const matchesFilter = (currentFilter === 'all') || (work.status === currentFilter);

    // Filtro por categoría
    const matchesCategory = (currentCategory === 'all') || 
      (work.category && work.category.toLowerCase().includes(currentCategory.toLowerCase())) ||
      (work.focusArea && work.focusArea.toLowerCase().includes(currentCategory.toLowerCase()));

    // Filtro por texto de búsqueda
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery = !query ||
      work.title.toLowerCase().includes(query) ||
      work.summary.toLowerCase().includes(query) ||
      (work.author && work.author.toLowerCase().includes(query)) ||
      (work.tags && work.tags.some(t => t.toLowerCase().includes(query)));

    return matchesFilter && matchesCategory && matchesQuery;
  });

  // Actualizar contadores
  updateCounters();

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-xl); border: 1px dashed var(--border-subtle);">
        <p style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 14px;">No se encontraron artículos con los criterios seleccionados.</p>
        <button class="btn btn-secondary btn-sm" onclick="resetAllFilters()">Restablecer Filtros</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(work => {
    let statusBadge = '';
    if (work.status === 'completed') {
      statusBadge = `<span class="post-status-badge status-completed">Publicado</span>`;
    } else if (work.status === 'in_progress') {
      statusBadge = `<span class="post-status-badge status-progress">En Redacción</span>`;
    } else {
      statusBadge = `<span class="post-status-badge status-upcoming">Próximo</span>`;
    }

    const tagsHtml = (work.tags || []).slice(0, 3).map(tag => `<span class="post-tag">#${tag}</span>`).join('');

    const mediaHtml = work.thumbnail ? `
      <img src="${work.thumbnail}" alt="${work.title}" loading="lazy">
    ` : `
      <div class="post-card-placeholder">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
        <span style="font-size: 0.76rem; font-family: var(--font-mono); color: var(--text-dim);">${work.code}</span>
      </div>
    `;

    const pdfBtn = work.pdfUrl ? `
      <a href="${work.pdfUrl}" target="_blank" class="btn btn-secondary btn-sm" title="Descargar documento PDF original">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
        <span>PDF</span>
      </a>
    ` : '';

    return `
      <article class="blog-post-card" id="post-${work.id}">
        <div class="post-card-thumb">
          ${statusBadge}
          ${mediaHtml}
        </div>

        <div class="post-card-body">
          <div class="post-card-header">
            <div class="post-card-meta">
              <span>📅 ${work.publishDate || 'Septiembre 2026'}</span>
              <span>•</span>
              <span style="color: var(--accent-orange); font-weight: 600;">${work.category || 'Filosofía Práctica'}</span>
            </div>

            <h3 class="post-card-title">
              <a href="javascript:void(0)" onclick="openArticleReader('${work.id}')">
                ${work.title}
              </a>
            </h3>

            <p class="post-card-excerpt">
              ${work.leadParagraph || work.summary}
            </p>

            <div class="post-card-tags">
              ${tagsHtml}
            </div>
          </div>

          <div class="post-card-footer">
            <div class="post-author-info">
              <div class="post-author-avatar">DT</div>
              <span>${work.author || 'Equipo Editorial DeonTech'}</span>
            </div>

            <div style="display: flex; align-items: center; gap: 10px;">
              <button class="post-read-link" onclick="openArticleReader('${work.id}')">
                <span>Continuar leyendo</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
              ${pdfBtn}
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/**
 * Actualiza contadores numéricos de filtros
 */
function updateCounters() {
  const allCount = allTrabajos.length;
  const completedCount = allTrabajos.filter(w => w.status === 'completed').length;
  const progressCount = allTrabajos.filter(w => w.status === 'in_progress').length;
  const upcomingCount = allTrabajos.filter(w => w.status === 'upcoming').length;

  const countAll = document.getElementById('count-all');
  const countComp = document.getElementById('count-completed');
  const countProg = document.getElementById('count-progress');
  const countUp = document.getElementById('count-upcoming');

  if (countAll) countAll.textContent = allCount;
  if (countComp) countComp.textContent = completedCount;
  if (countProg) countProg.textContent = progressCount;
  if (countUp) countUp.textContent = upcomingCount;
}

/**
 * Abre el Lector Inmersivo de Artículos (Full-Screen / Reader Mode)
 */
function openArticleReader(workId) {
  const work = allTrabajos.find(w => w.id === workId);
  if (!work) return;

  const modal = document.getElementById('article-reader-modal');
  if (!modal) return;

  // Llenar metadatos y encabezado
  document.getElementById('reader-title').textContent = work.title;
  document.getElementById('reader-category').textContent = work.category || 'Filosofía Práctica';
  document.getElementById('reader-publish-date').textContent = work.publishDate || 'Septiembre 2026';
  document.getElementById('reader-lead').textContent = work.leadParagraph || work.summary;
  document.getElementById('reader-author-name').textContent = work.author || 'Equipo Editorial DeonTech';
  document.getElementById('reader-author-role').textContent = (work.authorRole ? `${work.authorRole} · ` : '') + 'Universidad Científica del Sur (HUM-010)';

  // Imagen destacada
  const mediaWrap = document.getElementById('reader-media-container');
  const heroImg = document.getElementById('reader-hero-img');
  const captionEl = document.getElementById('reader-img-caption');
  if (work.thumbnail) {
    mediaWrap.style.display = 'block';
    heroImg.src = work.thumbnail;
    heroImg.alt = work.title;
    captionEl.textContent = (work.details && work.details.reference) ? work.details.reference : 'Evidencia gráfica y marco conceptual del ensayo.';
  } else {
    mediaWrap.style.display = 'none';
  }

  // Tab 1: Prosa del Artículo
  const mainContent = document.getElementById('reader-main-content');
  mainContent.innerHTML = `
    <p style="font-size: 1.12rem; line-height: 1.85; color: var(--text-main);">
      ${work.summary}
    </p>
    ${work.details && work.details.teamPurpose ? `
      <div style="background: #f8fafc; padding: 22px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); border-left: 4px solid var(--accent-orange); margin: 18px 0;">
        <h4 style="font-family: var(--font-heading); color: var(--accent-orange); font-size: 1rem; margin-bottom: 8px;">Compromiso y Reflexión del Colectivo:</h4>
        <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.7;">${work.details.teamPurpose}</p>
        ${work.details.careersPurpose ? `<p style="margin-top: 10px; font-style: italic; color: var(--accent-emerald);">«${work.details.careersPurpose}»</p>` : ''}
      </div>
    ` : ''}
    ${work.details && work.details.commitment ? `
      <div style="background: #f8fafc; padding: 22px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); border-left: 4px solid var(--accent-emerald); margin: 18px 0;">
        <h4 style="font-family: var(--font-heading); color: var(--accent-emerald); font-size: 1rem; margin-bottom: 8px;">Declaración de Responsabilidad Profesional:</h4>
        <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.7;">${work.details.commitment}</p>
      </div>
    ` : ''}
  `;

  // Cita destacada (Pull Quote)
  const pullQuote = document.getElementById('reader-pull-quote');
  const pullCite = document.getElementById('reader-pull-quote-cite');
  if (work.id === 'ac1') {
    pullQuote.textContent = "«La tecnología redefine su telos para adaptarse a la vida y no imponerse a esta. Asumimos el deber ético de concebir a la persona como fin en sí misma.»";
    pullCite.textContent = "— Colectivo DeonTech (Inspirado en Robot Salvaje, 2024)";
  } else if (work.id === 'ac2') {
    pullQuote.textContent = "«Ningún ser humano debe ser instrumentalizado jamás como un engranaje o insumo descartable en nombre de la eficiencia o la digitalización.»";
    pullCite.textContent = "— Principio de Inviolabilidad Humana e Imperativo Kantiano";
  } else if (work.id === 'ac3') {
    pullQuote.textContent = "«Ganar dinero y rentabilizar procesos jamás debe estar por encima de la salud, la vida de los seres sintientes y la justicia social en el Perú.»";
    pullCite.textContent = "— Axiología de Scheler aplicada a la praxis DeonTech";
  } else {
    pullQuote.textContent = "«La técnica sin brújula deontológica es ciega; la ética sin acción transformadora queda estéril.»";
    pullCite.textContent = "— Manifiesto DeonTech";
  }

  // Tab 2: Marcos Teóricos
  const theoriesList = document.getElementById('reader-theories-list');
  if (work.theories && work.theories.length > 0) {
    theoriesList.innerHTML = work.theories.map(t => `
      <div class="theory-card">
        <h4 class="theory-concept">${t.concept}</h4>
        <div class="theory-source">${t.source}</div>
        <p class="theory-app">${t.application}</p>
      </div>
    `).join('');
  } else {
    theoriesList.innerHTML = `<p style="color: var(--text-muted); font-size: 0.92rem;">Este ensayo profundiza en los marcos éticos generales del colectivo.</p>`;
  }

  // Tab 3: Evidencias y Casos Reales
  const evidenceBox = document.getElementById('reader-evidence-content');
  if (work.id === 'ac1') {
    evidenceBox.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 18px;">
        <h4 style="font-family: var(--font-heading); font-size: 1.25rem; color: var(--text-main);">Metáfora Artística: El telos del robot ROZZUM 7134</h4>
        <div style="border-radius: var(--radius-lg); overflow: hidden; max-height: 340px; border: 1px solid var(--border-subtle);">
          <img src="assets/img/ac1-metafora-robot-salvaje.jpg" alt="Robot Salvaje">
        </div>
        <div style="background: #f8fafc; padding: 20px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); border-left: 4px solid var(--accent-orange);">
          <h5 style="color: var(--accent-orange); font-family: var(--font-heading); margin-bottom: 6px;">Analogía Deontológica:</h5>
          <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.65;">
            El robot ROZZUM 7134 no aniquila el ecosistema insular para cumplir con una directiva de fábrica; aprende de la fauna nativa, adopta la vulnerabilidad y orienta su fuerza mecánica al resguardo de la vida. De igual modo, nuestras carreras no deben imponer tecnologías extractivas ni monopolios comerciales, sino aprender de las realidades comunitarias del Perú para construir bienestar duradero.
          </p>
        </div>
      </div>
    `;
  } else if (work.id === 'ac2') {
    const popRows = (work.vulnerablePopulations || []).map(p => `
      <tr>
        <td style="font-weight: 700; color: var(--text-main); font-family: var(--font-heading);">${p.group}</td>
        <td style="color: var(--text-muted);">${p.context}</td>
        <td style="color: var(--accent-orange); font-weight: 600;">${p.principle}</td>
      </tr>
    `).join('');

    evidenceBox.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <h4 style="font-family: var(--font-heading); font-size: 1.25rem; color: var(--text-main);">Mapa de Rostros Vulnerables ante la Técnica en el Perú</h4>
        <div style="border-radius: var(--radius-lg); overflow: hidden; max-height: 320px; border: 1px solid var(--border-subtle);">
          <img src="assets/img/ac2-rostros-vulnerables.jpg" alt="Rostros Vulnerables">
        </div>
        <div class="table-responsive">
          <table class="custom-table">
            <thead>
              <tr>
                <th>Población Vulnerable</th>
                <th>Diagnóstico en la Realidad Peruana</th>
                <th>Principio de Bioética Vulnerado</th>
              </tr>
            </thead>
            <tbody>
              ${popRows}
            </tbody>
          </table>
        </div>
      </div>
    `;
  } else if (work.id === 'ac3') {
    const schelerRows = (work.schelerMatrix || []).map(row => `
      <tr>
        <td style="font-weight: 700; color: var(--text-main); font-family: var(--font-heading);">${row.category}</td>
        <td style="color: var(--text-muted);">${row.description}</td>
        <td>
          <span style="padding: 3px 8px; border-radius: 4px; font-family: var(--font-mono); font-size: 0.76rem; font-weight: 700; background: ${row.presence === 'Sí' ? '#ecfdf5' : row.presence === 'Parcial' ? '#fffbeb' : '#fef2f2'}; color: ${row.presence === 'Sí' ? '#059669' : row.presence === 'Parcial' ? '#d97706' : '#dc2626'}; border: 1px solid ${row.presence === 'Sí' ? '#a7f3d0' : row.presence === 'Parcial' ? '#fde68a' : '#fecaca'};">
            ${row.presence}
          </span>
        </td>
        <td style="color: var(--text-muted);">${row.example}</td>
      </tr>
    `).join('');

    evidenceBox.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <h4 style="font-family: var(--font-heading); font-size: 1.25rem; color: var(--text-main);">Pirámide Jerárquica de Valores DeonTech</h4>
        <div style="border-radius: var(--radius-lg); overflow: hidden; max-height: 340px; border: 1px solid var(--border-subtle);">
          <img src="assets/img/ac3-jerarquia-valores.jpg" alt="Pirámide de Valores">
        </div>
        <div style="background: #f8fafc; padding: 18px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); border-left: 4px solid var(--accent-amber);">
          <h5 style="color: var(--accent-amber); font-family: var(--font-heading); margin-bottom: 6px;">${work.details.tensionTitle}</h5>
          <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6;">${work.details.tensionText}</p>
        </div>
        <h4 style="font-family: var(--font-heading); font-size: 1.2rem; color: var(--text-main);">Tabla Axiológica bajo la Escala de Max Scheler</h4>
        <div class="table-responsive">
          <table class="custom-table">
            <thead>
              <tr>
                <th>Categoría Axiológica</th>
                <th>Definición de Scheler</th>
                <th>Presencia</th>
                <th>Caso Concreto en Nuestras Disciplinas</th>
              </tr>
            </thead>
            <tbody>
              ${schelerRows}
            </tbody>
          </table>
        </div>
      </div>
    `;
  } else {
    evidenceBox.innerHTML = `
      <div style="padding: 24px; background: #f8fafc; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
        <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.7;">
          Este artículo se encuentra en proceso editorial o corresponde a un hito reflexivo. Puedes consultar el archivo PDF adjunto para revisar las evidencias y esquemas de trabajo originales.
        </p>
      </div>
    `;
  }

  // Botón de PDF
  const pdfBtn = document.getElementById('reader-pdf-link');
  if (work.pdfUrl) {
    pdfBtn.style.display = 'inline-flex';
    pdfBtn.href = work.pdfUrl;
  } else {
    pdfBtn.style.display = 'none';
  }

  // Resetear pestañas del lector
  resetReaderTabs();

  // Abrir Modal
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeArticleReader() {
  const modal = document.getElementById('article-reader-modal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function resetReaderTabs() {
  const tabBtns = document.querySelectorAll('.reader-tab-btn');
  const tabPanes = document.querySelectorAll('.reader-tab-pane');
  tabBtns.forEach(b => b.classList.remove('active'));
  tabPanes.forEach(p => p.classList.remove('active'));

  const firstBtn = document.querySelector('.reader-tab-btn[data-tab="tab-prose"]');
  const firstPane = document.getElementById('tab-prose');
  if (firstBtn) firstBtn.classList.add('active');
  if (firstPane) firstPane.classList.add('active');
}

function switchReaderTab(button, tabId) {
  const modal = document.getElementById('article-reader-modal');
  if (!modal) return;

  const tabBtns = modal.querySelectorAll('.reader-tab-btn');
  const tabPanes = modal.querySelectorAll('.reader-tab-pane');

  tabBtns.forEach(b => b.classList.remove('active'));
  tabPanes.forEach(p => p.classList.remove('active'));

  button.classList.add('active');
  const target = document.getElementById(tabId);
  if (target) target.classList.add('active');
}

/**
 * Event Listeners Globales
 */
function setupEventListeners() {
  // Filtros de estado (Pills)
  const filterBtns = document.querySelectorAll('.filter-pill-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderWorks();
    });
  });

  // Categorías de la cabecera
  const catLinks = document.querySelectorAll('.cat-link');
  catLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (link.dataset.category) {
        catLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        currentCategory = link.dataset.category;
        renderWorks();

        // Scroll suave al feed si estamos lejos
        const feedElem = document.getElementById('blog-posts-container');
        if (feedElem) {
          feedElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Búsqueda en tiempo real
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      updateKeywordBadge(searchQuery.trim() ? searchQuery.trim() : null);
      renderKeywordsDropdown();
      renderWorks();
    });
  }

  // Tecla Escape para cerrar modales
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeArticleReader();
    }
  });

  // Clic en fondo para cerrar
  const readerModal = document.getElementById('article-reader-modal');
  if (readerModal) {
    readerModal.addEventListener('click', (e) => {
      if (e.target === readerModal) closeArticleReader();
    });
  }
}

function filterByCategory(category) {
  currentCategory = category;
  const catLinks = document.querySelectorAll('.cat-link');
  catLinks.forEach(l => {
    if (l.dataset.category === category) l.classList.add('active');
    else l.classList.remove('active');
  });
  renderWorks();
  const feedElem = document.getElementById('blog-posts-container');
  if (feedElem) {
    feedElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function filterByTag(tag) {
  selectKeyword(tag);
}

function resetAllFilters() {
  currentFilter = 'all';
  currentCategory = 'all';
  searchQuery = '';

  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';

  updateKeywordBadge(null);
  renderKeywordsDropdown();

  document.querySelectorAll('.filter-pill-btn').forEach(b => b.classList.remove('active'));
  const firstPill = document.querySelector('.filter-pill-btn[data-filter="all"]');
  if (firstPill) firstPill.classList.add('active');

  document.querySelectorAll('.cat-link').forEach(l => l.classList.remove('active'));
  const firstCat = document.querySelector('.cat-link[data-category="all"]');
  if (firstCat) firstCat.classList.add('active');

  renderWorks();
}

function openPillarModal(author) {
  const pillar = PHILOSOPHICAL_PILLARS.find(p => p.author === author);
  if (pillar) {
    showToast(`${pillar.author} (${pillar.concept}): ${pillar.thesis}`, 'info');
  }
}

/**
 * Sistema de Notificaciones Toast
 */
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type === 'success' ? 'toast-success' : ''}`;
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
