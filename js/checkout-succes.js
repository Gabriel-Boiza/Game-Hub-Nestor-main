document.addEventListener('DOMContentLoaded', async function(event) {
    const id = getQueryParam('id');

    const cartLink = document.querySelector('.cart-link');
    const cartCounter = document.createElement('span');
    cartCounter.classList.add('cart-counter');
    cartLink.appendChild(cartCounter);
    
    updateCartCounter();

    const data = await cargarDatos(id);

    loadData(data);
    
});