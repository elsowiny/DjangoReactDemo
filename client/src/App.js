import logo from './logo.svg';
import './App.css';
import FactComponent from './FactComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FactComponent />
      </header>
    </div>
  );
}

export default App;
