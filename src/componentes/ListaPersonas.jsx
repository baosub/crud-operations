import React, { useState } from 'react';

function ListaPersonas() {
  // Estado para las entradas del formulario
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  // Estado para la lista de personas
  const [personas, setPersonas] = useState([]);

  // Función para manejar la adición de una nueva persona a la lista
  const agregarPersona = () => {
    if (nombre && apellido) {
      const nuevaPersona = { nombre, apellido };

      // Actualiza la lista de personas
      setPersonas([...personas, nuevaPersona]);

      // Limpia los campos de entrada
      setNombre('');
      setApellido('');
    }
  };

  return (
    <div>
      <h2>Agregar una persona a la lista</h2>
      <div>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <button onClick={agregarPersona}>Agregar</button>
      </div>
      
      <h3>Lista de Personas:</h3>
      <ul>
        {personas.map((persona, index) => (
          <li key={index}>
            {persona.nombre} {persona.apellido}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaPersonas;
