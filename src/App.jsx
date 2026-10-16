
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Perfil from  './components/Perfil/Perfil';
import Proyectos from './components/Proyectos/Proyectos';
import Habilidades from './components/Habilidades/Habilidades';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Banner />
        <Perfil />
        <Habilidades />
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;
