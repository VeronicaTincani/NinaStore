
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Contador from '../conteiners/Contador';
import { CartContext } from './CartContext';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';


const ItemDetail= ({item}) => {
  const [valor, setValor] = useState(0); 
  const { addItem } = useContext(CartContext);
  const onAdd = (cant) => 
  {
  
  alert("agregaste "+ cant + " producto(s) al carrito");
  setValor(cant);
  addItem(item, cant)
  }

    return(
   <>
 
  <div id="detail-product">
    <ListGroup horizontal>
      <ListGroup.Item><img src={item.img} alt="perfume" className='img-detail'/></ListGroup.Item>
      <ListGroup.Item> <h2>{item.title}</h2>
      <h3>{item.description}</h3>
      <h4>${item.price}</h4>
     {   valor==0 
? <Contador count={onAdd}/>
: <Link to="/cart"> <Button variant="outline-danger">Checkout</Button></Link>
}  </ListGroup.Item>
      </ListGroup>


    

</div>
  
      
 


   
    </>
    );
        }
   

export default ItemDetail;