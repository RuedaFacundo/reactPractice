import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Tarea from './componentes/Tarea.js';
import TareaFormulario from './componentes/TareaFormulario.js';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo' 
          alt='Logo de frecodecamp' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <TareaFormulario />
        <Tarea texto='Aprender React'/>
      </div>
    </div>
  );
}

export default App;
