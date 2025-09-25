const contenedor = document.getElementById("contenedorTarjetas");
const carrito = document.getElementById("carrito");

let productos = [];
let carritoProductos = [];

// ---------------- FUNCIONES ----------------

// Mostrar productos en catálogo
function mostrarProductos(lista) {
  contenedor.innerHTML = "";

  lista.forEach((obj) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.innerHTML = `
      <img src="${obj.image}" alt="${obj.name}">
      <h3>${obj.name}</h3>
      <p><strong>ID:</strong> ${obj.id}</p>
      <p><strong>Precio:</strong> ${obj.price}</p>
      <p>${obj.description}</p>
    `;

    const boton = document.createElement("button");
    boton.textContent = "Agregar al Carro";

    boton.addEventListener("click", () => {
      agregarAlCarrito(obj.id);
      tarjeta.remove(); // elimina del catálogo al agregar al carrito
    });

    tarjeta.appendChild(boton);
    contenedor.appendChild(tarjeta);
  });
}

// Agregar producto al carrito
function agregarAlCarrito(id) {
  const producto = productos.find((p) => p.id === id);
  if (producto) {
    carritoProductos.push(producto);
    mostrarCarrito();
  }
}

// Mostrar carrito en la tabla
function mostrarCarrito() {
  carrito.innerHTML = "";

  carritoProductos.forEach((item) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${item.name}</td>
      <td>${item.price}</td>
    `;
    carrito.appendChild(fila);
  });
}

// ---------------- FETCH ----------------

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    productos = data;
    mostrarProductos(productos);
  })
  .catch((error) => console.error("Error cargando JSON:", error));
