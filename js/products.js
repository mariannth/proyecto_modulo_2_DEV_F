// Datos de productos
const products = [
  {
    id: 1,
    category: "nadar",
    name: "Bañador Deportivo",
    description: "Bañador ideal para nadadores.",
    price: 20,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    category: "nadar",
    name: "Gorro de Nadar",
    description: "Gorro ajustable para nadadores.",
    price: 10,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    category: "correr",
    name: "Zapatillas Running",
    description: "Zapatillas ligeras para correr.",
    price: 50,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    category: "correr",
    name: "Pantalones Running",
    description: "Pantalones cómodos para correr.",
    price: 35,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 5,
    category: "escalar",
    name: "Camisa Escalada",
    description: "Camisa resistente para escalar.",
    price: 30,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 6,
    category: "escalar",
    name: "Guantes Escalada",
    description: "Guantes para una mejor protección.",
    price: 25,
    image: "https://via.placeholder.com/300",
  },
];

// Función para cargar las tarjetas de productos según la categoría seleccionada
function filterProducts(category) {
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  displayProducts(filteredProducts);
}

// Función para mostrar las tarjetas de productos
function displayProducts(productsToDisplay) {
  const container = document.getElementById("productCards");
  container.innerHTML = ""; // Limpiar la sección de productos

  productsToDisplay.forEach((product) => {
    const card = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text">$${product.price}</p>
                        <button class="btn btn-outline-primary" onclick="addToCart('${product.name}')">Añadir al carrito</button>
                    </div>
                </div>
            </div>
        `;
    container.innerHTML += card;
  });
}

// Función para manejar el evento de agregar al carrito
function addToCart(productName) {
  // Encontrar el producto basado en el nombre
  const product = products.find((item) => item.name === productName);

  // Obtener el carrito del localStorage o un carrito vacío si no existe
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Verificar si el producto ya está en el carrito
  const existingProductIndex = cart.findIndex((item) => item.id === product.id);

  // Si el producto ya está en el carrito, incrementar su cantidad
  if (existingProductIndex !== -1) {
    cart[existingProductIndex].quantity += 1;
  } else {
    // Si el producto no está en el carrito, agregarlo con cantidad 1
    cart.push({ ...product, quantity: 1 });
  }

  // Guardar el carrito actualizado en el localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Mostrar un modal de éxito
  const cartModal = new bootstrap.Modal(document.getElementById("cartModal"));
  cartModal.show();
}
