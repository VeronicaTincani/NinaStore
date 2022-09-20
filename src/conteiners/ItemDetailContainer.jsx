import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import getList from "../utils/getProducts";

const ItemDetailContainer= ()=>{
    
const[ProdList, setProdList] = useState([]);
        
        useEffect(()=>{
        getList()
        .then((response)=> setProdList(response))
        .catch(()=>console.error('error'))
        .finally()
        },[])
        
        return(
        
            <div  className='conteiner-detail'>
        <ItemDetail products={ProdList}   />
            </div>
        
        )
        ;   
        }
        




export default ItemDetailContainer