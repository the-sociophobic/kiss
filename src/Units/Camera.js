import React, { Component } from 'react';


export default class Nodes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraRotation: 0.0,
      translate: [0.0, 0.0, -7.0],
      scale: [.75, .75, .75],
    };
  }

  updateZoom(event) {
    var newValue = Math.min(Math.max(this.state.scale[0] + event.deltaY / 350, .35), 3);
    this.setState({scale: [newValue, newValue, newValue]});
  }

  componentDidMount() {
    window.addEventListener("wheel", this.updateZoom.bind(this));
  }

  static getDerivedStateFromProps(props, state) {
    const gl = props.engine.gl;
    const deltaTime = props.engine.deltaTime;
    const programInfo = props.engine.programInfo;
    const input = props.input;

    // Create a perspective matrix, a special matrix that is
    // used to simulate the distortion of perspective in a camera.
    // Our field of view is 45 degrees, with a width/height
    // ratio that matches the display size of the canvas
    // and we only want to see objects between 0.1 units
    // and 100 units away from the camera.
    // console.log(this.cameraRotation);
    const fieldOfView = 45 * Math.PI / 180;   // in radians
    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    // const aspect = input.width / input.height;
    // console.log(aspect);
    const zNear = 0.1;
    const zFar = 100.0;
    const projectionMatrix = mat4.create();

    // note: glmatrix.js always has the first argument
    // as the destination to receive the result.
    mat4.perspective(projectionMatrix,
                     fieldOfView,
                     aspect,
                     zNear,
                     zFar);

    // Set the drawing position to the "identity" point, which is
    // the center of the scene.
    const modelViewMatrix = mat4.create();

    // Now move the drawing position a bit to where we want to
    // start drawing the square.
    mat4.translate(modelViewMatrix,     // destination matrix
                   modelViewMatrix,     // matrix to translate
                   state.translate);  // amount to translate
    mat4.scale(modelViewMatrix,
               modelViewMatrix,
               state.scale);
               // [input.zoom, input.zoom, input.zoom]);

    // this.setState({cameraRotation: state.cameraRotation + deltaTime * .1});
    state.cameraRotation += deltaTime * .1;
    // console.log(state.cameraRotation);
    mat4.rotate(modelViewMatrix,  // destination matrix
                modelViewMatrix,  // matrix to rotate
                state.cameraRotation,   // amount to rotate in radians
                [0, 1, 0]);       // axis to rotate around

    const InverseMatrix = mat4.create();
    mat4.rotate(InverseMatrix,  // destination matrix
                InverseMatrix,  // matrix to rotate
                state.cameraRotation,   // amount to rotate in radians
                [0, 1, 0]);       // axis to rotate around
    mat4.invert(InverseMatrix, InverseMatrix);

    // Set the shader uniforms
    // gl.uniformMatrix4fv(
    //     programInfo.uniformLocations.projectionMatrix,
    //     false,
    //     projectionMatrix);
    // gl.uniformMatrix4fv(
    //     programInfo.uniformLocations.modelViewMatrix,
    //     false,
    //     modelViewMatrix);
    // gl.uniformMatrix4fv(
    //     programInfo.uniformLocations.InverseMatrix,
    //     false,
    //     InverseMatrix);

    props.shaders.forEach(shader => {
      gl.useProgram(shader.program);
      gl.uniformMatrix4fv(
          shader.uniformLocations.projectionMatrix,
          false,
          projectionMatrix);
      gl.uniformMatrix4fv(
          shader.uniformLocations.modelViewMatrix,
          false,
          modelViewMatrix);
      gl.uniformMatrix4fv(
          shader.uniformLocations.InverseMatrix,
          false,
          InverseMatrix);
    });

    return state;
  }

  componentWillUnmount() {
    window.removeEventListener("wheel", this.updateZoom.bind(this));
  }

  render() {
    return (<div />);
  }
}
