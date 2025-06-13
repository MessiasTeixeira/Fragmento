import { formatarPreco } from '../lib/utils.js';
import { colecao } from '../data.js';
import { fragrancia } from '../data.js';
 
// Função para criar o card da coleção
export function criarCardPerfume(colecao) {
           return `<div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="relative pb-2/3">
                <img src="${colecao.imagem}" alt="${colecao.nome}" class="absolute h-full w-full object-cover">
            </div>
            <div class="p-4">
                <h3 class="text-lg font-playfair font-bold text-gray-900">${colecao.nome}</h3>
                <p class="mt-1 text-gray-500">${colecao.descricao}</p>
                <div class="mt-2 flex items-center justify-between">
                    <span class="text-amber-800 font-bold">${formatarPreco(colecao.preco)}</span>
                    <div class="flex gap-2">
                        <button id="adicionar-produto" class="btn-comprar bg-amber-800 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors">
                            Comprar
                        </button>
                        <button id="remover-produto" class="btn-remover bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
                            Remover
                        </button>
                    </div>
                </div>
            </div>
        </div>`;
}


const container = document.querySelector('#colecao-container');

for (const colecoes of colecao) {
     container.insertAdjacentHTML('beforeend', criarCardPerfume(colecoes));
}


// Criar fragâncias
export function criarCardFragancia(fragrancia) {
           return `<div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="relative pb-2/3">
                <img src="${fragrancia.imagem}" alt="${fragrancia.nome}" class="absolute h-full w-full object-cover">
            </div>
            <div class="p-4">
                <h3 class="text-lg font-playfair font-bold text-gray-900">${fragrancia.nome}</h3>
                <p class="mt-1 text-gray-500">${fragrancia.descricao}</p>
                <div class="mt-2 flex items-center justify-between">
                    <span class="text-amber-800 font-bold">${formatarPreco(fragrancia.preco)}</span>
                    <div class="flex gap-2">
                        <button id="adicionar-produto" class="btn-comprar bg-amber-800 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors">
                            Comprar
                        </button>
                        <button id="remover-produto" class="btn-remover bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
                            Remover
                        </button>
                    </div>
                </div>
            </div>
        </div>`;
}

const containerFragrancias = document.querySelector('#fragancias-container');

for (const fragrancias of fragrancia) {
     containerFragrancias.insertAdjacentHTML('beforeend', criarCardFragancia(fragrancias));
}

