document.addEventListener("DOMContentLoaded", () => {
    const userMenu = document.querySelector(".user-menu");
    const userToggle = document.getElementById("userToggle");

    userToggle.addEventListener("click", () => {
        userMenu.classList.toggle("active");
    });

    // Cierra el menú si se hace clic fuera de él
    document.addEventListener("click", (e) => {
        if (!userMenu.contains(e.target)) {
        userMenu.classList.remove("active");
        }
    });
});
