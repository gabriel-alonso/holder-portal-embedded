export default class GoogleRecaptcha {
  onloadCallback = function () {
    grecaptcha.render("google_recaptcha", {
      sitekey: "6Lf-DcwhAAAAAIhmKqNpGzROlhVDh77C_oVBXVJO",
    });
  };
}
