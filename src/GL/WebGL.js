import React, { Component } from 'react';

import Scene1 from './../Scenes/Scene1'

// import initScene from './initScene.js';
import initShaders from './initShaders.js';
import vShader from './shaders/vertex/default.js';
import fShader from './shaders/fragment/default.js';

class WebGL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      engine: {
        gl: undefined,
        programInfo: undefined,

        deltaTime: 0,
        sceneTime: 0,
        realTime: 0,
        frameRate: 0,
      }
    }
  }

  componentDidMount() {
    const canvas = document.querySelector("#glCanvas");
    const gl = canvas.getContext("webgl", {preserveDrawingBuffer: true});

    if (gl === null)
      return;
    let engine = this.state.engine;
    engine.gl = gl;
    // engine.programInfo = initShaders(gl, vShader(), fShader());
    this.setState({engine: engine});
    // this.setState({gl: gl});
    // this.setState({programInfo: initScene(gl)});
    // this.setState({programInfo: initShaders(gl, vShader(), fShader())});

    requestAnimationFrame(this.renderFrame.bind(this));
  }

  renderFrame(now) {
    now *= 0.001;  // convert to seconds
    let deltaTime = now - this.state.engine.realTime;
    let sceneDeltaTime = this.props.input.paused ? 0 : Math.min(deltaTime, 1 / 30);

    let engine = this.state.engine;
    engine.deltaTime = sceneDeltaTime;
    engine.sceneTime = this.state.engine.sceneTime + sceneDeltaTime;
    engine.realTime = now;
    engine.frameRate = 1 / deltaTime;
    this.setState({engine: engine});

    this.props.setOutput(this.state.engine);

    // drawScene(this.state.gl, this.state.deltaTime, this.state.programInfo);

    var toBeBlurred = document.getElementsByClassName("rendered");
    var canvas = document.querySelector("#glCanvas");
    for (let i = 0; i < toBeBlurred.length; i++) {
      toBeBlurred[i].getContext("2d").drawImage(canvas, 0, 0);
    }

    requestAnimationFrame(this.renderFrame.bind(this));
  }

  render() {
    if (this.state.engine.gl == undefined)
      return (
        <div className="webgl">
          <canvas id="glCanvas" width={this.props.input.width + 40} height={this.props.input.height + 40} />
        </div>
      );

    return (
      <div className="webgl">
        <canvas id="glCanvas" width={this.props.input.width + 40} height={this.props.input.height + 40} />
        <Scene1
          engine={this.state.engine}
          input={this.props.input}
          setOutput={this.props.setOutput}
        />
      </div>
    );
    // return "Unable to initialize WebGL. Your browser or machine may not support it.";
  }
}

export default WebGL;
