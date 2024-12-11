const cart = []; // Array para almacenar los productos del carrito
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const product = this.parentElement; // Obtiene el elemento del producto
        const productName = product.querySelector('h3').innerText; // Obtiene el nombre del producto
        cart.push(productName); // Agrega el producto al carrito
        alert(`${productName} ha sido agregado al carrito.`); // Mensaje de confirmación
    });
});
alert("holaaa")