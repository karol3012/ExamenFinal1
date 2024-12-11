let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function(event) {
event.preventDefault(); 
let nombre = document.getElementById("nombre").value;
alert("Se ha enviado el fomulario, " + nombre);
});

document.getElementById('menu-toggle').addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu.style.maxHeight) {
        navMenu.style.maxHeight = null; // Cerrar el menú
    } else {
        navMenu.style.maxHeight = navMenu.scrollHeight + "px"; // Abrir el menú
    }
});