import React from 'react'
import { IonHeader, IonToolbar, IonTitle, IonAvatar, IonRow, IonCol, IonButton, IonPopover, IonContent, IonList, IonItem, IonIcon } from '@ionic/react';
import '../pages/Header.css';
import { power, powerOutline } from 'ionicons/icons';

function Header({ customHeaderStyle = "", customHeaderTitleStyle = "header" }) {
    return (
        <IonHeader className={customHeaderStyle}>
            <IonToolbar color="medium">
                <IonRow>
                    <IonCol sizeLg="4" sizeMd="4.5" sizeXs="10">
                        <IonTitle className={customHeaderTitleStyle} onClick={() => { location.href = "/" }}>Famzone</IonTitle>
                    </IonCol>
                    <IonCol sizeLg="2" offsetLg="5.8">
                        <IonAvatar className="ion-avatar" id="click-trigger">
                            <img className="avatar-img" alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </IonAvatar>
                        <IonPopover trigger="click-trigger" triggerAction="click" reference="event" side="bottom" alignment="start">
                            <IonContent class="ion-padding">
                                <IonList className="ion-no-padding">
                                    <IonContent className="ion-padding" onClick={() => { location.href = "/profile" }}>Profile</IonContent>
                                    <IonContent className="ion-padding" onClick={() => { location.href = "/settings" }}>Settings</IonContent>
                                </IonList>
                            </IonContent>
                        </IonPopover>
                    </IonCol>
                    <IonCol sizeLg="0.2">
                        <IonIcon className="logout" icon={powerOutline} onClick={() => { location.href = "/login" }} />
                    </IonCol>
                </IonRow>
            </IonToolbar>
        </IonHeader>
    )
}

export default Header;
