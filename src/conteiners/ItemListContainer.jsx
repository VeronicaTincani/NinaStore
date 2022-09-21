import { useEffect } from 'react';
import { useState } from 'react';
import ItemList from '../components/ItemList';
import GetProducts from '../utils/getProducts';

const ItemListContainer=()=>{

const[ProdList, setProdList] = useState([]);

const getList = () =>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(GetProducts)
      }, 2000);
    })
  }
  
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