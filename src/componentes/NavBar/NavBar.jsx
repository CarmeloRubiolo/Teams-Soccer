import { useRef} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();
  
	const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
	};

	return (
    <header>
      <div className="img-lpf">
        <Link to="/"><img src="../../imagenes/Superliga_Argentina_Logo.png" alt="" /></Link>
        <Link to="/"><img src="../../imagenes/LPF.png" alt="" /></Link>
      </div>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">My work</a>
        <a href="/#">Blog</a>
        <a href="/#">About me</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;