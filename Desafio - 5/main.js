
/*titulo con js*/

const titulo = document.getElementById("titulo");
titulo.textContent = "Este es un titulo que cambia con Javascript";

const lista = `

<ul>

    <li>objeto1</li>
    <li>objeto2</li>
    <li>objeto3</li>

</ul>
`;

/*lista con js*/

const contenedor = document.getElementById("contenedor");
contenedor.innerHTML = lista;

/*alerta prueba*/

const boton = document.getElementById("boton");

boton.addEventListener ("click", () => {
    alert("Se hizo Click en el boton")
});
