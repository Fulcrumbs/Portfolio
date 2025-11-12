import styles from './Page.module.css'

export default function CssPracticePage(){
    return(
        <div className={styles.page}>
            <div className={styles.gridpage}>GridPage
                <div>content</div>
                <div>content</div>
            </div>
        </div>
    )
}