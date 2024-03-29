import React from "react";

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  // Utilizando Destructuring
  const { mascota, propietario, email, alta, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm("Deseas eliminar este paciente");

    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className=" font-bold mb-3 uppercase text-gray-700">
        Nombre: <span className="font-normal normal-case">{mascota}</span>
      </p>

      <p className=" font-bold mb-3 uppercase text-gray-700">
        Propietario:{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className=" font-bold mb-3 uppercase text-gray-700">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>

      <p className=" font-bold mb-3 uppercase text-gray-700">
        Alta: <span className="font-normal normal-case">{alta}</span>
      </p>

      <p className=" font-bold mb-3 uppercase text-gray-700">
        Sintomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md"
          onClick={() => {
            setPaciente(paciente);
          }}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
