import React from 'react'
import "./die.css";
function Die(props) {
  return (
    <div className = {`dice--section ${props.isHeld ? "active" : ""}`} onClick = {props.holdDice}>
        
        <h2 className="die--num">{props.value}</h2>
       
    </div>
  )
}

export default Die