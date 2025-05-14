import { Route, Redirect } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

import Auteur from './pages/Auteur';
import Livre from './pages/Livre';
import Utilisateur from './pages/Utilisateur';
import MonCompte from './pages/MonCompte';
import OLSearch from './pages/OLSearch';


import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';
import './theme/variables.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { setupIonicReact } from '@ionic/react';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <div className="app-wrapper">
        <Navbar />
        <div className="content-wrapper">
          <IonRouterOutlet>
            <Route exact path="/home" render={() => <Home />} />
            <Route exact path="/auteur" render={() => <Auteur />} />
            <Route exact path="/livre" render={() => <Livre />} />
            <Route exact path="/utilisateur" render={() => <Utilisateur />} />
            <Route exact path="/MonCompte" render={() => <MonCompte />} />
            <Route exact path="/OLSearch" render={() => <OLSearch />} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
        </div>
        
      </div><Footer />
    </IonReactRouter>
  </IonApp>
);

export default App;
