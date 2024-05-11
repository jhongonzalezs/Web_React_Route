// EditForm.jsx
import React, { useState } from 'react';

function EditForm({ prestamo, editarPrestamo, cancelarEdicion }) {
  const [datosEditados, setDatosEditados] = useState({
    usuario: prestamo.usuario,
    libro: {
      titulo: prestamo.libro.titulo,
      autor: prestamo.libro.autor,
      editorial: prestamo.libro.editorial,
      año: prestamo.libro.año
    }
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDatosEditados({ ...datosEditados, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!datosEditados.usuario || !datosEditados.libro.titulo || !datosEditados.libro.autor || !datosEditados.libro.editorial || !datosEditados.libro.año) {
      alert("Por favor completa todos los campos.");
      return;
    }
    editarPrestamo(prestamo.id, datosEditados);
  };

  return (
    <div>
      <h2>Editar Préstamo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usuario">Nombre y Apellido del Usuario:</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            value={datosEditados.usuario}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="titulo">Título del Libro:</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={datosEditados.libro.titulo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="autor">Autor del Libro:</label>
          <input
            type="text"
            id="autor"
            name="autor"
            value={datosEditados.libro.autor}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="editorial">Editorial del Libro:</label>
          <input
            type="text"
            id="editorial"
            name="editorial"
            value={datosEditados.libro.editorial}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="año">Año de Publicación:</label>
          <input
            type="number"
            id="año"
            name="año"
            value={datosEditados.libro.año}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Guardar Cambios</button>
        <button type="button" onClick={cancelarEdicion}>Cancelar</button>
      </form>
    </div>
  );
}

export default EditForm;
