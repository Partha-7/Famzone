import { IonContent, IonPage, IonTitle, IonRow, IonCol, IonIcon, IonButton, IonList, IonItem } from '@ionic/react';
import './Members.css';
import React from 'react';
import { chevronBackCircleOutline, personAdd } from 'ionicons/icons';

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
          <IonCol size="9">
            <IonTitle>Members</IonTitle>
          </IonCol>
          <IonCol>
            <IonButton><IonIcon icon={personAdd} />&nbsp; Add Participant</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonList>
              <IonItem>1. Participant</IonItem>
              <IonItem>2. Participant</IonItem>
              <IonItem>3. Participant</IonItem>
              <IonItem>4. Participant</IonItem>
              <IonItem>5. Participant</IonItem>
            </IonList>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Members;
