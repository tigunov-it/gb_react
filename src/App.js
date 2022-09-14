import './App.css';
import Message from "./Message";

function App(props) {
  const currentTime = Date.now();
  return (<div className="App">
    <header className="App-header">
      My first React App
      <h3 style={{border: '2px solid red'}}>Hello from React</h3>
      <h4>Hello from {props.name}</h4>
      <Message currentTime={currentTime} />
    </header>
  </div>
  );
}

export default App;
