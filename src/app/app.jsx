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
  const [qtdCart, setQtdCart] = useState(0);
  const [itemSelect, setItemSelect] = useState(null);
  const [type, setType] = useState(null);
  const handleClick = ( name, type) => {
    setItemSelect(name);
    setType(type);
  };

  return (
    <div>
      <Navbar setCartOpen = {setCartOpen} qtdCart={qtdCart} setQtdCart={setQtdCart}/>
      <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} itemSelect={itemSelect} type={type}/>
      <Hero/>
      <Collection/>
      <CriarCardPerfume setCartOpen={setCartOpen} setQtdCart={setQtdCart} handleClick={handleClick}/>
      <Fragrance/>
      <CriarCardFragrance setCartOpen={setCartOpen} setQtdCart={setQtdCart} handleClick={handleClick}/>
      <History/>
      <Contact/>
    </div>
  );
}

export default App;