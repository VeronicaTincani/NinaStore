import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemDetailContainer from "./conteiners/ItemDetailContainer";
import { Route } from "react-router";
import {BrowserRouter} from "react-router-dom";
import ItemListContainer from "./conteiners/ItemListContainer";
import Cart from "./components/Cart";
import CartWidget from "./components/CartWidget";
import CartContextProvider from "./components/CartContext";

function App() {
  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>    
    <Route path="/" element={<ItemListContainer/> } />
    <Route path="/category/:id"  element={<ItemListContainer/> } />
    <Route path="/item/:id"  element={<ItemDetailContainer/> } />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/cart" element={<CartWidget/>} />
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
   </> 
  );
}

export default App;
