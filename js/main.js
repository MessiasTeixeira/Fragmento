import '/css/style.css';

let contador = 0;
let preçoTotal = 0;

const adicionar = document.querySelectorAll('#adicionar-produto');
const remover = document.querySelectorAll('#remover-produto');
const carrinhoPainel = document.getElementById('carrinho-painel');
const carrinhoSidebar = document.getElementById('carrinho-sidebar');
const carrinhoOverlay = document.getElementById('carrinho-overlay');
const fecharCarrinho = document.getElementById('fechar-carrinho');
const subtotal = document.getElementById('carrinho-subtotal');
const carrinhototal = document.getElementById('carrinho-total');

// Remover itens do carrinho
remover.forEach(botao => {
    botao.addEventListener('click', () => {
        if (contador > 0) {
            const carrinhoQuantidade = document.getElementById('carrinho-quantidade');
            const card = botao.closest('.bg-white');
            const nomeProduto = card.querySelector('h3').textContent;
            const carrinhoItems = document.getElementById('carrinho-items');

            // Usando map para criar um novo array com os itens atualizados
            const itensCarrinho = Array.from(carrinhoItems.children);
            
            itensCarrinho.map(item => {
                if (item.querySelector('h3').textContent === nomeProduto) {
                    item.remove();
                    contador--;
                    carrinhoQuantidade.textContent = contador;
                    preçoTotal -= parseFloat(botao.closest('.bg-white').querySelector('.text-amber-800').textContent.replace('R$', '').replace(',', '.'));
                    if (preçoTotal < 0) {
                        preçoTotal = 0;
                    }
                    AtualizarContador();
                }
            });
        }
    });
});

// Adicionar itens ao carrinho
adicionar.forEach(botao => {
    botao.addEventListener('click', () => {
        preçoTotal += parseFloat(botao.closest('.bg-white').querySelector('.text-amber-800').textContent.replace('R$', '').replace(',', '.'));
        contador++;
        const card = botao.closest('.bg-white'); 
        const nome = card.querySelector('h3').textContent; 
        const preco = card.querySelector('.text-amber-800').textContent; 
        const imagem = card.querySelector('img').src; 
        const carrinhoItems = document.getElementById('carrinho-items');
        const carrinhoQuantidade = document.getElementById('carrinho-quantidade');
        carrinhoQuantidade.textContent = contador;
        
        const itemCarrinho = `
            <div class="flex items-center space-x-4 p-4 border-b">
                <img src="${imagem}" alt="${nome}" class="w-16 h-16 object-cover rounded">
                <div class="flex-1">
                    <h3 class="font-medium">${nome}</h3>
                    <p class="text-amber-800">${preco}</p>
                </div>
                <button id="remover-item" class="text-red-500 hover:text-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
        `;

        carrinhoItems.insertAdjacentHTML('beforeend', itemCarrinho);
        document.getElementById('carrinho-sidebar').classList.remove('translate-x-full');   
        AtualizarContador();
    });
});

// Evento para remover o item através do sidebar
document.addEventListener('click', (x) => {
    if (x.target.closest('#remover-item')) {
        const item = x.target.closest('.flex.items-center');
        const carrinhoQuantidade = document.getElementById('carrinho-quantidade');
        contador--;
        carrinhoQuantidade.textContent = contador;
        item.remove();
    }
});

//Evento para abrir e fechar o carrinho
carrinhoPainel.addEventListener('click', () => {
    carrinhoSidebar.classList.remove('translate-x-full');
    carrinhoOverlay.classList.remove('hidden');
});

fecharCarrinho.addEventListener('click', () => {
    carrinhoSidebar.classList.add('translate-x-full');
    carrinhoOverlay.classList.add('hidden');
});

function AtualizarContador() {
  subtotal.textContent = `R$ ${preçoTotal.toFixed(2).replace('.', ',')}`;
  carrinhototal.textContent = `R$ ${preçoTotal.toFixed(2).replace('.', ',')}`;
}
