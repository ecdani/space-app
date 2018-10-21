import React from 'react';
import { Route, Link } from 'react-router-dom';
import Biometrics from './pages/Biometrics';
import Comunications from './pages/Comunications';
import Navigation from './pages/Navigation';
import Sensors from './pages/Sensors';
import FooterRow from './components/FooterRow';
import Home from './pages/Home';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: '' };

    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    const { activeTab } = this.state;

    if (activeTab !== page) this.setState({ activeTab: page });
  }

  render() {
    const { activeTab } = this.state;

    return (
      <div>
        <div className="container-flex menu-container">
          <div className="row menu-row">
            <Link
              to="/biometrics"
              className={`btn btn-primary btn-first ${
                activeTab === 'biometrics' ? 'btn-active' : ''
              }`}
              onClick={() => this.changePage('biometrics')}
            >
              Biometrics
            </Link>

            <Link
              to="/comunications"
              className={`btn btn-primary btn-main  ${
                activeTab === 'comunications' ? 'btn-active' : ''
              }`}
              onClick={() => this.changePage('comunications')}
            >
              Comunications
            </Link>

            <Link
              to="/navigation"
              className={`btn btn-primary btn-main ${
                activeTab === 'navigation' ? 'btn-active' : ''
              }`}
              onClick={() => this.changePage('navigation')}
            >
              Navigation
            </Link>

            <Link
              to="/sensors"
              className={`btn btn-primary btn-last ${
                activeTab === 'sensors' ? 'btn-active' : ''
              }`}
              onClick={() => this.changePage('sensors')}
            >
              Environment
            </Link>
          </div>
        </div>
        <Route path="/biometrics" component={Biometrics} />
        <Route path="/comunications" component={Comunications} />
        <Route path="/navigation" component={Navigation} />
        <Route path="/sensors" component={Sensors} />
        <Route path="/" exact component={Home} />
        <div className="container-fluid">
          <FooterRow />
        </div>
      </div>
    );
  }
}
