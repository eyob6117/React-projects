import React,{useEffect, useState} from "react"

// import List from "./project1/List";
// import Tours from "./project2/Tours";
// import Review from "./project3/Review"
// import Question from "./project4/Question";
// import Menu from "./project5/Menu";
// import data from "./project5/data";
// import Categorie from "./project5/Categorie";
// import data from "./project7/data";
// import data from "./project8/data";
// import List from "./project10/List";
// import Alert from "./project10/Alert"
import Navbar from "./project11/Navbar";
import "./App.css";
import Category from "confetti/src/models/category";


function App() {

  return (
  
    <>
    <List />
    <Tours />
    <Review />
    <Category />
    <Alert />
    <Menu />
     <Navbar />
     <Data />

     </>
  
  )
}
export default App;
