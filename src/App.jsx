
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Perfil from  './components/Perfil/Perfil';
import Proyectos from './components/Proyectos/Proyectos';
import Habilidades from './components/Habilidades/Habilidades'
import './App.css'
import './index.css';

function App() {
 
  return (
    <>
    <Navbar />
    <Banner/>
    <Perfil/>
    <Habilidades/>
    <Proyectos/>
    {/* El resto de secciones irán aquí debajo.
      Ejemplo: <Footer />
    */}
  </>
   
  )
}

export default App
