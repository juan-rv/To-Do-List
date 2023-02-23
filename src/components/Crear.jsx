import React, { useState } from 'react'
import { guardarEnStorage } from '../helpers/guardarEnStorage'
import Swal from 'sweetalert2'
import '../styles/Crear.css'

const Crear = ({ setListadoState }) => {


  const [notaState, setNotaState] = useState({
    titulo: '',
    descripcion: ''
  })

  const [clean, setClean] = useState('');
  const [cleanDos, setCleanDos] = useState('');

  const { titulo, descripcion } = notaState


  const conseguirDatos = e => {
    e.preventDefault();
    let target = e.target;
    let titulo = target.titulo.value
    let descripcion = target.descripcion.value

    let nota = {
      id: new Date().getTime(),
      titulo,
      descripcion
    }

    if (!titulo.trim()) {
      e.target[0].focus();
      Swal.fire({
        title: 'Error',
        text: "No deje el nombre en blanco",
        icon: "error"
      })
      return
    }

    if (!descripcion.trim()) {
      e.target[0].focus();
      Swal.fire({
        title: 'Error',
        text: "No deje la descripcion en blanco",
        icon: "error"
      })
      return
    }

    setNotaState(nota);

    setListadoState(elementos => {
      return [...elementos, nota]
    },
      setClean(''),
      setCleanDos('')

    );

    guardarEnStorage("notas", nota)

    Swal.fire({
      title: "Felicidades",
      text: "Tarea Agregada con exito",
      icon: "success"
    })
  }
  
  return (
    <div className='content_form'>
      <h2>
        Crea tu tarea
      </h2>


      <form onSubmit={conseguirDatos}>
        <input
          type='text'
          placeholder='Titulo'
          id='titulo'
          name='titulo'
          onChange={e => setClean(e.target.value)}
          value={clean}
          className = 'input_form'

        />
        <textarea
          placeholder='Descripcion'
          id='descripcion'
          name='descripcion'
          onChange={e => setCleanDos(e.target.value)}
          value={cleanDos}
          className= 'text_form'
        />

        <input className='in'
          type="submit"
          id='save'
          value="guardar"
        />



      </form>


    </div>
  )
}

export default Crear
