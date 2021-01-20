import logo from './logo.svg';
import './App.css';
import {useState, useCallback} from 'react';



function App() {

const [name, setName] = useState('')
const onNameChange = useCallback((event) => {
    setName(event.target.value)
}, [])

  return (
    <div className="App">
      <label htmlFor="name-change">Input</label>
      <input id="name-change" value={name} onChange={onNameChange}/>
      <h1>{name}</h1>
    </div>
  );
}

export default App;
