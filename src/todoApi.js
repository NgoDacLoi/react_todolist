import axios from "axios";


function complete(id,tasks) {
   

    var updatedTasks = tasks.map(task => (task.id === id ? { ...task, completed: true } : task));
    return updatedTasks
    
}


export default {  complete };
