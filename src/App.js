import React, {useState} from 'react';
import Login from './pages/Login';
import './global.css';

function App() {

  const [counter, setCounter] = useState(0);



  function increment(){
    setCounter (counter +1);
  }

  return (
   <Login/>
  );
}

export default App;
