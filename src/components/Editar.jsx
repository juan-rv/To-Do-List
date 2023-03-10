import React from "react";
import Swal from "sweetalert2";
import "../styles/Editar.css";

const Editar = ({ nota, conseguirNotas, setEditar, setListadoState }) => {
  const titulo_componente = "Editar nota";

  const guardarEdicion = (e, id) => {
    e.preventDefault();

    let target = e.target;

    const notas_almacenadas = conseguirNotas();

    const indice = notas_almacenadas.findIndex((nota) => nota.id === id);

    let nota_actualizada = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value,
    };

    notas_almacenadas[indice] = nota_actualizada;

    localStorage.setItem("notas", JSON.stringify(notas_almacenadas));

    setListadoState(notas_almacenadas);
    setEditar(0);

    Swal.fire({
      title: "Felicidades",
      text: "Tarea editada con exito",
      icon: "success",
    });
  };

  return (
    <div>
      <h3>{titulo_componente}</h3>
      <hr />

      <form className="form_edit" onSubmit={(e) => guardarEdicion(e, nota.id)}>
        <input
          type="text"
          name="titulo"
          className="titulo_editado"
          defaultValue={nota.titulo}
        />

        <textarea
          name="descripcion"
          defaultValue={nota.descripcion}
          className="descripcion_editada"
        />

        <input type="submit" className="editar" value="actualizar" />
      </form>
    </div>
  );
};

export default Editar;
