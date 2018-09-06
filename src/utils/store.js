// import animateNodes from './animateNodes';
import nodes from './DB/nodes';
import edges from './DB/edges';

export default class store {
  constructor() {
  }

  get(query) {
    switch(query) {
      case "nodes":
        return nodes;
      case "edges":
        return edges;
      default:
        return [];
    }
  }
}
