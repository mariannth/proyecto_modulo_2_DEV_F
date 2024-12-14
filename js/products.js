// Datos de productos
const products = [
  {
    id: 1,
    category: "nadar",
    name: "Bañador Deportivo",
    description: "Bañador ideal para nadadores.",
    price: 399.00,
    image: "./src/traje de baño.jpg",
  },
  {
    id: 2,
    category: "nadar",
    name: "Gorro de Nadar",
    description: "Gorro ajustable para nadadores.",
    price: 235.50,
    image: "./src/gorra.webp",
  },
  {
    id: 3,
    category: "correr",
    name: "Zapatillas Running",
    description: "Zapatillas ligeras para correr.",
    price: 50,
    image: "./src/zapatos.jpg",
  },
  {
    id: 4,
    category: "correr",
    name: "Pantalones Running",
    description: "Pantalones cómodos para correr.",
    price: 35,
    image: "./src/ropa.jpeg",
  },
  {
    id: 5,
    category: "correr",
    name: "Conjunto deportivo ",
    description: "Ropa ligera para ejercitarse.",
    price: 30,
    image: "./src/pants.jpg",
  },
  {
    id: 6,
    category: "escalar",
    name: "Ropa para Escalar",
    description: "Ropa resistente para escalar.",
    price: 25,
    image: "./src/escalar.jpeg",
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
  const container = document.getElementById("contenido");
  container.innerHTML = ""; // Limpiar la sección de productos

  productsToDisplay.forEach((product) => {
    const card = `
            <div class="col-md-4 mb-4" id="productsContainer">
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
