import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2>Deshbhushan Premium</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
       
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;