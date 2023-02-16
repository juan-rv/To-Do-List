import './App.css';
import Busqueda from './components/Busqueda.jsx'
import Crear from './components/Crear.jsx'
import Listado from './components/Listado.jsx'
import Footer from './components/Footer.jsx'
import { useState } from 'react';

function App() {

  const [listadoState, setListadoState] = useState([]);

 

  return (
    <div className="layout">
      
      <div className='nav'>
        <nav>
          <h1>To Do List</h1>
        </nav>
      </div>

      <div className='center'>
        <div className='lateral'>
          <Busqueda />
          <Crear setListadoState={setListadoState} />
        </div>
  
        <div>
          <Listado listadoState={listadoState} setListadoState={setListadoState} />
        </div>
        
      </div>
      
      <div >
        <Footer/>
      </div>


    </div>
  );
}

export default App;
