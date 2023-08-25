import { IonContent, IonPage, IonTitle, IonRow, IonCol, IonIcon, IonButton, IonLabel, IonItem } from '@ionic/react';
import './Gallery.css';
import './Home.css'
import React, { useRef, useState } from 'react';
import { chevronBackCircleOutline, duplicate } from 'ionicons/icons';
import { ImagePreview } from './ImagePreview';
import { useHistory } from 'react-router-dom';
import { Routes } from '../Constants/Routes';


const Gallery: React.FC = () => {
  const [itemList, setItemList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const inputRef = useRef(null);
  const history = useHistory();
  const navigateTo = (url: any) => {
    history.push(url);
  };
  const handleClick = () => {
    //@ts-ignore
    inputRef.current.click();
  };
  const handleChangeImage = (e: any) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setItemList(prevState => [...prevState, image] as []);
  }
  function previewImage(e: any) {
    setOpenModal(true);
    const image = e.target.src;
    setSelectedImage(image);
  }
  function closeModal() {
    setOpenModal(false);
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonRow className="page-dimension">
          <IonIcon
            size="large"
            md={chevronBackCircleOutline}
            onClick={() => { navigateTo(Routes.dashboard.url); }}
          />
          <IonCol size="9.5">
            <IonTitle>Gallery</IonTitle>
          </IonCol>
          <IonCol>
            <input
              style={{ display: 'none' }}
              ref={inputRef}
              type="file"
              onChange={handleChangeImage}
              accept="image/*"
            />
            <IonButton onClick={handleClick}><IonIcon icon={duplicate} />&nbsp; Import image</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <div className="displat-flex-images">
              {itemList.map((item: any, index: any) => {
                return <img className="image-size" src={item} key={index} alt="none" height={250} width={250} onClick={previewImage} />
              })}
            </div>
          </IonCol>
        </IonRow>
        <ImagePreview
          image={selectedImage}
          openModal={openModal}
          closeModal={closeModal}
        />
      </IonContent>
    </IonPage>
  );
};

export default Gallery;
