import styles from "./Navicon.module.css"

export default function NaviconMenu({content, wideLabel, narrowLabel}){
return(
    // <div className={styles.navicon}>
    //     <label className={styles.button} htmlFor={'checkbox' + wideLabel}>
    //         <span className={styles.narrow}>{narrowLabel}</span>
    //         <span className={styles.wide}>{wideLabel}</span>
    //     </label>
    //     <input type="checkbox" className={styles.checkbox} id={'checkbox' + wideLabel}/>
    //     <div className={styles.content}>{content}</div>
    // </div>
    <div className={styles.navicon}>
        <button className={styles.naviconButton} popovertarget={'popovercontent' + wideLabel} popovertargetaction="show" htmlFor={'checkbox' + wideLabel}>
            <span className={styles.narrow}>{narrowLabel}</span>
            <span className={styles.wide}>{wideLabel}</span>
        </button>
        {/* <input type="checkbox" popoverTarget="" className={styles.checkbox} id={'checkbox' + wideLabel}/> */}
        <div className={styles.naviconContent} id={'popovercontent' + wideLabel} popover="auto">{content}</div>
    </div> 
)}

//It's a label positioned over the top of a a checbox, accepts content as a prop.
//Idea for this is just a reusable navicon menu that will hide content and open when checkbox is checked.
//Currently using this for the main navigation tab and the settings menu