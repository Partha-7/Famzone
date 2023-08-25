import React from 'react'
import { IonPage, IonContent, IonRow, IonCol, IonIcon, IonTitle, IonLabel, IonInput, IonButton, IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
import { chevronBackCircleOutline } from 'ionicons/icons';
import { restrictAlphaAndSplChar } from '../Constants/Constants';
import { useHistory } from 'react-router-dom';
import { Routes } from '../Constants/Routes';

function Profile() {
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
                        <IonTitle>Profile</IonTitle>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol sizeLg="4" offsetLg="1" sizeMd="10" sizeXs="11">
                        <IonLabel>*First name</IonLabel>
                        <IonInput className="calender-event min-height"></IonInput>
                    </IonCol>
                    <IonCol sizeLg="4" sizeMd="10" sizeXs="11">
                        <IonLabel>*Last name</IonLabel>
                        <IonInput className="calender-event min-height"></IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol sizeLg="4" offsetLg="1" sizeMd="10" sizeXs="11">
                        <IonLabel>*Email</IonLabel>
                        <IonInput className="calender-event min-height"></IonInput>
                    </IonCol>
                    <IonCol sizeLg="1" sizeMd="10" sizeXs="11">
                        <IonLabel>Age</IonLabel>
                        <IonInput className="calender-event min-height" type="text" onKeyPress={(e) => restrictAlphaAndSplChar(e)} maxlength={3}></IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol sizeLg="4" offsetLg="1" sizeMd="10" sizeXs="11">
                        <IonLabel>Phone</IonLabel>
                        <IonInput className="calender-event min-height" type="text" onKeyPress={(e) => restrictAlphaAndSplChar(e)} maxlength={10} placeholder="+91"></IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol sizeLg="2" offsetLg="1">
                        <IonButton>Update</IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    )
}

export default Profile;
