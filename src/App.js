console.log("process.env >>>", process.env);

function App() {
  return <div className="App">{process.env.REACT_APP_NOT_SECRET_CODE}</div>;
}

export default App;
