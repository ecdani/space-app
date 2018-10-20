import React from 'react';
import { Route, Link } from 'react-router-dom';
import Biometrics from './pages/Biometrics';
import Comunications from './pages/Comunications';
import Navigation from './pages/Navigation';
import Sensors from './pages/Sensors';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row menu-row">
            <div className="col">
              <Link to="/biometrics" className="btn btn-primary btn-main">
                Biometrics
              </Link>
            </div>
            <div className="col">
              <Link to="/comunications" className="btn btn-primary btn-main">
                Comunications
              </Link>
            </div>
            <div className="col">
              <Link to="/navigation" className="btn btn-primary btn-main">
                Navigation
              </Link>
            </div>
            <div className="col">
              <Link to="/sensors" className="btn btn-primary btn-main">
                Sensors
              </Link>
            </div>
          </div>
        </div>
        <Route path="/biometrics" component={Biometrics} />
        <Route path="/comunications" component={Comunications} />
        <Route path="/navigation" component={Navigation} />
        <Route path="/sensors" component={Sensors} />
        <h2>Welcome to React!</h2>
        <button className="btn">Tu boton en boostrap</button>
      </div>
    );
  }
}
