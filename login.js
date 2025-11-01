document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
      alert("Por favor complete todos los campos.");
      return;
    }

    // Aquí puedes validar o redirigir al dashboard
    alert(`Bienvenido ${username}!`);
    window.location.href = "index.html"; // cambia por tu página principal
  });
});
