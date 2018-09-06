import React, { Component } from 'react';

// import Unit from './Unit';

import UserTexture from './../components/UserTexture.js';
import store from './../utils/store.js';
import loadTexture from './../GL/loadTexture.js';

import domtoimage from 'dom-to-image';

export default class Nodes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texture: undefined,
      usersTextures: [],
    };
  }

  componentDidMount() {
    const gl = this.props.engine.gl;

    // var elem = document.getElementById("user182");
    // // this.texture = loadTexture(gl, 'I.jpg');
    // // const texture = loadTexture(gl, 'https://pp.userapi.com/c846019/v846019754/b7ea3/ypqDsDV7kRg.jpg');
    // // this.setState({
    // //   texture: loadTexture(gl, 'I.jpg'),
    // // });
    // domtoimage.toPng(elem).then(dataURL => {
    //   this.setState({
    //     texture: loadTexture(gl, dataURL),
    //   });
    // });

    const myStore = new store();
    let usersTextures = [];
    myStore.get("nodes").forEach((user, index) => {
      let elem = document.getElementById("user" + index);
      domtoimage.toPng(elem).then(dataURL => {
        usersTextures.push(loadTexture(gl, dataURL));
      });
    });
    this.setState({usersTextures: usersTextures});
  }

  static getDerivedStateFromProps(props, state) {
    const gl = props.engine.gl;
    const deltaTime = props.engine.deltaTime;
    // const programInfo = props.engine.programInfo;
    const programInfo = props.shaders[1];
    if (programInfo == undefined)
      return null;
    gl.useProgram(programInfo.program);

    const input = props.input;
    const buffers = props.buffers;

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    {
      const numComponents = 3;  // pull out 3 values per iteration
      const type = gl.FLOAT;    // the data in the buffer is 32bit floats
      const normalize = false;  // don't normalize
      const stride = 0;         // how many bytes to get from one set of values to the next
                                // 0 = use type and numComponents above
      const offset = 0;         // how many bytes inside the buffer to start from
      gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position3);
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
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices3);
    }
    {
      const num = 2; // every coordinate composed of 2 values
      const type = gl.FLOAT; // the data in the buffer is 32 bit float
      const normalize = false; // don't normalize
      const stride = 0; // how many bytes to get from one set to the next
      const offset = 0; // how many bytes inside the buffer to start from
      gl.bindBuffer(gl.ARRAY_BUFFER, buffers.textureCoord3);
      gl.vertexAttribPointer(programInfo.attribLocations.textureCoord, num, type, normalize, stride, offset);
      gl.enableVertexAttribArray(programInfo.attribLocations.textureCoord);
    }

    // const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 0;
    const myStore = new store();
    const nodes = myStore.get("nodes");

    for (let i = 0; i < nodes.length * 3; i += 3) {
      // Tell WebGL we want to affect texture unit 0
      gl.activeTexture(gl.TEXTURE0);
      // Bind the texture to texture unit 0
      // gl.bindTexture(gl.TEXTURE_2D, state.texture);
      gl.bindTexture(gl.TEXTURE_2D, state.usersTextures[i / 3]);
      // Tell the shader we bound the texture to texture unit 0
      gl.uniform1i(programInfo.uniformLocations.uSampler, 0);

      gl.uniform4f(programInfo.uniformLocations.VertexPos, props.positions[i], props.positions[i + 1], props.positions[i + 2], 0.0);
      gl.drawElements(gl.TRIANGLES, 6, type, offset);
    }
    // const vertexCount = myStore.get("nodes").length * 6;
    // gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
    return null;
  }

  render() {
    const myStore = new store();
    const users = myStore.get("nodes");
    const mappedUsers = users.map(user =>
      <UserTexture
        id={"user" + user.id}
        key={"user" + user.id}
        name={user.name + " " + user.surname}
        avatar="I.jpg"
      />
    );

    return (
      <div className="users-container">
        {mappedUsers}
      </div>
    );
  }
}
