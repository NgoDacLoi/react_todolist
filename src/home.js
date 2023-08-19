import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import axios from "axios";

function App() {

  const [selected, setSelected] = useState("");
  const [tasks, setTasks] = useState([])
  const [message, setMessage] = useState("");

  var count=0,total=0;
  const [users, setState] = useState([])
   axios.get("https://jsonplaceholder.typicode.com/users")
   .then((res) => {
     setState(res.data);
   },[])

   const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);

    axios.get(`https://jsonplaceholder.typicode.com/users/${event.target.value}/todos`)
    .then((res) => {
      setTasks(res.data);
     
    },[])
  };

  const completed = { completed: 'true' };

const handleClick = (taskid)=> {
  
    console.log("a")

  };

   return (

    <div>
     <div className="">User
       <select value={selected} onChange={handleChange}>

        {users && users.map(user => 

          
           <option value={user.id} key={user.id}>{user.name}</option>
       
        )}
        </select>
     </div>


     <ul >
         {tasks && tasks.map(task => 
           
          

            <li>{task.title}
            {task.completed ? 
              (
                count++,
                   <div></div>

              ):(total++,
                <button onClick={handleClick(task.id)} >
                Mark done
             </button >
              )}
               {task.completed ? 
            (
                 <div><img src='D:\test _todo\my-app\public\logo192.png'></img></div>

            ):(
                <div><img src='D:\test _todo\my-app\public\logo512.png'></img></div>

            )}
              </li>
            
        )}
              <div>Done {count}/{total+count} tasks</div>

      </ul>
      

     </div>
     
   );
}

export default App;
