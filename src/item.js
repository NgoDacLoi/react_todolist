import React from "react";
import './item.css';
import { BsCheckCircle } from "react-icons/bs";
import { BsDashCircle } from "react-icons/bs";

function Item({ task, completeItem }) {
    return (
        <li >
            <div className="item">
            {task.completed &&(
                  
                  <BsCheckCircle className="circle"></BsCheckCircle>
  
                  )
                  }
                    {!task.completed &&(
                    <div className="row">
                    <button type="button" className=" btn-link"  onClick={completeItem} >
                    Mark done
                </button>
                <BsDashCircle className="dash"></BsDashCircle>

                </div>
                
                )
                }
                <span>
                   {task.title}
                </span>
              
                 
                     
                   
            
            </div>
        </li>
    );
}


export default Item;
