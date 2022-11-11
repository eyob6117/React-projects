
import React,{useState}from 'react'
import "./question.css";
function Question({id,title,info,toggle}) {
    const[isShow,setIsShow] = useState(true);
    // const[question,setQuestion] = useState(data)
  function show (){
    setIsShow(isShow => !isShow)
  }
  return (
   
    <div className="container">
       <div className='content'>
            <h3>{title}</h3>
            {isShow && <p>{info}</p>}
       </div>
            <button className='question-btn'  onClick = {show}>{isShow ? "-":"+"}</button>
    </div>
   
  )
}

export default Question