// functions.js

// Función para mostrar un mensaje de alerta al enviar el formulario
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#contacto form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío del formulario
        alert("¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.");
        form.reset(); // Reinicia el formulario
    });
});

// Función para cambiar el color de fondo de los productos al pasar el mouse
const productos = document.querySelectorAll('.producto');

productos.forEach(producto => {
    producto.addEventListener('mouseenter', () => {
        producto.style.backgroundColor = '#ffebaef2'; // Cambia el color de fondo
    });

    producto.addEventListener('mouseleave', () => {
        producto.style.backgroundColor = ''; // Restaura el color de fondo
    });
});