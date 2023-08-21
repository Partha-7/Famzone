import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calendar, people, chatbox, imageSharp } from 'ionicons/icons';
import Gallery from './pages/Gallery';
import Calender from './pages/Calender';
import Members from './pages/Members';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import React from 'react';
import Home from './pages/Home';
import Chats from './pages/Chats';
import Header from './common/Header';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Login from './pages/Login';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Header />
      <Home />
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
          <Route exact path="/calender">
            <Calender />
          </Route>
          <Route exact path="/members">
            <Members />
          </Route>
          <Route exact path="/chats">
            <Chats />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" color="medium">
          <IonTabButton tab="gallery" href="/gallery">
            <IonIcon aria-hidden="true" icon={imageSharp} />
            <IonLabel>Gallery</IonLabel>
          </IonTabButton>
          <IonTabButton tab="calender" href="/calender">
            <IonIcon aria-hidden="true" icon={calendar} />
            <IonLabel>Calender</IonLabel>
          </IonTabButton>
          <IonTabButton tab="members" href="/members">
            <IonIcon aria-hidden="true" icon={people} />
            <IonLabel>Members</IonLabel>
          </IonTabButton>
          <IonTabButton tab="chats" href="/chats">
            <IonIcon aria-hidden="true" icon={chatbox} />
            <IonLabel>Chats</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
