const products = [
    { id: 1, name: "Dyson Airwrap™ Pink", price: 24900, image: "https://isnuyou.com.ua/Media/shop-6580/TDdO9XgTPY3oMxy.jpg" },
    { id: 2, name: "Dyson Supersonic™", price: 18500, image: "https://www.salon-services.com/dw/image/v2/BBTX_PRD/on/demandware.static/-/Sites-sally-master-catalog/default/dw2bb927b5/images/original/856476_0.jpg?sw=1000&sh=1000" },
    { id: 3, name: "Dyson Corrale™", price: 19900, image: "https://www.dshop.com.ua/image/cache/catalog/%D0%92%D1%8B%D0%BF%D1%80%D1%8F%D0%BC%D0%B8%D1%82%D0%B5%D0%BB%D1%8C/%D0%B2%D0%B2%201-600x600.jpg" }
];

let cart = [];

function displayProducts() {
    const container = document.getElementById('products');
    container.innerHTML = products.map(p => `
        <div class="product-card">
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p class="price">${p.price.toLocaleString()} грн</p>
            <button class="buy-btn" onclick="addToCart(${p.id})">Додати до кошика</button>
        </div>
    `).join('');
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateUI();
}

function updateUI() {
    document.getElementById('cart-count').innerText = cart.length;
    const cartItems = document.getElementById('cart-items');
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span>${item.name}</span>
            <span style="color: #f2c1c1">${item.price.toLocaleString()} грн</span>
        </div>
    `).join('');
    
    document.getElementById('cart-total').innerText = total.toLocaleString();
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
}

window.onclick = (e) => {
    if (e.target.classList.contains('modal')) toggleCart();
}

displayProducts();
