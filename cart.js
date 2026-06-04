// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartBadge() {
  const badge = document.querySelector('.cart-badge');
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

function addToCart(productId) {
  const existing = cart.find(item => item.productId === productId);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ productId, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBadge();
  alert('Producto agregado al carrito');
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.productId !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBadge();
  if (window.location.pathname.includes('carrito.html')) {
    renderCart();
  }
}

function updateQuantity(productId, quantity) {
  if (quantity <= 0) {
    removeFromCart(productId);
    return;
  }
  const item = cart.find(item => item.productId === productId);
  if (item) {
    item.quantity = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    renderCart();
  }
}

// Initialize cart badge on page load
document.addEventListener('DOMContentLoaded', updateCartBadge);
