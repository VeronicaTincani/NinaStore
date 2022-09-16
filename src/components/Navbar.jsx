import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
  <nav className="navbar navbar-expand-lg bg-light" id='navNina'>
    <div className="container-fluid">
      <a className="navbar-brand" href="#" >Nina Store</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Best Sellers</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Contacto</a>
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