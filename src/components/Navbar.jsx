import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
  <nav className="navbar navbar-expand-lg bg-light" id='navNina'>
    <div className="container-fluid">
      <Link to="/" className="navbar-brand" >Nina Store</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="category/8" className="nav-link active" aria-current="page"  >Best Sellers</Link>
          </li>
          <li className="nav-item">
            <Link to="category/4" className="nav-link active" aria-current="page">For Woman</Link>
          </li>
          <li className="nav-item">
            <Link to="category/3"   className="nav-link active"    aria-current="page"  >For men</Link>
          </li>
        </ul>
      </div>

       <CartWidget/>
    </div>
  </nav>
  /*componente hasta acá, esta sintaxis es jsx*/
  /*para llamar a la funcion es <ejemplo/>*/
  /*fragment: etiqueta vacia <> </>*/
    );
  }
  
  export default Navbar;