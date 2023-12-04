'use strict';

class RangeValidator {
  constructor(from, to) {
    this._from = from;
    this._to = to;
  }

  get from() {
    return this.from;
  }

  set from(value) {
    if(isNaN(value) || typeof value !== 'number') {
      throw TypeError ('for from need number');
    }

    if(this.to < value) {
      throw TypeError ('to must be more from');
    }
    this.from = value;
  }

  get to() {
    return this.to;
  }

  set to(value) {
    if(isNaN(value) || typeof value !== 'number') {
      throw TypeError ('for to need number');
    }

    if(this.from > value) {
      throw TypeError ('from must be less to');
    }
    this.to = value;
  }

  get range () {
    return [this.from, this.to];
  }

  validate (number) {
    if (number > this.to || number < this.from) {
      throw RangeError ('not in range');
    }
    return number;
  }
}

const myRange1 = new RangeValidator(3,33)
const myRange2 = new RangeValidator(2,22)
