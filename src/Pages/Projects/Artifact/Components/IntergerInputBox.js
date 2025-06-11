 import ValidSubStatValues from "../Functions/ValidSubStatValues";
 
 export default function IntegerInputBox({handleValue, selectedStat, data}){
    const handleKey = (e) => {
      if(e.key === "Enter"){
        if(selectedStat){
          let inputVal = e.target.value; //simplfies it slightly for only two instances, guess it saves a few characters.
          let valid = ValidSubStatValues(inputVal, selectedStat)
          if (valid){
            handleValue(e)
          }
          else{
            alert('nah m8');
            e.target.value= '';
          }
        }
        else{
        alert('bad');
        }
      }
    };
  
    if(data){
      return(
        <input placeholder={data} onChange = {() => data}/>
      )
    }
  
    return (
        <input placeholder='Substat Value' onChange={(e) => e.target.value} onKeyDown={handleKey}/>
    );
  };