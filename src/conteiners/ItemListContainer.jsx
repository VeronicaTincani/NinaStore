import { useEffect } from 'react';
import { useState } from 'react';
import getList from '../utils/getProducts';
import ItemList from '../components/ItemList';

const ItemListContainer=()=>{

const[ProdList, setProdList] = useState([]);

useEffect(()=>{
getList()
.then((response)=> setProdList(response))
.catch(()=>console.error('error'))
.finally()
},[])

return(
<>

<ItemList products={ProdList}/>

</>
)
;   
}


export default ItemListContainer