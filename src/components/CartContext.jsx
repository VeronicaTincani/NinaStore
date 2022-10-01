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

/*const CalculoTotalPerItem = (idItem) =>{
    let index = cartList.map(item => idItem).indexOf(idItem);
    return cartList[index].costItem * cartList[index].cant
}

const calcSubTotal = () =>{
let totalPerItem = cartList.map(item=> CalculoTotalPerItem(item.idTen));
return totalPerItem.reduce((previusValue, currentValue)=>previousValue + currentValue);

}*/






    return(
        <CartContext.Provider value={{ cartList, addItem, clear, removeItem }} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;