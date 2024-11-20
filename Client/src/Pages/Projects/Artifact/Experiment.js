// import { useState, useEffect } from 'react';

// //I should not be trying to optimise code, I need to just get it function correctly the way I want first.
// function Experiment(){
//   const statArrays = Arrays();
//   const piece = Piece();
//   // const mainval = MainVal();  // piece, pieceStat, pieceVal as 1 component
//   // //How can I take this and make it a function? Something like: making smaller objects?
//   const substat1 = CreateSub(mainStat, substats)
//   const substat2 = CreateSub(mainStat, substats)
//   const substat3 = CreateSub(mainStat, substats)
//   const substat4 = CreateSub(mainStat, substats)

//   const load = (key) => {
//     const data = localStorage.getItem(key)
//     return data ? JSON.parse(data) : null;
//   };

//   const save = (key, data) =>{
//     localStorage.setItem(key, JSON.stringify(data));
//     alert('Saved')
//   };

//   const a = ObjectCreate(selectedStat1, statValue1, selectedStat2, statValue2, selectedStat3, statValue3, selectedStat4, statValue4)

//   return(
//   <div className='app'>

//     <Piece/>
//     <MainVal />
//     <legend>Substats</legend>
//     <DisplayArtifact artifact={a}/>

//     <div className='optionsMenu'>
//       <button onClick={()=> save('artifact', a)}>Save</button>
//       <button onClick={() => load('artifact')}>Load</button>
//     </div>
//   </div>
//   )
// }


// function Arrays(){
//   const statSelector = {
//     artPieces: ['', "Flower", "Feather", "Timepiece", "Goblet", "Circlet"],
//     gobletMain: ['',"HP%","DEF%", "ATK%", "Elemental Mastery", "Elemental DMG Bonus"],
//     sandMain: ['',"HP%", "DEF%", "ATK%", "Elemental Mastery", "Energy Recharge"],
//     hatMain: ['', "HP%", "DEF%", "ATK%", "Elemental Mastery", "Critical DMG", "Critical Rate", "Healing Bonus"],
//     substats: ['', "HP", "DEF", "ATK",  "HP%", "DEF%", "ATK%", "Elemental Mastery", "Energy Recharge", "Critical DMG", "Critical Rate"],
//   }
//   return(
//     <>
//     <Main statArrays={statSelector}/>
//     <Piece statArrays={statSelector}/>
//     </>
//   )
// }

// function PieceValue(pieceStat){
//     switch(pieceStat){
//       case '':
//         setPieceVal('')
//         return;
//       case "HP":
//         setPieceVal("100")
//         return;
//       case "ATK":
//         setPieceVal("todo1")
//         return;
//       case "HP%":
//         setPieceVal("todo")
//         return;
//       case "DEF%":
//         setPieceVal("Value go here")
//         return;
//       case "ATK%":
//         setPieceVal("words words")
//         return;
//       case "Energy Recharge":
//         setPieceVal("huh")
//         return;
//       case "Elemental Mastery":
//         setPieceVal("this stuff confusing")
//         return;
//       case "Healing Bonus":
//         setPieceVal("hey")
//         return;
//       case "Elemental DMG Bonus":
//         setPieceVal("ugh")
//         return;
//       case "Critical DMG":
//         setPieceVal("moving varibles and values around is tough :(")
//         return;
//       case "Critical Rate":
//         setPieceVal("good stat")
//         return;   
//       default:
//         setPieceVal('')
//         return;
//     }
//   }

// function Piece({statArrays}){
//   const main = {
//     Piece: piece,
//     MainStat: pieceStat,
//     MainValue: pieceVal
//   }
//   const [piece, setPiece] = useState('');
//   const [pieceStat, setPieceStat] =useState('');
//   const [pieceVal, setPieceVal] = useState('');
  
//   useEffect(() => {PieceValue(pieceStat, setPieceVal)}, [pieceStat]);


//   const handlePieceSelection = (value) => {setPiece(value)}
//   return(
//     <>
//     <label for='piece'>Enter piece: 
//       <PieceStringDropMenu id='piece' onChange={handlePieceSelection} useArray={statArrays.artPieces}/>
//     </label>
//     <Main piece={piece}/>
//     <ObjectCreate p={piece}/>
//     </>
//   )
// }
// function MainVal(piece, mainstat, statArrays){
//   return(
//     <>
//     {piece === "Timepiece" && (
//     <MainStringDropMenu  piece={piece} onChange={handleMainSelection} useArray={statArrays.sandMain}/>
//     )}
//     {piece === "Goblet" && (
//       <MainStringDropMenu piece={piece} onChange={handleMainSelection} useArray={statArrays.gobletMain}/>
//     )}
//     {piece === "Circlet" && (
//       <MainStringDropMenu piece={piece} onChange={handleMainSelection} useArray={statArrays.hatMain}/>
//     )}
//     <SubStringDropMenu main={mainValue}/>
//     <ObjectCreate mn={mainStat} ms={mainStat}/>
//     </>
//   )
// }

// function MainStringDropMenu({onChange, useArray}) {
//     return (
//       <select onChange={(event) => {onChange(event.target.value)}}> 
//         {useArray.map((stat) => (
//           <option key={stat} value={stat}>{stat}</option>))}
//       </select>
//     );
// }  
// function MainStat(){
//   const [mainStat, setMainStat] = useState('')
//   useEffect(() => {MainStat(piece);}, [piece]);
//   const handleMainSelection = (value) => (setMainStat(value))

//   function MainStat(piece){
//     switch(piece){
//       case "Flower":
//         setMainStat("HP");
//         return;
//       case "Feather":
//         setMainStat("ATK");
//         return;
//       default:
//         setMainStat('')
//         return;
//     }
//   }
//   return(
//     <MainVal mainstat={mainStat}/>
//   )
// }
// function PieceStringDropMenu({onChange, useArray}) {
//     return ( //if piece is !'' > Clear Object?
//     <select onChange={(event) => onChange(event.target.value)}>
//       {useArray.map((stat) => (
//         <option key={stat} value={stat}>{stat}</option>))}
//     </select>
//   );
// }
// //Trying to modularize the big chuck of code into smaller parts 24-01-24


// function CreateSub(){
//   const [selectedStat, setSelectedStat] = useState('') //the value of the drop down box.
//   const handleSelectedStat = (value) => {setSelectedStat(value)}
//   const [statValue, setStatValue] = useState('')//This works currently, displays correct values
//   const handleStatValue = (input) => { setStatValue(input)}
// return(
//   <>
//     <div>
//     <SubStringDropMenu  
//                         sub1={selectedStat1} 
//                         sub2={selectedStat2}
//                         sub3={selectedStat3}
//                         sub4={selectedStat4}
//                         useArray={statArrays.substats} 
//                         onChange={handleSelectedStat}/>
//     {selectedStat !== '' &&(
//     <IntegerInputBox selectedStat={selectedStat} onEnter={handleStatValue}/>)}
//     </div>
//   </>
// )
// }

// function SubStringDropMenu({useArray}) {
//     return (
//     <select onChange={(event) => {
//       if(selectionValidation(event.target.value, main, sub1, sub2, sub3, sub4)){
//         onChange(event.target.value);
//       }
//       else{
//         alert("IMPOSSIBLE");
//         event.target.value = '';
//       }
//       }}>
//       {useArray.map((stat) => (
//       <option key={stat} value={stat}>{stat}</option>))}
//     </select>
//   );
// }
  
// function ValidSubStatValues(uinput, sn){
//     let modVal = [];
//     const val = uinput;
//     let low;
//     let high;
//     switch (sn)//Using the actual values but not the practical values
//     {
//       case "Elemental Mastery":
//           modVal = [16, 19, 21, 23]; //16.32, 18.65, 20.98, 23.31
//           low = 16;
//           high = 140;
//           if (val >= low && val <= high && (val % modVal[0] === 0 | val % modVal[1] === 0 | val % modVal[2] === 0 | val % modVal[3] === 0)) return true;
//           return false;
//       case "Energy Recharge":
//           modVal = [4.5, 5.2, 5.8, 6.5]; //4.53, 5.18, 5.83, 6.48
//           low = 4.5;
//           high = 39;
//           if (val >= low && val <= high && (val % modVal[0] === 0 | val % modVal[1] === 0 | val % modVal[2] === 0 | val % modVal[3] === 0)) return true;
//           return false;
//       case "ATK":
//           modVal = [14, 16, 18, 19]; //13.62, 15.56, 17.51, 19.45
//           low = 13.62;
//           high = 117;
//           if (val >= low && val <= high && (val % modVal[0] === 0 | val % modVal[1] === 0 | val % modVal[2] === 0 | val % modVal[3] === 0)) return true;
//           return false;
//       case "DEF":
//           modVal= [16, 19, 21, 23]; //16.2, 18.52, 20.83, 23.15
//           low = 16;
//           high = 139;
//           if (val >= low && val <= high && (val % modVal[0] === 0 | val % modVal[1] === 0 | val % modVal[2] === 0 | val % modVal[3] === 0)) return true;
//           return false;
//       case "HP":
//           modVal=[209, 239, 269, 299]; //209.13, 239, 268.88, 298.75
//           low = 209;
//           high = 1794;
//           if (val >= low && val <= high && (val % modVal[0] === 0 | val % modVal[1] === 0 | val % modVal[2] === 0 | val % modVal[3] === 0)) return true;
//           return false;
//       case "ATK%":
//           modVal = [4.1, 4.7, 5.3, 5.8]; //4.08, 4.66, 5.25, 5.83
//           low = 4.1;
//           high = 35;
//           if (val >= low && val <= high && (val % modVal[0] === 0 | val % modVal[1] === 0 | val % modVal[2] === 0 | val % modVal[3] === 0)) return true;
//           return false;
//       case "DEF%":
//           modVal=[5.1, 5.8, 6.6, 7.3]; //5.1, 5.83, 6.56, 7.29
//           low = 5.1;
//           high = 43.8;
//           if (val >= low && val <= high && (val % modVal[0] === 0 | val % modVal[1] === 0 | val % modVal[2] === 0 | val % modVal[3] === 0)) return true;
//           return false;
//       case "HP%":
//           modVal=[4.1, 4.7, 5.3, 5.8]; //4.08, 4.66, 5.25, 5.83
//           low = 4.1;
//           high = 35;
//           if (val >= low && val <= high && (val % modVal[0] === 0 | val % modVal[1] === 0 | val % modVal[2] === 0 | val % modVal[3] === 0)) return true;
//           return false;
//       case "Critical DMG":
//           modVal = [5.4, 6.2, 7, 7.8];// 5.44, 6.22, 6.99, 7.77
//           low = 5.4;
//           high = 46.8;
//           if (val >= low && val <= high && (val % modVal[0] === 0 | val % modVal[1] === 0 | val % modVal[2] === 0 | val % modVal[3] === 0)) return true;
//           return false;
//       case "Critical Rate":
//           modVal = [2.7, 3.1, 3.5, 3.9];// 2.72, 3.11, 3.5, 3.89
//           low = 2.7;
//           high = 23.4;
//           if (val >= low && val <= high && (val % modVal[0] === 0 | val % modVal[1] === 0 | val % modVal[2] === 0 | val % modVal[3] === 0)) return true;
//           return false;
//       default:
//           console.log("Invalid Entry");
//           return false;
//     }
// }
  
// function selectionValidation(value, main ,sub1, sub2, sub3, sub4){
//     return (value !== main && value !== sub1 && value !==sub2 && value !== sub3 && value !== sub4 && main !== '') ? true : false;
// }
  
// function IntegerInputBox({onEnter, selectedStat}){
//     const handleKey = (event) => {
//       if(event.key === "Enter"){
//         if(selectedStat){
//           let inputVal = event.target.value; //simplfies it slightly for only two instances, guess it saves a few characters.
//           let valid = ValidSubStatValues(inputVal, selectedStat)
//           if (valid){
//             onEnter(inputVal)
//           }
//           else{
//             alert('nah m8');
//             event.target.value= '';
//           }
//         }
//         else{
//         alert('bad');
//         }
//       }
//     };
//     return (
//       <>
//       <input placeholder='Substat Value'
//       onChange={(event) => event.target.value}
//       onKeyDown={handleKey}
//       />
//       </>
//     );
// }

// function ObjectCreate(p, mn, ms, sn1, sv1, sn2, sv2, sn3, sv3, sn4, sv4){
//     const artifact = {
//       Piece: p, 
//       MainName: mn,
//       MainStat: ms,
//       SubName1: sn1,
//       SubValue1: sv1,
//       SubName2: sn2,
//       SubValue2: sv2,
//       SubName3: sn3,
//       SubValue3: sv3,
//       SubName4: sn4,
//       SubValue4: sv4,
//     };
//     return artifact;
// }

// function DisplayArtifact({artifact}){
//   return(
//     <>
//     <p>{"Piece:"} {artifact.Piece}</p>
//     <p>{"Main:"} {artifact.MainName} {"Value:"} {artifact.MainStat} </p>
//     <p>{artifact.SubName1} : {artifact.SubValue1}</p>
//     <p>{artifact.SubName2} : {artifact.SubValue2}</p>
//     <p>{artifact.SubName3} : {artifact.SubValue3}</p>
//     <p>{artifact.SubName4} : {artifact.SubValue4}</p>
//     </>
//   )
// }
// export default Experiment;