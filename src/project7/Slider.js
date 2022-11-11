import React from 'react'

function Slider() {
    const[slider,setSlider] = useState(data);
    const[value,setValue] = useState(0);
  // function checkNumber (number){
  //   if (number < slider.length - 1)
  //   {
  //       number += 1;
  //   }
  
  //   if (number < 1){
  //     number = slider.length - 1;
  //   }
  // }
  
  
  
  
    const nextBtn = () => {
        setValue((value) => {
          return value < slider.length - 1 ? value + 1 : value = 0;
        })
    }
  
    const preBtn = () => {
        setValue((value) => {
          return value < 1 ?  slider.length - 1 : value  - 1
        })
  
    }
    
  useEffect(() => {
    setInterval(() => {
      setValue(value + 1)
    },3000)
  },[value])
  
    const {name,image,title,quote} = slider[value];
  return (
    <div>
             <div className="header">
          <span>/</span><h1>Reviews</h1>
      </div>
       <div className="slider-info">
              <div className="container">
            <img src = {image}  className = "img-slider"/>
              <div className="slider-top">  
                <h2>{name}</h2> 
                <h4>{title}</h4>
                </div>
                <p>{quote}</p>
                
               </div>
              
              <div className="buttons">
                <button className="left-btn" onClick={preBtn}>{`<`}</button>
                <button className="right-btn" onClick = {nextBtn}>{`>`}</button>
                </div>
    </div>
    </div>
  )
}

export default Slider