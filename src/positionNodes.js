const Pi = 3.141592653589793238462643383279502;
const nodeSize = .5;
const randomMax = nodeSize * 5;
//Constraint contstants
const minConstraintSize = nodeSize * 2;
const constraintSize = (node1, node2) => minConstraintSize + Math.sqrt(node1.mass * node2.mass) / 5;
const constraintRepulsion = 200;
//Collision constants
const collisionRadius = (node1, node2) => constraintSize(node1, node2) * 0.9;
const collisionRepulsion = 200;
//Center constants
// const centerRepulsion = 20;
const centerRepulsion = 0;
const centerRadius = (node, minCenterRadius) => minCenterRadius + (20 - node.mass) / 10;
const overflowK = 210;
//Attenuations
const forceAttenuation = (deltaTime) => 0;//Math.pow(.25, (deltaTime / 30));
const velocityAttenuation = (deltaTime) => Math.pow(.85, (deltaTime / 1));
const maxVelocity = 25;

export default class positionNodes {
  constructor(inputNodes, inputEdges) {
    // this.nodes = inputNodes.filter(node =>
    //   inputEdges.map(edge => edge.nodes[0].id == node.id || edge.nodes[1].id == node.id).reduce((a, b) => a || b)
    // );
    this.nodes = inputNodes;
    this.edges = inputEdges;
    // separate graphs
    var graphsArray = inputNodes.map(node => [node]);
    var edgesArray = inputEdges.map(edge => {
      return {
        nodes: [
          edge[0],
          edge[1],
        ],
        included: false,
      };
    });
    // console.log(graphsArray);
    let allEdgesIncluded = false;
    let iterations = 0;
    while (!allEdgesIncluded && iterations < 2000) {
      allEdgesIncluded = true;
      iterations++;
      edgesArray.forEach(edge => {
        if (!edge.included) {
          allEdgesIncluded = false;
          let firstGraphIndex = graphsArray.findIndex(graph => graph.includes(edge.nodes[0]));
          let secondGraphIndex = graphsArray.findIndex(graph => graph.includes(edge.nodes[1]));
          // console.log(graphsArray[26]);
          // console.log("first: " + firstGraphIndex + ", " + edge.nodes[0] + "\nsecond: " + secondGraphIndex + ", " + edge.nodes[1]);
          if (firstGraphIndex != secondGraphIndex) {
            graphsArray[firstGraphIndex] = [...graphsArray[firstGraphIndex], ...graphsArray[secondGraphIndex]];
            graphsArray = [...graphsArray.slice(0, secondGraphIndex), ...graphsArray.slice(secondGraphIndex + 1)];
            edge.included = true;
          }
        }
      });
    }

    this.graphsArray = graphsArray.filter(graph => graph.length > 1);
    this.graphsArrayMasses = this.graphsArray.map(graph => graph.length);
    this.graphsArrayEdges = this.graphsArray.map(graph =>
      this.edges.filter(edge => graph.includes(edge[0]) || graph.includes(edge[1]))
    );
    this.graphsArrayForces = this.graphsArray.map((graph, index) => {
      let edges = this.graphsArrayEdges[index];
      // console.log(edges);
      return initForces(
        graph,
        edges,
        graph.map(node => edges.filter(edge => edge[0] == node || edge[1] == node).length + 1)
      );
    });

    this.centersArray = this.graphsArray.map((graph, index) => index);
    let maxMassIndex = this.graphsArrayForces.indexOf(
      this.graphsArrayForces.reduce((a, b) => a.totalMass > b.totalMass ? a : b)
    );
    let centersArrayEdges = [];
    // this.graphsArray.forEach((graph, index1) => {
    //   this.graphsArray
    //   .slice(index1 + 1)
    //   .forEach((graph, index2) => {
    //     centersArrayEdges.push([index1, index1 + 1 + index2]);
    //   });
    // });
    this.graphsArray.forEach((graph, index) => {
      if (maxMassIndex != index)
        centersArrayEdges.push([maxMassIndex, index]);
    });
    this.centersArrayEdges = centersArrayEdges;
    this.centersArrayForces = initForces(
      this.centersArray,
      this.centersArrayEdges,
      this.graphsArrayForces.map(graphForces => graphForces.totalMass)
    );
    console.log(this.centersArrayForces);
  }

  countPositions(deltaTime) {
    let centersPositions = animateNodes(this.centersArrayForces, this.centersArrayEdges, deltaTime);
    let centerWithMaxMass = 12;
    centersPositions[centerWithMaxMass].position = [0, 0, 0];

    let nodesPositionsWithId = [];
    centersPositions.forEach((center, index) => {
      nodesPositionsWithId = [
        ...nodesPositionsWithId,
        ...animateNodes(this.graphsArrayForces[index], this.graphsArrayEdges[index], deltaTime)
        .map(node => {
          return {
            id: node.id,
            position: vecAddition(node.position, vecMultiplication(center.position, 3))
          };
        })
      ];
    });
    return nodesPositionsWithId.sort((a, b) => a.id - b.id)
    .map(node => node.position)
    .reduce((a, b) => [...a, ...b]);
  }
}

export function initForces(nodes, edges, masses) {
  let nodesForces = nodes.map((node, index) => {
    return {
      id: node,
      force: [0, 0, 0],
      velocity: [0, 0, 0],
      position: [
        randomMax * (Math.random(1) - .5),
        randomMax * (Math.random(1) - .5),
        randomMax * (Math.random(1) - .5),
      ],
      mass: masses[index],
    };
  });
  let totalMass = nodesForces.map(verticle => verticle.mass).reduce((a, b) => a + b);

  return {
    nodesForces: nodesForces,
    totalMass: totalMass,
    minCenterRadius: Math.pow(totalMass / Pi, 1 / 3) * 1.75
    // minCenterRadius: totalMass / Pi * .75
  };
}

export function animateNodes(data, edges, deltaTime, masses) {
  let nodesForces = data.nodesForces;
  let totalMass = data.totalMass;
  let minCenterRadius = data.minCenterRadius;

  //Force renewal
  nodesForces.forEach(verticle => {
    verticle.force = vecMultiplication(verticle.force, forceAttenuation(deltaTime));
  });

  //Nodes collision forces
  nodesForces.forEach((verticle1, index1) => {
    nodesForces.slice(index1 + 1).forEach((verticle2, index2) => {
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
  nodesForces.forEach(verticle => {
    let centerVector = verticle.position;
    let distance = vecLength(centerVector);
    verticle.force = vecAddition(
      verticle.force,
      vecMultiplication(
        vecNormalize(centerVector),
        Math.pow((centerRadius(verticle, minCenterRadius) - distance) / centerRadius(verticle, minCenterRadius), 2) * centerRepulsion
    ));
  });

  //Deformed constraint forces
  edges.forEach(edge => {
    let node1 = nodesForces.find(verticle => verticle.id == edge[0]);
    let node2 = nodesForces.find(verticle => verticle.id == edge[1]);
    let substracted12 = vecSubstraction(node1.position, node2.position);
    let distance = vecLength(substracted12);
    let overflow = (constraintSize(node1, node2) - distance) / constraintSize(node1, node2);

    node1.force = vecAddition(node1.force, vecMultiplication(vecNormalize(substracted12), overflow * constraintRepulsion));
    node2.force = vecSubstraction(node2.force, vecMultiplication(vecNormalize(substracted12), overflow * constraintRepulsion));
  });

  //Push inside forces
  // nodesForces.forEach(verticle => {
  //   let overflow = vecLength(verticle.position) - centerRadius(verticle, minCenterRadius);
  //   if (overflow >= 0) {
  //     let N = vecNormalize(verticle.position);
  //     let nullForce = vecMultiplication(N, vecDot(N, verticle.force) + overflow * overflowK);
  //     nullForce = vecInverse(nullForce);
  //     verticle.force = vecAddition(verticle.force, nullForce);
  //   }
  // });

  //Calculate Velocity
  nodesForces.forEach(verticle => {
    //prevous Velocity attenuation
    verticle.velocity = vecMultiplication(verticle.velocity, velocityAttenuation(deltaTime));
    //add new Velocity
    verticle.velocity = vecAddition(verticle.velocity, vecMultiplication(verticle.force, deltaTime / verticle.mass));
    //Clip velocity
    verticle.velocity = vecClip(verticle.velocity, maxVelocity);
  });

  //Calculate new position
  nodesForces.forEach(verticle => {
    verticle.position = vecAddition(verticle.position, vecMultiplication(verticle.velocity, deltaTime));
    //Clip position
    let overflow = vecLength(verticle.position) - centerRadius(verticle, minCenterRadius);
    if (overflow >= 0) {
      let N = vecNormalize(verticle.position);
      let posCorrection = vecMultiplication(N, -overflow);
      verticle.position = vecAddition(verticle.position, posCorrection);
    }
    // verticle.position = vecClip(verticle.position, centerRadius(verticle, minCenterRadius));
  });


  var positions = nodesForces.map(verticle => {
    return {
      id: verticle.id,
      position: verticle.position,
    };
  });

  return positions;
}

//Vector math
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
export function vecInverse(vec) {
  return [-vec[0], -vec[1], -vec[2]];
}
