import GenshinArtifact from "./Genshin/GenshinArtifact";
import BinomialProb from "./Probability/BinominalProb";
import styles from "./CalcPage.module.css"
import { useState } from "react";
import IncompleteBanner from "../../../Styles/IncompleteBanner";

export default function CompiledCalcFunctions(){
    const [components, setComponents] = useState({
        GA: false, 
        BP: false
    })

    function clickHandler(e){
        const clicked = {};
        const id = e.currentTarget.id
        if (!id) return;
        setComponents(prev => {
            for(const key of Object.keys(prev)){
                clicked[key] = key === id;
            }
        return clicked;
        })
    }

    return(
        <div className={styles.page}>
            <IncompleteBanner/>
            <div id="GA" className={components.GA ? styles.active : styles.inactive } onClick={clickHandler}>
                {/* <GenshinArtifact/> */}
               {components.GA ?  <GenshinArtifact/> : <label style={{gridArea: 'inactiveGA'}}>Genshin Application</label>}
            </div>
            
            <div id="BP" className={components.BP ? styles.active : styles.inactive} onClick={clickHandler}>
                {components.BP ? <BinomialProb/> : <label style={{gridArea: 'inactiveBP'}}>Binominal Probability Calculator</label>}
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