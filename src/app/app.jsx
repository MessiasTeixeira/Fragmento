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
import { fragrancia, colecao } from './data/data.js';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [item, setItem] = useState([]);
  const [valor, setValor] = useState(0);
  const [qtdCart, setQtdCart] = useState(0);
  const [itemSelect, setItemSelect] = useState(null);
  const [itemSelectNameValue, setItemSelectNameValue] = useState(null);
  const [type, setType] = useState(null);
  const handleClick = ( name, value, type) => {
    setItemSelect(name);
    setItemSelectNameValue(value);
    setType(type);

    if (type === "adicionar") {
      Add(name, value);
    } else if (type === "remover") {
      Remove(name, value);
    } else if (type === "limpar") {
      setItem([]);
      setValor(0);
      setQtdCart(0);
    }
  };
  
  function Add(name, value){
      setValor(prev => prev + Number(value));
      console.log(name, value);
      const foundAdd = colecao.find(item => item.nome === name) || fragrancia.find(item => item.nome === name);
      if (foundAdd) {
          setItem(prev => [...prev, foundAdd]);
      }
  }

  function Remove(name, value){
      const foundRemove = item.find(item => item.nome === name);
      if (foundRemove) {
          const index = item.findIndex(i => i.nome === name);
          const newItem = [...item];
          newItem.splice(index, 1);
          setItem(newItem);
          setValor(prev => Math.max(prev - value, 0));
      }
  }

  return (
    <div>
      <Navbar setCartOpen = {setCartOpen} qtdCart={qtdCart} setQtdCart={setQtdCart}/>
      <Cart setQtdCart={setQtdCart} handleClick={handleClick} cartOpen={cartOpen} setCartOpen={setCartOpen} valor={valor} item={item}/>
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