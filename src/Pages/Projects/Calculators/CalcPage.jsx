import GenshinArtifact from "./Genshin/GenshinArtifact";
import BinomialProb from "./Probability/BinominalProb";
import styles from "./CalcPage.module.css"
import { useState } from "react";

export default function CompiledCalcFunctions(){
    const [clicked, setClicked] = useState(false)
    function clickHandler(e){
        setClicked(!clicked)
    }
    return(
        <div className={styles.page}>
        
            <div className={clicked ? styles.inactive : styles.active} onClick={clickHandler}>
                <GenshinArtifact/>
            </div>
            
            <div className={clicked ? styles.inactive : styles.active} onClick={clickHandler}>
                <BinomialProb/>
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