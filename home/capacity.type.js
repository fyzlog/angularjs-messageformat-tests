export class capacity extends Object {
  value = null;

  constructor(value) {
    console.log(value);
    this.value = value;
  }

  toString() {
    return `<mf-capacity value="'` + this.value + `'"></mf-capacity>`;
  }
}
