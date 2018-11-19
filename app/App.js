import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(({ router }) => ({ router }))
export default class App extends Component {
  componentDidMount() {
    console.log(this.props.router)
  }
  render() {
    return (
      <div className={'page'}>
        <h1>Hello World</h1>
      </div>
    );
  }
}
