class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;

  }

  add(item) {
    this.items.push(item);
    this.items.sort((item1, item2) => {
      return item1 - item2;
    });
      this.length = this.items.length;
  }

  get(pos) {
    if(this.items[pos] === undefined) {
      throw Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if(this.items.length == 0) {
      throw Error("EmptySortedList");
    } else {
      return Math.max(...this.items) 
    }
  }

  min() {
    if (this.items.length == 0) {
      throw Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
     if (this.items.length === 0) {
      return 0;
    }
    let total = 0;
    for(let i = 0; i < this.items.length; i++) {
      total += this.items[i];
      } return total; 
    }

  avg() {
    if (this.items.length === 0) {
      throw Error("EmptySortedList");
    } 
    let someSum = this.sum(this.items);
    let someAverage = someSum / this.length;
    return someAverage;
  }
} 

module.exports = SortedList;
