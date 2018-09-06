import { initShaderProgram } from './shaders.js';

import vShader from './shaders/vertex/default.js';
import fShader from './shaders/fragment/default.js';

export function initScene(gl) {
  //SHADERS
  const vsSource = vShader();
  const fsSource = fShader();
  const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

  return {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      // vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
      textureCoord: gl.getAttribLocation(shaderProgram, 'aTextureCoord'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
      InverseMatrix: gl.getUniformLocation(shaderProgram, 'uInverseMatrix'),
      uSampler: gl.getUniformLocation(shaderProgram, 'uSampler'),
    },
  };
}

export default initScene;
