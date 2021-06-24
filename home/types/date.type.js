export class date {
  value = null;

  constructor(value) {
    this.value = value;
  }

  toString() {
    return `<mf-date value="'` + this.value + `'"></mf-date>`;
  }
}
