import React from 'react'
import '../styles/Busqueda.css'

const Busqueda = () => {
  return (
    <div className='buscador'>
      <h3>Buscar tarea</h3>
      <form>
        <input
          type='text'
          placeholder='buscar'
        />
      </form>
      
    </div>
  )
}

export default Busqueda
