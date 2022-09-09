import HTML from "/src/services/html.js";

const root = document.getElementById("portal-do-titular-form");

let html = new HTML(root);
let promisse = html.generate();

promisse.then((value) => {
  let script = document.createElement("script");

  html.create(value);
  script.src = "/src/services/form.js";
  html.root.append(script);
  console.log(html.root);
});
