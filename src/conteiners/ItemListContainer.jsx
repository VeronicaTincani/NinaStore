import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Contador from './Contador';
import getList from '../utils/getProducts';
import ItemList from '../components/ItemList';



const Productos=()=>{

const[ProdList, setProdList] = useState([]);

useEffect(()=>{
getList()
.then((response)=> setProdList(response))
.catch(()=>console.error('error'))
.finally()
},[])

return(

    <div  className='container-card'>
<ItemList products={ProdList}/>
    </div>

)
;   
}


export default Productos