import { formatarPreco } from '../lib/utils.js';
import { fragrancia } from '../data/data.js';

function CriarCardFragrance({ setCartOpen, setQtdCart, handleClick }) {
    return (
        <section id="fragancias-container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fragrancia.map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative pb-2/3">
                        <img src={item.imagem} alt={item.nome} className="absolute h-full w-full object-cover"/>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-playfair font-bold text-gray-900">{item.nome}</h3>
                    <p className="mt-1 text-gray-500">{item.descricao}</p>
                    <div className="mt-2 flex items-center justify-between">
                        <span className="text-amber-800 font-bold">{formatarPreco(item.preco)}</span>
                        <div className="flex gap-2">
                            <button id="adicionar-produto" className="cursor-pointer btn-comprar bg-amber-800 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors" onClick={() => { setCartOpen(true); setQtdCart(prev => prev + 1); handleClick(item.nome, item.preco, "adicionar"); }}>
                                Comprar
                            </button>
                            <button id="remover-produto" className="cursor-pointer btn-remover bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors" onClick={() => { setQtdCart(prev => Math.max(prev - 1, 0)); handleClick(item.nome, item.preco, "remover"); }}>
                                Remover
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </section>
    );
}

export default CriarCardFragrance;