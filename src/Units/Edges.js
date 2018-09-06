import React, { Component } from 'react';

// import Unit from './Unit';
import store from './../utils/store.js';
import loadTexture from './../GL/loadTexture.js';

import domtoimage from 'dom-to-image';

export default class Edges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texture: "",
    };
  }

  componentDidMount() {
    const gl = this.props.engine.gl;

    this.setState({
      texture: loadTexture(gl, 'I.jpg'),
    });
  }

  static getDerivedStateFromProps(props, state) {
    const gl = props.engine.gl;
    const deltaTime = props.engine.deltaTime;
    // const programInfo = props.engine.programInfo;
    const programInfo = props.shaders[0];
    if (programInfo == undefined)
      return null;
    gl.useProgram(programInfo.program);

    const input = props.input;
    const buffers = props.buffers;

    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, state.texture);
    gl.uniform1i(programInfo.uniformLocations.uSampler, 1);

    {
      const numComponents = 3;  // pull out 3 values per iteration
      const type = gl.FLOAT;    // the data in the buffer is 32bit floats
      const normalize = false;  // don't normalize
      const stride = 0;         // how many bytes to get from one set of values to the next
                                // 0 = use type and numComponents above
      const offset = 0;         // how many bytes inside the buffer to start from
      gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
      gl.vertexAttribPointer(
          programInfo.attribLocations.vertexPosition,
          numComponents,
          type,
          normalize,
          stride,
          offset);
      gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
    }
    {
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
    }
    {
      const num = 2; // every coordinate composed of 2 values
      const type = gl.FLOAT; // the data in the buffer is 32 bit float
      const normalize = false; // don't normalize
      const stride = 0; // how many bytes to get from one set to the next
      const offset = 0; // how many bytes inside the buffer to start from
      gl.bindBuffer(gl.ARRAY_BUFFER, buffers.textureCoord);
      gl.vertexAttribPointer(programInfo.attribLocations.textureCoord, num, type, normalize, stride, offset);
      gl.enableVertexAttribArray(programInfo.attribLocations.textureCoord);
    }
    {
      var myStore = new store();

      const vertexCount = myStore.get("edges").length * 2;
      const type = gl.UNSIGNED_SHORT;
      const offset = 0;

      // gl.disable(gl.BLEND);
      gl.drawElements(gl.LINES, vertexCount, type, offset);
    }
    return state;
  }

  render() {
    return (<div />);
  }
}
