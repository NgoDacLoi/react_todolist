import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import axios from "axios";
import List from "./list";
import todoApi from "./todoApi";
import React from "react";


function App() {

  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([])


  
  const [users, setState] = useState([])
   axios.get("https://jsonplaceholder.typicode.com/users")
   .then((res) => {
     setState(res.data)
   },[])

   const handleChange = (event) => {
   
{    axios.get(`https://jsonplaceholder.typicode.com/users/${event.target.value}/todos`)
    .then((res) => {
      setTasks(res.data);
    },[])
  }

  setLoading(true);

  };
  
  

  const completetask = async id => {
    const updatedTasks = await todoApi.complete(id,tasks);
    setTasks(updatedTasks);
};
   

  const complete = tasks.filter(
    task => (task.completed),)
  
    const incomplete = tasks.filter(
      task => (!task.completed),)

      const concatenated = incomplete.concat(complete);


   return (

   
     <div className='control'>
        <text>User</text>
       <select    
        onChange={handleChange}>
          
        {users && users.map(user => 
        <option value={user.id} key={user.id}>{user.name}</option>)}
        </select>

        {loading ? (
                <div className="list">
                    <List tasks={concatenated} completeItem={completetask}/>
                    <div className='result'>Done {complete.length} / {concatenated.length } tasks</div>
                </div>
                
            ):
            (
                <div>
                </div>
            )}
     </div>

     
   );
}

export default App;
