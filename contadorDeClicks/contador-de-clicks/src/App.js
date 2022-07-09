import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';

function App() {

  const manejarClick = () => {
    console.log('click');
  }

  const reiniciarContador = () => {
    console.log('Reinciar');
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          className='logo'
          src={freeCodeCampLogo}
          alt='Logo'
        />
      </div>
      <div className='contenedor-principal'>
        <Boton 
          texto='Click'
          esBotonDeClick = {true}
          manejarClick={manejarClick}
        />
        <Boton 
          texto='Reiniciar'
          esBotonDeClick = {false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
