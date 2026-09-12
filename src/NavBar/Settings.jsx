import styles from "./Settings.module.css"
import CheckoutButton from "../Pages/Checkout"
import NaviconMenu from "../navicon";

export default function Settings(){
    
    const narrowLabel = '⚙️';//⚙  ⚙⛭
    const wideLabel = '⚙️ Settings';
    const content = (
        <div className={styles.page}>
            <div className={styles.themeList}>
                
                <label htmlFor='default'>
                    <input type="radio" name='theme' id='default' defaultChecked/>
                    Default
                </label>

                <label htmlFor='green-theme-toggle'>
                    <input type='radio' name='theme' id='green-theme-toggle'/> 
                    Green theme
                </label>
        
                <label htmlFor='corporate'>
                    <input type='radio' name='theme' id='corporate'/>
                    Corporate theme
                </label>
                
            </div>
            <div className={styles.menuDesign}>
                <label htmlFor="v1">
                    <input type='radio' name='menu'  id='v1'/>
                    Old Menu
                </label>
                <label htmlFor="v2">
                    <input type='radio' name='menu' id='v2' defaultChecked/>
                    New Menu
                </label>
            </div>
            <CheckoutButton/>
        </div>
    )
    return(
        <div className={styles.settings}>
            <NaviconMenu content={content} wideLabel={wideLabel} narrowLabel={narrowLabel}/>
        </div>
    // <div className={styles.themes}>
    //     <label className={styles.themeButton} for='checkbox'>&#9776;</label>
    //     <input type="checkbox" className={styles.checkbox} id='checkbox'  />
    //     <div className={styles.themeList}>
                
    //         <label for='default'>
    //             <input type="radio" name='theme' id='default'/>
    //             Default
    //         </label>

    //         <label for='green-theme-toggle'>
    //             <input type='radio' name='theme' id='green-theme-toggle'/> 
    //             Green theme
    //         </label>
    
    //         <label for='corporate'>
    //             <input type='radio' name='theme' id='corporate'/>
    //             Corporate theme
    //         </label>
    //         <CheckoutButton/>
    //     </div>
    // </div>
)}