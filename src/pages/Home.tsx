import React from 'react'
import { IonPage, IonContent, IonRow, IonCol, IonTitle, IonText } from '@ionic/react';
import './Home.css';

function Home() {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonRow className="content-row">
          <IonCol className="main-content padding-t" sizeXs="12">
            <IonTitle className="home-header">Welcome to Famzone</IonTitle>
            <IonRow>
              <IonCol className="main-content">
                <IonText className="caption-header">You know that annoying itch you just can’t scratch? Yup, that’s what this family feels like.</IonText>
              </IonCol>
            </IonRow>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  )
}

export default Home;
