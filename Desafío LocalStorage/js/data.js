document.addEventListener("DOMContentLoaded", () => {
  const data = document.getElementById("data");

  data.textContent = localStorage.getItem("usuario");
});
