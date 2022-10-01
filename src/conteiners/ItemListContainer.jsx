import { useEffect } from 'react';
import { useState } from 'react';
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";


const ItemListContainer=()=>{

const[ProdList, setProdList] = useState([]);
const {id} = useParams();
  
useEffect(()=>{
    const firestoreFetch = async() => {
        const querySnapshot = await getDocs(collection(db, "products"));
         const dataFromFirestore = querySnapshot.docs.map(document=>({  
                id: document.id,
                ...document.data()
                }));  
                return dataFromFirestore       
            }
            firestoreFetch()
            .then(result => setProdList(result))
            },[ProdList]);

return(
<>
<div className='container-card'>
<ItemList products={ProdList}/>
</div>
</>
)
;   
}


export default ItemListContainer