import SelectionValidation from "./SelectionValidation";

export default function SubStringDropMenu({handleValue, useArray, reset, load, data, main, sub1, sub2, sub3, sub4}) {
    if(reset){
      return(
        <select>
          <option key={useArray[0]} value={useArray[0]}>{useArray[0]}</option>
        </select>
      );
    };
    if(load && data !==undefined){
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
    );
  };