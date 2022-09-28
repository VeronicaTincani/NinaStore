
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Contador from '../conteiners/Contador';
import { CartContext } from './CartContext';
import Button from 'react-bootstrap/Button';

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
 {
  <div className='detail-container'>
      <img src={item.img} alt="perfume" className='img-detail'/>
      <h1>{item.title}</h1>
      <h4>{item.description}</h4>
      <h5>${item.price}</h5>
{   

valor==0 
? <Contador count={onAdd}/>
: <Link to="/cart"> <Button variant="outline-danger">Checkout</Button></Link>

}

</div>

   }
    </>
    );
        }
   

export default ItemDetail;