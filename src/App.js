import logo from './logo.svg';
import kart from './resources/gløskart.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={kart} className="kart" alt="logo" />
      </header>
    </div>
  );
}

export default App;
