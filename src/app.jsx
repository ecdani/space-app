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
        <Link to="/biometrics">Biometrics</Link>
        <Link to="/comunications">Comunications</Link>
        <Link to="/navigation">Navigation</Link>
        <Link to="/sensors">Sensors</Link>
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
