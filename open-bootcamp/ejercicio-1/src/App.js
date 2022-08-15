import logo from './logo.svg';
import './App.css';
import ContactContainer from './components/container/ContactContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactContainer />
      </header>
    </div>
  );
}

export default App;
