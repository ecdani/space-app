import React from 'react';
import { Route, Link } from 'react-router-dom';
import Biometrics from './pages/Biometrics';
import Comunications from './pages/Comunications';
import Navigation from './pages/Navigation';
import Sensors from './pages/Sensors';
import FooterRow from './components/FooterRow';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container-flex menu-container">
          <div className="row menu-row">
            <Link to="/biometrics" className="btn btn-primary btn-first">
              Biometrics
            </Link>

            <Link to="/comunications" className="btn btn-primary btn-main">
              Comunications
            </Link>

            <Link to="/navigation" className="btn btn-primary btn-main">
              Navigation
            </Link>

            <Link to="/sensors" className="btn btn-primary btn-last">
              Sensors
            </Link>
          </div>
        </div>
        <Route path="/biometrics" component={Biometrics} />
        <Route path="/comunications" component={Comunications} />
        <Route path="/navigation" component={Navigation} />
        <Route path="/sensors" component={Sensors} />
        <div className="container-fluid">
          <FooterRow />
        </div>
      </div>
    );
  }
}
