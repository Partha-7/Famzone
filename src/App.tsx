import {
  setupIonicReact,
} from '@ionic/react';
import { BrowserRouter, Switch as Hub, Route } from "react-router-dom";

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
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { Routes } from './Constants/Routes';
import NotFound from './pages/NotFound';

setupIonicReact();

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Hub>
        <Route path={Routes.login.url} component={Login} />
        <Route path={Routes.dashboard.url} component={Dashboard} />
        <Route path="/" component={Login} />
        <Route path="*" render={() => <NotFound />} />
      </Hub>
    </BrowserRouter>
  )
};

export default App;
