import { useNavigate } from "react-router-dom";
import productos from "../data/Productosinfo";

function Productos() {
  const navigate = useNavigate(); // hook de navegación

  const irADetalles = (id) => {
    navigate(`/producto/${id}`); // redirige a la página de detalles
  };

  return (
    <div className="productos-container">
      <h1 className="Titulo">Productos</h1>
      <p className="texto">
        Explora nuestra selección de artículos destacados:
      </p>

      <ul className="Lista">
        {productos.map((p) => (
          <li className="Objetos" key={p.id}>
            <h2>{p.nombre}</h2>
            <p>Precio: ${p.precio}</p>

            {/* Botón que usa useNavigate */}
            <button className="BotonDetalles" onClick={() => irADetalles(p.id)}>
              Ver más detalles
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Productos;
