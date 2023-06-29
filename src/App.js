import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [checked, setChecked] = useState(true);
  return (
    <div className="App">
      <header onClick={() => {setChecked(!checked)} }className="App-header">
        {checked?<>dsfnaksefja</>:<>faldsfadsfasse</>}
        <div>Hello World!</div>
      </header>
    </div>
  );
}

export default App;
