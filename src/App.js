import './App.css';
import Title from './components/Title.jsx'
import Busqueda from './components/Busqueda.jsx'
import Crear from './components/Crear.jsx'
import Listado from './components/Listado.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="App">
     
      <div>
        <nav>
          <h1>To Do List</h1>
        </nav>
      </div>

      <div>

      </div>
      <div>
        <Title/>
      </div>

      <div>
        <Busqueda />
        <Crear />
        <Listado/>
      </div>

      <Footer/>

    </div>
  );
}

export default App;
