import React from 'react';
import { IonContent, IonGrid, IonCol, IonRow, IonPage, IonButton } from '@ionic/react';;
import "./NotFound.css";
import { useHistory } from 'react-router-dom';
import { Routes } from '../Constants/Routes';

function NotFound() {
    const history = useHistory();
    const navigateTo = (url: any) => {
        history.push(url);
    };
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonGrid className="ion-no-border dashboard-ig-main">
                    <IonRow>
                        <IonCol className="main-content padding-0">
                            <IonCol size="12" sizeXs="12" sizeMd="12" sizeLg="12">
                                <div className='fallback-center'>
                                    <div className='fallback-circle-desktop'>
                                        <b>404</b>
                                    </div>
                                    <h1 className='page-not-found'><b>Looks like you're lost</b></h1>
                                    <h3 className='page-not-found-tablet'>The page you are looking for not available!</h3>
                                    <IonButton onClick={() => { navigateTo(Routes.login.url); }}>Go to Login</IonButton>
                                </div>
                            </IonCol>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}
export default NotFound;
