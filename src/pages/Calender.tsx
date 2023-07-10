import { IonContent, IonPage, IonRow, IonCol, IonTitle, IonIcon, IonDatetime, IonLabel, IonTextarea, IonInput, IonButton, IonList, IonItem } from '@ionic/react';
import './Calender.css';
import './Home.css';
import React, { useState } from 'react';
import { chevronBackCircleOutline } from 'ionicons/icons';

const Calender: React.FC = () => {
  const [event, setEvent] = useState(false);
  const onAddEvent = () => {
    setEvent(true);
  }
  const onClickAdd = () => {
    alert("Added successfully");
  }
  const onDateChange = (e: any) => {
    setEvent(false);
    console.log("change", e.target.value);
  }
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonRow className="page-dimension">
          <IonIcon
            size="large"
            md={chevronBackCircleOutline}
            onClick={() => { location.href = "/" }}
          />
          <IonCol size="10">
            <IonTitle>Calender</IonTitle>
          </IonCol>
          <IonCol>
            <IonButton onClick={onAddEvent}><span className="plus-icon">+</span>&nbsp; Add Event</IonButton>
          </IonCol>
        </IonRow>
        <IonRow style={{ height: "calc(100% - 150px)" }}>
          <IonCol size="6">
            <IonDatetime
              className="calender-height"
              onIonChange={onDateChange}></IonDatetime>
          </IonCol>
          <IonCol size="5">
            {event ?
              <>
                <IonRow>
                  <IonCol>
                    <IonLabel>Event Name</IonLabel>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonInput className="calender-event min-height"></IonInput>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonLabel>Description</IonLabel>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonTextarea className="calender-event"></IonTextarea>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonButton onClick={onClickAdd}>Add</IonButton>
                  </IonCol>
                </IonRow>
              </>
              :
              <>
                <IonRow>
                  <IonCol>
                    <IonList>
                      <IonItem>Event 1</IonItem>
                      <IonItem>Event 2</IonItem>
                      <IonItem>Event 3</IonItem>
                      <IonItem>Event 4</IonItem>
                    </IonList>
                  </IonCol>
                </IonRow>
              </>
            }
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Calender;
