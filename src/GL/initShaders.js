import { initShaderProgram } from './shaders.js';

export function initShaders(gl, vShader, fShader) {
  const shaderProgram = initShaderProgram(gl, vShader, fShader);

  return {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
      textureCoord: gl.getAttribLocation(shaderProgram, 'aTextureCoord'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
      InverseMatrix: gl.getUniformLocation(shaderProgram, 'uInverseMatrix'),
      VertexPos: gl.getUniformLocation(shaderProgram, 'uVertexPos'),
      uSampler: gl.getUniformLocation(shaderProgram, 'uSampler'),
    },
  };
}

export default initShaders;
