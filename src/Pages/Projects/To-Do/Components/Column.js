import Droppable from "./Droppable";
import Sortable from "./Sortable"
import { rectSwappingStrategy, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";

export default function Column({items, columnName}){
    return(
    <SortableContext items={items.map(task => task.ID)} strategy={rectSwappingStrategy}>
    <div className={columnName + " todo-column border1"}>
        <h1>{columnName}</h1>
        <div className={columnName + " todo-list border2"}>   
            
                <Droppable id={columnName}>
                {items.map(task => (
                    <Sortable key={task.ID} id={task.ID} task={task}/>
                ))}
                </Droppable>            
            
        </div>
    </div>
    </SortableContext>
)}
// <div className="border2">
    //     {Array.from({length: numOfRows}).map((_, index) =>  
    //         <Droppable id={index + id} key={index} index={index}>
    //             {parent === index + id ? data : ''}
    //         </Droppable>
    //     )}
    // </div>
/**
 * <div className="{columnName} todo-column border1">
           <h1>{columnName}</h1>
           {Array.from({length: numOfRows}).map((_, index) =>  
             <Droppable id={index + {columnName}} key={index} index={index}>
               {parent === index + 'started' ? loadedTasks : ''}
             </Droppable>
           )}  
         </div>
 */

        //  <div className={columnName + " todo-column border1"}>
        //     <h1>{columnName}</h1>
        //         <div className={columnName + " todo-column border2"}>
        //         {items.map((task, index) => (
        //             <Sortable key={index} id={`${index} + ${columnName}`} index={index}>
        //                 {parent === `${index} + ${columnName}` ? task.Title : ''}
        //             </Sortable>
        //         ))}
        //         </div>
        // </div>