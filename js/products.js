// Datos de productos
const products = [
  // Categoría: Ropa de Nadar
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
    category: "nadar",
    name: "Flotador Inflable",
    description: "Flotador para relajarse en el agua.",
    price: 199.99,
    image: "./src/flotador.jpg",
  },
  
  // Categoría: Ropa de Correr
  {
    id: 4,
    category: "correr",
    name: "Zapatillas Running",
    description: "Zapatillas ligeras para correr.",
    price: 50.00,
    image: "./src/zapatos.jpg",
  },
  {
    id: 5,
    category: "correr",
    name: "Pantalones Running",
    description: "Pantalones cómodos para correr.",
    price: 35.00,
    image: "./src/ropa.jpeg",
  },
  {
    id: 6,
    category: "correr",
    name: "Conjunto Deportivo",
    description: "Ropa ligera para ejercitarse.",
    price: 30.00,
    image: "./src/pants.jpg",
  },

  // Categoría: Ropa de Escalar
  {
    id: 7,
    category: "escalar",
    name: "Ropa para Escalar",
    description: "Ropa resistente para escalar.",
    price: 25.00,
    image: "./src/escalar.jpeg",
  },
  {
    id: 8,
    category: "escalar",
    name: "Botas para Escalada",
    description: "Botas resistentes para escalar.",
    price: 899.00,
    image: "./src/botas.jpg",
  },
  {
    id: 9,
    category: "escalar",
    name: "Mochila de Escalada",
    description: "Mochila compacta para transportar equipo.",
    price: 499.00,
    image: "./src/mochila.jpg",
  },

  // Categoría: Ropa de Mujer
  {
    id: 10,
    category: "ropa_mujer",
    name: "Blusa de Algodón",
    description: "Blusa cómoda para cualquier ocasión.",
    price: 299.00,
    image: "./src/blusa_mujer.jpg",
  },
  {
    id: 11,
    category: "ropa_mujer",
    name: "Jeans Skinny",
    description: "Jeans ajustados de corte moderno.",
    price: 549.00,
    image: "./src/jeans_mujer.jpg",
  },
  {
    id: 12,
    category: "ropa_mujer",
    name: "Chaqueta de Cuero",
    description: "Chaqueta estilizada de cuero sintético.",
    price: 999.00,
    image: "./src/chaqueta_mujer.jpg",
  },

  // Categoría: Ropa de Niña
  {
    id: 13,
    category: "ropa_nina",
    name: "Vestido Infantil",
    description: "Vestido colorido para niñas.",
    price: 199.00,
    image: "./src/vestido_nina.jpg",
  },
  {
    id: 14,
    category: "ropa_nina",
    name: "Leggings de Niña",
    description: "Leggings cómodos para niñas activas.",
    price: 150.00,
    image: "./src/leggings_nina.jpg",
  },
  {
    id: 15,
    category: "ropa_nina",
    name: "Suéter de Niña",
    description: "Suéter suave y cálido para niñas.",
    price: 249.00,
    image: "./src/sueter_nina.jpg",
  },

  // Categoría: Ropa de Hombre
  {
    id: 16,
    category: "ropa_hombre",
    name: "Camiseta de Algodón",
    description: "Camiseta fresca y cómoda para hombre.",
    price: 199.00,
    image: "./src/camiseta_hombre.jpg",
  },
  {
    id: 17,
    category: "ropa_hombre",
    name: "Pantalones Cortos",
    description: "Pantalones cortos para el verano.",
    price: 249.00,
    image: "./src/pantalones_hombre.jpg",
  },
  {
    id: 18,
    category: "ropa_hombre",
    name: "Chaqueta Deportiva",
    description: "Chaqueta ligera para actividades al aire libre.",
    price: 699.00,
    image: "./src/chaqueta_hombre.jpg",
  },

  // Categoría: Ropa de Niño
  {
    id: 19,
    category: "ropa_nino",
    name: "Camiseta de Niño",
    description: "Camiseta divertida para niños.",
    price: 150.00,
    image: "./src/camiseta_nino.jpg",
  },
  {
    id: 20,
    category: "ropa_nino",
    name: "Pantalones de Niño",
    description: "Pantalones cómodos para jugar.",
    price: 200.00,
    image: "./src/pantalones_nino.jpg",
  },
  {
    id: 21,
    category: "ropa_nino",
    name: "Sudadera de Niño",
    description: "Sudadera cálida para días fríos.",
    price: 299.00,
    image: "./src/sudadera_nino.jpg",
  },

  // Categoría: Productos de Belleza
  {
    id: 22,
    category: "belleza",
    name: "Crema Hidratante",
    description: "Crema para hidratar la piel seca.",
    price: 120.00,
    image: "./src/crema_belleza.jpg",
  },
  {
    id: 23,
    category: "belleza",
    name: "Champú Voluminizador",
    description: "Champú para dar volumen al cabello.",
    price: 180.00,
    image: "./src/shampoo_belleza.jpg",
  },
  {
    id: 24,
    category: "belleza",
    name: "Lipstick Mate",
    description: "Labial mate de larga duración.",
    price: 150.00,
    image: "./src/lipstick.jpg",
  },

  // Categoría: Zapatos
  {
    id: 25,
    category: "zapatos",
    name: "Zapatillas Deportivas",
    description: "Zapatillas ligeras para deportes.",
    price: 499.00,
    image: "./src/zapatillas.jpg",
  },
  {
    id: 26,
    category: "zapatos",
    name: "Botines de Cuero",
    description: "Botines elegantes de cuero para hombre.",
    price: 899.00,
    image: "./src/botines.jpg",
  },
  {
    id: 27,
    category: "zapatos",
    name: "Sandalias para Mujer",
    description: "Sandalias cómodas para los días calurosos.",
    price: 299.00,
    image: "./src/sandalias_mujer.jpg",
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
