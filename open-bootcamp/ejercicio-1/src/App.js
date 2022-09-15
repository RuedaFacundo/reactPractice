import logo from './logo.svg';
import './App.css';
import ContactContainer from './components/container/ContactContainer'
import ClockFuncional from './components/pure/ClockFuncional';
import JokeContainer from './components/container/JokeContainer';
import TodosContainer from './components/container/TodoContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<ContactContainer />
          <ClockFuncional></ClockFuncional> 
          <JokeContainer /> */}
        <TodosContainer></TodosContainer>
      </header>
    </div>
  );
}

export default App;
