
function Lorem()
{
const[count,setCount] = useState(0);
    const[text,setText] = useState([]);


    const handleChange = (e) => {
          setCount(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        let amount = parseInt(count)

        if (count < 0){
          amount = 1;
        }
        if (count > 8){
          amount = 9;
        }
        setText(data.slice(0,amount))
    }
    retutn (
        <div className="main">
        <h2>TIRED OF BORING LOREM IPSUM?</h2>
        <form onSubmit={handleSubmit}>
        <label htmlFor="amount" >paragraph:</label>
        <input type = "number" name = "amount" id = "amount" value = {count} onChange  = {handleChange}/>
        <button type = "submit" >Generate</button>
       {text.map((item) => {
          return  <p>{item}</p>
       })}
        </form>
   </div>
    )
}