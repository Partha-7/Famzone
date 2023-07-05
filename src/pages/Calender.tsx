import { IonContent, IonPage, IonRow, IonCol, IonTitle, IonIcon } from '@ionic/react';
import './Calender.css';
import './Home.css';
import React from 'react';
import { chevronBackCircleOutline } from 'ionicons/icons';

const Calender: React.FC = () => {
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
            <IonTitle>Calender</IonTitle>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Calender;
