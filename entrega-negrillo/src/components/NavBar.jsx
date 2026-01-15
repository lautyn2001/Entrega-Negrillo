import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav>
      <Link to="/">Star Wars Shop</Link>

      <div className="nav-links">
        <Link to="/category/sables">Sables</Link>
        <Link to="/category/armas">Armas</Link>
        <Link to="/category/naves">Naves</Link>
        <Link to="/category/coleccionables">Coleccionables</Link>
        <Link to="/category/hogar">Hogar</Link>
        <Link to="/contacto">Contacto</Link>
      </div>

      <Link to="/cart">
        <CartWidget />
      </Link>
    </nav>
  );
}

export default NavBar;