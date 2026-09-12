import save from "../Functions/Save"

export default function OptionMenu({props}){
    return (
      <div className="optionsMenu">
        <button onClick={() => save("artifact", props.artifact)}>Save</button>
        {/* <button onClick={handleLoad}>Load</button> */}
        <button onClick={props.handleValueReset}>Get rid of the damn values</button>
      </div>
    );}