import './Artifact.css';
import { useState, useEffect } from 'react';
// import { Signal } from '@preact/signals';

/*todo: move common values to a higher scope to pass to child components*/

/*
This is my main state functionality practice, moving states around and working with them in different ways and trying to keep it neat and tidy
Most complicated thing I'm working on currently.

.css could use work but not important for this I suppose

Currently it sort of works but I don't understand how state works exactly; lack of good resources and chatGPT is outdated by 2 years.

Piece selected>
if feather or flower > auto assign value----- Done :)
if goblet/circlet/sands > pick stat > Auto assign value------Done

Also added so if the error message pops up, it'll reset to drop down menu to a blank state.

React doesn't like null values so I changed them to ''.

todo:
-if piece changes I want it to reset all values to ''.
-Save and Load functions
*/

/*I'm removing this code as it seems redundant 04/11/23:
  <PieceDisplay value={piece} main={mainStat} mainVal={mainValue}/>
  <DisplayNameValue name={selectedStat1} value={statValue1}/>
  <DisplayNameValue name={selectedStat2} value={statValue2}/>
  <DisplayNameValue name={selectedStat3} value={statValue3}/>
  <DisplayNameValue name={selectedStat4} value={statValue4}/>
  <IntegerInputBox selectedStat={mainValue} onEnter={handleMainValue}/>
  {piece !== '' && mainStat !== '' && mainValue !== '' && selectedStat1 !== '' && selectedStat2 !== '' && selectedStat3 !== '' &&
*/
function ArtifactApp(){
  const artPieces = ['', "Flower", "Feather", "Timepiece", "Goblet", "Circlet"]
  const GobletMain = ['',"HP%","DEF%", "ATK%", "Elemental Mastery", "Elemental DMG Bonus"];
  const SandMain = ['',"HP%", "DEF%", "ATK%", "Elemental Mastery", "Energy Recharge"];
  const HatMain = ['', "HP%", "DEF%", "ATK%", "Elemental Mastery", "Critical DMG", "Critical Rate", "Healing Bonus"];
  const substats = ['', "HP", "DEF", "ATK",  "HP%", "DEF%", "ATK%", "Elemental Mastery", "Energy Recharge", "Critical DMG", "Critical Rate"];

  const [piece, setPiece] = useState('')
  const handlePieceSelection = (value) => {setPiece(value)}
  const handleMainSelection = (value) => (setMainStat(value))

  const [mainStat, setMainStat] = useState('')
  useEffect(() => {MainStat(piece);}, [piece]);
  function MainStat(piece){
    switch(piece){
      case "Flower":
        setMainStat("HP");
        return;
      case "Feather":
        setMainStat("ATK");
        return;
      default:
        setMainStat('')
        return;
    }
  }

  const [mainValue, setMainValue] = useState('')
  useEffect(() => {MainValue(mainStat)}, [mainStat]);
  function MainValue(mainStat){
    switch(mainStat){
      case '':
        setMainValue('')
        return;
      case "HP":
        setMainValue("100")
        return;
      case "ATK":
        setMainValue("todo1")
        return;
      case "HP%":
        setMainValue("todo")
        return;
      case "DEF%":
        setMainValue("Value go here")
        return;
      case "ATK%":
        setMainValue("words words")
        return;
      case "Energy Recharge":
        setMainValue("huh")
        return;
      case "Elemental Mastery":
        setMainValue("this stuff confusing")
        return;
      case "Healing Bonus":
        setMainValue("hey")
        return;
      case "Elemental DMG Bonus":
        setMainValue("ugh")
        return;
      case "Critical DMG":
        setMainValue("moving varibles and values around is tough :(")
        return;
      case "Critical Rate":
        setMainValue("good stat")
        return;   
      default:
        setMainValue('')
        return;
    }
  }


  // //How can I take this and make it a function? Something like: making smaller objects?
  // const substat1 = CreateSub(mainStat, substats)
  // const substat2 = CreateSub(mainStat, substats)
  // const substat3 = CreateSub(mainStat, substats)
  // const substat4 = CreateSub(mainStat, substats)


  const [selectedStat1, setSelectedStat1] = useState('') //the value of the drop down box.
  const handleSelectedStat1 = (value) => {setSelectedStat1(value)}
  const [statValue1, setStatValue1] = useState('')//This works currently, displays correct values
  const handleStatValue1 = (input) => { setStatValue1(input)}

  const [selectedStat2, setSelectedStat2] = useState('')
  const handleSelectedStat2 = (value) => {setSelectedStat2(value)}
  const [statValue2, setStatValue2] = useState('')
  const handleStatValue2 = (input) => { setStatValue2(input)}

  const [selectedStat3, setSelectedStat3] = useState('')
  const handleSelectedStat3 = (value) => {setSelectedStat3(value)}
  const [statValue3, setStatValue3] = useState('')
  const handleStatValue3 = (input) => { setStatValue3(input)}

  const [selectedStat4, setSelectedStat4] = useState('')
  const handleSelectedStat4 = (value) => {setSelectedStat4(value)}
  const [statValue4, setStatValue4] = useState('')
  const handleStatValue4 = (input) => { setStatValue4(input)}

  const handleLoad = (input =>{})
  const handleSave = (input => {})
  const a = ObjectCreate(piece, mainStat, mainValue, selectedStat1, statValue1, selectedStat2, statValue2, selectedStat3, statValue3, selectedStat4, statValue4)
  
  //const a = ObjectCreate(piece, mainStat, mainValue, substat1.Name, substat1.Value, substat2.Name, substat2.Value, substat3.Name, substat3.Value, substat4.Name, substat4.Value)
  return(
  <div className='app'>
    <div className='C1'>
      <div className='C2'>
        <div className='C3'>
          
          <div className='MSDDM'> {/*Main Stat Drop Down Menu*/}
          <label for='piece'>Enter piece: <PieceStringDropMenu id='piece' onChange={handlePieceSelection} useArray={artPieces}/></label>
          {piece === "Timepiece" && (
          <MainStringDropMenu  piece={piece} onChange={handleMainSelection} useArray={SandMain}/>
          )}
          {piece === "Goblet" && (
          <MainStringDropMenu piece={piece} onChange={handleMainSelection} useArray={GobletMain}/>
          )}
          {piece === "Circlet" && (<MainStringDropMenu piece={piece} onChange={handleMainSelection} useArray={HatMain}/>)}
          </div>
          <legend>Substats</legend>
          <div className='SSDDM'>
          {mainStat !== '' && (
          <div>
          <SubStringDropMenu  main={mainStat} 
                              sub1={selectedStat1}
                              sub2={selectedStat2} 
                              sub3={selectedStat3}
                              sub4={selectedStat4}
                              useArray={substats}
                              onChange={handleSelectedStat1}/>{selectedStat1 !== '' &&(
          <IntegerInputBox selectedStat={selectedStat1} onEnter={handleStatValue1}/>)}
          </div>
          )}

          {selectedStat1 !== '' && statValue1 !== ''  &&(
          <div>
          <SubStringDropMenu  main={mainStat} 
                              sub1={selectedStat1} 
                              sub2={selectedStat2}
                              sub3={selectedStat3}
                              sub4={selectedStat4}
                              useArray={substats} 
                              onChange={handleSelectedStat2}/>{selectedStat2 !== '' &&(
          <IntegerInputBox selectedStat={selectedStat2} onEnter={handleStatValue2}/>)}
          </div>
          )}

          {selectedStat2 !== '' && statValue2 !== '' && (
          <div>
          <SubStringDropMenu  main={mainStat} 
                              sub1={selectedStat1} 
                              sub2={selectedStat2} 
                              sub3={selectedStat3}
                              sub4={selectedStat4}
                              useArray={substats} 
                              onChange={handleSelectedStat3}/>
          {selectedStat3 !== '' &&(
          <IntegerInputBox selectedStat={selectedStat3} onEnter={handleStatValue3}/>)}
          </div>
          )}

          {selectedStat3 !== '' && statValue3 !== '' &&(
          <div>
          <SubStringDropMenu  main={mainStat} 
                              sub1={selectedStat1} 
                              sub2={selectedStat2} 
                              sub3={selectedStat3}
                              sub4={selectedStat4}
                              useArray={substats}
                              onChange={handleSelectedStat4}/>{selectedStat4 !== '' &&(
          <IntegerInputBox selectedStat={selectedStat4} onEnter={handleStatValue4}/>)}
          </div>
          )}
         </div>
        </div>
      </div>
      {/* {substat4.Name !== '' && substat4.Value !== '' &&(
      <div className='displayContainer'>
      <DisplayArtifact artifact={a}/>
      </div>)} */}
      {selectedStat4 !== '' && statValue4 !== '' &&(
      <div className='displayContainer'>
      <DisplayArtifact artifact={a}/>
      </div>)}

      <div className='optionsMenu'>
        <button onClick={handleSave}>Save</button>
        <button onClick={handleLoad}>Load</button>
      </div>
    </div>
  </div>
  )
}

/* Combined the below commented code into the DisplayArtifact function.
// function PieceDisplay({value, main, mainVal}){
//   return(
//     <>
//     <p>{"Piece:"} {value}</p>
//     <p>{"Main:"} {main} {"Value:"} {mainVal}</p>
//     </>
//   )
// }
// function DisplayNameValue({name, value}){
//   return(
//     <p>{name} : {value}</p>
//   )
// }
*/
function DisplayArtifact({artifact}){
  return(
    <>
    <p>{"Piece:"} {artifact.Piece}</p>
    <p>{"Main:"} {artifact.MainName} {"Value:"} {artifact.MainStat} </p>
    <p>{artifact.SubName1} : {artifact.SubValue1}</p>
    <p>{artifact.SubName2} : {artifact.SubValue2}</p>
    <p>{artifact.SubName3} : {artifact.SubValue3}</p>
    <p>{artifact.SubName4} : {artifact.SubValue4}</p>
    </>
  )
}

/* I'm removing the below commented code as it seems redundant: 04/11/2023
// const [pieceVal, setPieceVal] = useState('')
// setPieceVal(passThisValue)
// value={pieceVal || ''}
// const passThisValue=event.target.value
// onChange(passThisValue)
*/
// function PieceStringDropMenu({onChange, useArray}) {
//   const array = useArray.map((stat) => (
//     <option key={stat} value={stat}>{stat}</option>));
//   const handleMenu = (event) => {
//     onChange(event.target.value)
//   }
//   return (
//   <select onChange={handleMenu}>
//     {array}
//   </select>
// );
// }

function PieceStringDropMenu({onChange, useArray}) {
  return (
  <select onChange={(event) => onChange(event.target.value)}>
    {useArray.map((stat) => (
      <option key={stat} value={stat}>{stat}</option>))}
  </select>
);
}

/* I'm removing the below commented code as it seems redundant: 04/11/2023
// const [StrVal, setStrVal] = useState('');
// setStrVal(passThisValue) value={StrVal || ''}
//const passThisValue=event.target.value
//onChange(passThisValue)
---This is the old version of the same code but not sure what's easier to understand, assigning stuff to variables, making code longer
---but more readable (maybe?) or the below code which is more concise. 05/11/2023 
// function MainStringDropMenu({onChange, useArray}) {
//   const array = useArray.map((stat) => (
//     <option key={stat} value={stat}>{stat}</option>));
//   const handleMenu = (event) => {
//     onChange(event.target.value)
//   }
//   return (
//     <select onChange={handleMenu}> 
//       {array}
//     </select>
//   );
// }
*/
function MainStringDropMenu({onChange, useArray}) {
  return (
    <select onChange={(event) => {onChange(event.target.value)}}> 
      {useArray.map((stat) => (
        <option key={stat} value={stat}>{stat}</option>))}
    </select>
  );
}


/*Created to more easily display and potentially save and load artifacts when I make those functions.
*/
function ObjectCreate(p, mn, ms, sn1, sv1, sn2, sv2, sn3, sv3, sn4, sv4){
  const artifact = {
    Piece: p, 
    MainName: mn,
    MainStat: ms,
    SubName1: sn1,
    SubValue1: sv1,
    SubName2: sn2,
    SubValue2: sv2,
    SubName3: sn3,
    SubValue3: sv3,
    SubName4: sn4,
    SubValue4: sv4,
  };
  return artifact;
}

// function CreateSub(ms, array){
//   const [subName, setSubName] = useState('');
//   const handleSubName = (value) => {setSubName(value)};

//   const [statValue, setStatValue] = useState('');
//   const handleStatValue = (input) => {setStatValue(input)};

//   const substat={
//     Name: subName,
//     Value: statValue
//   };
//   if(substat.Name !== '' && substat.Value !== ''){
//     return substat;
//   };
// }

/* I'm removing the below commented code as it seems redundant: 04/11/2023
// value={StrVal || ''}
// const [StrVal, setStrVal] = useState('')
// const passThisValue=event.target.value
// setStrVal(passThisValue);
// setStrVal('');
// console.log(StrVal)
---Old version
// function SubStringDropMenu({onChange, main, sub1, sub2, sub3, sub4, useArray}) {
//   const array = useArray.map((stat) => (
//     <option key={stat} value={stat}>{stat}</option>));
//   const handleMenu = (event) => {
//   if(selectionValidation(event.target.value, main, sub1, sub2, sub3, sub4)){
//     onChange(event.target.value);
//   }
//   else{
//     alert("IMPOSSIBLE");
//     event.target.value = '';
//   }
//   }
//   return (
//   <select onChange={handleMenu}>
//     {array}
//   </select>
// );
// }
*/
function SubStringDropMenu({onChange, main, sub1, sub2, sub3, sub4, useArray}) {
  return (
  <select onChange={(event) => {
    if(selectionValidation(event.target.value, main, sub1, sub2, sub3, sub4)){
      onChange(event.target.value);
    }
    else{
      alert("IMPOSSIBLE");
      event.target.value = '';
    }}}>
    {useArray.map((stat) => (
    <option key={stat} value={stat}>{stat}</option>))}
  </select>
);
}

// function valueReset(){
//   setMainStat(null)
//   setSelectedStat1(null)
//   setSelectedStat2(null)
//   setSelectedStat3(null)
//   setSelectedStat4(null)
//   setStatValue1(null)
//   setStatValue2(null)
//   setStatValue3(null)
//   setStatValue4(null)
// }

function ValidSubStatValues(uinput, sn){
  let modVal = [];
  const val = uinput;
  let low;
  let high;
  switch (sn)//Using the actual values but not the practical values
  {
    case "Elemental Mastery":
        modVal = [16, 19, 21, 23]; //16.32, 18.65, 20.98, 23.31
        low = 16;
        high = 140;
        if (val >= low && val <= high && (val % modVal[0] === 0 | val % modVal[1] === 0 | val % modVal[2] === 0 | val % modVal[3] === 0)) return true;
        return false;
    case "Energy Recharge":
        modVal = [4.5, 5.2, 5.8, 6.5]; //4.53, 5.18, 5.83, 6.48
        low = 4.5;
        high = 39;
        if (val >= low && val <= high && (val % modVal[0] === 0 | val % modVal[1] === 0 | val % modVal[2] === 0 | val % modVal[3] === 0)) return true;
        return false;
    case "ATK":
        modVal = [14, 16, 18, 19]; //13.62, 15.56, 17.51, 19.45
        low = 13.62;
        high = 117;
        if (val >= low && val <= high && (val % modVal[0] === 0 | val % modVal[1] === 0 | val % modVal[2] === 0 | val % modVal[3] === 0)) return true;
        return false;
    case "DEF":
        modVal= [16, 19, 21, 23]; //16.2, 18.52, 20.83, 23.15
        low = 16;
        high = 139;
        if (val >= low && val <= high && (val % modVal[0] === 0 | val % modVal[1] === 0 | val % modVal[2] === 0 | val % modVal[3] === 0)) return true;
        return false;
    case "HP":
        modVal=[209, 239, 269, 299]; //209.13, 239, 268.88, 298.75
        low = 209;
        high = 1794;
        if (val >= low && val <= high && (val % modVal[0] === 0 | val % modVal[1] === 0 | val % modVal[2] === 0 | val % modVal[3] === 0)) return true;
        return false;
    case "ATK%":
        modVal = [4.1, 4.7, 5.3, 5.8]; //4.08, 4.66, 5.25, 5.83
        low = 4.1;
        high = 35;
        if (val >= low && val <= high && (val % modVal[0] === 0 | val % modVal[1] === 0 | val % modVal[2] === 0 | val % modVal[3] === 0)) return true;
        return false;
    case "DEF%":
        modVal=[5.1, 5.8, 6.6, 7.3]; //5.1, 5.83, 6.56, 7.29
        low = 5.1;
        high = 43.8;
        if (val >= low && val <= high && (val % modVal[0] === 0 | val % modVal[1] === 0 | val % modVal[2] === 0 | val % modVal[3] === 0)) return true;
        return false;
    case "HP%":
        modVal=[4.1, 4.7, 5.3, 5.8]; //4.08, 4.66, 5.25, 5.83
        low = 4.1;
        high = 35;
        if (val >= low && val <= high && (val % modVal[0] === 0 | val % modVal[1] === 0 | val % modVal[2] === 0 | val % modVal[3] === 0)) return true;
        return false;
    case "Critical DMG":
        modVal = [5.4, 6.2, 7, 7.8];// 5.44, 6.22, 6.99, 7.77
        low = 5.4;
        high = 46.8;
        if (val >= low && val <= high && (val % modVal[0] === 0 | val % modVal[1] === 0 | val % modVal[2] === 0 | val % modVal[3] === 0)) return true;
        return false;
    case "Critical Rate":
        modVal = [2.7, 3.1, 3.5, 3.9];// 2.72, 3.11, 3.5, 3.89
        low = 2.7;
        high = 23.4;
        if (val >= low && val <= high && (val % modVal[0] === 0 | val % modVal[1] === 0 | val % modVal[2] === 0 | val % modVal[3] === 0)) return true;
        return false;
    default:
        console.log("Invalid Entry");
        return false;
  }
}

function selectionValidation(value, main ,sub1, sub2, sub3, sub4){
  return (value !== main && value !== sub1 && value !==sub2 && value !== sub3 && value !== sub4 && main !== '') ? true : false;
}

function IntegerInputBox({onEnter, selectedStat}){
  const handleKey = (event) => {
    if(event.key === "Enter"){
      if(selectedStat){
        let inputVal = event.target.value; //simplfies it slightly for only two instances, guess it saves a few characters.
        let valid = ValidSubStatValues(inputVal, selectedStat)
        if (valid){
          onEnter(inputVal)
        }
        else{
          alert('nah m8');
          event.target.value= '';
        }
      }
      else{
      alert('bad');
      }
    }
  };
  return (
    <>
    <input placeholder='Substat Value'
    onChange={(event) => event.target.value}
    onKeyDown={handleKey}
    />
    </>
  );
}

export default ArtifactApp;

// function IntegerInputBox({onEnter, selectedStat}) {
//   const [inputVal, setInputVal] = useState('');
//   const handleKey = (event) => {
//     if(event.key === "Enter"){
//       if(selectedStat){
//       let valid = ValidSubStatValues(inputVal, selectedStat)
//       if (valid){
//         onEnter(inputVal)
//         setInputVal(inputVal);
//       }
//       else{
//         alert('nah m8');
//         setInputVal('');
//       }
//     }
//     else{
//     alert('bad');
//     setInputVal('');
//   }
//   }
//   };
//   return (
//     <>
//     {/* <StringDropMenu onChange={setSelectedStat}/> */}
//     <input type="text"
//     value={inputVal}
//     onChange={(event) => setInputVal(event.target.value)}
//     onKeyDown={handleKey}
//     />
//     </>
//   );
// }



/* <option value={null}></option>
    <option value="Elemental Mastery">Elemental Mastery</option>
    <option value="Critical DMG">Crit DMG</option>
    <option value="Critical Rate">Crit Rate</option>
    <option value="ATK%">ATK %</option>
    <option value="DEF%">DEF %</option>
    <option value="HP%">HP %</option>
    <option value="Energy Recharge">Energy Recharge</option> 
    
    <option value="0"></option>
    <option value="Flower">Flower</option>
    <option value="Feather">Feather</option>
    <option value="Timepiece">Timepiece</option>
    <option value="Goblet">Goblet</option>
    <option value="Circlet">Circlet</option>
    
*/

