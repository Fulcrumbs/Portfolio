import Load from "../Functions/Load";

export default function LoadButton({data, setData}){
const handleLoad = () => {
      Load('todoList', setData)
      console.log(data)
    };
return(
    <button onClick={handleLoad}>Load</button>)
};
