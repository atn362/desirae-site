import logo from "./Kermit.png";
import "./App.css";
import Button from "./Components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Happy Birthday Raven</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Much Love From Uncle Alex</p>
      </header>
      <Button />
    </div>
  );
}

export default App;
