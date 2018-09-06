const Pi = 3.141592653589793238462643383279502;

const nodeSize = .5;

const randomMax = nodeSize * 5;

const minConstraintSize = nodeSize * 2;
const constraintSize = (node1, node2) => minConstraintSize + Math.sqrt(node1.mass * node2.mass) / 5;
const constraintRepulsion = 200;

const collisionRadius = (node1, node2) => constraintSize(node1, node2) * 0.9;
const collisionRepulsion = 200;

const centerRepulsion = 20;
const centerRadius = (node) => minCenterRadius + (20 - node.mass) / 10;

const forceAttenuation = (deltaTime) => 0;//Math.pow(.25, (deltaTime / 30));
const velocityAttenuation = (deltaTime) => Math.pow(.85, (deltaTime / 1));
const maxVelocity = 25;

var nodesVertices = [];
var totalMass = 0;
var minCenterRadius = 0;

export function animateNodes(nodes, edges, center, deltaTime, masses) {
  if (nodesVertices.length == 0) {
    nodesVertices = nodes.map((node, index) => {
      return {
        id: node.id,
        force: [0, 0, 0],
        velocity: [0, 0, 0],
        position: [
          center[0] + randomMax * (Math.random(1) - .5),
          center[1] + randomMax * (Math.random(1) - .5),
          center[2] + randomMax * (Math.random(1) - .5),
        ],
        mass: masses ? masses[index] : edges.filter(edge =>
          (edge.nodes[0].id == node.id || edge.nodes[1].id == node.id)
        ).length + 1,
      };
    });

    totalMass = nodesVertices
    .map(verticle => verticle.mass)
    .reduce((a, b) => a + b);
    minCenterRadius = Math.pow(totalMass / Pi, 1 / 3) * .75;
  }

  //Force renewal
  nodesVertices.forEach(verticle => {
    verticle.force = vecMultiplication(verticle.force, forceAttenuation(deltaTime));
  });

  //Nodes collision forces
  nodesVertices.forEach((verticle1, index1) => {
    nodesVertices.slice(index1 + 1).forEach((verticle2, index2) => {
      let substracted12 = vecSubstraction(verticle1.position, verticle2.position);
      let distance = vecLength(substracted12);
      let overflow = (collisionRadius(verticle1, verticle1) - distance) / collisionRadius(verticle1, verticle1);

      if (overflow > 0) {
        let k = verticle1.mass * verticle2.mass * overflow * overflow * collisionRepulsion;
        let force = vecMultiplication(vecNormalize(substracted12), k);
        verticle1.force = vecAddition(verticle1.force, force);
        verticle2.force = vecSubstraction(verticle2.force, force);
      }
    });
  });

  //Push from center forces
  nodesVertices.forEach(verticle => {
    let centerVector = vecSubstraction(verticle.position, center);
    let distance = vecLength(centerVector);
    verticle.force = vecAddition(
      verticle.force,
      vecMultiplication(
        vecNormalize(centerVector),
        Math.pow((centerRadius(verticle) - distance) / centerRadius(verticle), 2) * centerRepulsion
    ));
  });

  //Deformed constraint forces
  edges.forEach(edge => {
    let node1 = nodesVertices.find(verticle => verticle.id == edge.nodes[0].id);
    let node2 = nodesVertices.find(verticle => verticle.id == edge.nodes[1].id);
    let substracted12 = vecSubstraction(node1.position, node2.position);
    let distance = vecLength(substracted12);
    let overflow = (constraintSize(node1, node2) - distance) / constraintSize(node1, node2);
    // if (Math.abs(overflow) > 4)
    //   console.log(overflow);

    node1.force = vecAddition(node1.force, vecMultiplication(vecNormalize(substracted12), overflow * constraintRepulsion));
    node2.force = vecSubstraction(node2.force, vecMultiplication(vecNormalize(substracted12), overflow * constraintRepulsion));
  });

  //Calculate Velocity
  nodesVertices.forEach(verticle => {
    //prevous Velocity attenuation
    verticle.velocity = vecMultiplication(verticle.velocity, velocityAttenuation(deltaTime));
    //add new Velocity
    verticle.velocity = vecAddition(verticle.velocity, vecMultiplication(verticle.force, deltaTime / verticle.mass));
    //Clip velocity
    verticle.velocity = vecClip(verticle.velocity, maxVelocity);
  });

  //Calculate new position
  nodesVertices.forEach(verticle => {
    verticle.position = vecAddition(verticle.position, vecMultiplication(verticle.velocity, deltaTime));
    //Clip position
    verticle.position = vecAddition(center, vecClip(vecSubstraction(verticle.position, center), centerRadius(verticle)));
  });


  var positions = [];
  // if (masses) {
  //   nodesVertices.forEach(verticle => {
  //     positions.push(verticle.position[0]);
  //     positions.push(verticle.position[1]);
  //     positions.push(verticle.position[2]);
  //   });
  // } else {
    nodesVertices.forEach(verticle => {
      positions.push({
        id: verticle.id,
        position: verticle.position,
      });
    });
  // }

  return positions;
}

export function vecLength(vec) {
  return Math.sqrt(vec[0] * vec[0] + vec[1] * vec[1] + vec[2] * vec[2]);
}
export function vecSubstraction(vec1, vec2) {
  return [vec1[0] - vec2[0], vec1[1] - vec2[1], vec1[2] - vec2[2]];
}
export function vecAddition(vec1, vec2) {
  return [vec1[0] + vec2[0], vec1[1] + vec2[1], vec1[2] + vec2[2]];
}
export function vecMultiplication(vec, a) {
  return [vec[0] * a, vec[1] * a, vec[2] * a];
}
export function vecNormalize(vec) {
  let len = vecLength(vec);
  return [vec[0] / len, vec[1] / len, vec[2] / len];
}
export function vecDot(vec1, vec2) {
  return vec1[0] * vec2[0] + vec1[1] * vec2[1] + vec1[2] * vec2[2];
}
export function vecClip(vec, len) {
  let vecLen = vecLength(vec);
  if (vecLen < len)
    return vec;
  return vecMultiplication(vec, len / vecLen);
}

export default animateNodes;
