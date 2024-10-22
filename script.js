// Array untuk menyimpan produk di keranjang
let cart = [];

// Fungsi untuk menambah produk ke keranjang
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        let product = button.getAttribute('data-product');
        cart.push(product);
        alert(`${product} telah ditambahkan ke keranjang!`);
        updateCart();
    });
});

// Fungsi untuk memperbarui keranjang
function updateCart() {
    let cartItems = document.getElementById('cart-items');
    let totalPrice = 0;
    cartItems.innerHTML = '';
    cart.forEach(item => {
        let listItem = document.createElement('li');
        listItem.textContent = item + ' - Rp 39.500';
        cartItems.appendChild(listItem);
        totalPrice += 39500;
    });
    document.getElementById('total-price').textContent = totalPrice;
}

// Checkout sederhana
document.getElementById('checkout-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Pesanan Anda telah diterima! Terima kasih telah berbelanja.');
    cart = [];
    updateCart();
});
