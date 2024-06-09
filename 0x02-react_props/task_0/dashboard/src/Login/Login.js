import "./Login.css";

function App() {
  return (
      <React.Fragment>
        <p>Login to access the full dashboard</p>
        <br></br>
        <label htmlFor="email"> Email: </label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password"> Password: </label>
        <input type="password" id="password" name="password" />
        <button> OK</button>
      </React.Fragment>
  );
}

export default App;
