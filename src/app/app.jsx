import Navbar from './components/Navbar'; 
import Cart from './components/Cart';
import Hero from './components/Hero';
import Collection from './components/Collection';
import Fragrance from './components/Fragrance';
import History from './components/History';
import Contact from './components/Contact';
import CriarCardFragrance from './components/CardFragrance';
import CriarCardPerfume from './components/CardPerfume';
import CreditCartModal from './components/modal';

function App() {
  return (
    <div>
      <Navbar/>
      <Cart/>
      <CreditCartModal/>
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