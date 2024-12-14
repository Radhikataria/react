import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
function Todo() {
    const [task, setTask] = useState([{ name: "sample", id: uuidv4(), isDone: false }]);
    const [newTask, setNewTask] = useState("");
    function handleChange(event) {
        setNewTask(() => {
            return event.target.value;
        });
    }
    function addTask() {
        setTask([...task, { name: newTask, id: uuidv4(), isDone: false }]);
        setNewTask("");
    }
    function deleteItem(d_id) {
        setTask(task.filter((todo) => todo.id != d_id));
    }

    function markAsDone(marked_id){
        setTask(task.map((el)=>{
            if(el.id === marked_id){
             return {...el,isDone:true}; //change the existing data.
             
            }
            else
            return el;
          }));
    }
    


    return (
        <>
            <input type="text" value={newTask} onChange={handleChange} />&nbsp;&nbsp;
            <button onClick={addTask}>ADD</button><br /><br /><br />
            <hr />
            <h3>Tasks</h3>
            <ul>
                {task.map((element) => (
                     <li key={element.id}>
                        <span style={element.isDone ? { textDecorationLine: "line-through" } : {}}>{element.name}</span>
                        <button onClick={() => deleteItem(element.id)}>Delete</button>
                        <button onClick={() => markAsDone(element.id)}>Mark As Done</button>
                    </li>
                
                
                ))
                }
            </ul>
        </>
    )
}









export default Todo;