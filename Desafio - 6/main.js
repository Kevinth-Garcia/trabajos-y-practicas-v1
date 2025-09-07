// Detector de Coordenadas de Caja de Mouse con Scroll en Y //

const cajaMouse = document.getElementById("cajaMouse");
const coordsDiv = document.getElementById("coords");
const scrollPosDiv = document.getElementById("scrollPos");

cajaMouse.addEventListener("mouseover", function () {
  cajaMouse.style.backgroundColor = "lightgreen";
});

cajaMouse.addEventListener("mouseout", function () {
  cajaMouse.style.backgroundColor = "lightblue";
  coordsDiv.textContent = "X: 0 | Y: 0"; // reset al salir
});

cajaMouse.addEventListener("mousemove", function (event) {
  const rect = cajaMouse.getBoundingClientRect(); // posición del div
  const x = event.clientX - rect.left; // coordenadas relativas al div
  const y = event.clientY - rect.top;
  coordsDiv.textContent = `X: ${x} | Y: ${y}`;
});

window.addEventListener("scroll", function () {
  scrollPosDiv.textContent = `Scroll Y: ${window.scrollY}`;
});

// Evento de Nombre con etiqueta h2 con Jscript //

document.getElementById("btnNombre").addEventListener("click", () => {
  const nombre = document.getElementById("inputNombre").value;
  document.getElementById("nombreMostrado").textContent = nombre;
});

// Lista de Arreglo con Jscript //

const objetos = [
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/51WpZbC4dsL._UY900_.jpg",
    name: "Zapatos de Vestir",
    price: "$30",
    description: "Zapatos de Vestir para eventos especiales",
  },
  {
    id: 2,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_626986-MLV49155053728_022022-O.webp",
    name: "Camiseta Blanca",
    price: "$20",
    description: "Camiseta de color blanco para salir, talla M.",
  },
  {
    id: 3,
    image:
      "https://cdn.grupoelcorteingles.es/statics/manager/contents/images/uploads/2025/03/H1-jwm6c3Jg.jpeg?impolicy=Resize&width=800&height=800",
    name: "Pantalones de Mujer",
    price: "$70",
    description: "Pantalones de mujer con remangado, Talla 28x29.",
  },
  {
    id: 4,
    image:
      "https://mauiandsons.com.pe/media/catalog/product/cache/b21485b3694be439526e31032542a8d9/5/g/5g825-mi25lisoblack-1.jpg",
    name: "Gorro de salir",
    price: "$40",
    description: "Gorro de color negro ideal para el frio",
  },
  {
    id: 5,
    image:
      "https://rmk-store.com/cdn/shop/files/6_1abd45cf-a383-4c32-bdba-51d67756cc4e.png?v=1685023782&width=1946",
    name: "Hoodie",
    price: "$50",
    description: "Hoodie de color verde ideal para el frio, Talla L",
  },
];

document.getElementById("btnArreglo").addEventListener("click", () => {
  const contenedor = document.getElementById("contenedorTarjetas");
  contenedor.innerHTML = "";

  objetos.forEach((obj) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.innerHTML = `
      <img src="${obj.image}" alt="${obj.name}">
      <h3>${obj.name}</h3>
      <p><strong>ID:</strong> ${obj.id}</p>
      <p><strong>Precio:</strong> ${obj.price}</p>
      <p>${obj.description}</p>
    `;
    contenedor.appendChild(tarjeta);
  });
});
