import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]); // Array vacio
  const [paciente, setPaciente] = useState({}); // Objeto vacio

  // Cuando le pasas [] significa una sola vez.
  useEffect(() => {
    //Obtener lo que hay en localStorage
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS);
    };

    //mandamos a llamar
    obtenerLS();
  }, []);

  // Cuando pacientes cambie.
  useEffect(() => {
    // LocalStorage no almacena arreglos solo strings
    // Convertimos el arreglo a string
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    //Elimina el paciente por id.
    //por medio del filter trae aquellos que son diferentes al id eliminado.
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
