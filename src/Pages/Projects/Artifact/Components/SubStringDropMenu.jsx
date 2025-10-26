import SelectionValidation from "../Functions/SelectionValidation";
import handleError from "../Functions/handleError";

export default function SubStringDropMenu({handleValue, useArray, data, artifact}) {
    return(
      data ? 
      <select>
        <option key={data} value={data}>{data}</option>
      </select>
      :
      <select onChange={(e) => {
        SelectionValidation(e.target.value, artifact) ? 
          handleValue(e)
        : 
          handleError(e, artifact)
        }}>

        {useArray.map((stat) => (
        <option key={stat} value={stat}>{stat}</option>))}
      </select>
    );
  };
/* Reformatting above code for simplifciation of below code.
main, sub1, sub2, sub3, sub4
reset, load,
  if(reset){
      return(
        <select>
          <option key={useArray[0]} value={useArray[0]}>{useArray[0]}</option>
        </select>
      );
    };
    if(load && data !== undefined){
      return(
        <select>
          <option key={data} value={data}>{data}</option>
        </select>
      );
    };
    return(
    <select onChange={(e) => {
      if(SelectionValidation(e.target.value, main, sub1, sub2, sub3, sub4)){
        handleValue(e);
      }
      else{
        alert("IMPOSSIBLE");
        e.target.value = '';
      }}}>
      {useArray.map((stat) => (
      <option key={stat} value={stat}>{stat}</option>))}
    </select>
    ); */