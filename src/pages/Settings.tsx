import React from 'react'
import { IonPage, IonContent, IonRow, IonIcon, IonCol, IonTitle } from '@ionic/react'
import { chevronBackCircleOutline } from 'ionicons/icons'
import { Routes } from '../Constants/Routes';
import { useHistory } from 'react-router-dom';
function Settings() {
    const history = useHistory();
    const navigateTo = (url: any) => {
        history.push(url);
    };
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonRow className="page-dimension">
                    <IonIcon
                        size="large"
                        md={chevronBackCircleOutline}
                        onClick={() => { navigateTo(Routes.dashboard.url); }}
                    />
                    <IonCol size="9.5">
                        <IonTitle>Settings</IonTitle>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    )
}

export default Settings
