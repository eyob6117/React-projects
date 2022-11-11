import React,{useState}from 'react'
import "./catagori.css";
function Categorie({categories,filterItem,selected}) {

  // const allCatagories =['all',...new Set( data.map((item) => item.category))];
  return (
    <div className='btn-container'>
      {categories.map((item,index) => {
        return <button 
        className={`filter-btn ${selected && "selected"}`}  
        onClick = {() => filterItem(item)} 
        key = {index}>
          {item}
          </button>
      })}
       
        
    </div>
  )
}

export default Categorie