import { IonContent, IonPage, IonTitle, IonRow, IonCol, IonIcon } from '@ionic/react';
import './Members.css';
import React from 'react';
import { chevronBackCircleOutline } from 'ionicons/icons';

const Members: React.FC = () => {
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
            <IonTitle>Members</IonTitle>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Members;
