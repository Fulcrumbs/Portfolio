import './Artifact.css';
import { useState, useEffect } from 'react';


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
-if piece changes I want it to reset all values to ''. ## resets but not visually? ----Done 30/03/24 Values reset visually as well.
-Save and Load functions. ##Save works but load doesn't, 
I can see artifact values are saved to localstorage but load doesn't populate my object-----Done 30/03/24 Values save, load and populate the fields :)
-Artifact levels + main values
-Sets 2p and 4p optimizer
-Save more than 1 piece, specific pieces
-figure out how to load individual selected pieces
-implement S.R.P(Single Responsibility Principle)
-Populate dropdown list from localstorage (Save an array of stuff? load array of stuff)
-Idea I had is to just move duplicate check to the create/save button and exit with an error if there is a dupe, rather than check if there's a dupe
while assigning states.
*/

// function Piece(statArrays){
//   const [piece, setPiece] = useState('')
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

// //Trying to modularize the big chuck of code into smaller parts 24-01-24
// function Main(piece, statArrays){
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

//   const [mainValue, setMainValue] = useState('')
//   useEffect(() => {MainValue(mainStat)}, [mainStat]);

//   function MainValue(mainStat){
//     switch(mainStat){
//       case '':
//         setMainValue('')
//         return;
//       case "HP":
//         setMainValue("100")
//         return;
//       case "ATK":
//         setMainValue("todo1")
//         return;
//       case "HP%":
//         setMainValue("todo")
//         return;
//       case "DEF%":
//         setMainValue("Value go here")
//         return;
//       case "ATK%":
//         setMainValue("words words")
//         return;
//       case "Energy Recharge":
//         setMainValue("huh")
//         return;
//       case "Elemental Mastery":
//         setMainValue("this stuff confusing")
//         return;
//       case "Healing Bonus":
//         setMainValue("hey")
//         return;
//       case "Elemental DMG Bonus":
//         setMainValue("ugh")
//         return;
//       case "Critical DMG":
//         setMainValue("moving varibles and values around is tough :(")
//         return;
//       case "Critical Rate":
//         setMainValue("good stat")
//         return;   
//       default:
//         setMainValue('')
//         return;
//     }
//   }
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

function ArtifactApp(){
  const statArrays = Arrays();

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
  const handleStatValue4 = (input) => {setStatValue4(input)}

  const [reset, setReset] = useState(false)
  const handleValueReset = () =>{
    setReset(true);
  }
  useEffect(() => {
    if (reset) {
    setPiece('');
    setMainValue('');
    setMainStat('');
    setSelectedStat1('');
    setStatValue1('');
    setSelectedStat2('');
    setStatValue2('');
    setSelectedStat3('');
    setStatValue3('');
    setSelectedStat4('');
    setStatValue4('');
    setReset(false);
    console.log(reset);
    }
  }, [reset]);


  const [data, setData] = useState([])
  const [loaded, setLoaded] = useState(false)
  const handleLoad = () => {
    setLoaded(true)
    load('artifact')
  } 
  //Change it here, reuse this part so when I click on the artifact, it'll populate fields.
  //I'll have to save data as an array to become stringyfied? Then I have to change the use effect to load the individual artifacts into a list.
  //So load will load the data array which is made of artifacts like data[0].Piece.
  //I'll have to populate a list based on the loaded array>Click will then populate fields based on the above like data[0].Piece.



  useEffect(()=>{
    if(data !== null){
      setPiece(data.Piece);
      setMainStat(data.MainName);
      setMainValue(data.MainStat);
      setSelectedStat1(data.SubName1);
      setStatValue1(data.SubValue1);
      setSelectedStat2(data.SubName2);
      setStatValue2(data.SubValue2);
      setSelectedStat3(data.SubName3);
      setStatValue3(data.SubValue3);
      setSelectedStat4(data.SubName4);
      setStatValue4(data.SubValue4);
      setLoaded(false)
      console.log('loaded')
      console.log(data)
    }
  },[data])

  
  const load = (key) => {
    const data = localStorage.getItem(key)
    setData(data ? JSON.parse(data) : null); //set data 
  };

  const save = (key, data) =>{
    localStorage.setItem(key, JSON.stringify(data));
    alert('Saved')
  };

  const a = ObjectCreate(piece, 
                        mainStat, mainValue, 
                        selectedStat1, statValue1, 
                        selectedStat2, statValue2, 
                        selectedStat3, statValue3, 
                        selectedStat4, statValue4)
 
  return (
    <div className="app">
      <div className="LrgCont">
        <div className="MedCont">
          <div className="SmlCont">
            <div className="">
        
              <label htmlFor="piece">
                Enter piece:
                <DropMenu
                  id="piece"
                  onChange={handlePieceSelection}
                  useArray={statArrays.artPieces}
                  reset={reset}
                  load={loaded}
                  data={data.Piece}
                />
              </label>
              <MainSelectionDropMenu
                piece={piece}
                handleMainSelection={handleMainSelection}
                statArrays={statArrays}
                reset={reset}
                load={loaded}
                data={data}
              />
            </div>

            <legend>
              Substats:
              <div className="">
                {/* {mainStat !== '' && ( */}
                <div>
                  <SubStringDropMenu
                    main={mainStat}
                    sub1={selectedStat1}
                    sub2={selectedStat2}
                    sub3={selectedStat3}
                    sub4={selectedStat4}
                    useArray={statArrays.substats}
                    reset={reset}
                    load={loaded}
                    data={data.SubName1}
                    onChange={handleSelectedStat1}
                  />
                  {selectedStat1 !== "" && (
                    <IntegerInputBox
                      selectedStat={selectedStat1}
                      onEnter={handleStatValue1}
                      data={data.SubValue1}
                    />
                  )}
                </div>
                {/* )} */}

                {/* {statValue1 !== '' &&( */}
                <div>
                  <SubStringDropMenu
                    main={mainStat}
                    sub1={selectedStat1}
                    sub2={selectedStat2}
                    sub3={selectedStat3}
                    sub4={selectedStat4}
                    useArray={statArrays.substats}
                    reset={reset}
                    load={loaded}
                    data={data.SubName2}
                    onChange={handleSelectedStat2}
                  />
                  {selectedStat2 !== "" && (
                    <IntegerInputBox
                      selectedStat={selectedStat2}
                      onEnter={handleStatValue2}
                      data={data.SubValue2}
                    />
                  )}
                </div>
                {/* )} */}

                {/* {statValue2 !== '' && ( */}
                <div>
                  <SubStringDropMenu
                    main={mainStat}
                    sub1={selectedStat1}
                    sub2={selectedStat2}
                    sub3={selectedStat3}
                    sub4={selectedStat4}
                    useArray={statArrays.substats}
                    reset={reset}
                    load={loaded}
                    data={data.SubName3}
                    onChange={handleSelectedStat3}
                  />
                  {selectedStat3 !== "" && (
                    <IntegerInputBox
                      selectedStat={selectedStat3}
                      onEnter={handleStatValue3}
                      data={data.SubValue3}
                    />
                  )}
                </div>
                {/* )} */}

                {/* {statValue3 !== '' &&( */}
                <div>
                  <SubStringDropMenu
                    main={mainStat}
                    sub1={selectedStat1}
                    sub2={selectedStat2}
                    sub3={selectedStat3}
                    sub4={selectedStat4}
                    useArray={statArrays.substats}
                    reset={reset}
                    load={loaded}
                    data={data.SubName4}
                    onChange={handleSelectedStat4}
                  />
                  {selectedStat4 !== "" && (
                    <IntegerInputBox
                      selectedStat={selectedStat4}
                      onEnter={handleStatValue4}
                      data={data.SubValue4}
                    />
                  )}
                </div>
                {/* )} */}
              </div>
            </legend>
          </div>
        </div>

        {
          /*statValue4 !== '' &&*/ <div className="MedCont">
            <div className="SmlCont">
              <DisplayArtifact artifact={a} />
            </div>
          </div>
        }

        <div className="optionsMenu">
          <button onClick={() => save("artifact", a)}>Save</button>
          <button onClick={handleLoad}>Load</button>
          <button onClick={handleValueReset}>Clear</button>
        </div>
      </div>
    </div>
  );
}

// function LoadReset(useArray, reset, data, load){
//   if(reset){
//     return( //if piece is !'' > Clear Object?
//       <select>
//         <option key={useArray[0]} value={useArray[0]}>{useArray[0]}</option>
//       </select>
//       );
//     }
//     if(load){
//       return(
//       <select>
//         <option key={data} value={data}>{data}</option>
//       </select>
//       )
//     }
// }


function LoadedArtifactMenu(){
  let items ={}
  return(
    <select>
      <option></option>
    </select>
  )
}

function MainSelectionDropMenu({piece, handleMainSelection, statArrays, reset, loaded, data}) {
  if (piece === "Timepiece")
    return (
      <DropMenu
        piece={piece}
        onChange={handleMainSelection}
        useArray={statArrays.sandMain}
        reset={reset}
        load={loaded}
        data={data.Piece}
      />
    );
  if (piece === "Goblet")
    return (
      <DropMenu
        piece={piece}
        onChange={handleMainSelection}
        useArray={statArrays.gobletMain}
        reset={reset}
        load={loaded}
        data={data.Piece}
      />
    );
  if (piece === "Circlet")
    return (
      <DropMenu
        piece={piece}
        onChange={handleMainSelection}
        useArray={statArrays.hatMain}
        reset={reset}
        load={loaded}
        data={data.Piece}
      />
    );
}

function DropMenu({onChange, useArray, reset, load, data}) {
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
    <select onChange={(event) => onChange(event.target.value)}>
    {useArray.map((stat) => (
      <option key={stat} value={stat}>{stat}</option>))}
  </select>
  )
};

function SubStringDropMenu({onChange, useArray, reset, load, data, main, sub1, sub2, sub3, sub4}) {
  if(reset){
    return(
      <select>
        <option key={useArray[0]} value={useArray[0]}>{useArray[0]}</option>
      </select>
    );
  };
  if(load){
    return(
      <select>
        <option key={data} value={data}>{data}</option>
      </select>
    );
  };
  return(
  <select onChange={(e) => {
    if(SelectionValidation(e.target.value, main, sub1, sub2, sub3, sub4)){
      onChange(e.target.value);
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

function SelectionValidation(value, main ,sub1, sub2, sub3, sub4){
  return(value !== main && value !== sub1 && value !== sub2 && value !== sub3 && value !== sub4 && main !== '') ? true : false;
}

// function Valid({value, main, sub1, sub2, sub3, sub4}){
//   if(!SelectionValidation(value, main, sub1, sub2, sub3, sub4)){
//     alert("IMPOSSIBLE")
//     return false;
//   }
//   return true;
// }

function IntegerInputBox({onEnter, selectedStat, data}){
  const handleKey = (e) => {
    if(e.key === "Enter"){
      if(selectedStat){
        let inputVal = e.target.value; //simplfies it slightly for only two instances, guess it saves a few characters.
        let valid = ValidSubStatValues(inputVal, selectedStat)
        if (valid){
          onEnter(inputVal)
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
    <>
      <input placeholder='Substat Value'
      onChange={(event) => event.target.value}
      onKeyDown={handleKey}
      />
    </>
  );
}

/*Created to more easily display and potentially save and load artifacts when I make those functions.*/
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
        if (val >= low && val <= high && (val % modVal[0] === 0 | 
                                          val % modVal[1] === 0 | 
                                          val % modVal[2] === 0 | 
                                          val % modVal[3] === 0)) return true;
        return false;
    case "Energy Recharge":
        modVal = [4.5, 5.2, 5.8, 6.5]; //4.53, 5.18, 5.83, 6.48
        low = 4.5;
        high = 39;
        if (val >= low && val <= high && (val % modVal[0] === 0 | 
                                          val % modVal[1] === 0 | 
                                          val % modVal[2] === 0 | 
                                          val % modVal[3] === 0)) return true;
        return false;
    case "ATK":
        modVal = [14, 16, 18, 19]; //13.62, 15.56, 17.51, 19.45
        low = 13.62;
        high = 117;
        if (val >= low && val <= high && (val % modVal[0] === 0 | 
                                          val % modVal[1] === 0 | 
                                          val % modVal[2] === 0 | 
                                          val % modVal[3] === 0)) return true;
        return false;
    case "DEF":
        modVal= [16, 19, 21, 23]; //16.2, 18.52, 20.83, 23.15
        low = 16;
        high = 139;
        if (val >= low && val <= high && (val % modVal[0] === 0 | 
                                          val % modVal[1] === 0 | 
                                          val % modVal[2] === 0 | 
                                          val % modVal[3] === 0)) return true;
        return false;
    case "HP":
        modVal=[209, 239, 269, 299]; //209.13, 239, 268.88, 298.75
        low = 209;
        high = 1794;
        if (val >= low && val <= high && (val % modVal[0] === 0 | 
                                          val % modVal[1] === 0 | 
                                          val % modVal[2] === 0 | 
                                          val % modVal[3] === 0)) return true;
        return false;
    case "ATK%":
        modVal = [4.1, 4.7, 5.3, 5.8]; //4.08, 4.66, 5.25, 5.83
        low = 4.1;
        high = 35;
        if (val >= low && val <= high && (val % modVal[0] === 0 | 
                                          val % modVal[1] === 0 | 
                                          val % modVal[2] === 0 | 
                                          val % modVal[3] === 0)) return true;
        return false;
    case "DEF%":
        modVal=[5.1, 5.8, 6.6, 7.3]; //5.1, 5.83, 6.56, 7.29
        low = 5.1;
        high = 43.8;
        if (val >= low && val <= high && (val % modVal[0] === 0 | 
                                          val % modVal[1] === 0 | 
                                          val % modVal[2] === 0 | 
                                          val % modVal[3] === 0)) return true;
        return false;
    case "HP%":
        modVal=[4.1, 4.7, 5.3, 5.8]; //4.08, 4.66, 5.25, 5.83
        low = 4.1;
        high = 35;
        if (val >= low && val <= high && (val % modVal[0] === 0 | 
                                          val % modVal[1] === 0 | 
                                          val % modVal[2] === 0 | 
                                          val % modVal[3] === 0)) return true;
        return false;
    case "Critical DMG":
        modVal = [5.4, 6.2, 7, 7.8];// 5.44, 6.22, 6.99, 7.77
        low = 5.4;
        high = 46.8;
        if (val >= low && val <= high && (val % modVal[0] === 0 | 
                                          val % modVal[1] === 0 | 
                                          val % modVal[2] === 0 | 
                                          val % modVal[3] === 0)) return true;
        return false;
    case "Critical Rate":
        modVal = [2.7, 3.1, 3.5, 3.9];// 2.72, 3.11, 3.5, 3.89
        low = 2.7;
        high = 23.4;
        if (val >= low && val <= high && (val % modVal[0] === 0 | 
                                          val % modVal[1] === 0 | 
                                          val % modVal[2] === 0 | 
                                          val % modVal[3] === 0)) return true;
        return false;
    default:
        console.log("Invalid Entry");
        return false;
  }
}

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

function Arrays(){
  const statSelector = {
    artPieces: ['', "Flower", "Feather", "Timepiece", "Goblet", "Circlet"],
    gobletMain: ['',"HP%","DEF%", "ATK%", "Elemental Mastery", "Elemental DMG Bonus"],
    sandMain: ['',"HP%", "DEF%", "ATK%", "Elemental Mastery", "Energy Recharge"],
    hatMain: ['', "HP%", "DEF%", "ATK%", "Elemental Mastery", "Critical DMG", "Critical Rate", "Healing Bonus"],
    substats: ['', "HP", "DEF", "ATK",  "HP%", "DEF%", "ATK%", "Elemental Mastery", "Energy Recharge", "Critical DMG", "Critical Rate"],
  }
return statSelector;
}

export default ArtifactApp;