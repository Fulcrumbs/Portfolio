export default function handleDragEnd(event){
    const {active, over} = event;
    // if(active.id !== over.id){
      setData((items) => {
      // const activeID = extractID(active.id)
      // const overID = extractID(over.id)
      const oldIndex = items.findIndex((item) => item.ID === active.id);
      const newIndex = items.findIndex((item) => item.ID === over.id);
      const newOrder = arrayMove(items, oldIndex, newIndex);
      // const columnName = over.id.split("/").pop();
      // if (columnName) {
      //   newOrder[newIndex].Position = columnName;
      // }
      save("todoList", newOrder);
      return newOrder
    })
  }


    //       function handleDragEnd(event){
  //   const {active, over} = event;
  //   if(active.id !== over.id){
  //     setData((items) => {
  //     const activeID = extractID(active.id)
  //     // console.log("Active ID:", activeID, active.id)
  //     const overID = extractID(over.id)
  //     // console.log("Over ID:", overID, over.id)
  //     const oldIndex = items.findIndex((item) => item.ID === activeID);
  //     const newIndex = items.findIndex((item) => item.ID === overID);
  //     const newOrder = arrayMove(items, oldIndex, newIndex);
  //     const columnName = over.id.split("/").pop();
  //     // console.log(newOrder)
  //     // console.log("newIndex", newIndex)
  //     // console.log("Old index", oldIndex)
  //     // console.log("Column name:", columnName)
  //     // const movedItemIndex = newOrder.findIndex((item) => item.ID === activeID);
  //     if (columnName) {
  //       newOrder[newIndex].Position = columnName;
  //     }
  //     save("todoList", newOrder);
  //     return newOrder
  //   })}
  // }