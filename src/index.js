import HTML from "/src/services/html.js";

var onloadCallback = function () {
  grecaptcha.render("google_recaptcha", {
    sitekey: "6Lf-DcwhAAAAAIhmKqNpGzROlhVDh77C_oVBXVJO",
  });
};

const root = document.getElementById("portal-do-titular-form");

let html = new HTML(root);
let promisse = html.generate();

promisse.then((value) => {
  let script_form = document.createElement("script");

  script_form.src = "/src/services/form.js";
  html.create(value);
  html.root.append(script_form);
  onloadCallback;

  console.log(html.root);
});
