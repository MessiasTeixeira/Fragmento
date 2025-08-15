function Hero() {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="/perfume home.webp" 
          alt="Fragmento Perfumaria"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="bg-black/40relative h-full flex items-center justify-center text-center text-white">
        <div className=" backdrop-blur-sm p-8 rounded-lg shadow-2xl">
          <h1 className="text-5xl md:text-6xl font-playfair mb-4 text-white drop-shadow-lg">
            Fragmento Perfumaria
          </h1>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-md">Descubra a arte da perfumaria</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
