import React, { createContext, Component } from 'react';

const { Consumer, Provider } = createContext();

// const URL = 'http://192.168.130.70:5005';
const URL = 'http://192.168.130.70:3007';

export default class extends Component {
  constructor(props) {
    super(props);

    this.interval = 0;

    this.state = {
      velViento: 0,
      valSism: 0,
      humSuelo: 0,
      temp: 0,
      sensTerm: 0,
      presTraje: 0,
      tempCorporal: 0,
      geiger: 0,
      Luz: 0,
      selGUI: 0,
      Llamada: 0,
      brujula: 0,
      pulsaciones: 0,
    };

    this.fetchVelViento = this.fetchVelViento.bind(this);
    this.fetchValSism = this.fetchValSism.bind(this);
    this.fetchHumedadSuelo = this.fetchHumedadSuelo.bind(this);
    this.fetchHumedadAire = this.fetchHumedadAire.bind(this);
    this.fetchTemp = this.fetchTemp.bind(this);
    this.fetchSensTermic = this.fetchSensTermic.bind(this);
    this.fetchPresTraje = this.fetchPresTraje.bind(this);
    this.fetchTempCorporal = this.fetchTempCorporal.bind(this);
    this.fetchRadiacion = this.fetchRadiacion.bind(this);
    this.fetchLuz = this.fetchLuz.bind(this);
    this.fetchSelecGui = this.fetchSelecGui.bind(this);
    this.fetchLlamada = this.fetchLlamada.bind(this);
    this.fetchBrujula = this.fetchBrujula.bind(this);
    this.fetchPulsaciones = this.fetchPulsaciones.bind(this);
  }

  componentWillMount() {
    this.interval = setInterval(async () => {
      await this.fetchVelViento();
      await this.fetchValSism();
      await this.fetchHumedadSuelo();
      await this.fetchHumedadAire();
      await this.fetchTemp();
      await this.fetchSensTermic();
      await this.fetchPresTraje();
      await this.fetchTempCorporal();
      await this.fetchRadiacion();
      await this.fetchLuz();
      await this.fetchSelecGui();
      await this.fetchLlamada();
      await this.fetchBrujula();
      await this.fetchPulsaciones();
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchVelViento() {
    fetch(`${URL}/velvi`)
      .then(res => res.json())
      .then(data => this.setState({ velViento: data.VelocidadVientor }));
  }
  fetchValSism() {
    fetch(`${URL}/rit`)
      .then(res => res.json())
      .then(data => this.setState({ valSism: data.escsalaRitcher }));
  }
  fetchHumedadSuelo() {
    fetch(`${URL}/humedadsuelo`)
      .then(res => res.json())
      .then(data => this.setState({ humSuelo: data.humedadSuelo }));
  }
  fetchHumedadAire() {
    fetch(`${URL}/humedadaire`)
      .then(res => res.json())
      .then(data => this.setState({ humAire: data.humedadSuelo }));
  }
  fetchTemp() {
    fetch(`${URL}/temp`)
      .then(res => res.json())
      .then(data => this.setState({ temp: data.temperatura }));
  }
  fetchSensTermic() {
    fetch(`${URL}/senstermic`)
      .then(res => res.json())
      .then(data => this.setState({ sensTerm: data.sensacionTermica }));
  }
  fetchPresTraje() {
    fetch(`${URL}/prestraje`)
      .then(res => res.json())
      .then(data => this.setState({ presTraje: data.presTraje }));
  }
  fetchTempCorporal() {
    fetch(`${URL}/tempcorporal`)
      .then(res => res.json())
      .then(data => this.setState({ tempCorporal: data.tempCorporal }));
  }
  fetchRadiacion() {
    fetch(`${URL}/geiger`)
      .then(res => res.json())
      .then(data => this.setState({ geiger: data.geiger }));
  }
  fetchLuz() {
    fetch(`${URL}/luz`)
      .then(res => res.json())
      .then(data => this.setState({ Luz: data.Luz }));
  }
  fetchSelecGui() {
    fetch(`${URL}/selgui`)
      .then(res => res.json())
      .then(data => this.setState({ selGUI: data.selGUI }));
  }
  fetchLlamada() {
    fetch(`${URL}/llamada`)
      .then(res => res.json())
      .then(data => this.setState({ Llamada: data.Llamada }));
  }
  fetchBrujula() {
    fetch(`${URL}/brujula`)
      .then(res => res.json())
      .then(data => this.setState({ brujula: data.brujula }));
  }
  fetchPulsaciones() {
    fetch(`${URL}/pulsaciones`)
      .then(res => res.json())
      .then(data => this.setState({ pulsaciones: data.pulsaciones }));
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export const Consume = Consumer;
