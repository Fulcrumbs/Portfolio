
export default function DropMenu({handleValue, useArray, data}) {
    return(
      data ? 
        <select>
          <option key={data} value={data}>{data}</option>
        </select>
      :
      <select onChange={handleValue}>
      {useArray.map((stat) => (
        <option key={stat} value={stat}>{stat}</option>))}
      </select>
    )
  };
  
  /*removed (load, data) from the props, I think these sections don't actually require these 
  removed all this because I've made it more succinct
  // if(reset){
    // return( //if piece is !'' > Clear Object?
      reset ? 
        <select>
          <option key={useArray[0]} value={useArray[0]}>{useArray[0]}</option>
        </select>
      : 
    //   );
    // }
    // if(load){
    //   return(
    //   
    //   )
    // }*/