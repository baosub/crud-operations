import React, { useState } from 'react';

function ListaPersonas() {
  // Estado para las entradas del formulario
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  // Estado para la lista de personas
  const [personas, setPersonas] = useState([]);

   // Estado para manejar la edición
   const [editIndex, setEditIndex] = useState(null);


   // Función para manejar la adición o actualización de una persona
  const agregarOActualizarPersona = () => {
    if (nombre && apellido) {
      const nuevaPersona = { nombre, apellido };

      if (editIndex !== null) {
        // Si estamos en modo de edición, actualizamos la persona existente
        const personasActualizadas = [...personas];
        personasActualizadas[editIndex] = nuevaPersona;
        setPersonas(personasActualizadas);
        setEditIndex(null); // Salimos del modo de edición
      } else {
        // Si no estamos en modo de edición, añadimos una nueva persona
        setPersonas([...personas, nuevaPersona]);
      }

      // Limpia los campos de entrada
      setNombre('');
      setApellido('');
    }
  };

  // Función para manejar el clic en el botón "Editar"
  const editarPersona = (index) => {
    setEditIndex(index);
    setNombre(personas[index].nombre);
    setApellido(personas[index].apellido);
  };

  

  return (
    <div>
    <h2>{editIndex !== null ? 'Editar persona' : 'Agregar una persona a la lista'}</h2>
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
      <button onClick={agregarOActualizarPersona}>
        {editIndex !== null ? 'Actualizar' : 'Agregar'}
      </button>
    </div>
    
    <h3>Lista de Personas:</h3>
    <ul>
      {personas.map((persona, index) => (
        <li key={index}>
          {persona.nombre} {persona.apellido}
          <button onClick={() => editarPersona(index)}>Editar</button>
        </li>
      ))}
    </ul>
  </div>
  );
}

export default ListaPersonas;
