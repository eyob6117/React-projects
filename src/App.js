import react,{useState,useEffect} from "react";
import Die from "./Die";
import "./App.css";
import {nanoid} from "nanoid";
import Confetti from "react-confetti"

function App() {     
 
      const[dice,setDice] = useState(allNewDice());
      const[tenzies,setTenzies] = useState(false)
      const [count,setCount] = useState(0);
      //const[timeTaken,setTimeTaken] = useState(new Date.gettime())

      useEffect(() => {
       const allHeld = dice.every(die => die.isHeld);
       const firstValue = dice[0].value;
       const allSameValue = dice.every(die => die.value === firstValue)
       if (allHeld && allSameValue){
          setTenzies(true);
          alert("you won");
       }
      },[dice])

    function holdDice(id) {
     setDice(oldDice => oldDice.map(item => {
      return item.id === id ? {
        ...item,
        isHeld : !item.isHeld} : item
     }))
    }
              function generateNewDie(){
                let c = Math.floor(Math.random() * 6) + 1;
                return {
                  value : c,
                  isHeld: false,
                  id : nanoid()
            }
                }
    function allNewDice() {
      let newArray = [];  
      for (let i = 0; i < 10; i++){
        newArray.push(generateNewDie());
      }
     return newArray;
    }
      const diceElement = dice.map((item) => {
        return <Die value = {item.value} key = {item.id} isHeld = {item.isHeld} holdDice = {() => holdDice(item.id)}/>
      })
    function rollDice() {
            if (!tenzies)
            {
              setDice(oldDice => oldDice.map(item =>{return item.isHeld ? item : generateNewDie();
                }));
                setCount(count => count + 1)
                }
                else {
                  setTenzies(false)
                  setDice(allNewDice());
                
                }
          
    }

  return (
    <div className="App">
        {tenzies && <Confetti />  }
          <div className="container">
          <h1>Tenzis</h1>
          <p>Roll until all dice are the same.Click each die to freeze <br></br>it as its current value between rolls.</p>
            <div className="dice--container">
              {diceElement}
            </div>
            <button onClick = {rollDice} className = "btn">{tenzies ? "New Game":"Roll"}</button>
          </div>
          <h1 style = {{color:"white"}}>{tenzies && `your score is ${count}`}</h1>
          {/* <h2 style={{color:"white"}}>{tenzies && `your time taken was ${timeTaken}`}</h2> */}
          
    </div>
  );
}

export default App;