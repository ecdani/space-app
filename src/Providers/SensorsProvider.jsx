import React, { createContext, Component } from 'react';

const { Consumer, Provider } = createContext();

export default class extends Component {
  render() {
    return <Provider value={{ foo: 'foo' }}>{this.props.children}</Provider>;
  }
}

export const Consume = Consumer;
