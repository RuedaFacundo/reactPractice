import './App.css';
import Testimonio from './componentes/Testimonio.js';
import data from './Data.js';

let number = 0;

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {data.map((testimonio) =>(
          <Testimonio key={number++} value={number}
          nombre={testimonio.nombre}
          pais={testimonio.pais}
          imagen={testimonio.imagen}
          cargo={testimonio.cargo}
          empresa={testimonio.empresa}
          descripcion={testimonio.descripcion}
          />
        ))}
      </div>
    </div>
  );
}

export default App;