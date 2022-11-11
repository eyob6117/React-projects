import React from 'react'
import "./list.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'


    const element1 = <FontAwesomeIcon icon = {faEdit} />
    const element2 = <FontAwesomeIcon icon = {faTrash} />


    // const getLocalStorage = () => {
    //   let list = localStorage.getItem('list');
    //   if (list){
    //     return JSON.parse(localStorage.getItem('list'))
    //   }
    //   else {
    //     return [];
    //   }
    // }
    
    
function List({item,removeItem,editItem}) {
  // const[name,setName] = useState('');
  // const[list,setList] = useState(getLocalStorage());
  // const[isEditing,setIsEditing] = useState(false);
  // const[editID,setEditID] = useState(null);
  // const[alert,setAlert] = useState({
  //   show:false,
  //   msg:'',
  //   type:''})
  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //    if(!name){
  //     //  setAlert({show:true,msg:'please enter value',type:'danger'})
  //         showAlert(true,'danger','please enter value')
  //    }
  //    else if (name && isEditing) {
  //         //deal with edit
  //         setList(list.map((item) => {
  //           return item.id === editID ? {...item,title:name} : item
  //         }))
  //         setEditID(null);
  //         setIsEditing(false)
  //         setName('');
  //         showAlert(true,'sucess','item edited');
  //    }
  //    else {
  //     //show alert
  //     showAlert(true,'sucess','item addes to the list');
  //     const newItem = {id:new Date().getTime().toString(), title : name}
  //     setList([...list,newItem]);
  //     setName('');
  //    }
  // }

 
  // const showAlert = (show = false,type = '',msg = '') => {
  //     setAlert({show,type,msg})
  // }
  // const clearList = () => {
  //   showAlert(true,'danger','Empty list');
  //   setList([]);
  // }
  // const removeItem = (id) => {
  //     showAlert(true,'danger','item removed');
  //     setList(list.filter((item) => item.id !== id))

  // }
  // const editItem = (id) => {
   
  //     const spec = list.find((item) => item.id === id)
  //     setIsEditing(true);
  //     setEditID(id);
  //     setName(spec.title)
  // }
  // useEffect(() => {
  //   localStorage.setItem('list',JSON.stringify(list))
  // },[list])
  return (
   <div className='grocery-list'>
    {item.map((item) => {
       const {id,title} = item;

       return <article key = {id} className = "grocery-item">
            <p className='title'>{title}</p>
            <div className='btn-container'>
                <button type = "button" className='edit-btn' onClick={() => editItem(id)}>
                    {element1}
                </button>
                <button type = "button" className='delete-btn' onClick={() => removeItem(id)}>
                    {element2}
                </button>
            
            </div>
       </article>




{/* <form onSubmit={handleSubmit} className = "grocery-form">   
{alert.show && <Alert {...alert} removeAlert = {showAlert} list = {list}/>}
<h3>Grocery Bud</h3>
<div className="form-control">
  <input type = "text"  className="grocery" placeholder="eg.eggs" value = {name} onChange = {(e) => setName(e.target.value)}/>
  <button type = "submit" className="submit-btn">
    {isEditing ? 'Edit':'submit'}
  </button>
</div>  
<div className="grocery-container">
 <List item = {list} removeItem = {removeItem}
 editItem = {editItem}/>
 {list.length > 0 &&  <button className="clr-btn" onClick={clearList}>clearList</button>}
</div>
</form> */}
    })}
   </div>

  )
}

export default List