import { useParams, useNavigate } from "react-router-dom";
import productos from "../data/Productosinfo";

function ProductoDetalle() {
  const navigate = useNavigate();
  const { id } = useParams();
  const producto = productos.find((p) => p.id === parseInt(id));

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  const volverAProductos = () => {
    navigate("/productos"); // redirige a la lista de productos
  };

  return (
    <div className="DetalleContainer">
      <div className="DetalleCard">
        <h1 className="DetalleNombre">{producto.nombre}</h1>
        <p className="DetalleDescripcion">{producto.descripcion}</p>
        <p className="DetallePrecio">${producto.precio}</p>

        {/* Botón que usa useNavigate */}
        <button className="BotonVolver" onClick={volverAProductos}>
          Volver
        </button>
      </div>
    </div>
  );
}

export default ProductoDetalle;
