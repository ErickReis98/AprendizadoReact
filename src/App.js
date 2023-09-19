import React, { useEffect } from 'react';
import Routes from "./routes";

import './global.css';



export default function App() {
  useEffect(() => {

  fetch('http://localhost:8080/sistema-vendas/auth/login').then(resp=>resp.text())
  .then(resp => {
    console.log("Getting Text from Api: "+resp)
  })
}, [])
  return (
   
    <Routes/>
  );
}
