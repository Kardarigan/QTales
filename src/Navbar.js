import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

const Navbar = () => {
    return (
        <nav className="navbar p-4 d-flex items-center ">
            <a href="/" className="navLogo">
                <img src={logo} alt="Logo" />
                <h1 className="d-md-inline d-none">QTales</h1>
            </a>

            <div className="links">
                <Link to="/">Overview</Link>
                <Link to="/create">New Tale</Link>
            </div>
        </nav>
    );
};

export default Navbar;
