import { IonContent, IonPage, IonTitle, IonRow, IonCol, IonIcon, IonCard, IonHeader, IonItem, IonInput, IonAvatar } from '@ionic/react';
import './Chats.css';
import React, { useState, Profiler, useRef, useEffect } from 'react';
import { chevronBackCircleOutline, pencil, send, man, person, contract, personCircleOutline } from 'ionicons/icons';
import { Routes } from '../Constants/Routes';
import { useHistory } from 'react-router-dom';

const Chats: React.FC = () => {
    const history = useHistory();
    const messageRef = useRef("" as any);
    const navigateTo = (url: any) => {
        history.push(url);
    };
    const [input, setInput] = useState([]);
    const fetchUserInput = (e: any) => {
        setInput(prevState => [...prevState, messageRef.current.focusedValue] as []);
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
                    <IonCol>
                        <IonTitle>Chats</IonTitle>
                    </IonCol>
                </IonRow>
                <IonRow style={{ height: "calc(100%-200px)" }}>
                    <IonCol >
                        <IonCard className="chat-card">
                            <IonRow>
                                <IonCol size="2">
                                    <IonHeader className="group-name">Group name</IonHeader>
                                </IonCol>
                                <IonCol>
                                    <IonIcon icon={pencil} />
                                </IonCol>
                            </IonRow>
                            {input && input.map((item: any, index: any) => {
                                return (
                                    <IonRow key={index}>
                                        <IonCol size="0.5">
                                            <IonIcon icon={personCircleOutline} size="large" />
                                        </IonCol>
                                        <IonCol>
                                            <IonItem className="chat-box" lines="none">{item}</IonItem>
                                        </IonCol>
                                    </IonRow>)
                            })}
                            <IonRow className="chat-input-box">
                                <IonCol>
                                    <IonInput ref={messageRef} className="calender-event display-flex min-height"> <IonIcon className="icon-alignment" onClick={fetchUserInput} icon={send} size="small" /></IonInput>
                                </IonCol>
                            </IonRow>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage >
    );
};

export default Chats;
