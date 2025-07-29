function Contact() {
  return (
    <div>
      <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair text-center text-amber-800 mb-12">Entre em Contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6 text-gray-600">
              <h3 className="text-2xl font-playfair text-amber-800">Informações de Contato</h3>
              <div className="space-y-4">
                <p className="flex items-center">
                  <svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Av. das Fragrâncias, 1234
                </p>
                <p className="flex items-center">
                  <svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contato@fragmentoperfumaria.com
                </p>
                <p className="flex items-center">
                  <svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (84) 99999-9999
                </p>
              </div>
            </div>
            <div className="max-w-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
                  <input type="text" id="nome" name="nome" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500" />
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700">Mensagem</label>
                  <textarea id="mensagem" name="mensagem" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-amber-800 text-white py-2 px-4 rounded hover:bg-amber-700 transition-colors">
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center space-y-6">
                  <img src="/logo.png" alt="Logo Fragmento" className="w-16 h-16" />
                  <div className="flex space-x-6">
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                  </div>
                  <p className="text-gray-400">&copy; 2025 Fragmento Perfumaria. Todos os direitos reservados.</p>
              </div>
          </div>
      </footer>
    </div>
  );
}

export default Contact;
