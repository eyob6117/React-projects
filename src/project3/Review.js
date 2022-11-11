import React, { useState } from 'react'
import people from "./data";
import "./review.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft,faChevronRight,faQuoteRight} from '@fortawesome/free-solid-svg-icons'

function Review() {
    const [index,setIndex] = useState(0);
    const{name,job,image,text} = people[index]
    
    const element1 = <FontAwesomeIcon icon =  {faQuoteRight} />
    const element2 = <FontAwesomeIcon icon = {faChevronLeft}/>
    const element3 = <FontAwesomeIcon icon = {faChevronRight}/>

    const checkNumer = (number) => {
            if (number > people.length -1 ){
                return 0;
            }
            if (number < 0){
                return people.length -1
            }
            return number;
    }
    function next () {
        setIndex(index => {

          let newIndex = index + 1;
            return checkNumer(newIndex);
            // newIndex < people.length ? newIndex : index = 0;
          
        })
    }
    function prev () {
        setIndex(index => {
          let newIndex = index - 1;
          return checkNumer(newIndex);
        //   newIndex > 0 ? newIndex:index = people.length - 1;
        })
    }
    function random() {
        let randomNumber = Math.floor(Math.random() * people.length)
        if (randomNumber === index){
            randomNumber += 1;
        }
        setIndex(checkNumer(randomNumber));
    }
  return (
    <article className='review'>
    <div className='img--container'>
        <img src = {image} alt = {name}  className = "person--img"/>
        <span className='quote-icon'>
            {element1}
        </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info3'>{text}</p>
     <div className='buttons'>
        <button className='prev-btn'  onClick = {prev}>{element2}</button>
        <button className='next-btn' onClick = {next}>{element3}</button>
        
     </div>
     <button className='random-btn' onClick={random}>Suprise me</button>
 </article>
   
  )
}

export default Review