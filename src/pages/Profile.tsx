import React from 'react'
import { IonPage, IonContent, IonRow, IonCol, IonIcon, IonTitle, IonLabel, IonInput, IonButton, IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
import { chevronBackCircleOutline } from 'ionicons/icons';

function Profile() {
    const restrictAlphaAndSplChar = (e: any) => {
        const charCode = e.nativeEvent.which || e.nativeEvent.keycode;
        if (
            (charCode >= 48 && charCode <= 57) ||
            charCode == 8
        ) {
            const result =
                e.target.selectionStart === 0 &&
                    e.target.selectionEnd === e.target.value.length
                    ? e.key
                    : [
                        e.target.value.slice(0, e.target.selectionStart),
                        e.key,
                        e.target.value.slice(e.target.selectionStart),
                    ].join("");
        } else {
            e.preventDefault();
            return false;
        }
    };
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
