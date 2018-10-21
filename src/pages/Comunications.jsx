import React, { Component } from 'react';
import Call from '../components/Call';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { setVideo: false };
  }
  render() {
    const { setVideo } = this.state;
    return (
      <div>
        {setVideo ? (
          <div className="text-center">
            <video className="video-call" autoPlay>
              <source src="./assets/video/video.mp4" type="video/mp4" />
            </video>
            <i
              className="fas fa-phone-slash fa-3x cancel-call"
              onClick={() => this.setState({ setVideo: false })}
            />
          </div>
        ) : (
          <div>
            <Call
              name="Base"
              img="mars-base"
              onClick={() => this.setState({ setVideo: true })}
            />
            <Call
              name="Rover 1"
              img="rover"
              onClick={() => this.setState({ setVideo: true })}
            />
            <Call
              name="Puesto Meteo"
              img="puesto"
              onClick={() => this.setState({ setVideo: true })}
            />
          </div>
        )}
      </div>
    );
  }
}
