import React, { Component } from 'react';

export default class Unit extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  glInit(gl) {}
  glRender(gl, deltaTime, programInfo, input) {}
  glDelete(gl) {}
  render() {
    return <div />;
  }
}
