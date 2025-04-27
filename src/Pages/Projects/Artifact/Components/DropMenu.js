
export default function DropMenu({handleValue, useArray, reset, load, data}) {
    if(reset){
    return( //if piece is !'' > Clear Object?
      <select>
        <option key={useArray[0]} value={useArray[0]}>{useArray[0]}</option>
      </select>
      );
    }
    if(load){
      return(
      <select>
        <option key={data} value={data}>{data}</option>
      </select>
      )
    }
    return(
      <select onChange={handleValue}>
      {useArray.map((stat) => (
        <option key={stat} value={stat}>{stat}</option>))}
    </select>
    )
  };