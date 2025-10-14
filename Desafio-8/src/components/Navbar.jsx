import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="link">Inicio</NavLink>
      <NavLink to="/productos" className="link">Productos</NavLink>
    </nav>
  );
}

export default Navbar;