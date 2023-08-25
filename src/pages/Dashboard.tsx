import React from 'react'
import Header from '../common/Header'
import Home from './Home'
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonApp, IonContent, IonGrid, IonRow, useIonPopover, IonPage } from '@ionic/react'
import { Route, Redirect } from 'react-router'
import Login from './Login'
import Gallery from './Gallery'
import Calender from './Calender'
import Members from './Members'
import Chats from './Chats'
import Profile from './Profile'
import Settings from './Settings'
import { imageSharp, calendar, people, chatbox } from 'ionicons/icons'
import { Routes } from './../Constants/Routes';

function Dashboard() {
    return (
        <IonPage>
            <Header />
            <Home />
            <IonTabs>
                <IonRouterOutlet animated={false}>
                    <Route exact path={Routes.dashboard.galleryUrl}>
                        <Gallery />
                    </Route>
                    <Route exact path={Routes.dashboard.calenderUrl}>
                        <Calender />
                    </Route>
                    <Route exact path={Routes.dashboard.membersUrl}>
                        <Members />
                    </Route>
                    <Route exact path={Routes.dashboard.chatsUrl}>
                        <Chats />
                    </Route>
                    <Route exact path={Routes.dashboard.profileUrl}>
                        <Profile />
                    </Route>
                    <Route exact path={Routes.dashboard.settingsUrl}>
                        <Settings />
                    </Route>
                    <Route exact path={Routes.dashboard.url}>
                        <Redirect to={Routes.dashboard.url} />
                    </Route>
                </IonRouterOutlet>
                <IonTabBar slot="bottom" color="medium">
                    <IonTabButton tab="gallery" href={Routes.dashboard.galleryUrl}>
                        <IonIcon aria-hidden="true" icon={imageSharp} />
                        <IonLabel>Gallery</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="calender" href={Routes.dashboard.calenderUrl}>
                        <IonIcon aria-hidden="true" icon={calendar} />
                        <IonLabel>Calender</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="members" href={Routes.dashboard.membersUrl}>
                        <IonIcon aria-hidden="true" icon={people} />
                        <IonLabel>Members</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="chats" href={Routes.dashboard.chatsUrl}>
                        <IonIcon aria-hidden="true" icon={chatbox} />
                        <IonLabel>Chats</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonPage>
    )
}

export default Dashboard
