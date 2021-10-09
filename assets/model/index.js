'use strict';

export default class modeString {
  constructor(str, mode) {
    this.str = str;
    this.mode = mode;
  }
  changeMode() {
    switch (this.mode) {
      case 'lower':
        this.str.toLowerCase();
        break;
      case 'upper':
        this.str.toUpperCase();
        break;
      case 'reverse':
        this.str.reverse();
        break;
      default:
        return this.str;
    }
    return this.str;
  }
}
