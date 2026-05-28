import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/create">Novo Usuario</Link>
    </nav>
  );
}

export default Navbar;
