document.addEventListener("DOMContentLoaded", () => {
  const datoInput = document.getElementById("inputText");
  const button = document.getElementById("buttonText");

  button.addEventListener("click", () => {
    let datoUsuario = datoInput.value;

    const input = localStorage.setItem("usuario", datoUsuario);
    const nose = localStorage.getItem("usuario");
    console.log(nose);
  });
});
