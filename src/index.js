import HTML from "/src/services/html.js";
import GoogleRecaptcha from "/src/services/google_recaptcha.js";

let gr = new GoogleRecaptcha();
gr.onloadCallback;

const root = document.getElementById("portal-do-titular-form");

let html = new HTML(root);
let promisse = html.generate();

promisse.then((value) => {
  let script_form = document.createElement("script");
  let script_fontawesome = document.createElement("script");

  html.create(value);

  script_form.src = "/src/services/form.js";
  script_fontawesome.src = "https://kit.fontawesome.com/b99e675b6e.js";

  html.root.append(script_form);
  html.root.append(script_fontawesome);

  console.log(html.root);
});
