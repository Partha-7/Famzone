import { IonContent, IonPage, IonTitle, IonRow, IonCol, IonIcon } from '@ionic/react';
import './Chats.css';
import React from 'react';
import { chevronBackCircleOutline } from 'ionicons/icons';

const Chats: React.FC = () => {
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
            </IonContent>
        </IonPage>
    );
};

export default Chats;
