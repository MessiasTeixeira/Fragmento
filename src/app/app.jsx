import Navbar from './components/Navbar'; 
import Cart from './components/Cart';
import Hero from './components/Hero';
import Collection from './components/Collection';
import Fragrance from './components/Fragrance';
import History from './components/History';
import Contact from './components/Contact';
import CriarCardFragrance from './components/CardFragrance';
import CriarCardPerfume from './components/CardPerfume';
import { useState } from 'react';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <div>
      <Navbar setCartOpen = {setCartOpen}/>
      <Cart cartOpen={cartOpen} setCartOpen={setCartOpen}/>
      <Hero/>
      <Collection/>
      <CriarCardPerfume setCartOpen={setCartOpen}/>
      <Fragrance/>
      <CriarCardFragrance setCartOpen={setCartOpen}/>
      <History/>
      <Contact/>
    </div>
  );
}

export default App;