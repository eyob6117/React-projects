import React, { useState } from 'react'
import "./menu.css"
function Menu({item}) {

  
    // const[menuItem,setMenuItem] = useState(data);
    // const [categories,setCategories] = useState(allCatagories)
    // const[selected,setSelected] = useState(false);


    // const filterItem = (catagory) => {
    //   if (catagory === 'all'){
    //     setMenuItem(data);
    //     return;
    //   }  
    //     const newItems = data.filter((item) => 
    //       item.category === catagory
    //     );
    //     setMenuItem(newItems)
        
    //    setSelected(categories.map((cat) => cat.catagory === cat ) ? selected = true : selected)
        
    // }


    
                {/* <div className="title">
                  <h2>Our menu</h2>
                  <div className="underline"></div>
                </div>
              <Categorie filterItem = {filterItem} categories = {allCatagories} selected = {selected}/>
              <Menu item = {menuItem}/> */}
    
  const [count, setCount] = useState(0);
  return (
    <div className='menu--section'>
     {item.map((menu) => {
      const {id,title,catagorie,img,desc,price} = menu;
        return <article key = {id}>
            <img src = {img} className = "img"/>
            <header className='content'>
              <h4>{title}</h4>
              <p>{price}</p>
            </header>
            <p className='desc'>{desc}</p>
      </article>
     })}
    </div>
  )
}

export default Menu