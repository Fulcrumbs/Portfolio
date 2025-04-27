import "./TodoApp.css"; // Import the CSS file for styling
import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Draggable from "./Components/Draggable";
import Droppable from "./Components/Droppable";
import save from "./Components/Save";

/*
How do I want this? 
I'm thinking three columns:  Actually maybe four?

/----------------------------------------------------\ ----------------------------
| Priority/Focus | Incomplete | Unstarted | Complete | |                          |
|----------------------------------------------------| |                          |
|    Entry       |    Entry   |    Entry  |  Entry   | |       Description        |
|----------------------------------------------------| |          Area            |
                                                       ----------------------------
----------------   
| Create Entry |
----------------

I think I like the colour coded of Runescapes quest menu, Incomplete = Yellow, Unstarted = Red, Complete = Green
Maybe allow for two kinds of tasks to be made: small goal, big goals.
Big goals can have small tasks inside.
Similar to the runescape quest menu, completed tasks can be stuck with a line through it. - Big tasks only.

One feature I really want is dragable entries. To rearrange and change columns and stuff.
Complete/Incomplete toggle? Or have that depend on which column the task has been dragged to.

Entries: 
Title? - Basically the preview of the smaller entry cells
Goal: Quick summarized goal to be accomplished - eg. File Taxes
Deadline: How long I have to do the task.
Description: More detailed area to increase the specificity and context surrounding the goal 
    eg. I have to have my taxes filed before the end of october.
Smaller tasks/goals (Big Task)-   
    Onclick: strike through with line.
    eg. 1. Collect necessary information / 2. contact tax agent?
When you click the entry: Maybe a side panel with a preview of larger description
Repeatable small goals? Streaks for gamification? Habit builder?
    eg. Do 10 push-ups each day - repeat toggle: On.
    Track amount of completions in a row.


Link entries together? Like cascading size? To improve specificity of goals
Example: Lose weight > Linked smaller entry: Diet > Linked smaller entry: Research dietary requirements

Other buttons should be Create, Edit(This can just be the little pencil symbol in the corner of the description/Title) and Save entries
Date.Now() on creation to track when goal/task is made.
Date.Now() also when goal is completed. 

Issues I can see is like accidental completion/Deletions of tasks if anyone cares about tracking or preserving their accomplishments.
Undo function and return to previous state?
How many previous states should be tracked? 
At what point should state tracking be updated? On saves? Certain amount of changes? Clearly don't want to track the last 10 total state changes
if each state change is just a singular character.
Hidden deleted entries part? Then if someone really wants it gone gone, they can delete it from the deleted area.

> Have Make entry open a -create task pop-up-
> Have the column it's assigned to be saved when put into a column.
  Something like: On column change, set column: default column will be unstarted column


*/

export default function TodoApp() {
  const numOfRows = 10
  const [parent, setParent] = useState(null);
  const draggableMarkup = (
    <Draggable id='draggable'>Drag me</Draggable>
  );
  
  const [todoTask, setTodoTask] = useState({
        ID: '', 
        Title: "",
        Desc: "", //Limit to 200chars?
        GoalStart: "",//Date.Now on creation
        Deadline: "",
        //toggalables?
        // BigTodo: false, //If true enable small tasks?
        // Repeatable: false,
        // Completed: false,
        Column: "Unstarted"
      });
const task = (
    <Draggable id={todoTask.ID}>{todoTask.Title}</Draggable>
  );
  
  const objectOfArrays = {
    unstarted: [],
    complete: [],
    started: [],
    focus: [],
  };

  //so this will push current draggable item into new array, then pop it from the array: started.push(data), unstarted.pop(data) 
  
  /**
    <div className="CompletedcolumnTitle">Completed</div>
        <div className="CompletedcolumnEntry">
          <input
            type="text"
            placeholder="Title"
            value={todoTask.Title}
            onChange={(e) => setTodoTask({ ...todoTask, Title: e.target.value })}
          />
          <textarea
            placeholder="Description"
            value={todoTask.Desc}
            onChange={(e) => setTodoTask({ ...todoTask, Desc: e.target.value })}
          ></textarea>
        </div> 
        */
  

        /*Quick note 23/04/25 - trying to visualise and conceptulise how this will
        fit together, I think all columns should have an assigned array.
        when over, parent-id for that entry becomes the column's array-id
        when new tasks are created, they're added to the unstarted column array.
        So entries should have an parent-id that starts as null.*/
  return (
    <DndContext onDragEnd={handleDragEnd}>
       <div className="Page">
        

        {/* {containers.map((id) => (
          <Droppable key={id} id={id}>
            {parent === id ? draggableMarkup : 'Drop here'}
          </Droppable>
          ))} */}
        
        <div className="Focuscolumn todo-column">
          <h1>Focus Task</h1>
  
            <Droppable id='focus'>
              {parent === 'focus' ? draggableMarkup : 'Drop here'}
            </Droppable> 
        </div>
    
        <div className="Incompletecolumn todo-column">
          <h1>Started</h1>
          {Array.from({length: numOfRows}).map((_, index) =>  
            <Droppable id={index + 'started'} key={index} index={index}>
              {parent === index + 'started' ? draggableMarkup : 'Drop here'}
            </Droppable>
          )}  
        </div>

        <div className="Unstartedcolumn todo-column">
          <h1>Unstarted</h1>
          {parent === null ? draggableMarkup : null}
          {Array.from({length: numOfRows}).map((_, index) =>  
            <Droppable id={index + 'unstarted'} key={index} index={index}>
              {parent === index + 'unstarted' ? draggableMarkup : 'Drop here'}
            </Droppable>
          )}  
        </div>

        <div className="Completedcolumn todo-column">
          <h1>Completed</h1>
          {Array.from({length: numOfRows}).map((_, index) =>  
            <Droppable id={index + 'completed'} key={index} index={index}>
              {parent === index + 'completed' ? draggableMarkup : 'Drop here'}
            </Droppable>
          )}  
        </div> 
        <button onClick={() => save("task", todoTask)}>Save</button>
      </div> 
    </DndContext>
  );
  
  function handleDragEnd(event) {
  const {over} = event;
  setParent(over ? over.id : null)
}
}

