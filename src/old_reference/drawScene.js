import initBuffers from './initBuffers.js';

import store from './../utils/store.js';

export function drawScene(gl, deltaTime, programInfo, texture) {
  var buffers = initBuffers(gl, deltaTime);

  // Tell WebGL how to pull out the POSITIONS from the position
  // buffer into the vertexPosition attribute.
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
    gl.enableVertexAttribArray(
        programInfo.attribLocations.vertexPosition);
  }


  // Tell WebGL how to pull out the COLORS from the color buffer
  // into the vertexColor attribute.
  // {
  //   const numComponents = 4;
  //   const type = gl.FLOAT;
  //   const normalize = false;
  //   const stride = 0;
  //   const offset = 0;
  //   gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
  //   gl.vertexAttribPointer(
  //       programInfo.attribLocations.vertexColor,
  //       numComponents,
  //       type,
  //       normalize,
  //       stride,
  //       offset);
  //   gl.enableVertexAttribArray(
  //       programInfo.attribLocations.vertexColor);
  // }


  // Tell WebGL which indices to use to index the vertices
  {
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
  }


  // tell webgl how to pull out the texture coordinates from buffer
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
    // const vertexCount = 36;
    var myStore = new store();

    const vertexCount = myStore.get("edges").length * 2;
    const type = gl.UNSIGNED_SHORT;
    const offset = 0;

    gl.disable(gl.BLEND);
    //offset for inexes thou indexes use the same vertices
    // gl.drawElements(gl.LINES, vertexCount, type, offset);
    gl.drawElements(gl.LINES, vertexCount, type, offset);
  }
};

export default drawScene;
