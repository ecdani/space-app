import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Biometrics from './pages/Biometrics';
import Comunications from './pages/Comunications';
import Navigation from './pages/Navigation';
import Sensors from './pages/Sensors';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <React.Fragment>
            <Route path="/biometrics" component={Biometrics} />
            <Route path="/comunications" component={Comunications} />
            <Route path="/navigation" component={Navigation} />
            <Route path="/sensors" component={Sensors} />
          </React.Fragment>
        </BrowserRouter>
        <Link to="/biometrics">Biometrics</Link>
        <Link to="/comunications">Comunications</Link>
        <Link to="/navigation">Navigation</Link>
        <Link to="/sensors">Sensors</Link>
        <h2>Welcome to React!</h2>
      </div>
    );
  }
}
