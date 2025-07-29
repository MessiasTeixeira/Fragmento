function Hero() {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="/perfume-home.jpg" 
          alt="Fragmento Perfumaria"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="relative h-full flex items-center justify-center text-center text-white">
        <div>
          <img
            src="/logo.png"
            alt="Logo Fragmento"
            className="w-32 h-32 mx-auto mb-8"
          />
          <h1 className="text-5xl md:text-6xl font-playfair mb-4">
            Fragmento Perfumaria
          </h1>
          <p className="text-xl md:text-2xl">Descubra a arte da perfumaria</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
