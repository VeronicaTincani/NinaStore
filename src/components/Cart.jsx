import { useContext } from "react";
import { CartContext } from "./CartContext";
import Button from 'react-bootstrap/Button';
import { db } from "../utils/firebaseConfig";
import { serverTimestamp, setDoc, doc, collection, updateDoc, increment} from "firebase/firestore";
import { async } from '@firebase/util';
import ListGroup from 'react-bootstrap/ListGroup';

const Cart= () => {
  const { cartList, addItem, clear, removeItem, cantItems, CalculoTotalPorItem } = useContext(CartContext);
  const crearOrdenDeCompra = async (e) => {
    const itemsFiltrados = cartList.map(producto => (
                {
                    id : producto.id,
                    title: producto.title,
                    price: producto.price,
                    quantity: producto.cantidad
                }
            ))
            
            const orden = {
                buyer : {
                    name : "Madison Beer",
                    phone : "1896665420",
                    email : "MadisonBeer@outlook.es"
                },
                items : itemsFiltrados,
                date : serverTimestamp(),
                total : CalculoTotalPorItem(),
            }
            const newOrderRef = doc(collection(db, "orders"))
            await setDoc(newOrderRef, orden);

            /*cartList.forEach( async producto => {
                const productoRef = doc(db, "products", producto.id) 
                await updateDoc(productoRef, { 
                    stock : increment(-producto.stock) 
                });
            })*/
            
            /*alert('Your orden has been created IDs orden is ' + newOrderRef.id)*/
            }
 return(
        <>
   
 <h1>Carrito</h1>
    {
cartList.map(item => 
   
  <ListGroup horizontal>
  <ListGroup.Item> <img src={item.img} width="100px" height="100px" /></ListGroup.Item>
  <ListGroup.Item><h6>{item.title}</h6> </ListGroup.Item>
  <ListGroup.Item><p>${item.price}</p> </ListGroup.Item>
  <ListGroup.Item><p>cantidad: {item.cant}</p> </ListGroup.Item>
  <ListGroup.Item><Button variant="light" onClick={()=> removeItem(item.id)} ><img src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png"/>  </Button> </ListGroup.Item>
</ListGroup>

   )
        }


<div>
  

        <Button variant="outline-dark" onClick={clear}>Eliminar todo</Button>
        <Button className="botonComprar" onClick={(e) => crearOrdenDeCompra(e)}>Finalizar compra</Button>
</div>

     </>     
    )
}
export default Cart;