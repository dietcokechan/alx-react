import logo from "./logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <br></br>
        <label htmlFor="email"> Email: </label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password"> Password: </label>
        <input type="password" id="password" name="password" />
        <button> OK</button>
      </body>
      <footer className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
