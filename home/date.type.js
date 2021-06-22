export class date extends Object {
  value = null;

  constructor(value) {
    console.log(value);
    this.value = value;
  }

  toString() {
    return `<mf-date value="'` + this.value + `'"></mf-date>`;
  }
}
