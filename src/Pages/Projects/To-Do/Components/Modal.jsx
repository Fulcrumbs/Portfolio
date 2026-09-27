import Modal from "react-modal";
import styles from "../TodoApp.module.css"

export default function ModalFunction({content, modalState}){
    const {isOpen, setIsOpen} = modalState

    function closeModal(){
        setIsOpen(false);
    };

    return(
   <> 
        <Modal className={styles.osrsModal} overlayClassName={styles.osrsModalOverlay} isOpen={isOpen} onRequestClose={closeModal}>
            <button className={styles.osrsExit} onClick={closeModal}></button>
            {content}
        </Modal>
    </>
    )
}