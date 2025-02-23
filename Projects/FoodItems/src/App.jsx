import './App.css'
import { useState } from 'react'
import Container from './components/Container'
import Heading from './components/Heading'
import FoodItems from './components/FoodItems'
import FoodInput from './components/FoodInput'





function App() {

  let allfooditems = ["grapes", "gulab jambu"];
  let [textToShow, setTextState] = useState("hello");
  let [fooditems, setFoodItems] = useState(allfooditems)

  const FoodInputHandler = (event) => {
    if (event.key === "Enter" && event.target.value.length > 0) {
      let currentitem = event.target.value ;
      // console.log(event.target.value);
      setTextState(currentitem);
      setFoodItems([...fooditems, event.target.value])
      event.target.value = "";

    }

    // console.log(event.key);
  }
  return (
    <>
      <div className="masterContainer">
        <Container>
          <Heading text="Food Items"></Heading>
          <FoodInput FoodInputHandler={FoodInputHandler} ></FoodInput>
          <FoodItems fooditems={fooditems}></FoodItems>

        </Container>

      </div>


    </>
  )
}

export default App
