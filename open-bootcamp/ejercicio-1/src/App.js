import logo from './logo.svg';
import './App.css';
import ContactContainer from './components/container/ContactContainer'
import ClockFuncional from './components/pure/ClockFuncional';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactContainer />
        <ClockFuncional></ClockFuncional>
      </header>
    </div>
  );
}

export default App;
