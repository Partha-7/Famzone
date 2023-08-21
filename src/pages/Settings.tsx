import React from 'react'
import { IonPage, IonContent, IonRow, IonIcon, IonCol, IonTitle } from '@ionic/react'
import { chevronBackCircleOutline } from 'ionicons/icons'
function Settings() {
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonRow className="page-dimension">
                    <IonIcon
                        size="large"
                        md={chevronBackCircleOutline}
                        onClick={() => { location.href = "/" }}
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
