import { useParams, useNavigate } from "react-router-dom";
import productos from "../data/Productosinfo";

function DetalleProducto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const producto = productos.find(p => p.id === parseInt(id));

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div>
      <h1>{producto.nombre}</h1>
      <p>Precio: ${producto.precio}</p>
      <p>{producto.descripcion}</p>
      <button onClick={() => navigate("/productos")}>Volver</button>
    </div>
  );
}

export default DetalleProducto;