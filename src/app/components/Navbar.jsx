import { useFragmento } from "../contexts/fragmentoContexts";
function Navbar() {
  const { 
    setCartOpen, 
    qtdCart 
    } = useFragmento();
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 items-center">
                  <div className="text-2xl font-playfair text-amber-800">
                      Fragmento Perfumaria
                  </div>
                  <div className="hidden md:block">
                      <div className="ml-10 flex items-center space-x-8">
                          <a href="#colecao" className="cursor-pointer relative text-gray-800 hover:text-amber-800 transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-800 after:transition-all hover:after:w-full">Coleção</a>
                          <a href="#fragancias" className="cursor-pointer text-gray-800 hover:text-amber-800 transition-colors">Fragrâncias</a>
                          <a href="#historia" className="cursor-pointer text-gray-800 hover:text-amber-800 transition-colors">História</a>
                          <a href="#contato" className="cursor-pointer text-gray-800 hover:text-amber-800 transition-colors">Contato</a>
                          <button id="carrinho-painel" className="cursor-pointer flex items-center text-gray-800 hover:text-amber-800 transition-colors" onClick={() => setCartOpen(prev => !prev)}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                              <span id="carrinho-quantidade" className="ml-1">{qtdCart}</span>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </nav>
    )
}

export default Navbar;