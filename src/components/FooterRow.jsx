import React, { Component } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);

    this.interval = 0;
    this.state = { now: new Date() };
  }

  componentWillMount() {
    this.interval = setInterval(() => {
      this.setState({
        now: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { now } = this.state;

    return (
      <div className="row footer-row">
        <div className="col">
          Battery <i className="fas fa-battery-three-quarters" />
        </div>
        <div className="col text-center">Date {now.toDateString()}</div>
        <div className="col text-right">Hour {now.toLocaleTimeString()}</div>
      </div>
    );
  }
}
