import React from 'react'
import { IonHeader, IonToolbar, IonTitle, IonAvatar, IonRow, IonCol, IonButton, IonPopover, IonContent, IonList, IonItem } from '@ionic/react';
import '../pages/Header.css';

function Header({ customHeaderStyle = "", customHeaderTitleStyle = "header" }) {
    var today = new Date();
    var timeFormat = today.getHours() + ":" + today.getMinutes();
    var time = timeFormat;
    return (
        <IonHeader className={customHeaderStyle}>
            <IonToolbar color="tertiary">
                <IonRow>
                    <IonCol>
                        <IonTitle className={customHeaderTitleStyle} onClick={() => { location.href = "/" }}>Famzone</IonTitle>
                    </IonCol>
                    <IonCol>
                        <IonAvatar className="ion-avatar" id="click-trigger">
                            <img className="avatar-img" alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </IonAvatar>
                        <IonPopover trigger="click-trigger" triggerAction="click">
                            <IonContent class="ion-padding">
                                <IonList className="ion-no-padding">
                                    <IonItem>Profile</IonItem>
                                    <IonItem lines="none">Settings</IonItem>
                                </IonList>
                            </IonContent>
                        </IonPopover>
                    </IonCol>
                </IonRow>
            </IonToolbar>
        </IonHeader>
    )
}

export default Header;
