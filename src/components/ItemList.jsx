import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Contador from '../conteiners/Contador';
import prodList from '../conteiners/ItemListContainer'


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
            <Contador/>
             <Button variant="secondary">  Añadir   <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/></svg>      
            </Button>     
            <Button variant="secondary" className='boton-detalle' onClick={product.description}> Ver detalle </Button>  
          </Card.Body>
        </Card>
        </div>
        )}
        </>   
         );
            }





export default ItemList;
