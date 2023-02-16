import React, { useEffect, useState } from 'react'
import { AiFillCheckCircle, AiFillEdit } from "react-icons/ai";
import Editar from './Editar';
import '../styles/Listado.css'

const Listado = ({ listadoState, setListadoState }) => {

  const [editar, setEditar] = useState(0)
  

  useEffect(() => {
    conseguirNotas()
  }, [])

  const conseguirNotas = () => {
    let notas = JSON.parse(localStorage.getItem('notas'))
    setListadoState(notas)
    return notas
  }

  const borrarNota = (id) => {
    let notas_alamacenadas = conseguirNotas();
    let nuevo_array_notas = notas_alamacenadas.filter(nota => nota.id !== parseInt(id))
    setListadoState(nuevo_array_notas)
    localStorage.setItem('notas',JSON.stringify(nuevo_array_notas))
  
  }


  return (
    <div className='content_list'>
      {listadoState !== null ? 
        listadoState.map(nota => {
          return (
            <article>
              <h3>{nota.titulo}</h3>
              <p>{nota.descripcion}</p>
        <button className='edit' onClick={() => {setEditar (nota.id)}}> <AiFillEdit/> </button>
      <button className='delete'  onClick={() => {borrarNota(nota.id)}}> <AiFillCheckCircle /> </button>
      
              {editar === nota.id && (
                <Editar nota={nota}
                  conseguirNotas={conseguirNotas}
                  setEditar={setEditar}
                  setListadoState={setListadoState}
                />
              )}
            
            </article>

          )
        })
        : <h2>No hay notas para mostrar</h2>
    }
      
      </div>
  )
}

export default Listado
