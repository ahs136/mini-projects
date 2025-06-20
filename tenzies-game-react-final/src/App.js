import React from "react"; 
import "./App.css"; 
import Die from "./die.js";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";


function App() {
  
  // Initialize States
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [isTiming, setIsTiming] = React.useState(false);
  const [elapsedTime, setElapsedTime] = React.useState(0);
  const [startTime, setStartTime] = React.useState(null);


  // function to create a new array of dice for every roll
    function allNewDice() {
      const newDice = [];
      for (let i = 0; i < 10; i++) {
        newDice.push({ 
          value: Math.ceil(Math.random() * 6), 
          isHeld: false, 
          id: nanoid()
        })
      }
      return newDice;  
    }
    
    // function for roll dice button (including the logic for holding a dice)
    function handleRoll() {
      if (!tenzies) {
        // if the game is not won, roll the dice
        setDice(prevDice => prevDice.map(die => {
          return (die.isHeld ? die : {...die,value: Math.ceil(Math.random() * 6), isHeld: false, id: nanoid()})
        }))
        // increment the count and start the timer if it's the first roll
        // if the game is not won, increment the count
        setCount(prevCount => {
          if (prevCount === 0) {
            setIsTiming(true);
            setStartTime(Date.now());
          }
          return prevCount + 1;
        });
      } else {
        // if the game is won, reset the game
        setTenzies(false);
        setDice(allNewDice());
        setCount(0);
        setIsTiming(false);
        setElapsedTime(0);
        setStartTime(null);
      }
    }
    // function for holding a dice
    function handleHold(id) {
      setDice(prevDice => prevDice.map(die => {
        return (die.id === id ? {...die, isHeld: !die.isHeld} : die)
      }))
    }

  // useEffect to check if all dice are held and have the same value
    React.useEffect(() => {
      const allHeld = dice.every(die => die.isHeld) // for every dice if isHeld is true this whole line is true
      const winningValue = dice[0].value
      const allSame = dice.every(die => die.value === winningValue)

      // if all dice are held and have the same value, set the game to won
      if (allHeld && allSame){
        setTenzies(true)
        setIsTiming(false); 
      }
    },[dice] )

  // map through newDice array (which is state of dice) and create 10 Die elements from die.js structure
  const diceElements = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} handleHold={() => handleHold(die.id)} />)

  // useEffect to handle the timer
  React.useEffect(() => {
    let interval;

    if (isTiming) {
      interval = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        setElapsedTime(elapsed);
      }, 50); // update every 50ms for smooth timer
    }

    return () => clearInterval(interval);
  }, [isTiming, startTime]);

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll the dice until all dice are the same. Click each die to freeze it at its current value between rolls.
      </p>

      <div className="dice-container">
        {diceElements}
      </div>
      <div className="button-wrapper">
        <p className="roll-count">Rolls: {count}</p>
        <button className="roll-button" onClick={handleRoll}>{tenzies ? "New Game" : "Roll dice"}</button>
        <p className="timer">Time: {elapsedTime ? elapsedTime.toFixed(3) : "0.000"}s</p>
      </div>
    </main>
  );
}

export default App;
