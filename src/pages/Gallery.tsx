import { IonContent, IonPage, IonTitle, IonRow, IonCol, IonIcon } from '@ionic/react';
import './Gallery.css';
import './Home.css'
import React from 'react';
import { chevronBackCircleOutline, chevronForwardCircleOutline } from 'ionicons/icons';

const Gallery: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonRow className="page-dimension">
          <IonIcon
            size="large"
            md={chevronBackCircleOutline}
            onClick={() => { location.href = "/" }}
          />
          <IonCol>
            <IonTitle>Gallery</IonTitle>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Gallery;
