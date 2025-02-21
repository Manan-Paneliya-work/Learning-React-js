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
import Container from './components/Container';
import FoodItemInput from './components/FoodItemInput';


function App() {
  // let textToShow = "Text Entered by user";
  let fooditems = ["Dal", "Gajar HALVA", "Roti", "Salad", "Milk"];
  // let fooditems = [];
  let textStateArr = useState("Food Item Entered by user");
  let textToShow = textStateArr[0];
  let setTextState = textStateArr[1];
  // console.log(textToShow);

  const BuyButtonClicked = (event, item) => {
    // console.log(event);
    console.log(`${item} being bought`);
  }

  const HandleOnKeyDown = (event) => {
    console.log(event.target.value);\
    let enteredFpp
    setTextState("FoodO entered is : "+event.target.value);

  }
  const h1Style={
    margin : '20px',
    textAlign :'center',
    color:'red'
  };

  return (
    <>
      <Container>
        <Top name="Fragments"></Top>
        <FoodItemInput  InputHandleOnKeyDown={HandleOnKeyDown}></FoodItemInput>
        <h1 style={h1Style}>{textToShow}</h1>
        <Heading name="Food Item List"></Heading>
        <ErrorMessage items={fooditems}></ErrorMessage>
        <FoodItems items={fooditems} HandleBuyButtonClicked={BuyButtonClicked}></FoodItems>
      </Container>
      <hr />
      <Container>
        <Top name="Hello"></Top>
      </Container>
    </>

  )
}


export default App;
