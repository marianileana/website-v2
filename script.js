// ─── i18n ───────────────────────────────────────────
  const i18n = {
    en: {
      'status': 'online',
      'scroll': 'scroll',
      'cit': 'cit.',

      'nav.currently': 'currently',
      'nav.education': 'education',
      'nav.research': 'research',
      'nav.publications': 'publications',
      'nav.collaborators': 'collaborators',
      'nav.contact': 'contact',

      'hero.role': 'phd_researcher · politehnica_bucharest · pitesti_university_center',
      'hero.focus': 'i work on distributed systems that are too complex to test by hand.<br/>the tools i build learn how a healthy system behaves, then flag the<br/>failures that written tests never think to look for.'t catch.',
      'hero.meta.pubs': 'PUBLICATIONS',
      'hero.meta.cites': 'CITATIONS',
      'hero.meta.based': 'BASED_IN',
      'hero.meta.based.val': 'pitești, ro',
      'hero.meta.fields': 'FIELDS',
      'hero.meta.defense': 'DEFENSE',

      'cur.meta': '3 items',
      'cur.thesis': 'automated testing methodologies for distributed web systems · ml anomaly detection',
      'cur.book': 'monograph: arhitecturi web distribuite · editura pim, iași · isbn 978-630-385-023-8',
      'cur.paper': 'bibliometric analysis of faculty networks · informatica economică',
      'badge.active': 'ACTIVE',
      'badge.published': 'PUBLISHED',
      'badge.submit': 'SUBMIT',

      'edu.meta': '4 milestones',
      'edu.1.t': 'Computer Science',
      'edu.1.w': 'Faculty of Mathematics and Computer Science · University of Bucharest',
      'edu.2.t': 'Economic Informatics <span class="edu-tag">research</span>',
      'edu.2.w': 'Faculty of Cybernetics, Statistics and Economic Informatics · ASE Bucharest',
      'edu.3.t': 'Databases &amp; Web Technologies <span class="edu-tag">professional</span>',
      'edu.3.w': 'Faculty of Mathematics and Computer Science · University of Bucharest',
      'edu.4.t': 'Computer Science <span class="edu-tag tag-active">in progress · 2026</span>',
      'edu.4.w': 'POLITEHNICA Bucharest · Pitesti University Center · Interdisciplinary Doctoral School',

      'res.meta': '4 areas',
      'res.k1': 'microservices · container orchestration · coordination patterns',
      'res.k2': 'automated testing · system monitoring · pattern recognition',
      'res.k3': 'real-time data · hl7 fhir · healthcare systems',
      'res.k4': 'bibliometric mapping · co-authorship · citation networks',

      'pub.meta': '42 papers · h10 · 227 cit.',
      'idx.note': 'B / C / D: thesis venue classification · quartiles per latest JCR / Scopus release',
      'pub.f.all': '--all',
      'pub.f.j': '--journal',
      'pub.f.c': '--conference',
      'pub.f.ch': '--chapter',
      'pub.f.high': '--high-impact',
      'pub.s.year': '--by-year',
      'pub.s.cites': '--by-cites',

      'coll.meta': '14 co-authors · 42 papers',
      'coll.papers': 'papers',
      'coll.r1.aff': 'St. Cyril & St. Methodius University · Veliko Tarnovo · Bulgaria',
      'coll.r2.aff': 'St. Cyril & St. Methodius University · Veliko Tarnovo · Bulgaria',
      'coll.r3.aff': 'POLITEHNICA Bucharest',
      'coll.r4.aff': 'POLITEHNICA Bucharest · Faculty of Electronics, Telecommunications & IT',
      'coll.r5.aff': 'POLITEHNICA Bucharest · Pitesti University Center',
      'coll.r6.aff': 'POLITEHNICA Bucharest · Pitesti University Center',
      'coll.r7.aff': '„Angel Kanchev" University of Ruse · Bulgaria',
      'coll.r8.aff': '„Alexandru Ioan Cuza" University of Iași · Faculty of Law',
      'coll.others': 'single co-publications',
      'coll.note': 'recurring collaboration with the Veliko Tarnovo group (Petrov & Milev) spans 19 of 42 papers.',

      'cv': 'cv.pdf',
      'con.meta': '9 channels',
      'ch.email': 'email',
      'ch.cv': 'curriculum vitae',
      'con.msg': 'i read everything that lands at <a href="mailto:contact@marianileana.ro">contact@marianileana.ro</a>. <span class="it">write me.</span>',
      'foot.loc': 'pitești · ro'
    },
    ro: {
      'status': 'online',
      'scroll': 'derulează',
      'cit': 'cit.',

      'nav.currently': 'în_lucru',
      'nav.education': 'studii',
      'nav.research': 'cercetare',
      'nav.publications': 'publicații',
      'nav.collaborators': 'colaboratori',
      'nav.contact': 'contact',

      'hero.role': 'doctorand · politehnica_bucurești · centrul_universitar_pitești',
      'hero.focus': 'lucrez cu sisteme distribuite prea complexe ca să fie testate manual.<br/>instrumentele pe care le construiesc învață cum se comportă un sistem<br/>sănătos și semnalează defecțiunile la care testele scrise nu se gândesc.',
      'hero.meta.pubs': 'PUBLICAȚII',
      'hero.meta.cites': 'CITĂRI',
      'hero.meta.based': 'LOCALIZAT_ÎN',
      'hero.meta.based.val': 'pitești, ro',
      'hero.meta.fields': 'DOMENII',
      'hero.meta.defense': 'SUSȚINERE',

      'cur.meta': '3 elemente',
      'cur.thesis': 'metodologii de testare automată pentru sisteme web distribuite · detecție de anomalii cu ml',
      'cur.book': 'monografie: arhitecturi web distribuite · editura pim, iași · isbn 978-630-385-023-8',
      'cur.paper': 'analiză bibliometrică a rețelelor de facultate · informatica economică',
      'badge.active': 'ACTIV',
      'badge.published': 'PUBLICAT',
      'badge.submit': 'TRIMIS',

      'edu.meta': '4 etape',
      'edu.1.t': 'Informatică',
      'edu.1.w': 'Facultatea de Matematică și Informatică · Universitatea din București',
      'edu.2.t': 'Informatică Economică <span class="edu-tag">cercetare</span>',
      'edu.2.w': 'Facultatea de Cibernetică, Statistică și Informatică Economică · ASE București',
      'edu.3.t': 'Baze de Date și Tehnologii Web <span class="edu-tag">profesional</span>',
      'edu.3.w': 'Facultatea de Matematică și Informatică · Universitatea din București',
      'edu.4.t': 'Informatică <span class="edu-tag tag-active">în lucru · 2026</span>',
      'edu.4.w': 'POLITEHNICA București · Centrul Universitar Pitești · Școala Doctorală Interdisciplinară',

      'res.meta': '4 direcții',
      'res.k1': 'microservicii · orchestrare containere · patternuri de coordonare',
      'res.k2': 'testare automată · monitorizare sisteme · recunoaștere de tipare',
      'res.k3': 'date în timp real · hl7 fhir · sisteme medicale',
      'res.k4': 'mapare bibliometrică · co-autorat · rețele de citări',

      'pub.meta': '42 lucrări · h10 · 227 cit.',
      'idx.note': 'B / C / D: clasificarea venue-urilor din teză · cuartile conform ultimei ediții JCR / Scopus',
      'pub.f.all': '--toate',
      'pub.f.j': '--jurnal',
      'pub.f.c': '--conferință',
      'pub.f.ch': '--capitol',
      'pub.f.high': '--high-impact',
      'pub.s.year': '--după-an',
      'pub.s.cites': '--după-citări',

      'coll.meta': '14 coautori · 42 lucrări',
      'coll.papers': 'lucrări',
      'coll.r1.aff': 'Universitatea „Sf. Chiril și Metodiu" · Veliko Tarnovo · Bulgaria',
      'coll.r2.aff': 'Universitatea „Sf. Chiril și Metodiu" · Veliko Tarnovo · Bulgaria',
      'coll.r3.aff': 'POLITEHNICA București',
      'coll.r4.aff': 'POLITEHNICA București · Facultatea de Electronică, Telecomunicații și Tehnologia Informației',
      'coll.r5.aff': 'POLITEHNICA București · Centrul Universitar Pitești',
      'coll.r6.aff': 'POLITEHNICA București · Centrul Universitar Pitești',
      'coll.r7.aff': 'Universitatea „Angel Kanchev" din Ruse · Bulgaria',
      'coll.r8.aff': 'Universitatea „Alexandru Ioan Cuza" din Iași · Facultatea de Drept',
      'coll.others': 'co-publicații izolate',
      'coll.note': 'colaborarea recurentă cu grupul de la Veliko Tarnovo (Petrov & Milev) cuprinde 19 din 42 de lucrări.',

      'cv': 'cv.pdf',
      'con.meta': '9 canale',
      'ch.email': 'email',
      'ch.cv': 'curriculum vitae',
      'con.msg': 'citesc tot ce ajunge la <a href="mailto:contact@marianileana.ro">contact@marianileana.ro</a>. <span class="it">scrie-mi.</span>',
      'foot.loc': 'pitești · ro'
    }
  };

  const langBtn = document.getElementById('langToggle');
  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const txt = i18n[lang][key];
      if (txt === undefined) return;
      if (el.dataset.i18nHtml !== undefined || /<[a-z]/i.test(txt)) el.innerHTML = txt;
      else el.textContent = txt;
    });
    // toggle EN/RO indicator in nav button
    const en = langBtn.querySelector('[data-lang-mark="en"]');
    const ro = langBtn.querySelector('[data-lang-mark="ro"]');
    en.classList.toggle('lang-on', lang === 'en');
    en.classList.toggle('lang-off', lang !== 'en');
    ro.classList.toggle('lang-on', lang === 'ro');
    ro.classList.toggle('lang-off', lang !== 'ro');
    try { localStorage.setItem('lang', lang); } catch(e) {}
  }
  let savedLang = 'en';
  try { savedLang = localStorage.getItem('lang') || 'en'; } catch(e) {}
  applyLang(savedLang);

  langBtn.addEventListener('click', () => {
    const next = document.documentElement.lang === 'en' ? 'ro' : 'en';
    applyLang(next);
  });

  // ─── theme toggle ───────────────────────────────────
  const root = document.documentElement;
  const toggleBtn = document.getElementById('themeToggle');
  const toggleLabel = toggleBtn.querySelector('.label');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    toggleLabel.textContent = theme;
    try { localStorage.setItem('theme', theme); } catch(e) {}
  }

  // restore preference (default: dark)
  let saved = 'dark';
  try { saved = localStorage.getItem('theme') || 'dark'; } catch(e) {}
  applyTheme(saved);

  toggleBtn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  });

  // keyboard shortcut: 't' to toggle theme, 'l' for language
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 't' || e.key === 'T') {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    }
    if (e.key === 'l' || e.key === 'L') {
      const next = document.documentElement.lang === 'en' ? 'ro' : 'en';
      applyLang(next);
    }
  });

  // ─── pub filter & sort ──────────────────────────────
  const filterBtns = document.querySelectorAll('.pubs-filter button[data-filter]');
  const sortBtns = document.querySelectorAll('.pubs-filter button[data-sort]');
  const pubsList = document.querySelector('.pubs-list');
  const pubs = Array.from(document.querySelectorAll('.pub'));
  let currentFilter = 'all';
  let currentSort = 'year';

  function applyFilterAndSort() {
    // filter
    pubs.forEach(p => {
      let show = false;
      if (currentFilter === 'all') show = true;
      else if (currentFilter === 'high') show = parseInt(p.dataset.cites || '0', 10) >= 10;
      else show = p.dataset.type === currentFilter;
      p.style.display = show ? 'grid' : 'none';
    });

    // sort
    const visible = pubs.filter(p => p.style.display !== 'none');
    visible.sort((a, b) => {
      if (currentSort === 'cites') {
        return parseInt(b.dataset.cites || '0', 10) - parseInt(a.dataset.cites || '0', 10);
      } else {
        return parseInt(b.dataset.year || '0', 10) - parseInt(a.dataset.year || '0', 10);
      }
    });
    visible.forEach(p => pubsList.appendChild(p));
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      applyFilterAndSort();
    });
  });

  sortBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sortBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSort = btn.dataset.sort;
      applyFilterAndSort();
    });
  });

  // ─── live clock in footer ───────────────────────────
  const clockEl = document.getElementById('clock');
  function updateClock() {
    const d = new Date();
    const pad = n => String(n).padStart(2, '0');
    clockEl.textContent = `${d.getFullYear()}.${pad(d.getMonth()+1)}.${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }
  updateClock();
  setInterval(updateClock, 1000);

  // ─── keyboard shortcuts: g+r, g+p, g+j, g+c ─────────
  let lastKey = null;
  let lastKeyAt = 0;
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    const now = Date.now();
    if (lastKey === 'g' && (now - lastKeyAt) < 1000) {
      const map = { c: '#currently', e: '#education', r: '#research', p: '#publications', j: '#collaborators', x: '#contact', h: '#' };
      const target = map[e.key.toLowerCase()];
      if (target) {
        e.preventDefault();
        if (target === '#') window.scrollTo({ top: 0, behavior: 'smooth' });
        else document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
      }
      lastKey = null;
    } else {
      lastKey = e.key.toLowerCase();
      lastKeyAt = now;
    }
  });
