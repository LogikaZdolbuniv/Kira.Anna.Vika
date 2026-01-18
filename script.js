const products = [
    { id: 1, name: "Dyson Airwrap Multi-styler", price: 24900, image: "https://via.placeholder.com/250?text=Airwrap" },
    { id: 2, name: "Dyson Supersonic Hair Dryer", price: 18500, image: "https://via.placeholder.com/250?text=Supersonic" },
    { id: 3, name: "Dyson Corrale Straightener", price: 19900, image: "https://via.placeholder.com/250?text=Corrale" }
];

let cart = [];

function displayProducts() {
    const container = document.getElementById('products');
    container.innerHTML = products.map(p => `
        <div class="product-card">
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p class="price">${p.price.toLocaleString()} грн</p>
            <button class="buy-btn" onclick="addToCart(${p.id})">У кошик</button>
        </div>
    `).join('');
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    const cartItems = document.getElementById('cart-items');
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    
    cartItems.innerHTML = cart.map(item => `
        <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
            <span>${item.name}</span>
            <span>${item.price.toLocaleString()} грн</span>
        </div>
    `).join('');
    
    document.getElementById('cart-total').innerText = total.toLocaleString();
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

// Закриття при кліку поза вікном
window.onclick = function(event) {
    const modal = document.getElementById('cart-modal');
    if (event.target == modal) modal.style.display = "none";
}

displayProducts();
