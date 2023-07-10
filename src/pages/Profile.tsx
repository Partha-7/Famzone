import React from 'react'
import { IonPage, IonContent, IonRow, IonCol, IonIcon, IonTitle, IonLabel, IonInput, IonButton, IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
import { chevronBackCircleOutline } from 'ionicons/icons';
import { restrictAlphaAndSplChar } from '../Constants/Constants';

function Profile() {

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
                        <IonTitle>Profile</IonTitle>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="4" offset="1">
                        <IonLabel>*First name</IonLabel>
                        <IonInput className="calender-event min-height"></IonInput>
                    </IonCol>
                    <IonCol size="4">
                        <IonLabel>*Last name</IonLabel>
                        <IonInput className="calender-event min-height"></IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="4" offset="1">
                        <IonLabel>*Email</IonLabel>
                        <IonInput className="calender-event min-height"></IonInput>
                    </IonCol>
                    <IonCol size="1">
                        <IonLabel>Age</IonLabel>
                        <IonInput className="calender-event min-height" type="text" onKeyPress={(e) => restrictAlphaAndSplChar(e)} maxlength={3}></IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="4" offset="1">
                        <IonLabel>Phone</IonLabel>
                        <IonInput className="calender-event min-height" type="text" onKeyPress={(e) => restrictAlphaAndSplChar(e)} maxlength={10} placeholder="+91"></IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="2" offset="1">
                        <IonButton>Update</IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    )
}

export default Profile;
