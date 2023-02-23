import Busqueda from './components/Busqueda.jsx'
import Crear from './components/Crear.jsx'
import Listado from './components/Listado.jsx'
import Footer from './components/Footer.jsx'
import { useState } from 'react';

function App() {

  const [listadoState, setListadoState] = useState([]);
  const fecha = new Date();
  const actual = fecha.toDateString();

 

  return (
    <div className="layout">
      
      
        <nav className='nav'>
        <h1>To Do List</h1>
        <h2>{actual}</h2>
        </nav>
     

      <header className='busqueda'>
          <Busqueda listadoState={listadoState} setListadoState={setListadoState}  />
      </header>

      <div className='center'>
          <Crear setListadoState={setListadoState} />
          <Listado listadoState={listadoState} setListadoState={setListadoState} />  
      </div>

      <footer className='foot'>
        <Footer/>
      </footer>

    </div>
  );
}

export default App;
