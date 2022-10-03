import { useState, createContext } from "react";

export const CartContext= createContext();

const CartContextProvider=({children})=>{
  const [cartList, setCartList] = useState([]);
    
const addItem = (product, cant) =>{
if (!isInCart(product.id)) {
    product.cantidadSeleccionada = cant
   setCartList([...cartList, product])
} else { product.cantidadSeleccionada += cant

}
}


const clear = () => {
setCartList([]) 
}

const isInCart = (id) => {
    if (cartList.find(item => item.id === id)) {
        return true
    } else {
        return false
    }
}

const removeItem = (itemId) => setCartList(cartList.filter((item) => item.id !== itemId))
const cantItems = () => {
    let index = cartList.map(item => item.cantidadSeleccionada)
    return index.reduce((valorPrevio, valorActual) => valorPrevio + valorActual, 0)
}

const CalculoTotalPorItem = (itemId) =>{
    let index = cartList.map(item => item.Id).indexOf(idItem);
    return cartList[index].costItem * cartList[index].cant
}




    return(
        <CartContext.Provider value={{ cartList, addItem, clear, removeItem, cantItems, CalculoTotalPorItem }} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;