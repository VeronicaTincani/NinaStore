import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemDetailContainer from "./conteiners/ItemDetailContainer";
import { Route } from "react-router";
import {BrowserRouter} from "react-router-dom";
import ItemListContainer from "./conteiners/ItemListContainer";


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    
    <Route path="/" element={<ItemListContainer/> } />
    <Route path="/category/:id"  element={<ItemListContainer/> } />
    <Route path="/item/:id"  element={<ItemDetailContainer/> } />
    </Routes>
    </BrowserRouter>

   </> 
  );
}

export default App;
