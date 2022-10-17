import { useEffect } from 'react';
import { useState } from 'react';
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import spinnLoading from '../components/SpinLoading';

const ItemListContainer=()=>{

const[ProdList, setProdList] = useState([]);
const [loading, setLoading] = useState(false);
const {id} = useParams();
  
useEffect(()=>{
    setLoading(true)
    const firestoreFetch = async() => {
        let q;
        if(id)
        {
            q = query(collection(db,"products"), where('category','==',id))
        }else
        {
            q = query(collection(db,"products"))
        }
        

        const querySnapshot = await getDocs(q);
         const dataFromFirestore = querySnapshot.docs.map(document=>({  
                id: document.id,
                ...document.data()
                }));  
                setLoading(false)
                return dataFromFirestore       
            }
            firestoreFetch()

            .then(result => setProdList(result))
            .catch(()=> console.error('error'))
            .finally()
            },[id]);

return(
<>
        <div className='container-card'>

            {loading ? <div>{spinnLoading()}</div> : <ItemList products={ProdList}/>}
        
        </div>
        
</>
)
;   
}


export default ItemListContainer