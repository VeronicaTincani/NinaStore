import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import GetProducts from "../utils/getProducts";
import costumFetch from "../utils/costumFetch";

const ItemDetailContainer= () => {
    
const[ProdDetail, setProdDetail] = useState({});
         
        useEffect(() => {
        costumFetch(2000, GetProducts[0])
        .then(response => setProdDetail(response))
        .catch( err => console.log(err))
        
        },[]);
        
        return(
        
            <div  className='conteiner-detail'>
        <ItemDetail item={ProdDetail}/>
            </div>
        
        )
        ;   
        }
        




export default ItemDetailContainer