import {
  IonContent,
  IonPage,
  IonRow,
  IonCol,
  IonTitle,
  IonIcon,
  IonDatetime,
  IonLabel,
  IonTextarea,
  IonInput,
  IonButton,
  IonList,
  IonItem,
  isPlatform,
  IonCard
} from '@ionic/react';
import './Calender.css';
import './Home.css';
import React, { useState, useRef } from 'react';
import { chevronBackCircleOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import { Routes } from '../Constants/Routes';

const Calender: React.FC = () => {
  const [event, setEvent] = useState(false);
  const inputElement = useRef('' as any);
  const dateRef = useRef('' as any);
  const desRef = useRef('' as any);
  const [date, setDate] = useState('');
  const [inputEvent, setInputEvent] = useState('');
  const [descEvent, setDescEvent] = useState('');
  const [eventList, setEventList] = useState([]);
  const isMobile = isPlatform("mobile");
  const history = useHistory();
  const navigateTo = (url: any) => {
    history.push(url);
  };
  const onAddEvent = () => {
    setEvent(true);
  }
  const onClickAdd = () => {
    setDate(`${dateRef.current.activePartsClone.day}/${dateRef.current.activePartsClone.month}/${dateRef.current.activePartsClone.year}`);
    setInputEvent(inputElement.current.focusedValue);
    setDescEvent(desRef.current.focusedValue);
    setEventList(prevState => [...prevState, `${dateRef.current.activePartsClone.day}/${dateRef.current.activePartsClone.month}/${dateRef.current.activePartsClone.year} - ${inputElement.current.focusedValue} - ${desRef.current.focusedValue}`] as []);
    setEvent(false);
  }
  const onDateChange = (e: any) => {
    setEvent(false);
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
          <IonCol size="10">
            <IonTitle>Calender</IonTitle>
          </IonCol>
          <IonCol>
            <IonButton className="add-event-button" onClick={onAddEvent}><span className="plus-icon">+</span>&nbsp; Add Event</IonButton>
          </IonCol>
        </IonRow>
        <IonRow style={{ height: "calc(100% - 150px)" }}>
          <IonCol sizeLg="6" sizeMd="12">
            <IonDatetime
              className="calender-height"
              ref={dateRef}
              onIonChange={onDateChange}></IonDatetime>
          </IonCol>
          <IonCol sizeLg="5" sizeMd="12" className={isMobile ? "mobile-calender-padding" : ""}>
            {event ?
              <>
                <IonRow>
                  <IonCol>
                    <IonLabel>Event Name</IonLabel>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonInput
                      ref={inputElement}
                      className="calender-event min-height"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonLabel>Description</IonLabel>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonTextarea
                      ref={desRef}
                      className="calender-event" />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonButton onClick={onClickAdd}>Add</IonButton>
                  </IonCol>
                </IonRow>
              </>
              :
              eventList.length === 0 ?
                <>
                  <IonRow className="no-event-message">
                    <IonCol offsetLg="5">
                      <h1 className="no-events-text">No Events</h1>
                    </IonCol>
                  </IonRow>
                </>
                :
                <>
                  <IonRow>
                    <IonCol>
                      <IonList>
                        {eventList.map((event: any, index: any) => {
                          return <IonCard className="event-card" key={index}>{event}</IonCard>
                        })}
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
