import store from './../utils/store.js';
import positionNodes from './../positionNodes';


var myStore = new store();

export function initBuffers(gl, deltaTime, nodesPositions) {
  let iconPositions = [
    -1.0, -1.5, .25,
     1.0, -1.5, .25,
     1.0,  .5,  .25,
    -1.0,  .5,  .25,
  ];
  iconPositions = iconPositions.map(pos => pos * .15);

  var iconsPositions = [];
  for (let i = 0; i < nodesPositions.length; i += 3) {
    iconPositions.forEach((pos, index) => {
      iconsPositions.push(nodesPositions[i + index % 3] + pos);
    });
  }

  // Create a buffer for the square's positions.
  const positionBuffer = gl.createBuffer();
  const positionBuffer2 = gl.createBuffer();
  const billboardBuffer = gl.createBuffer();
  // Select the positionBuffer as the one to apply buffer
  // operations to from here out.
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  // Now pass the list of positions into WebGL to build the
  // shape. We do this by creating a Float32Array from the
  // JavaScript array, then use it to fill the current buffer.
  gl.bufferData(gl.ARRAY_BUFFER,
                new Float32Array(nodesPositions),
                gl.DYNAMIC_DRAW);

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer2);
  gl.bufferData(gl.ARRAY_BUFFER,
                new Float32Array(iconsPositions),
                gl.DYNAMIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, billboardBuffer);
  gl.bufferData(gl.ARRAY_BUFFER,
                new Float32Array(iconPositions),
                gl.STATIC_DRAW);



  // const colors = [
  //   1.0,  1.0,  1.0,  1.0,    // white
  //   1.0,  0.0,  0.0,  1.0,    // red
  //   0.0,  1.0,  0.0,  1.0,    // green
  //   0.0,  0.0,  1.0,  1.0,    // blue
  // ];
  // const faceColors = [
  //   [1.0,  1.0,  1.0,  1.0],    // Front face: white
  //   [1.0,  0.0,  0.0,  1.0],    // Back face: red
  //   [0.0,  1.0,  0.0,  1.0],    // Top face: green
  //   [0.0,  0.0,  1.0,  1.0],    // Bottom face: blue
  //   [1.0,  1.0,  0.0,  1.0],    // Right face: yellow
  //   [1.0,  0.0,  1.0,  1.0],    // Left face: purple
  // ];

  // Convert the array of colors into a table for all the vertices.
  // var colors = [];
  // for (var j = 0; j < faceColors.length; ++j) {
  //   const c = faceColors[j];
  //   // Repeat each color four times for the four vertices of the face
  //   colors = colors.concat(c, c, c, c);
  // }

  // const colorBuffer = gl.createBuffer();
  // gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);



  var nodes = myStore.get("nodes");
  var nodesTextureCoordinates = [];
  nodes.forEach((node, index) => {
    if (index % 2) {
      nodesTextureCoordinates.push(index / nodes.length);
      nodesTextureCoordinates.push(1 - (index / nodes.length));
    } else {
      nodesTextureCoordinates.push(1 - (index / nodes.length));
      nodesTextureCoordinates.push(index / nodes.length);
    }
  });
  var iconsTextureCoordinates = [];
  nodes.forEach(node => {
    iconsTextureCoordinates.push(
      0.0,  1.0,
      1.0,  1.0,
      1.0,  0.0,
      0.0,  0.0,
    );
  });

  const iconTextureCoordinates = [
    0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
  ];

  const textureCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(nodesTextureCoordinates),
                gl.DYNAMIC_DRAW);

  const textureCoordBuffer2 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer2);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(iconsTextureCoordinates),
                gl.DYNAMIC_DRAW);

  const billboardTextureCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, billboardTextureCoordBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(iconTextureCoordinates),
                gl.STATIC_DRAW);




  var nodesIndices = [];
  myStore.get("edges").forEach(edge => {
    nodesIndices.push(edge.nodes[0].id);
    nodesIndices.push(edge.nodes[1].id);
  });
  // console.log("error at");
  // console.log(myStore.get("nodes")[23]);
  var iconsIndices = [];
  myStore.get("nodes").forEach((node, index) => {
    iconsIndices.push(index * 4 + 0);
    iconsIndices.push(index * 4 + 1);
    iconsIndices.push(index * 4 + 2);
    iconsIndices.push(index * 4 + 0);
    iconsIndices.push(index * 4 + 2);
    iconsIndices.push(index * 4 + 3);
  });
  const iconIndices = [
    0, 1, 2,
    0, 2, 3,
  ];

  // Now send the element array to GL
  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array(nodesIndices), gl.DYNAMIC_DRAW);
      // new Uint16Array([0, 1, 2]), gl.DYNAMIC_DRAW);

  const indexBuffer2 = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer2);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array(iconsIndices), gl.DYNAMIC_DRAW);

  const billboardIndexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, billboardIndexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array(iconIndices), gl.STATIC_DRAW);




  return {
    position: positionBuffer,
    // color: colorBuffer,
    textureCoord: textureCoordBuffer,
    indices: indexBuffer,

    position2: positionBuffer2,
    textureCoord2: textureCoordBuffer2,
    indices2: indexBuffer2,

    position3: billboardBuffer,
    textureCoord3: billboardTextureCoordBuffer,
    indices3: billboardIndexBuffer,
  };
}

export default initBuffers;
