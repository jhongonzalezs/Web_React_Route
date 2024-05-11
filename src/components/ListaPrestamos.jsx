// ListaPrestamos.jsx
import React from 'react';
import '../assets/css/ListaPrestamos.css'; // Importar estilos CSS

function ListaPrestamos({ prestamos, onEliminarPrestamo, onEditarPrestamo }) {
  return (
    <div className="lista-prestamos">
      <h2>Lista de Préstamos</h2>
      <ul>
        {prestamos.map((prestamo, index) => (
          <li key={index}>
            <div className="prestamo-info">
              <span>{prestamo.usuario.nombre} {prestamo.usuario.apellido}</span> -
              <span> {prestamo.libro.titulo} ({prestamo.libro.ano})</span>
            </div>
            <div className="prestamo-buttons">
              <button onClick={() => onEditarPrestamo(index, prestamo)}>Editar</button>
              <button onClick={() => onEliminarPrestamo(index)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaPrestamos;
