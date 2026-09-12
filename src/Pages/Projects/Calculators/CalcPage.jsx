import GenshinArtifact from "./Genshin/GenshinArtifact";
import BinomialProb from "./Probability/BinomialProb";
import styles from "./CalcPage.module.css"
import { useState } from "react";
import IncompleteBanner from "../../../Styles/IncompleteBanner";

export default function CompiledCalcFunctions(){
    const [activeComponent, setActiveComponent] = useState({
        GA: false, 
        BP: false
    })

    function clickHandler(e){
        const clickedComponent = {};
        const id = e.currentTarget.id
        if (!id) return;
        setActiveComponent(prev => {
            for(const key of Object.keys(prev)){
                clickedComponent[key] = key === id; //Good for toggling a whole list when you only need 1 true statement, go through whole list 1 will evaluate true the rest will evaluate false.
            }
        return clickedComponent;
        })
    }

    return(
        <div className={styles.page}>
            <IncompleteBanner/>
            <div id="GA" className={activeComponent.GA ? styles.active : styles.inactive } onClick={clickHandler}>
                {/* <GenshinArtifact/> */}
               {activeComponent.GA ?  <GenshinArtifact/> : <label style={{gridArea: 'inactiveGA'}}>Genshin Application</label>}
            </div>
            
            <div id="BP" className={activeComponent.BP ? styles.active : styles.inactive} onClick={clickHandler}>
                {activeComponent.BP ? <BinomialProb/> : <label style={{gridArea: 'inactiveBP'}}>Binominal Probability Calculator</label>}
            </div>
        
        </div>
    )
}

/**
 * Onclick
 *  clicked div becomes centered and correctly sized - one css property named active/clicked etc
 *  rest of divs go into place in a row below
 *  
 */