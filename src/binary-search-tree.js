module.exports = class BinarySearchTree {
  constructor() {
    this.nodes = [];
}

  root() {
      return this.nodes.length ? {data: this.nodes[0]} : null;
  }

  add(data) {
      this.nodes.push(data);
  }

  has(data) {
      return this.nodes.includes(data);
  }

  find(data) {
    return this.has(data) ? {data: data} : null;
  }

  remove(data) {
      this.nodes.splice(this.nodes.indexOf(data), 1);
  }

  min() {
      let min;
      if (!this.nodes.length) min = null;
      else min = this.nodes[0];

      for (let i = 1; i < this.nodes.length; i++) {
          if (this.nodes[i] < min) min = this.nodes[i];
      }
      return min;  
  }

  max() {
      let max;
      if (!this.nodes.length) max = null;
      else max = this.nodes[0];

      for (let i = 1; i < this.nodes.length; i++) {
          if (this.nodes[i] > max) max = this.nodes[i];
      }
      return max;  
  }
}
