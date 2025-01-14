class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
    return this.items;
  }

  get(pos) {
    if (pos <= this.length) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      var max = Math.max.apply(null, this.items);
      return max;
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      var min = Math.min.apply(null, this.items);
      return min;
    }
  }

  sum() {
    let arraySum = 0;
    for (let i = 0; i < this.items.length; i++) {
      arraySum += this.items[i];
    }
    return arraySum;
  }

  avg() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i];
    }
    let average = total / this.items.length;
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
    return average;
  }
}}

module.exports = SortedList;
