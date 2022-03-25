import logo from './logo.svg';
import './App.css';
import { Component} from 'react';


//E tampem podemos ter um componete de class
// esta class tem a mesma  função  que afunção app ela tem que retornar um componente jsx para o react 
class App extends Component {
 render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    )
}

// isto indica que estamos criando um componente que importa o html  que esta em jlx
// nest elemento eu não posso retornar outro elemento irmão 

// PDEMOS TER UMA Função
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
