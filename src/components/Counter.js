/* eslint-disable no-labels */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState((state) => ({
      count: this.state.count + 1,
    }));
  }

  decrement() {
    this.setState((state) => ({
      count: this.state.count - 1,
    }));
  }

  reset() {
    this.setState((state) => ({
      count: 0,
    }));
  }

  render() {
    return (
      <div>
        <h1>Simple Counter</h1>
        <button onClick={this.increment}>Increment</button>
        <br />
        <button onClick={this.decrement}>Decrement</button>
        <h2>{this.state.count}</h2>
        <br />
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
