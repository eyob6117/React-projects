import React from "react";
import "./list.css"
const List = ({people,isShow}) => {

//     <main>
//     <section className="container">
//       <h3>{people.length} birthdays today</h3>
//       <List people = {people} isShow = {isShow}/>
//       <button onClick={() => setPeople([])}>{isShow ? "clear all": "click for new item"}</button>
//     </section>
// </main>
    return (
        <>

        {isShow &&  <div>
           {people.map((person) =>{
            const {id,name,age,image} = person;
            return <article key = {id} className = "person"> 
            <img src = {image} alt={name} className = "img"/>
            <div className="content">
                <h4>{name}</h4>
                <p>{age} years</p>
            </div>
            </article>
           })}
           </div> }  
           
        </>
    )
}

export default List;