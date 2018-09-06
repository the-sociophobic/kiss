export default function vShader() {
  return `
    attribute vec4 aVertexPosition;
    attribute vec2 aTextureCoord;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;
    uniform mat4 uInverseMatrix;
    uniform vec4 uVertexPos;

    varying highp vec2 vTextureCoord;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * (uVertexPos + uInverseMatrix * aVertexPosition);
      vTextureCoord = aTextureCoord;
    }
  `;
}
