import "./Navbar.css";
import { Link } from "react-router-dom";



function Navbar() {
  return (
    <div className="nav-container text-3xl">
      <Link to={"/"}>
        <h1 className="heading">Authentication System</h1>
      </Link>
    </div>
  );
}

export default Navbar;
