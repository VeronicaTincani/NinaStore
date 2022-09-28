import { useState, createContext } from "react";

export const CartContext= createContext();

const CartContextProvider=({children})=>{
  const [cartList, setCartList] = useState([]);
    
const addItem = (product, cant) =>{
setCartList([...cartList, product])
}

const clear = () => {
setCartList([])
}

const removeItem = (id) =>{
        const index = cartList.findIndex( item => item.id == id)
        cartList.splice(index, 1)
        setCartList([...cartList])
}

    return(
        <CartContext.Provider value={{ cartList, addItem, clear, removeItem }} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;