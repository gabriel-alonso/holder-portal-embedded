export default class HTML {
  constructor(root) {
    this.root = root;
  }

  create(html) {
    this.full = this.root;
    return (this.root.innerHTML = html);
  }

  generate() {
    let promisse = this.convertHtmlToString();
    return promisse;
  }

  async convertHtmlToString() {
    let file = "/src/templates/forms/form.html";
    let blob = await fetch(file).then((r) => r.blob());
    return blob.text();
  }
}
