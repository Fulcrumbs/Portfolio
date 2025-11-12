import Droppable from "./Droppable";
import Sortable from "./Sortable"
import { rectSwappingStrategy, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import CreateTodo from "./CreateTodo";

export default function Column({items, columnName, activeID, columns, setColumns}){
    return(
    <SortableContext items={items?.map(task => task.ID) ?? []} strategy={rectSwappingStrategy}>
    <div className={columnName + " todo-column border1"}>
        <h1>{columnName}</h1>
        <div className={columnName + " todo-list border2"}>   
          <Droppable id={columnName}>
          {(items||[]).map(task => (
              <Sortable style={ task.ID === activeID ? {visibility: 'hidden'} : {}} columns={columns} setColumns={setColumns} key={task.ID} id={task.ID} task={task}/>
          ))}
          </Droppable>              
        </div>
        {columnName === 'Unstarted' && (<CreateTodo columns={columns} setColumns={setColumns}/>)}
    </div>
    </SortableContext>
)}