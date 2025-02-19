import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import FoodItems from './components/FoodItems';
import Heading from './components/Heading';
import ErrorMessage from './components/ErrorMessage';
import Top from './components/Top';

function App() {
  let fooditems = ["Dal", "Gajar HALVA", "Roti", "Salad", "Milk"];
  // let fooditems = [];



  return (
    <>
      <Top></Top>
      <Heading></Heading>
      <ErrorMessage items={fooditems}></ErrorMessage>
      <FoodItems items={fooditems}></FoodItems>
    </>

  )
}


export default App;
