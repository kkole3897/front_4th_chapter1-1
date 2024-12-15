export class Component {
  constructor(el) {
    this.el = el;
  }

  render() {
    this.el.innerHTML = this.template();
  }

  template() {
    return "";
  }
}
