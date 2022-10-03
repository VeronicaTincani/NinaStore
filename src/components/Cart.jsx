import { useContext } from "react";
import { CartContext } from "./CartContext";
import Button from 'react-bootstrap/Button';

const Cart= () => {
  const { cartList, addItem, clear, removeItem, cantItems, CalculoTotalPorItem } = useContext(CartContext);
    return(
        <>
        <h1>Carrito</h1>
        <Button variant="outline-dark" onClick={clear}>Eliminar todo</Button>
        ´{
cartList.map(item => 
   <li>
   <img src={item.img} width="100px" height="100px" />
    <h6>{item.title}</h6>   
   <p>${item.price}</p> 
   <Button variant="light" onClick={()=> removeItem(item.id)} ><img src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png"/>  </Button> 
   </li>
   )
        }
     </>     
    )
}
export default Cart;