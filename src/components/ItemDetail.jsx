import { useState } from 'react';
import { Link } from 'react-router-dom';
import Contador from '../conteiners/Contador';

const ItemDetail= ({item}) => {
  const [valor, setValor] = useState(0); 

  const agregar = (cant) => {
    setValor(cant)}

    return(
   <>
 {
  <div className='detail-container'>
   <img src={item.img} alt="perfume" className='img-detail'/>
<h1>{item.title}</h1>
<h4>{item.description}</h4>
<h5>${item.price}</h5>
{ valor === 0 
? <Contador initial={valor} tock={item.stock} onAdd={agregar} />
: <Link to="/cart"> <button> Ver en carrito </button> </Link>

}

</div>

   }
    </>
    );
        }
   

export default ItemDetail;