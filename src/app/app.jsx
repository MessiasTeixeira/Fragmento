import Navbar from './components/Navbar'; 
import Cart from './components/Cart';
import Hero from './components/Hero';
import Collection from './components/Collection';
import Fragrance from './components/Fragrance';
import History from './components/History';
import Contact from './components/Contact';
import CriarCardFragrance from './components/CardFragrance';
import CriarCardPerfume from './components/CardPerfume';

function App() {
  return (
    <div>
      <Navbar/>
      <Cart/>
      <Hero/>
      <Collection/>
      <CriarCardPerfume/>
      <Fragrance/>
      <CriarCardFragrance/>
      <History/>
      <Contact/>
    </div>
  );
}

export default App;