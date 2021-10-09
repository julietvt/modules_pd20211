'use strict';

export default class modeString {
  constructor(str, mode) {
    this.str = str;
    this.mode = mode;
  }
  changeMode() {
    switch (this.mode) {
      case 'lower':
        return this.str.toLowerCase();

      case 'upper':
        return this.str.toUpperCase();

      case 'reverse':
        return this.str.reverse();

      default:
        return this.str;
    }
  }
}
