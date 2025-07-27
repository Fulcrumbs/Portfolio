import './ReplayImages.css';
import Modal from 'react-modal';
import { useState } from 'react';

/*
Just want this to be able to display my replays and screenshots in an appealing way for practice. 
Simple layout practice for different media.
*/

function ReplayImages(){

    const videoUrls = [
        '/Videos/ShaddollDespia_VS_Lyrilcus.mp4',
        '/Videos/Altergeist_VS_Dragonmaid.mp4'
    ];
    const imageUrls = [
        '/Images/Decklist_Altergeist.png',
        '/Images/Decklist_Dogmatika.png',
        '/Images/Decklist_Floowandereeze.png',
        '/Images/Decklist_Ghostrick.png',
        '/Images/Decklist_Labryth.png',
        '/Images/Decklist_LiveTwin.png',
        '/Images/Decklist_Mathmech.png',
        '/Images/Decklist_Mikanko.png',
        '/Images/Decklist_NaturiaRunick.png',
        '/Images/Decklist_Prankids.png',
        '/Images/Decklist_Prediction_Princess.png',
        '/Images/Decklist_PUNKash.png',
        '/Images/Decklist_PUNKBystial.png',
        '/Images/Decklist_Rikka.png',
        '/Images/Decklist_ShaddollPerformage.png',
        '/Images/Decklist_Solfachord.png',
        '/Images/Decklist_SprightLiveTwin.png',
        '/Images/Decklist_SprightMelffy.png',
        '/Images/Decklist_Sunavalon.png',
        '/Images/Decklist_SushipMagikey.png',
        '/Images/Decklist_Sylvan.png',
        '/Images/Decklist_WeatherPainters.png',
        '/Images/Festival_Synchro.png',
        '/Images/Festival_FusionXyz.png'
    ];

    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const [clickedImage, setClickedImage] = useState('');
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (image) => {
        setClickedImage(image)
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const previousImg = () => {
        if (currentImgIndex > 0) {
        setCurrentImgIndex(currentImgIndex - 10);
        }
    };
    const nextImg = () => {
        if (currentImgIndex < imageUrls.length - 1) {
        setCurrentImgIndex(currentImgIndex + 10);
        }
    };

    const [currentVidIndex, setCurrentVidIndex] = useState(0);
    
    const previousVid = () => {
        if (currentVidIndex > 0) {
        setCurrentVidIndex(currentVidIndex - 1);
        console.log("video should change to" )
        }
    };

    const nextVid = () => {
        if (currentVidIndex < videoUrls.length - 1) {
        setCurrentVidIndex(currentVidIndex + 1);
        }
    };

    
    const videoUrl = videoUrls[currentVidIndex];

    return(
        <body className="container">
            <div className='videoGallery'>
                <button className='btn leftarrow' onClick={previousVid} disabled={currentVidIndex === 0}/>
                <video src={videoUrl} controls>
                    <source src={videoUrl} type='video/mp4'/>
                </video>
                <button className='btn rightarrow' onClick={nextVid} disabled={currentVidIndex === videoUrls.length - 1}/>
            </div>

            <div className="imageGallery">
                <button className='btn leftarrow' onClick={previousImg} disabled={currentImgIndex === 0}/>
                {imageUrls.slice(currentImgIndex, currentImgIndex+10).map((image, index) => (
                    <img
                    key={index}
                    src={image}
                    onClick={() => openModal(image)}
                    alt={'Yugioh Decklist ${index +1}'}
                    />))
                };
                <button className='btn rightarrow' onClick={nextImg} disabled={currentImgIndex >= imageUrls.length - 10}/>
            </div>
            
            <Modal className="modal" isOpen={isModalOpen} onRequestClose={closeModal} ContentLabel="Image Modal" >
                <img src={clickedImage} alt="Yugioh Decklist" onClick={closeModal}/>
            </Modal>

        </body>
    )
}

export default ReplayImages;
