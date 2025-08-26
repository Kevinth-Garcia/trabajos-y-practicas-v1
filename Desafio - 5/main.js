
const titulo = document.getElementById(`titulo`);
titulo.textContent = `Este es un titulo que cambia`;

const lista = `

<ul>

    <li>objeto1</li>
    <li>objeto2</li>
    <li>objeto3</li>

</ul>
`;

const contenedor = document.getElementById(`contenedor`);
contenedor.innerHTML = lista;

const boton = document.getElementById(`boton`);
boton.addEventListener = ("click", () => {
    alert("SE HIZO CLICK EN EL BOTON")
});
