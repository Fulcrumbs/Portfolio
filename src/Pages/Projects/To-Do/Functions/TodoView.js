import ModalFunction from "../Components/Modal";
import { useState } from "react";
import save from "./Save";

/**
 * This function will be for the Sortable components, which are buttons, that when clicked, I guess this function will populate the
 * CreateTodo.js component with the information inside the clicked sortable component
 * 
 * onClick needs to be added to the sortables? then we'll pass this function into the sortable onclick function. 
 * Need a delete button which will be in here.
 * We'll get the id and use the ID to populate the form fields with the information in the todo task
 * 
 * Get todo.ID > form field equal todo.Description.
 * 
 * 
 */
export default function TodoView({columnState, task, modalState}){
    const[edit, setEdit] = useState(false);
    const [editedTodo, setEditedTodo] = useState({
        ID: task.ID, 
        Title: task.Title,
        Desc: task.Desc,
        GoalStart: task.GoalStart,
        Deadline: task.Deadline
        }
    );

    function deleteTask(task, columnState){
        //find tasks and remove it from columns
        console.log(task, columnState);
        const {columns, setColumns} = columnState;
        const sourceColumn = Object.keys(columns).find((columnName) => //Column we need to remove task from
        columns[columnName].some((todo) => todo.ID === task.ID))
        if(!sourceColumn) return;

        const updatedColumns = {
            ...columns,
            [sourceColumn]: columns[sourceColumn].filter((todo) => todo.ID !== task.ID), //function to save column after confirmation
        }
        
        if(window.confirm('Delete task?')){
            setColumns(updatedColumns)
            window.alert('Deleted', task)
            save('todoList', updatedColumns);
            return
        }
        window.alert('Deletion cancelled')
        return
        
    };

    

    function handleChange(e){
        setEditedTodo({...editedTodo,
            [e.target.name]: e.target.value
        })
    };

    function editTask(){
       //find tasks and remove it from columns
        console.log(task, columnState);
        const {columns, setColumns} = columnState;
        const sourceColumn = Object.keys(columns).find((columnName) => //Column we need to remove task from
        columns[columnName].some((todo) => todo.ID === task.ID))
        if(!sourceColumn) return;

        const updatedColumn = columns[sourceColumn].map(
            (todo) => todo.ID === task.ID ? {...todo, ...editedTodo}: todo) //function to save column after confirmation
        
        const updatedColumns = {
            ...columns,
            [sourceColumn]: updatedColumn, //function to save column after confirmation
        }
        if(window.confirm('Edit task?')){
            setColumns(updatedColumns)
            setEdit(false)
            window.alert('Edited', task)
            save('todoList', updatedColumns);
            return
        }
        window.alert('Deletion cancelled')
        setEdit(false)
        return
    }

    const editContent = (
        <>
            <input className="editTitle" autoComplete="off" type='text' onChange={handleChange} name='Title' id="Title" placeholder="Title" maxLength={30} value={editedTodo.Title}></input>
            <textarea type='text' autoComplete="off" onChange={handleChange} name='Desc' id='Desc' placeholder="Description" value={editedTodo.Desc}></textarea>
            {/* <h3>Start Date: {task.GoalStart} - Finish by: {task.Deadline}</h3> */}
            <div className="buttonrow">
            <button className='osrsButtonSml' onClick={editTask}>Confirm Edit</button>
            <button className='osrsButtonSml' onClick={() => {setEdit(false)}}>Cancel Edit</button>
            <button className='osrsButtonSml' onClick={() => deleteTask(task, columnState)}>Delete Task</button>
            </div>
        </>
    )
   // &#10060;
   const content = (
        <>
        <h2 className="viewTitle">Title: {task.Title}</h2>
        <p>Description: {task.Desc}</p>
        {/* <h3>GoalStart: {task.GoalStart}</h3> */}
        <h3>Deadline: {task.Deadline}</h3>
        
        <button className="osrsButtonSml" onClick={() => setEdit(true)}>Edit Task</button>
        </>
    )
return(
    <ModalFunction content={edit ? editContent: content} modalState={modalState}/>
)
};