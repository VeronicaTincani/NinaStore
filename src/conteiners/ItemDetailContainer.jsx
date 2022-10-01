import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

const ItemDetailContainer= () => {
    
const[ProdDetail, setProdDetail] = useState({});
const { id } = useParams();
        useEffect(() => {
        const prodFetch = async () =>{
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        setProdDetail(docSnap.data())
        } 
         prodFetch()  
        },[id]);
        
        return(
        
            <div  className='conteiner-detail'>
        <ItemDetail item={ProdDetail}/>
            </div>
        
        )
        ;   
        }
        

export default ItemDetailContainer;