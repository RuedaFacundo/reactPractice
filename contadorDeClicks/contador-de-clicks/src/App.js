import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          className='logo'
          src={freeCodeCampLogo}
          alt='Logo'
        />
      </div>
    </div>
  );
}

export default App;
