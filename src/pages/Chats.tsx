import { IonContent, IonPage, IonTitle, IonRow, IonCol, IonIcon, IonCard, IonHeader, IonItem, IonInput, IonAvatar } from '@ionic/react';
import './Chats.css';
import React, { useState, Profiler } from 'react';
import { chevronBackCircleOutline, pencil, send, man, person, contract, personCircleOutline } from 'ionicons/icons';

const Chats: React.FC = () => {
    const [input, setInput] = useState("");
    const fetchUserInput = (e: any) => {
        setInput(e.detail.value);
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
                            {input && <IonRow>
                                <IonCol size="0.5">
                                    <IonIcon icon={personCircleOutline} size="large" />
                                </IonCol>
                                <IonCol>
                                    <IonItem lines="none">{input}</IonItem>
                                </IonCol>
                            </IonRow>}
                            <IonRow className="chat-input-box">
                                <IonCol>
                                    <IonInput className="calender-event display-flex min-height" onIonChange={fetchUserInput}> <IonIcon className="icon-alignment" icon={send} size="small" /></IonInput>
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
