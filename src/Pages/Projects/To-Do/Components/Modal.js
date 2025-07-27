import Modal from "react-modal";

export default function ModalFunction({content, modalState}){
    const {isOpen, setIsOpen} = modalState

    function closeModal(){
        setIsOpen(false);
    };

    return(
    <>
        <Modal className='osrsModal' overlayClassName='osrsModalOverlay' isOpen={isOpen} onRequestClose={closeModal}>
            <button className='osrsExit' onClick={closeModal}></button>
            {content}
        </Modal>
    </>
    )
}