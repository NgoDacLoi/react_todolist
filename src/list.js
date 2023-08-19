import logo from './logo.svg';
import './list.css';
import {useState, useEffect} from 'react'
import axios from "axios";
import Item from './item';

function List({tasks,completeItem}) {

 
   return (
    <div className='task' >
   <div  className='font'>Task</div>    
      <ul >
         {tasks.map(task =>
          
            <Item key={task.id} task={task} completeItem={() => completeItem(task.id)} ></Item>
         
        )}  
    
    </ul>
    </div>
   );
}

export default List;
