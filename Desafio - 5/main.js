/*titulo con js*/

const titulo = document.getElementById("titulo");
titulo.textContent = "Este es un titulo que cambia con Javascript";

/*lista con js*/

const lista = `

<ul>

    <li>objeto1</li>
    <li>objeto2</li>
    <li>objeto3</li>

</ul>
`;

const contenedor = document.getElementById("contenedor");
contenedor.innerHTML = lista;

/*alerta prueba*/

const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  alert("Se hizo Click en el boton");
});
