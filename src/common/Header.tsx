import React from 'react'
import { IonHeader, IonToolbar, IonTitle, IonAvatar, IonRow, IonCol, IonButton, IonPopover, IonContent, IonList, IonItem, IonIcon, useIonPopover } from '@ionic/react';
import '../pages/Header.css';
import { useHistory } from "react-router-dom";
import { powerOutline } from 'ionicons/icons';
import Popover from '@mui/material/Popover';
import { Routes } from '../Constants/Routes';
function Header({ customHeaderStyle = "", customHeaderTitleStyle = "header" }) {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const history = useHistory();
    const navigateTo = (url: any) => {
        history.push(url);
    };
    return (
        <IonHeader className={customHeaderStyle}>
            <IonToolbar color="medium">
                <IonRow>
                    <IonCol sizeLg="4" sizeMd="4.5" sizeXs="10">
                        <IonTitle className={customHeaderTitleStyle} onClick={() => { navigateTo(Routes.dashboard.url); }}>Famzone</IonTitle>
                    </IonCol>
                    <IonCol sizeLg="2" offsetLg="5.8">
                        <IonAvatar className="ion-avatar" id="click-trigger" onClick={(e: any) => handleClick(e)}>
                            <img className="avatar-img" aria-describedby={id} alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </IonAvatar>
                        {/* <IonPopover trigger="click-trigger" triggerAction="click" reference="event" side="bottom" alignment="start"> */}
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                        >
                            <IonList className="ion-no-padding">
                                <IonItem lines="none" onClick={() => { navigateTo(Routes.dashboard.profileUrl); handleClose(); }}>Profile</IonItem>
                                <IonItem lines="none" onClick={() => { navigateTo(Routes.dashboard.settingsUrl); handleClose(); }}>Settings</IonItem>
                            </IonList>
                        </Popover>
                        {/* </IonPopover> */}
                    </IonCol>
                    <IonCol sizeLg="0.2">
                        <IonIcon className="logout" icon={powerOutline} onClick={() => { navigateTo(Routes.login.url); }} />
                    </IonCol>
                </IonRow>
            </IonToolbar>
        </IonHeader>
    )
}



export default Header;
