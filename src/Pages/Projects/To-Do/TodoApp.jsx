import "./TodoApp.css"; // Import the CSS file for styling
import { useState, useMemo, useEffect } from "react";
import { DndContext, DragOverlay, closestCenter, closestCorners, pointerWithin, rectIntersection, useSensor, useSensors, PointerSensor, useDndMonitor} from "@dnd-kit/core";
// import Draggable from "./Components/Draggable";
// import Droppable from "./Components/Droppable";
// import { arrayMove } from "@dnd-kit/sortable";
// import CreateTodo from "./Components/CreateTodo";
// import LoadButton from "./Components/LoadButton";
import Column from "./Components/Column";
import save from "./Functions/Save";
import Move from "./Functions/Move";
import Load from "./Functions/Load";
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
//so this will push current draggable item into new array, then pop it from the array: started.push(data), unstarted.pop(data) 
/*Quick note 23/04/25 - trying to visualise and conceptulise how this will
fit together, I think all columns should have an assigned array.
when over, parent-id for that entry becomes the column's array-id
when new tasks are created, they're added to the unstarted column array.
So entries should have an parent-id that starts as null.

19-05-25 - Maybe I'll only have their columns and stuff update on save button click? Or all update when they move at all?
    They're updating whenever I move, I think this is the way better solution than a dedicated save button - 28-06-25

Things to learn - 
  -How to track position - Doing this currently, but tasks are tracking their own positions, I should make it so the columns track the tasks
  inside of them.
*/

export default function TodoApp() {
  const [activeID, setActiveID] = useState(null);
  const [columns, setColumns] = useState({
      Completed: [],
      Unstarted: [],
      Incomplete: [],
      Focus: []
    });

  const sensors = useSensors(
      useSensor(PointerSensor,{
        activationConstraint: {
              delay: 150,
              tolerance: 10,
          }
      })
    );

  function DragMonitor({setColumns, setActiveID}){
    useDndMonitor({
        onDragStart({active}){
          setActiveID(active.id)
        },
        onDragEnd({active, over}){
          if(!over) return;
          setColumns(prev => {
            const newOrder = Move(prev, active.id, over.id);
            save("todoList", newOrder);
            return newOrder;
          });
          setActiveID(null);
        },
        onDragCancel(){
          setActiveID(null)
        }
      })
  };
  
  useEffect(() => {
    Load('todoList', columns, setColumns)
  }, [])
  

  return (
    
    <>
    <DndContext sensors={sensors} onDragOver={handleDragOver} collisionDetection={rectIntersection}>
      <DragMonitor setColumns={setColumns} activeID={activeID} setActiveID={setActiveID}/>
       <div className="Page"> 
        <Column items={columns.Focus} columnName='Focus' activeID={activeID} columns={columns} setColumns={setColumns}/>
        <Column items={columns.Incomplete} columnName='Incomplete' activeID={activeID} columns={columns} setColumns={setColumns}/>
        <Column items={columns.Unstarted} columnName='Unstarted' activeID={activeID} columns={columns} setColumns={setColumns}/>   
        <Column items={columns.Completed} columnName='Completed' activeID={activeID} columns={columns} setColumns={setColumns}/>
      </div>
      <DragOverlay>
        {activeID ? <TaskCopy task={findTask(columns, activeID)}/> : null}
      </DragOverlay>
    </DndContext>
    {/* <LoadButton setColumns={setColumns}/> */}
    </>
  );
  
  function TaskCopy({task}){
    if(!task) return null;
    return(
      <button className="osrsButton">{task.Title}</button>
    )
  };

  function findTask(columns, id){
    for(const col in columns){
      const found = columns[col].find(task => task.ID === id)
      if(found) return found;
    }
    return null;
  };
  
  // function handleDragStart(e){
  //   setActiveID(e.active.id)
  // };

  function handleDragOver(e){
    const {active, over} = e;
    console.log("Active:", active.id, "Over:", over?.id);
    if(!over) return;
    console.log("Currently floating over:", over.id)
  }

  // function handleDragEnd(event){
  //   const {active, over} = event;
  //   if(!over) return;
  //   setColumns(prev => {
  //     const newOrder = Move(prev, active.id, over.id);
  //     save("todoList", newOrder);
  //     return newOrder;
  //   });
  //   setActiveID(null);
  // };
}
