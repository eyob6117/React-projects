import React,{useState}from 'react'
import "./tour.css";

function Tour(props) {

    const[readMore,setReadMore] = useState(false);
          return (
        <article className='container'>
            <div className='image'>
            <img src = {props.image} alt = {props.name} />
            </div>
            <div className='name'>
            <h3>{props.name}</h3>
            </div>
            <div className='info'>
            <p>{readMore ? props.info: `${props.info.substring(0,200)}...`}
                <button onClick = {() => setReadMore(!readMore)} className = "read-btn">
                    {readMore ? 'show less': 'show more'}
                </button>
            </p>
            </div>
            <div className='price'>
            <p>{props.price}</p>
            </div>
            <button className="btn" onClick={() => props.removeTour(props.id)}>
          not interested
        </button>
        </article>
  )
}
export default Tour