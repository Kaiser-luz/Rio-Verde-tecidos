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

/* Função para converter preço "R$ 99,00" para número */
function parsePreco(precoStr) {
  return parseFloat(precoStr.replace('R$', '').replace('.', '').replace(',', '.').trim());
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

/* Renderiza os produtos na página */
function renderProdutos(produtos) {
  const grid = document.getElementById('lista-produtos');
  grid.innerHTML = '';
  produtos.forEach(produto => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${produto.img}" alt="${produto.nome}" class="produto-imagem" />
      <div class="info">
        <span class="nome">${produto.nome}</span>
        <span class="preco">${produto.preco}</span>
        <button class="add-carrinho" data-nome="${produto.nome}" data-preco="${parsePreco(produto.preco)}">Adicionar ao Carrinho</button>
      </div>
    `;
    grid.appendChild(card);
  });
  // Adiciona eventos aos botões
  document.querySelectorAll('.add-carrinho').forEach(btn => {
    btn.onclick = () => {
      const nome = btn.dataset.nome;
      const preco = parseFloat(btn.dataset.preco);
      carrinho.push({ nome, preco });
      atualizarCarrinho();
      alert(`${nome} adicionado ao carrinho!`);
    };
  });
}

/* Filtros */
function filtrarProdutos() {
  const busca = document.getElementById('busca').value.toLowerCase();
  const categoria = document.getElementById('categoria').value;
  let filtrados = PRODUTOS.filter(p => 
    p.nome.toLowerCase().includes(busca) &&
    (categoria === '' || p.categoria === categoria)
  );
  renderProdutos(filtrados);
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

/* Carrinho */
let carrinho = [];

function atualizarCarrinho() {
  const lista = document.getElementById('carrinho-lista');
  lista.innerHTML = '';
  let total = 0;
  carrinho.forEach((item, idx) => {
    const li = document.createElement('li');
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'Remover';
    btnRemover.style.marginLeft = '8px';
    btnRemover.onclick = () => {
      carrinho.splice(idx, 1);
      atualizarCarrinho();
    };
    li.appendChild(btnRemover);
    lista.appendChild(li);
    total += item.preco;
  });
  document.getElementById('carrinho-total').textContent = `Total: R$ ${total.toFixed(2)}`;
}

document.getElementById('abrir-carrinho').onclick = () => {
  atualizarCarrinho();
  document.getElementById('carrinho-modal').style.display = 'flex';
};

document.getElementById('enviar-whats').onclick = () => {
  if (carrinho.length === 0) return alert('Carrinho vazio!');
  let mensagem = 'Olá! Quero comprar:\n';
  carrinho.forEach(item => {
    mensagem += `- ${item.nome} (R$ ${item.preco.toFixed(2)})\n`;
  });
  const total = carrinho.reduce((s, i) => s + i.preco, 0);
  mensagem += `Total: R$ ${total.toFixed(2)}`;
  const fone = '41988494471';
  const url = `https://wa.me/${fone}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
};

document.addEventListener('DOMContentLoaded', () => {
  renderProdutos(PRODUTOS);

  document.getElementById('busca').addEventListener('input', filtrarProdutos);
  document.getElementById('categoria').addEventListener('change', filtrarProdutos);

  document.getElementById('abrir-carrinho').onclick = () => {
    atualizarCarrinho();
    document.getElementById('carrinho-modal').style.display = 'flex';
  };

  document.getElementById('enviar-whats').onclick = () => {
    if (carrinho.length === 0) return alert('Carrinho vazio!');
    let mensagem = 'Olá! Quero comprar:\n';
    carrinho.forEach(item => {
      mensagem += `- ${item.nome} (R$ ${item.preco.toFixed(2)})\n`;
    });
    const total = carrinho.reduce((s, i) => s + i.preco, 0);
    mensagem += `Total: R$ ${total.toFixed(2)}`;
    const fone = '41988494471';
    const url = `https://wa.me/${fone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };
});
