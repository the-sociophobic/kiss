import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import WebGL from './GL/WebGL'

import store from './utils/store'
// import UserTexture from './components/UserTexture.js';


import domtoimage from 'dom-to-image';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        paused: false,
        width: 700,
        height: 700,
        zoom: .5,
      },
      output: {},
    }
  }

  updateDimensions() {
    let input = this.state.input;
    input.width = window.innerWidth;
    input.height = window.innerHeight;

    this.setState({input: input});
  }

  componentWillMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  setInput(key, value) {
    var input = this.state.input;
    input[key] = value;
    this.setState({input: input});
  }

  render() {
    const myStore = new store();

    var blurredCanvas = <canvas
      className="rendered"
      width={this.state.input.width + 40}
      height={this.state.input.height + 40}
    />;

    return (
      <div className="App">
        <WebGL
          input={this.state.input}
          setOutput={(data) => this.setState({output: data})}
        />
        <div id="menu-container">
          <div className="buttons">
            <button className="plus backdrop-blur">
              {blurredCanvas}
            </button>
            <button
              className="minus backdrop-blur"
              onClick={() => this.setInput("zoom", this.state.input.zoom + .1)}
            >
              {blurredCanvas}
            </button>
            <button
              className="pause backdrop-blur"
              onClick={() => this.setInput("paused", !this.state.input.paused)}
            >
              {blurredCanvas}
            </button>
          </div>
          <div className="menu backdrop-blur">
            {blurredCanvas}
            <div className="content">
              People: {myStore.get("nodes").length}<br />
              Connections: {myStore.get("edges").length}<br /><br />
              {
                Object.keys(this.state.output)
                .filter(key => typeof this.state.output[key] == "number")
                .map(key =>
                  <div key={key}>{key}: {this.state.output[key]}</div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
