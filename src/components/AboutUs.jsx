import React, { useState, useEffect } from 'react';
import '../assets/css/AboutUs.css';

function AboutUs() {
  const [empleados, setEmpleados] = useState([]);
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState(null);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setEmpleados(data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  const handleEmpleadoSeleccionado = (event) => {
    const idSeleccionado = parseInt(event.target.value);
    const empleado = empleados.find((empleado) => empleado.id === idSeleccionado);
    setEmpleadoSeleccionado(empleado);
  };

  return (
    <div className="about-us-container">
      <h3>Sección Quiénes somos</h3>
      <div className="select-container">
        <select className="select" onChange={handleEmpleadoSeleccionado}>
          <option value="">Selecciona un empleado</option>
          {empleados.map((empleado) => (
            <option key={empleado.id} value={empleado.id}>
              {empleado.name}
            </option>
          ))}
        </select>
      </div>
      {empleadoSeleccionado && (
        <div className="employee-details">
          <h4>Información del empleado seleccionado:</h4>
          <p>ID: {empleadoSeleccionado.id}</p>
          <p>Nombre: {empleadoSeleccionado.name}</p>
          <p>Email: {empleadoSeleccionado.email}</p>
          <p>Username: {empleadoSeleccionado.username}</p>
          <p>Teléfono: {empleadoSeleccionado.phone}</p>
          <p>Website: {empleadoSeleccionado.website}</p>
          <p>Compañía: {empleadoSeleccionado.company.name}</p>
          <p>Ciudad: {empleadoSeleccionado.address.city}</p>
          <p>Código postal: {empleadoSeleccionado.address.zipcode}</p>
        </div>
      )}
    </div>
  );
}

export default AboutUs;
