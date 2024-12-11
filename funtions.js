// Obtener el formulario por su ID
let formulario = document.getElementById("formulario");
// Agregar un evento submit al formulario
formulario.addEventListener("submit", function(event) {
event.preventDefault(); // Evitar que se envíe el formulario
// Obtener el valor del campo de texto
let nombre = document.getElementById("nombre").value;
// Mostrar un mensaje con el nombre ingresado
alert("Se ha enviado el fomulario, " + nombre);
});