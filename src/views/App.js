import logo from './logo.svg';
import './App.scss';
import MyTestComponent from './ExampleComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyTestComponent></MyTestComponent>
      </header>
    </div>
  );
}

export default App;
