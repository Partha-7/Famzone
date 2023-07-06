import { IonContent, IonPage, IonTitle, IonRow, IonCol, IonIcon, IonButton } from '@ionic/react';
import './Gallery.css';
import './Home.css'
import React, { useRef } from 'react';
import { chevronBackCircleOutline, chevronForwardCircleOutline, duplicate } from 'ionicons/icons';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { itemData } from '../Constants/Constants';


const Gallery: React.FC = () => {
  const inputRef = useRef(null);
  const handleClick = () => {
    //@ts-ignore
    inputRef.current.click();
  };
  const handleFileChange = (event: any) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
  };
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonRow className="page-dimension">
          <IonIcon
            size="large"
            md={chevronBackCircleOutline}
            onClick={() => { location.href = "/" }}
          />
          <IonCol size="9.5">
            <IonTitle>Gallery</IonTitle>
          </IonCol>
          <IonCol>
            <input
              style={{ display: 'none' }}
              ref={inputRef}
              type="file"
              onChange={handleFileChange}
              accept="image/*"
            />
            <IonButton onClick={handleClick}><IonIcon icon={duplicate} />&nbsp; Import image</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <ImageList sx={{ width: "calc(100%)", height: 320 }} cols={3} rowHeight={164}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Gallery;
