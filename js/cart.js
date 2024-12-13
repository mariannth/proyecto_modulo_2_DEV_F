// Función para cargar los productos en el carrito
function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsContainer = document.getElementById("cartItems");
  const totalPriceElement = document.getElementById("totalPrice");

  cartItemsContainer.innerHTML = ""; // Limpiar contenedor de productos

  let total = 0;
  cart.forEach((product) => {
    const productTotal = product.price * product.quantity;
    total += productTotal;

    // Crear el HTML de cada producto
    const cartItem = `
            <div class="cart-item">
                <img src="${product.image}" alt="${product.name}">
                <div class="cart-item-info">
                    <h5>${product.name}</h5>
                    <p>$${product.price} x ${product.quantity}</p>
                    <button class="btn btn-danger btn-sm" onclick="removeFromCart(${product.id})">Eliminar</button>
                </div>
                <p>$${productTotal}</p>
            </div>
        `;
    cartItemsContainer.innerHTML += cartItem;
  });

  totalPriceElement.textContent = total.toFixed(2);
}

// Función para eliminar productos del carrito
function removeFromCart(productId) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const updatedCart = cart.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(updatedCart));

  // Recargar el carrito
  loadCart();
}

// Cargar el carrito cuando la página se carga
document.addEventListener("DOMContentLoaded", loadCart);
