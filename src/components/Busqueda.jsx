import React, { useState } from 'react'
import '../styles/Busqueda.css'

const Busqueda = ({ listadoState, setListadoState }) => {
  
  const [busqueda, setBusqueda] = useState('');
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarNota = (e) => {
    setBusqueda(e.target.value)

    let notas_encontradas = listadoState.filter(nota => {
      return nota.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase())
    })

    if (busqueda.length <= 1 || notas_encontradas <= 0) {
      notas_encontradas = JSON.parse(localStorage.getItem("notas"))
      setNoEncontrado(true);
    } else {
      setNoEncontrado(false)
    }

    setListadoState(notas_encontradas)
  }

  return (
    <div className='buscador'>
     
      <form>
        <input
          type='text'
          id='search_field'
          name='busqueda'
          autoComplete='off'
          value={busqueda}
          onChange={buscarNota}
          placeholder='Busca tu tarea acá'
        />
      </form>
       
      {
        (noEncontrado === true && busqueda.length > 1) && (
          <span className='default'>No se ha encontrado ninguna coincidencia</span>
        )
      }
      
    </div>
  )
}

export default Busqueda
