// FormularioPrestamo.jsx
import React, { useState } from 'react';
import '../assets/css/FormularioPrestamo.css'; // Importar estilos CSS

function FormularioPrestamo({ onRegistrarPrestamo }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [editorial, setEditorial] = useState('');
  const [ano, setAno] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validaciones podrían ir aquí
    const nuevoPrestamo = {
      usuario: { nombre, apellido },
      libro: { titulo, autor, editorial, ano }
    };
    onRegistrarPrestamo(nuevoPrestamo);
    // Limpieza de campos
    setNombre('');
    setApellido('');
    setTitulo('');
    setAutor('');
    setEditorial('');
    setAno('');
  };

  return (
    <form onSubmit={handleSubmit} className="prestamo-form">
      <h2>Registrar Préstamo</h2>
      <div className="form-group">
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" required />
      </div>
      <div className="form-group">
        <label>Apellido:</label>
        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder="Apellido" required />
      </div>
      <div className="form-group">
        <label>Título del libro:</label>
        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Título del libro" required />
      </div>
      <div className="form-group">
        <label>Autor:</label>
        <input type="text" value={autor} onChange={(e) => setAutor(e.target.value)} placeholder="Autor" required />
      </div>
      <div className="form-group">
        <label>Editorial:</label>
        <input type="text" value={editorial} onChange={(e) => setEditorial(e.target.value)} placeholder="Editorial" required />
      </div>
      <div className="form-group">
        <label>Año:</label>
        <input type="number" value={ano} onChange={(e) => setAno(e.target.value)} placeholder="Año" required />
      </div>
      <button type="submit">Registrar Préstamo</button>
    </form>
  );
}

export default FormularioPrestamo;
