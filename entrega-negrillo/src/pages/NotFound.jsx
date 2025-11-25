import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>404 - Página no encontrada</h1>
      <Link to="/" className="btn">Volver al inicio</Link>
    </div>
  );
}

export default NotFound;