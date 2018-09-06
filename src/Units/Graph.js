import React, { Component } from 'react';

import store from './../utils/store.js';
import positionNodes from './../positionNodes';
import initBuffers from './../GL/initBuffers.js';

import Edges from './Edges';
import Nodes from './Nodes';

export default class Graph extends Component {
  constructor(props) {
    super(props);

    const myStore = new store();
    this.state = {
      positionsClass: new positionNodes(
        myStore.get("nodes").map(node => node.id),
        myStore.get("edges").map(edge => [edge.nodes[0].id, edge.nodes[1].id])
      ),
      nodesPositions: [],
      buffers: undefined,
    };
  }

  static getDerivedStateFromProps(props, state) {
    const gl = props.engine.gl;
    const deltaTime = props.engine.deltaTime;

    state.nodesPositions = state.positionsClass.countPositions(deltaTime).map(pos => pos / 5);
    state.buffers = initBuffers(gl, deltaTime, state.nodesPositions);

    return state;
  }

  render() {
    return (
      <div>
        <Edges {...this.props} buffers={this.state.buffers} />
        <Nodes {...this.props} buffers={this.state.buffers} positions={this.state.nodesPositions} />
      </div>
    );
  }
}
