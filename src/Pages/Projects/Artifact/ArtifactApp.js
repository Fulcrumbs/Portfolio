import './Artifact.css';
import { useState, useEffect } from 'react';
import IntegerInputBox from './Components/IntergerInputBox';
import Arrays from './Components/Arrays';
import SubStringDropMenu from './Components/SubStringDropMenu';
import MainSelectionDropMenu from './Components/MainSelectionDropMenu';
import DropMenu from './Components/DropMenu';
import save from './Components/Save';
import load from './Components/Load';
import CritValue from './Components/CritValue';

/*
This is my main state functionality practice, moving states around and working with them in different ways and trying to keep it neat and tidy
Most complicated thing I'm working on currently.

.css could use work but not important for this I suppose

Currently it sort of works but I don't understand how state works exactly; lack of good resources and chatGPT is outdated by 2 years.

todo:
-if piece changes I want it to reset all values to ''. ## resets but not visually? ----Done 30/03/24 Values reset visually as well.
-Artifact levels + main values
-Sets 2p and 4p optimizer
-implement S.R.P(Single Responsibility Principle) - Kind of? I've done lots of different components with mostly one job? 05-04-25
-Idea I had is to just move duplicate check to the create/save button and exit with an error if there is a dupe, rather than check if there's a dupe
while assigning states.
*/

function ArtifactApp(){
  const [artifact, setArtifact] = useState({
    ID: '',
    Piece: {Type:'', Stat:'', Value:''},
    Sub1: {Stat:'', Value:''},
    Sub2: {Stat:'', Value:''},
    Sub3: {Stat:'', Value:''},
    Sub4: {Stat:'', Value:''}
  });
  const emptyArtifact = {
      ID: '',
      Piece: {Type:'', Stat:'', Value:''},
      Sub1: {Stat:'', Value:''},
      Sub2: {Stat:'', Value:''},
      Sub3: {Stat:'', Value:''},
      Sub4: {Stat:'', Value:''}
  };
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState({
    ID: null,
    Piece: {Type:null, Stat:null, Value:null},
    Sub1: {Stat:null, Value:null},
    Sub2: {Stat:null, Value:null},
    Sub3: {Stat:null, Value:null},
    Sub4: {Stat:null, Value:null}
  });
  const [reset, setReset] = useState(false);
  const handleValueReset = () =>{
    setReset(true);
  };
  useEffect(() => {
    if (reset) {
      setArtifact(emptyArtifact)
      setReset(false)
    }
  }, [reset]);

  const handleArtifactValues = (e, parentKey, childKey) => {
    setArtifact({
      ...artifact, 
      [parentKey]:{
      ...artifact[parentKey],
      [childKey]: e.target.value
      }}
    )
  };
  
  function MainStat(piece){
    switch(piece){
      case "Flower":
        setArtifact({...artifact, Piece: {...artifact.Piece, Stat:"HP"}}); //setMainStat("HP")
        return;
      case "Feather":
        setArtifact({...artifact, Piece: {...artifact.Piece, Stat:"ATK"}}); //setMainStat("ATK")
        return;
      default:
        setArtifact({...artifact, Piece: {...artifact.Piece, Stat:""}});//setMainStat('')
        return;
    }
  };
  useEffect(() => {
    if(artifact.Piece.Type){
      MainStat(artifact.Piece.Type)
    }
  }, [artifact?.Piece?.Type]);
  
  function MainValue(mainStat){
    switch(mainStat){
      case '':
        setArtifact({...artifact, Piece: {...artifact.Piece, Value:"1"}});// setMainValue('');
        return;
      case "HP":
        setArtifact({...artifact, Piece: {...artifact.Piece, Value:"2"}}); //setMainValue("100"); 
        return;
      case "ATK":
        setArtifact({...artifact, Piece: {...artifact.Piece, Value:"3"}});//setMainValue("todo1")
        return;
      case "HP%":
        setArtifact({...artifact, Piece: {...artifact.Piece, Value:"4"}});//setMainValue("todo")
        return;
      case "DEF%":
        setArtifact({...artifact, Piece: {...artifact.Piece, Value:"5"}});//setMainValue("Value go here")
        return;
      case "ATK%":
        setArtifact({...artifact, Piece: {...artifact.Piece, Value:"6"}});//setMainValue("words words")
        return;
      case "Energy Recharge":
        setArtifact({...artifact, Piece: {...artifact.Piece, Value:"7"}});//setMainValue("huh")
        return;
      case "Elemental Mastery":
        setArtifact({...artifact, Piece: {...artifact.Piece, Value:"8"}});//setMainValue("this stuff confusing")
        return;
      case "Healing Bonus":
        setArtifact({...artifact, Piece: {...artifact.Piece, Value:"9"}});//setMainValue("hey")
        return;
      case "Elemental DMG Bonus":
        setArtifact({...artifact, Piece: {...artifact.Piece, Value:"10"}});//setMainValue("ugh")
        return;
      case "Critical DMG":
        setArtifact({...artifact, Piece: {...artifact.Piece, Value:"11"}});//setMainValue("moving varibles and values around is tough :(")
        return;
      case "Critical Rate":
        setArtifact({...artifact, Piece: {...artifact.Piece, Value:"12"}});//setMainValue("good stat")
        return;   
      default:
        setArtifact({...artifact, Piece: {...artifact.Piece, Value:""}});//setMainValue('')
        return;
    }
  };
  useEffect(() => {
    if(artifact.Piece.Stat){ 
      MainValue(artifact.Piece.Stat)
    }
  }, [artifact?.Piece?.Stat]);
  
  const [loaded, setLoaded] = useState(false)
  const handleLoad = () => {
    load('artifact', setData)
    setLoaded(true)
  };
  useEffect(()=>{
    if(selectedData && loaded){
      setArtifact(selectedData)
      console.log('Option selected, loaded:', selectedData)
    }
  },[selectedData]);
  
  const [cv, setCv] = useState(0);
  useEffect(()=>{
    setCv(CritValue(artifact));
  },[artifact]);
  
  return (
    !artifact ? 'Loading...' :
    <div className="app">
      <div className="LrgCont">
        <div className="MedCont">
          <div className="SmlCont">
            <div className="">
        
              <label htmlFor="piece">
                Enter piece:
                <DropMenu
                  handleValue={(e) => handleArtifactValues(e, "Piece", "Type")} //handlePieceSelection
                  useArray={Arrays().artPieces}
                  reset={reset}
                  load={loaded}
                  data={selectedData.Piece.Type}
                />
              </label>

              <MainSelectionDropMenu
                piece={artifact.Piece.Stat}//Piece //would probably access this similar to parentKey ChildKey?
                handleValue={(e) => handleArtifactValues(e, "Piece", "Stat")} //handleMainSelection
                statArrays={Arrays()}
                reset={reset}
                load={loaded}
                data={selectedData.Piece.Stat}
              />
            </div>

            <legend>
              Substats:
              <div>
                {/* {mainStat !== '' && ( */}
                <div>
                  <SubStringDropMenu
                    main={artifact.Piece.Stat} //   mainStat
                    sub1={artifact.Sub1.Stat} //selectedStat1
                    sub2={artifact.Sub2.Stat}//selectedStat2
                    sub3={artifact.Sub3.Stat}//selectedStat3
                    sub4={artifact.Sub4.Stat}//selectedStat4
                    useArray={Arrays().substats}
                    reset={reset}
                    load={loaded}
                    data={selectedData.Sub1.Stat}
                    handleValue={(e) => handleArtifactValues(e, "Sub1", "Stat")} //handleSelectedStat1
                  />
                  {artifact.Sub1.Stat !== "" && (
                    <IntegerInputBox
                      selectedStat={artifact.Sub1.Stat} //selectedStat1
                      handleValue={(e) => handleArtifactValues(e, "Sub1", "Value")} //handleStatValue1
                      data={selectedData.Sub1.Value}
                    />
                  )}
                </div>
                {/* )} */}

                {/* {statValue1 !== '' &&( */}
                <div>
                  <SubStringDropMenu
                    main={artifact.Piece.Stat} //mainStat
                    sub1={artifact.Sub1.Stat} //   selectedStat1  
                    sub2={artifact.Sub2.Stat}//selectedStat2
                    sub3={artifact.Sub3.Stat}//selectedStat3
                    sub4={artifact.Sub4.Stat}// selectedStat4
                    useArray={Arrays().substats}
                    reset={reset}
                    load={loaded}
                    data={selectedData.Sub2.Stat}//
                    handleValue={(e) => handleArtifactValues(e, "Sub2", "Stat")} //handleSelectedStat2
                  />
                  {artifact.Sub2.Stat !== "" && (
                    <IntegerInputBox
                      selectedStat={artifact.Sub2.Stat} //selectedStat2
                      handleValue={(e) => handleArtifactValues(e, "Sub2", "Value")} //handleStatValue2
                      data={selectedData.Sub2.Value} //selectedData.SubValue2
                    />
                  )}
                </div>
                {/* )} */}

                {/* {statValue2 !== '' && ( */}
                <div>
                  <SubStringDropMenu
                    main={artifact.Piece.Stat} //mainStat
                    sub1={artifact.Sub1.Stat} //     selectedStat1
                    sub2={artifact.Sub2.Stat}//selectedStat2
                    sub3={artifact.Sub3.Stat}//selectedStat3
                    sub4={artifact.Sub4.Stat}// selectedStat4
                    useArray={Arrays().substats}
                    reset={reset}
                    load={loaded}
                    data={selectedData.Sub3.Stat} //SubName3
                    handleValue={(e) => handleArtifactValues(e, "Sub3", "Stat")} //handleSelectedStat3
                  />
                  {artifact.Sub3.Stat !== "" && (
                    <IntegerInputBox
                      selectedStat={artifact?.Sub3?.Stat} //selectedStat3
                      handleValue={(e) => handleArtifactValues(e, "Sub3", "Value")}//handleStatValue3
                      data={selectedData.Sub3.Value} 
                    />
                  )}
                </div>
                {/* )} */}

                {/* {statValue3 !== '' &&( */}
                <div>
                  <SubStringDropMenu
                    main={artifact.Piece.Stat} // mainStat      
                    sub1={artifact.Sub1.Stat}//selectedStat1
                    sub2={artifact.Sub2.Stat}//selectedStat2
                    sub3={artifact.Sub3.Stat}//selectedStat3
                    sub4={artifact.Sub4.Stat}//selectedStat4
                    useArray={Arrays().substats}
                    reset={reset}
                    load={loaded}
                    data={selectedData.Sub4.Stat}
                    handleValue={(e) => handleArtifactValues(e, "Sub4", "Stat")} //handleSelectedStat4
                  />
                  {artifact.Sub4.Stat !== "" && (
                    <IntegerInputBox
                      selectedStat={artifact.Sub4.Stat} //selectedStat4
                      handleValue={(e) => handleArtifactValues(e, "Sub4", "Value")} //handleStatValue4
                      data={selectedData.Sub4.Value} 
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
              <DisplayArtifact artifact={artifact} critVal={cv} />
            </div>
          </div>
        }

        <div className="optionsMenu">
          <button onClick={() => save("artifact", artifact)}>Save</button>
          <button onClick={handleLoad}>Load</button>
          <button onClick={handleValueReset}>Clear</button>
        </div>
      </div>
      <LoadedArtifactMenu savedArray={data} setSelectedData={setSelectedData} setLoaded={setLoaded} filter="Flower"/>
      <LoadedArtifactMenu savedArray={data} setSelectedData={setSelectedData} setLoaded={setLoaded} filter="Feather"/>
      <LoadedArtifactMenu savedArray={data} setSelectedData={setSelectedData} setLoaded={setLoaded} filter="Timepiece"/>
      <LoadedArtifactMenu savedArray={data} setSelectedData={setSelectedData} setLoaded={setLoaded} filter="Goblet"/>
      <LoadedArtifactMenu savedArray={data} setSelectedData={setSelectedData} setLoaded={setLoaded} filter="Circlet"/>
    </div>
  );
};


function DisplayArtifact({artifact, critVal}){
  return(
    <>
      <p>{"Piece:"} {artifact.Piece.Type}</p>
      <p>{"Main:"} {artifact.Piece.Stat} {"Value:"} {artifact.Piece.Value} </p>
      <p>{artifact.Sub1.Stat} : {artifact.Sub1.Value}</p>
      <p>{artifact.Sub2.Stat} : {artifact.Sub2.Value}</p>
      <p>{artifact.Sub3.Stat} : {artifact.Sub3.Value}</p>
      <p>{artifact.Sub4.Stat} : {artifact.Sub4.Value}</p>
      <p>Bonus critical damage: {critVal} </p>
    </>
  )
};

function LoadedArtifactMenu({savedArray, filter, setSelectedData, setLoaded}){
  const handleOptions = (e) =>{
    const selectedOption = Number(e.target.value); //The option I've selected in the option ket
    const selectedArtifact = savedArray.find(artifact => artifact.ID === selectedOption) // Compare the selected one and see if it's in the array
    if(selectedArtifact){
      setSelectedData(selectedArtifact)
      setLoaded(true)
    }
    else{
      console.log('No match for', selectedOption)
      console.log('valid options:',savedArray)
    }
  };
  return(
    <select onChange={handleOptions}>
      {savedArray
      .filter((artifact) => artifact.Piece.Type === filter)
      .map((artifact, index) => (
      <option key={artifact.ID} value={artifact.ID}>
      {index} - {artifact.Piece.Type}
      </option>
    ))}
    </select>
  )
};

export default ArtifactApp;