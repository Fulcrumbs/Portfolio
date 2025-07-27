import { useState } from "react";
import save from "../Functions/Save";
import ModalFunction from "./Modal";

export default function CreateTodo({columnState}){
    const {columns, setColumns} = columnState;
    const [isOpen, setIsOpen] = useState(false);  
    const [newTodo, setNewTodo] = useState({
        ID: '', 
        Title: '',
        Desc: '',
        GoalStart: '',
        Deadline: ''
        }
    );

    const content = (
        <form onSubmit={handleSubmit}>
            <input type='text' autoComplete="off" onChange={handleChange} name='Title' id="Title" placeholder="Title" maxLength={30}></input>
            <textarea type='text' autoComplete="off" onChange={handleChange} name='Desc' id='Desc' placeholder="Description"></textarea>
            <input type='date' onChange={handleChange} name='Deadline' id='Deadline'/>
            <button className="osrsButtonSml">Submit</button>
        </form>
    );

    function AddNewTodoToColumn(newTodo, columns){
        const updatedTasks = {
        ...newTodo,
            ID: newTodo.ID || crypto.randomUUID(),
            GoalStart: newTodo.GoalStart || Date()
        }
        const updatedColumn = {
            ...columns,
            Unstarted: [...columns.Unstarted, updatedTasks]
        }
        return updatedColumn
    };

    function handleSubmit(e){
        e.preventDefault(); //stops page from reloading on submit. 
        if(!newTodo.Title || !newTodo.Desc){
            alert("Pick some stuff")
            return
        } 
        const updatedColumn = AddNewTodoToColumn(newTodo, columns)
        console.log(updatedColumn)
        setColumns(updatedColumn)
        setIsOpen(false)
        save('todoList', updatedColumn)
    };

    function handleChange(e){
        setNewTodo({...newTodo,
            [e.target.name]: e.target.value
        })
    };

    return(
        <>
        <button className='osrsButtonSml' onClick={() => setIsOpen(true)}>Add Task</button>
        <ModalFunction content={content} modalState={{isOpen: isOpen, setIsOpen: setIsOpen}} className='add'/> 
        </>
    )
};
