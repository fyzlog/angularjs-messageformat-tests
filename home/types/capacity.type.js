export class capacity {
  value = null;

  constructor(value) {
    this.value = value;
  }

  toString() {
    return `<mf-capacity value="'` + this.value + `'"></mf-capacity>`;
  }
}
