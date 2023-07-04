import React from 'react'
import { IonHeader, IonToolbar, IonTitle, IonAvatar, IonRow, IonCol } from '@ionic/react';
import '../pages/Header.css';
import { Link, Redirect } from 'react-router-dom';

function Header({ header = "", customHeaderStyle = "", customHeaderTitleStyle = "header" }) {
    return (
        <IonHeader className={customHeaderStyle}>
            <IonToolbar color="tertiary">
                <IonRow>
                    <IonCol>
                        <IonTitle className={customHeaderTitleStyle}>{header}</IonTitle>
                    </IonCol>
                    <IonCol>
                        <IonAvatar className="ion-avatar">
                            <img className="avatar-img" alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </IonAvatar>
                    </IonCol>
                </IonRow>
            </IonToolbar>
        </IonHeader>
    )
}

export default Header;
