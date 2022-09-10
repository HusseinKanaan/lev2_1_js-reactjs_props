import Produktkomponente from './components/Produktkomponente';
import './App.css';

const produkte = [
  {
    bild: '/public/img/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpeg',
    Name: 'cocooil',
    price: 30 + '$',
  },
  {
    bild: '/public/img/photo-1553456558-aff63285bdd1.avif',
    Name: 'Polaroid',
    price: 60 + '$',
  },
  {
    bild: '/public/img/photo-1631729371254-42c2892f0e6e.avif.jpeg',
    Name: 'Maui Moisture',
    price: 20 + '$',
  }
]

function App() {

  return (

    <div className="App">
      <h1>Supershop</h1>
      <section className='flexContainer'>
      <Produktkomponente Product={produkte[0].Name} preis={produkte[0].price} img={produkte[0].bild} />
      <Produktkomponente Product={produkte[1].Name} preis={produkte[1].price} img={produkte[1].bild} />
      <Produktkomponente Product={produkte[2].Name} preis={produkte[2].price} img={produkte[2].bild} />

      </section>

    </div>
  );
}

export default App;
