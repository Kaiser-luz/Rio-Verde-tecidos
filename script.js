
/* Configurações */
const LOTE = 24; // quantidade por carregamento
let offset = 0;
let produtosFiltrados = [];

/* Elementos */
const lista = document.getElementById('lista-produtos');
const sentinela = document.getElementById('sentinela');
const busca = document.getElementById('busca');
const categoria = document.getElementById('categoria');

/* Debounce util */
function debounce(fn, delay=300){
  let t;
  return (...args)=>{ clearTimeout(t); t = setTimeout(()=>fn(...args), delay); };
}

/* Render card */
function cardTemplate(p){
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `
    <img class="thumb" src="${p.img}" loading="lazy" alt="${p.nome}">
    <div class="info">
      <h3 class="nome">${p.nome}</h3>
      <div class="meta">
        <span class="preco">${p.preco}</span>
        <span class="tag">${p.categoria}</span>
      </div>
    </div>
  `;
  return div;
}

/* Carregamento incremental */
function carregarMais(){
  if(offset >= produtosFiltrados.length) return;
  const slice = produtosFiltrados.slice(offset, offset + LOTE);
  const frag = document.createDocumentFragment();
  slice.forEach(p => frag.appendChild(cardTemplate(p)));
  lista.appendChild(frag);
  offset += LOTE;
}

/* Filtrar */
function aplicarFiltros(){
  const q = busca.value.trim().toLowerCase();
  const cat = categoria.value;
  produtosFiltrados = PRODUTOS.filter(p => {
    const okNome = p.nome.toLowerCase().includes(q);
    const okCat = !cat || p.categoria === cat;
    return okNome && okCat;
  });
  // reset
  offset = 0;
  lista.innerHTML = '';
  carregarMais();
}

/* Observador para rolagem infinita */
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry => {
    if(entry.isIntersecting){
      carregarMais();
    }
  });
},{ rootMargin: '600px 0px 0px 0px' });

/* Eventos */
busca.addEventListener('input', debounce(aplicarFiltros, 250));
categoria.addEventListener('change', aplicarFiltros);

/* Inicialização */
function init(){
  produtosFiltrados = [...PRODUTOS];
  carregarMais();
  io.observe(sentinela);
}
document.addEventListener('DOMContentLoaded', init);
