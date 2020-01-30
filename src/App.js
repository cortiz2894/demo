import React,{useState} from 'react';
import './App.css';

//components

import InputPredictive from './components/InputPredictive';

function App() {

  const [persona, setPersona] = useState([
      {
        nombre: "Pere",
        apellido: "Perez"
      },
      {
        nombre: "Pere",
        apellido: "Perez"
      }
    ]
  );

  return (
    <div className="App">
      <header className="App-header">
        <InputPredictive options={persona}></InputPredictive>
      </header>
    </div>
  );
}

export default App;
