import Load from "../Functions/Load";

export default function LoadButton({setColumns}){
const handleLoad = () => {
      Load('todoList', setColumns)
    };
return(
    <button onClick={handleLoad}>Load</button>)
};
