import React from 'react'
import Tour from "./Tour";
function Tours({tours,removeTour}) {
//   const[loading,setLoading] = useState(true)
//   const[tours,setTours] = useState([]);
//   const url = 'https://course-api.com/react-tours-project';

//   const removeTour = (id) => {
//         const newTour = tours.filter((tour) => (tour.id !== id))
//         setTours(newTour)
//     }
 
//   const fetchTours = async () => {
  
//     try{ 
//     fetch(url).then((res) => res.json())
//     .then((data) => setTours(data));
//     }
//     catch (error) {
//       console.log(error)
//     }
// }
//   useEffect(() => {
//     fetchTours();
//   },[])
  
//   if (tours.length === 0){
//     return (
//       <div>
//         <h2>no tours left</h2>
//           <button onClick={() => {
//             fetchTours();
//           }}>refresh</button>
//       </div>
//     )
{/* <Tours tours = {tours} removeTour = {removeTour}/> */}
  return (
    <div>
        {tours.map((tour => {
            return <Tour key = {tour.id} {...tour} removeTour = {removeTour}/>
        }))}
    </div>
  )
}

export default Tours