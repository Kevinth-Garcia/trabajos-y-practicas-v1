import { Link } from "react-router-dom";
import productos from "../data/Productosinfo";

function Productos() {
  return (
    <div>
      <h1 className="Productos">Productos</h1>
      <ul className="Lista">
        {productos.map(p => (
          <li className="Objetos" key={p.id}>
            <Link to={`/producto/${p.id}`}>{p.nombre}</Link> - ${p.precio}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Productos;