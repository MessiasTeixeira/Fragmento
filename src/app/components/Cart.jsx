import { useEffect, useState } from "react";
import { fragrancia } from '../data/data.js';
import { colecao } from "../data/data.js";

function Cart({ cartOpen, setCartOpen, itemSelect, type }) {
    const [item, setItem] = useState([]); 

    useEffect(() => {
    if (type === "remover") {
        const foundRemove = item.find(item => item.nome === itemSelect);
        if (foundRemove) {
            setItem(item.filter(item => item.nome !== itemSelect));
        }
    }
    if (type === "adicionar") {
        const foundAdd = colecao.find(item => item.nome === itemSelect) || fragrancia.find(item => item.nome === itemSelect);
        if (foundAdd) {
            setItem(prev => [...prev, foundAdd]);
        }
      }
    }, [itemSelect, type])

    return (
        <div>
            <div id="carrinho-sidebar" className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${cartOpen ? " " : "translate-x-full"}`}>
                <div className="flex flex-col h-full">
                    <div className="p-4 border-b">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-playfair font-bold">Meu Carrinho</h2>
                            <button id="fechar-carrinho" className={`cursor-pointer text-gray-500 hover:text-gray-700`} onClick={() => setCartOpen(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto px-4 py-2">
                        <div id="carrinho-items" className="space-y-4">
                            {item.map((item, i) => (
                                <div key={i} className="flex items-center space-x-4 p-4 border-b">
                                    <img src={item.imagem} alt={item.nome} className="w-16 h-16 object-cover rounded" />
                                    <div className="flex-1">
                                        <h3 className="font-medium">{item.nome}</h3>
                                        <p className="text-amber-800">{item.preco}</p>
                                    </div>
                                    <button id="remover-item" className="text-red-500 hover:text-red-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="border-t p-4 bg-gray-50">
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Subtotal</span>
                                <span id="carrinho-subtotal" className="font-semibold">R$ 0,00</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Frete</span>
                                <span className="font-semibold">Grátis</span>
                            </div>
                            <div className="flex justify-between text-lg font-bold pt-2 border-t">
                                <span>Total</span>
                                <span id="carrinho-total">R$ 0,00</span>
                            </div>
                            <button className="cursor-pointer w-full bg-amber-800 text-white py-2 px-4 rounded hover:bg-amber-700 transition-colors">
                                Finalizar Compra
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="carrinho-overlay" className={`fixed top-0 right-0 h-full w-80 z-40${cartOpen ? "" : "hidden"}`}/>
        </div>
    );
}

export default Cart;