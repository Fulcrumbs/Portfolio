import "./TodoApp.css"; // Import the CSS file for styling
import { useState, useMemo } from "react";
import { DndContext, closestCenter, closestCorners} from "@dnd-kit/core";
import Draggable from "./Components/Draggable";
import Droppable from "./Components/Droppable";
import { arrayMove } from "@dnd-kit/sortable";
import CreateTodo from "./Components/CreateTodo";
import Column from "./Components/Column";
import LoadButton from "./Components/LoadButton";
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
  // const numOfRows = 10;
  // const [parent, setParent] = useState(null);
  const [data, setData] = useState([]);  //load my tasks into here
  const [activeContainer, setActiveContainer] = useState(null);
  
  
  const completedTasks = useMemo(
    () => data.filter((task) => task.Position === 'Completed'), [data]
  );
  const unstartedTasks = useMemo(
    () => data.filter((task) => task.Position === 'Unstarted'), [data]
  );
  const incompleteTasks = useMemo(
    () => data.filter((task) => task.Position === 'Incomplete'), [data]
  );
  const focusTasks = useMemo(
    () => data.filter((task) => task.Position === 'Focus'), [data]
  );
  // const handleLoad = () => {
  //     Load('todoList', setData)
  //     console.log(data)
  //   };

// const loadedTasks = data.map((task) => (
//     <Draggable id={task.ID}>{task.Title}</Draggable>
// ));

// const draggableMarkup = (
//     <Draggable id='draggable'>Drag me</Draggable>
//   );

//so this will push current draggable item into new array, then pop it from the array: started.push(data), unstarted.pop(data) 
/*Quick note 23/04/25 - trying to visualise and conceptulise how this will
fit together, I think all columns should have an assigned array.
when over, parent-id for that entry becomes the column's array-id
when new tasks are created, they're added to the unstarted column array.
So entries should have an parent-id that starts as null.

19-05-25 - Maybe I'll only have their columns and stuff update on save button click? Or all update when they move at all? 

Things to learn - 
  -How to track position
  -create unique
*/
  return (
    <>
    <DndContext onDragEnd={handleDragEnd} onDragOver={handleDragOver} collisionDetection={closestCorners}>
       <div className="Page"> 
        <Column items={focusTasks} columnName='Focus'/>
        <Column items={incompleteTasks} columnName='Incomplete'/>
        <Column items={unstartedTasks} columnName='Unstarted'/>   
        <Column items={completedTasks} columnName="Completed"/>
      </div> 
    </DndContext>
    <CreateTodo/>
    <LoadButton data={data} setData={setData}/>
    </>
  );

  function isContainer(id){
    const validPositions = ['Completed', 'Unstarted', 'Incomplete', 'Focus']
    return validPositions.includes(id)
  }

  function handleDragOver(e){
    const {active, over} = e;
    if(!over) return;
    console.log(over.id)
    if(isContainer(over.id) && activeContainer !== over.id){
        setActiveContainer(over.id)
        setData((prevItems) => {
          const updatedItems = prevItems.map(item =>
          item.ID === active.id ? { ...item, Position: over.id } : item
        );

      return updatedItems;

      })
  }}

  function handleDragEnd(event){
    const {active, over} = event;
    setData((items) => {
      const oldIndex = items.findIndex((item) => item.ID === active.id);
      const newIndex = items.findIndex((item) => item.ID === over.id);
      const newOrder = arrayMove(items, oldIndex, newIndex);
      if (activeContainer) {
          const updatedIndex = newOrder.findIndex((item) => item.ID === active.id)
          newOrder[updatedIndex].Position = activeContainer;
        }
      console.log(newOrder)
      save("todoList", newOrder);
      return newOrder
    })
  }
}
  // function handleDragEnd(event) {
  //   const {over} = event;
  //   setParent(over ? over.id : null)
  // }


{/* <div className="Completedcolumn todo-column border1">
          <h1 className="completed">Completed</h1>
            <div className="border2 completed">
            {Array.from({length: numOfRows}).map((_, index) =>  
              <Droppable id={index + 'completed'} key={index} index={index}>
                {parent === index + 'completed' ? loadedTasks : ''}
              </Droppable>
            )}
            </div>
        </div> */}
        
        {/* <button onClick={() => save("task", todoTask)}>Save</button> */}
        
        // <div className="Unstartedcolumn todo-column border1">
        //   <h1>Unstarted</h1>
        //   {/* {parent === null || 'Unstarted' ? loadedTasks : null} */}
        //   {Array.from({length: numOfRows}).map((_, index) =>  
        //     <Droppable id={index + 'unstarted'} key={index} index={index}>
        //       {parent === index + 'unstarted' ? loadedTasks : ''}
        //     </Droppable>
        //   )}  
        // </div>


 {/* <div className="Focuscolumn todo-column border1">
          <h1>Focus Task</h1>
            <Column parent={parent} draggableMarkup={draggableMarkup} id={'focus'} numOfRows={numOfRows}/>
            <Droppable id='focus'>
              {parent === 'focus' ? loadedTasks : 'Drop here'}
            </Droppable> 
        </div> */}
        {/* <div className="Incompletecolumn todo-column border1">
          <h1>Started</h1>
          {Array.from({length: numOfRows}).map((_, index) =>  
            <Droppable id={index + 'started'} key={index} index={index}>
              {parent === index + 'started' ? loadedTasks : ''}
            </Droppable>
          )}  
        </div> */}