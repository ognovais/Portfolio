/* =============================================
   PORTFOLIO — Antony Novais Nunes
   main.js
   ============================================= */

// ── Scroll Reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const delay = parseFloat(entry.target.style.transitionDelay || '0');
      setTimeout(() => entry.target.classList.add('visible'), delay * 1000);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// ══════════════════════════════════
// MODAL DOS PROJETO
// ══════════════════════════════════
const projetos = {
  pbi: {
    tag: '📊 Power BI',
    titulo: 'Gatito PetSHOP',
    img: 'assets/dashboard.jpg',
    placeholderIcon: '📊',
    descricao: 'Dashboard interativo desenvolvido no Power BI para análise de vendas, faturamento e comportamento dos clientes. O projeto reúne indicadores estratégicos, filtros dinâmicos e visualizações voltadas para apoio na tomada de decisão.',
    techs: ['Power BI', 'DAX', 'Modelagem de dados', 'Excel'],
    aprendizado: 'Aprimorei habilidades em análise de dados, criação de KPIs, modelagem relacional, construção de dashboards interativos e transformação de dados para gerar insights de negócio.',
    github: 'https://github.com/ognovais/GatitoPetSHOP/tree/main',
  },
  ecom: {
    tag: '🛍️ E-commerce',
    titulo: 'E-commerce Nana Lili Moda Infantil',
    img: 'assets/ecommerce.png',
    placeholderIcon: '🛍️',
    descricao: 'Desenvolvimento e personalização de uma loja virtual real no segmento de moda infantil utilizando Nuvemshop. Projeto focado em identidade visual, experiência do usuário, responsividade, organização de catálogo, meios de pagamento e logística.',
    techs: ['HTML/CSS', 'Nuvemshop', 'UX/UI', 'E-commerce'],
    aprendizado: 'Desenvolvi experiência prática com personalização de layouts, responsividade, estruturação de catálogo de produtos e adaptação visual através de CSS. O projeto também trouxe aprendizados sobre demandas reais de clientes, organização de informações, experiência do usuário e tomada de decisões voltadas ao negócio.',
    github: 'https://github.com/ognovais/Ecommerce-NanaLili',
  },
  lp: {
    tag: '🍔 Landing Page',
    titulo: 'ArtBurguer',
    img: 'assets/landingpage.jpg',
    placeholderIcon: '🍔',
    descricao: 'Landing page desenvolvida para uma hamburgueria fictícia, com foco em apresentação visual, organização de seções e responsividade. Projeto criado utilizando HTML e CSS durante o início da graduação.',
    techs: ['HTML', 'CSS', 'GitHub Pages'],
    aprendizado: 'Aprendi a criar interfaces visualmente atrativas com atenção a hierarquia visual, tipografia e conversão, além de publicar projetos via GitHub Pages.',
    github: 'https://github.com/ognovais/ArtBurguer',
  },
};

function openModal(id) {
  const p = projetos[id];
  if (!p) return;

  const modal = document.getElementById('project-modal');
  const img   = document.getElementById('modal-img');
  const ph    = document.getElementById('modal-img-placeholder');
  const phIcon = document.getElementById('modal-placeholder-icon');

  // preenche imagem
  img.src = p.img;
  img.alt = p.titulo;
  img.style.display = '';
  ph.style.display  = 'none';
  phIcon.textContent = p.placeholderIcon;
  img.onerror = () => { img.style.display = 'none'; ph.style.display = 'flex'; };

  document.getElementById('modal-tag').textContent         = p.tag;
  document.getElementById('modal-title').textContent       = p.titulo;
  document.getElementById('modal-desc').textContent        = p.descricao;
  document.getElementById('modal-aprendizado').textContent = p.aprendizado;
  document.getElementById('modal-github').href             = p.github;

  const techsEl = document.getElementById('modal-techs');
  techsEl.innerHTML = p.techs
    .map(t => `<span class="project-tech-pill">${t}</span>`)
    .join('');

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('project-modal').classList.remove('active');
  document.body.style.overflow = '';
}

function closeModalBackdrop(e) {
  if (e.target.id === 'project-modal') closeModal();
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
