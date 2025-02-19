// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import style from "./App.module.css";
import Display from './components/Display';
import Buttons from './components/Buttons';
function App() {
  const buttonNames = ["+", "1", "2", "-", "3", "4", "*", "5", "6", "/", "7", "8", "%", ".", "9", "Del", "0", "C"];
  return (

    
    <>
    <div className={style.calculator}>
      
      <Display></Display>
      <Buttons ButtonNames={buttonNames}></Buttons>
    </div>
    </>
  );
}

export default App;






