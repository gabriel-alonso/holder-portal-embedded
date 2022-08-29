const clientId = document.currentScript.getAttribute("clientId"); //1

const root = document.getElementById("portal-do-titular-form");

function validateForm() {
  let name = document.forms["myForm"]["name"].value;
  let cpf = document.forms["myForm"]["cpf"].value;
  let email = document.forms["myForm"]["email"].value;

  if (!name || !cpf || !email) return;

  fetch("http://127.0.0.1:3333/api/fake", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      cpf,
      email,
      clientId,
    }),
  })
    .then((res) => {
      console.log("Request complete! response:", res);
    })
    .catch((err) => {
      console.log(err);
    });
}

root.innerHTML = `
    <form id="myForm" name="myForm" style="width: 100%; display: flex; flex: 1; justify-content: center">
      <div style="display: flex; flex-direction: column">
        <div style="display: flex; flex-direction: row">
          <div
            style="
              text-align: center;
              display: flex;
              flex-direction: column;
              gap: 10px;
              margin-right: 10px;
            "
          >
            <label for="name">Nome</label>
            <label for="cpf">CPF</label>
            <label for="email">E-mail</label>
          </div>
          <div style="display: flex; flex-direction: column; gap: 10px">
            <input type="text" name="name" />
            <input type="text" name="cpf" />
            <input type="text" name="email" />
          </div>
        </div>
        <button style="padding: 10px 15px; border-radius: 10px" type="submit">
          Enviar
        </button>
      </div>
    </form>
`;

document.getElementById("myForm").addEventListener("click", function (event) {
  event.preventDefault();

  validateForm();
});
