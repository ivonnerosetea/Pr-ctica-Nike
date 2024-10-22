document.addEventListener('DOMContentLoaded', () => {
    const cartButton = document.getElementById('cart-button');
    const cartDetails = document.getElementById('cart-details');
    const cartItems = document.getElementById('cart-items');

    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const addToCartButton = product.querySelector('.add-to-cart');
        addToCartButton.addEventListener('click', () => {
            const productId = product.getAttribute('data-id');
            const productName = product.getAttribute('data-name');
            const productPrice = product.getAttribute('data-price');
            const productImageSrc = product.querySelector('img').src;

            // Crear un nuevo elemento en el carrito
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <img src="${productImageSrc}" alt="${productName}">
                <p>${productName} - $${productPrice}</p>
                <button class="remove-item">Eliminar</button>
            `;

            // Limpiar el contenido actual del carrito si es la primera adición
            if (cartItems.children.length === 1 && cartItems.children[0].textContent === 'No hay productos en el carrito.') {
                cartItems.innerHTML = ''; // Limpia el mensaje inicial
            }
            
            cartItems.appendChild(itemElement);

            // Mostrar el carrito si está oculto
            if (cartDetails.classList.contains('hidden')) {
                cartDetails.classList.remove('hidden');
            }

            // Añadir evento de eliminar al botón de eliminar
            const removeButton = itemElement.querySelector('.remove-item');
            removeButton.addEventListener('click', () => {
                itemElement.remove();
                // Si el carrito está vacío, muestra el mensaje de que no hay productos
                if (cartItems.children.length === 0) {
                    cartItems.innerHTML = '<p>No hay productos en el carrito.</p>';
                }
            });
        });
    });

    // Mostrar y ocultar el carrito al hacer clic en el botón del carrito
    cartButton.addEventListener('click', () => {
        if (cartDetails.classList.contains('hidden')) {
            cartDetails.classList.remove('hidden');
        } else {
            cartDetails.classList.add('hidden');
        }
    });
});

