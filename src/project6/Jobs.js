const url = 'https://course-api.com/react-tabs-project';


    // console.log(jobs);
    // const fetchJobs = () => {
    //     const fetchJOb = fetch(url).
    //     then(res => res.json()).
    //     then(data => setJobs(data)); 
    // }
   
    useEffect(() => {
        fetchJobss();
      },[])
  
      if (loading)
      {
        return (
          <section>
            <h1>Loading....</h1>
            </section>
        )
      }
      


  function Job() {
  const[loading,setLoading] = useState(true);
const [jobs,setJobs] = useState([]);
const[value,setValue] = useState(0);
const {company,dates,duties,title} =  jobs[value];
const fetchJobss = async() => {
    const response = await fetch(url);
    const newJobs = await response.json()
    setJobs(newJobs);
    setLoading(false)
     return (


        <>
            <div className="title">
        <h2>expierence</h2>
        <div className="underline"></div>
        </div>
        <div className="jobs-center">
            <div className="btn-container">
                {
                  jobs.map((item,index) => {
                    return (
                      <button key = {item.id} onClick = {() => setValue(index)} className = {`job-btn ${index === value && 'active-btn'}`}>{item.company}</button>
                      
                    )
                    
                  })
                }
            </div>
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <small>{dates}</small>
            {duties.map((duty,index)=> {
              return <div key = {index} className = "job-desc">
                <ul>
                <li>{duty}</li>
                </ul>
             
              </div>
            })}
          </article>
        </div>


}
        
        </>
      }