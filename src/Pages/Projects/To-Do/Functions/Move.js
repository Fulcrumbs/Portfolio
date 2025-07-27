import { arrayMove } from "@dnd-kit/sortable";

export default function Move(columns, activeID, overID){
    // Clone the columns to avoid mutating state directly
    const updatedColumns = { ...columns };

    /*Find the source column (the one the task is currently in)
      keys(columns) will return the column name keys as an array. 
      As it is an array .find works as an array method.
      .some returns boolean if any match
      So if I'm undertanding right we soucecolumn is = to the first column that finds a task that matches activeID by first
      .some will return true on a match, which then returns columns[columnName] to .find which becomes source column
    */ 
    const sourceColumn = Object.keys(columns).find((columnName) => 
      columns[columnName].some((todo) => todo.ID === activeID)
    );
    const overColumn = Object.keys(columns).find((columnName) => 
      columns[columnName].some((todo) => todo.ID === overID) 
    )|| overID;
    
    if (!sourceColumn || !overID || !columns[overColumn]) {
      return columns; // Do nothing if invalid
    }

    if(sourceColumn === overColumn){
        const oldIndex = columns[sourceColumn].findIndex((todo) => todo.ID === activeID);
        const newIndex = columns[sourceColumn].findIndex((todo) => todo.ID === overID);
        updatedColumns[sourceColumn] = arrayMove(columns[sourceColumn], oldIndex, newIndex);
        // const updatedColumns = {
        //   ...columns,
        //   [sourceColumn]: newOrder,
        // }
        return updatedColumns;
    }

    /* Find the task to move
    This one is easier to understand.
    We have the original column, we just now need to specifically identify the task, so we find the task inside that column
    */
    const movingTodo = columns[sourceColumn].find((todo) => todo.ID === activeID);
    if (!movingTodo) return columns;

    /* 
    Remove the task from the source column
    updatedColumns[sourceColumn] becomes = to itself but with all tasks except the task we currently have dragging/dropping
    */
    updatedColumns[sourceColumn] = updatedColumns[sourceColumn].filter((todo) => todo.ID !== activeID);

    /* Add the task to the destination column with updated position
      So newTodoPosition is = to all previous values except position changes to the overID which is = to column names
      The next bit I find weird, I guess it's just updayedColumns are = to itself but is newTodoPosition being added?
    */
    updatedColumns[overColumn] = [
      ...updatedColumns[overColumn],
      { ...movingTodo, Position: overColumn },
    ];
    return updatedColumns;
  }

  // function MovePosition(columns, activeID, overID){
  //   // const sourceColumn = Object.keys(columns).find((columnName) => 
  //   //   columns[columnName].some((todo) => todo.ID === activeID)
  //   // );
  //   // const columnTodos = columns[sourceColumn]
  //   const oldIndex = columns[sourceColumn].findIndex((todo) => todo.ID === activeID);
  //   const newIndex = columns[sourceColumn].findIndex((todo) => todo.ID === overID);
  //   const newOrder = arrayMove(columns[sourceColumn], oldIndex, newIndex);
  //   // if (activeContainer) {
  //   //     const updatedIndex = newOrder.findIndex((todo) => todo.ID === activeID)
  //   //     newOrder[updatedIndex].Position = activeContainer;
  //   //   }
  //   const updatedColumns = {
  //     ...columns,
  //     [sourceColumn]: newOrder,
  //   };
  //   console.log(newOrder)
    
  //   return updatedColumns
  // }