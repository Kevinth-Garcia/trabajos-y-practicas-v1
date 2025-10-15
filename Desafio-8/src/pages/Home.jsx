import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate(); // hook de navegación

  const irAProductos = () => {
    navigate("/productos"); // redirige a /productos
  };

  return (
    <div className="home">
      <h1 className="Bienvenida">Bienvenido a la Tienda ItsKagz</h1>
      <p className="Texto-bienvenida">
        Explora nuestros productos gamer con los mejores precios y estilo.
      </p>

      {/* Botón que usa useNavigate */}
      <button onClick={irAProductos} className="btn-ver-productos">
        Ver productos
      </button>
    </div>
  );
}

export default Home;
