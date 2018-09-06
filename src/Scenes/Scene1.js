import React, { Component } from 'react';

import Camera from './../Units/Camera';
import Graph from './../Units/Graph';

import initShaders from './../GL/initShaders';
import vShaderNode from './../GL/shaders/vertex/node.js';
import fShaderNode from './../GL/shaders/fragment/node.js';
import vShaderDef from './../GL/shaders/vertex/default.js';
import fShaderDef from './../GL/shaders/fragment/default.js';

export default class Scene1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shaders: [],
    };
  }

  componentDidMount() {
    const gl = this.props.engine.gl;
    let shaders = [];

    shaders.push(initShaders(gl, vShaderDef(), fShaderDef()));
    shaders.push(initShaders(gl, vShaderNode(), fShaderNode()));

    this.setState({shaders: shaders});
  }

  static getDerivedStateFromProps(props, state) {
    const gl = props.engine.gl;
    gl.clearColor(0.35, 0.35, 0.35, 1.0);  // Clear to black, fully opaque
    gl.clearDepth(1.0);                 // Clear everything
    gl.enable(gl.DEPTH_TEST);           // Enable depth testing
    gl.depthFunc(gl.LEQUAL);            // Near things obscure far things

    // Clear the canvas before we start drawing on it.
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Tell WebGL to use our program when drawing
    // gl.useProgram(props.engine.programInfo.program);

    return state;
  }

  render() {
    return (
      <div>
        <Camera {...this.props} shaders={this.state.shaders} />
        <Graph {...this.props} shaders={this.state.shaders} />
      </div>
    );
  }
}
