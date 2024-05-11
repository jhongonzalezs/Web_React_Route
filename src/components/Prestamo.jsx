// Prestamos.jsx
import React, { useState } from 'react';
import FormularioPrestamo from './FormularioPrestamo';
import ListaPrestamos from './ListaPrestamos';

function Prestamos() {
  const [prestamos, setPrestamos] = useState([]);

  const registrarPrestamo = (nuevoPrestamo) => {
    setPrestamos([...prestamos, nuevoPrestamo]);
  };

  const eliminarPrestamo = (index) => {
    const nuevosPrestamos = [...prestamos];
    nuevosPrestamos.splice(index, 1);
    setPrestamos(nuevosPrestamos);
  };

  const editarPrestamo = (index, prestamoActual) => {
    // Pedir al usuario los nuevos datos
    const nuevoNombre = prompt(`Nuevo nombre del usuario (actual: ${prestamoActual.usuario.nombre}):`) || prestamoActual.usuario.nombre;
    const nuevoApellido = prompt(`Nuevo apellido del usuario (actual: ${prestamoActual.usuario.apellido}):`) || prestamoActual.usuario.apellido;
    const nuevoTitulo = prompt(`Nuevo título del libro selecionado (actual: ${prestamoActual.libro.titulo}):`) || prestamoActual.libro.titulo;
    const nuevoAutor = prompt(`Nuevo autor del libro selecionado (actual: ${prestamoActual.libro.autor}):`) || prestamoActual.libro.autor;
    const nuevaEditorial = prompt(`Nueva editorial del libro selecionado (actual: ${prestamoActual.libro.editorial}):`) || prestamoActual.libro.editorial;
    const nuevoAno = parseInt(prompt(`Nuevo año de publicacion del libro selecionado (actual: ${prestamoActual.libro.ano}):`) || prestamoActual.libro.ano, 10);
    
    // Crear el nuevo objeto de préstamo con los datos actualizados
    const nuevoPrestamo = {
      usuario: { nombre: nuevoNombre, apellido: nuevoApellido },
      libro: { titulo: nuevoTitulo, autor: nuevoAutor, editorial: nuevaEditorial, ano: nuevoAno }
    };
  
    // Crear una copia de la lista de préstamos
    const nuevosPrestamos = [...prestamos];
    // Reemplazar el préstamo en la posición index con el nuevo préstamo
    nuevosPrestamos[index] = nuevoPrestamo;
    // Imprimir alerta para indicar que el préstamo se ha editado correctamente
    alert("¡Préstamo editado correctamente!");
    // Actualizar el estado con la lista de préstamos modificada
    setPrestamos(nuevosPrestamos);
  };
  
  

  return (
    <div>
      <FormularioPrestamo onRegistrarPrestamo={registrarPrestamo} />
      <ListaPrestamos 
        prestamos={prestamos} 
        onEliminarPrestamo={eliminarPrestamo} 
        onEditarPrestamo={editarPrestamo} 
      />
    </div>
  );
}

export default Prestamos;
