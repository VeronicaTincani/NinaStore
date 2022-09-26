import { useState } from "react";

import Button from 'react-bootstrap/Button';
/*hook*/

 function Contador({ initial, stock, onAdd }) {
    const [valor, setValor] = useState(initial); 

const Suma  = () => { 
    valor< stock 
    ? setValor(valor+1)
    : console.log("error")  //operador ternario
    }

const Resta = ()=> {
    (valor >= 1)
    ? setValor(valor-1) 
    : console.log("error") 
    }

    const agregado = () =>{
        (valor !== 0)
        ? (alert ("producto agregado"))
        (setValor(1))
        (onAdd(valor))
        : alert ("no dispoible")
        setValor(1);
    }


return(
    <>
    <div className="container-contador">
        <button onClick={Resta} className="boton-contador">-</button>
        <h4>{valor}</h4>
        <button onClick={Suma} className="boton-contador">+</button>
    </div>
    <div>
    <Button onClick={agregado} variant="secondary">  Añadir   <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/></svg>      
            </Button>  

    </div>
    </>    
    )
    }

export default Contador
