import { useState, createContext } from "react";

export const CartContext= createContext();

const CartContextProvider=({ children })=>{
  const [cartList, setCartList] = useState([]);
    
const addItem = (product, cant) => {
    if (!isInCart(product.id)) {
        console.log(`Se agrego al carrito ${cant} productos`)
        product = {                                     //se genera nuevo obj para agregar nueva propiedad
            ...product, 
            cant: cant
        }
        setCartList([
            ...cartList,
            product
        ])
    } else {
        alert(`Producto ya en carrito, se agrego ${cant} extra`) 
        const p = cartList.find(item => item.id === product.id)  //buscar el obj con mismo id para editar su cantidad nueva
        p.cant += cant
        setCartList([...cartList])
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

const CalculoTotalPorItem = (idItem) =>{
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