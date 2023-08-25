import React, { useRef, useState } from 'react'
import "./Login.css";
import "./Calender";
import { IonPage, IonContent, IonRow, IonCol, IonLabel, IonInput, IonButton } from '@ionic/react'
import { Routes } from '../Constants/Routes';
import { useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory();
    const navigateTo = (url: any) => {
        history.push(url);
    };
    const userRef = useRef('' as any);
    const passwordRef = useRef('' as any);
    const [error, setError] = useState('');
    const onSubmit = () => {
        if (userRef.current.focusedValue === "admin" && passwordRef.current.focusedValue === "admin") {
            navigateTo(Routes.dashboard.url);
        } else if ((!userRef.current.focusedValue || userRef.current.focusedValue.length === 0) && (!passwordRef.current.focusedValue || passwordRef.current.focusedValue.length === 0)) {
            setError("Please enter username and password");
        }
        else {
            setError("Wrong credentials! Try forget password");
        }
    }
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonRow className="login-row">
                    <IonCol offsetLg="2.3" sizeLg="3">
                        <img src="/public/logo.png" />
                    </IonCol>
                    <IonCol sizeLg="0.5">
                        <span className="divider" />
                    </IonCol>
                    <IonCol className="credential-col" sizeLg="6">
                        <IonRow>
                            <IonCol className="login-fields" sizeLg="2">
                                <IonLabel>Username</IonLabel>
                            </IonCol>
                            <IonCol sizeLg="2">
                                <IonInput ref={userRef} className="calender-event min-height input-height" />
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className="login-fields" sizeLg="2">
                                <IonLabel>Password</IonLabel>
                            </IonCol>
                            <IonCol sizeLg="2">
                                <IonInput ref={passwordRef} className="calender-event min-height input-height" />
                            </IonCol>
                        </IonRow>
                        {error &&
                            <IonRow>
                                <IonCol offsetLg="2">
                                    <span className="error">{error}</span>
                                </IonCol>
                            </IonRow>
                        }
                        <IonRow>
                            <IonCol offsetLg="2"><a href="/">Forget Password?</a></IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol offsetLg="2">
                                <IonButton onClick={onSubmit}>Login</IonButton>
                            </IonCol>
                        </IonRow>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    )
}

export default Login;
