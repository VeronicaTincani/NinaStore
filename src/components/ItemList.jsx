import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";



const ItemList = ({ products })=> {
    
  
  return(
    <>
    {products.map((product) => 
        
        <div>
        <Card style={{ width: '18rem' }} className="Card">
          <Card.Img variant="top" src={product.img} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              $ {product.price}
            </Card.Text>             
          <Link to={"/item/"+ product.id}>   <Button variant="secondary" className='boton-detalle' onClick={ <Link to="/item/:id"></Link>}> Ver detalle </Button>    </Link>  
          </Card.Body>
        </Card>
        
        </div>
        )}
        </>   
         );
            }





export default ItemList;
