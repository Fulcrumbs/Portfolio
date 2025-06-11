import { useState } from "react";
import save from "./Save";

export default function CreateTodo(){   
   const [newTodo, setNewTodo] = useState({
            ID: '', 
            Title: '',
            Desc: '',
            GoalStart: '',
            Deadline: '',
            Position: 'Unstarted'
            //toggalables?
            // BigTodo: false, //If true enable small tasks?
            // Repeatable: false,
          });
     function handleSubmit(){
        !newTodo.Title || !newTodo.Desc ? alert("Pick some stuff") : save("todoList", newTodo)
        };

    function handleChange(e){
        setNewTodo({...newTodo,
            [e.target.name]: e.target.value
        })
    }
    //spread operator and take the input fields as the tasks
    return(
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} name='Title' id="Title" placeholder="Title"></input>
            <input type='text' onChange={handleChange} name='Desc' id='Desc' placeholder="Description"></input>
            <input type='date' onChange={handleChange} name='Deadline' id='Deadline'/>
            <button>Submit</button>
        </form>
    )
};
