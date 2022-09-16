import { useState } from "react";



 function Contador() {
const [valor, setValor] = useState(0); /*hook*/

function OnAdd(){ 
    valor<5 ? setValor(valor+1) : console.log("error")  //operador ternario
}

function Resta (){
    valor>0 ? setValor(valor-1) : console.log("error") 
}

return(
<>
<div className="container-contador">
<button onClick={OnAdd} className="boton-contador">+</button>
<h4>{valor}</h4>
<button onClick={Resta} className="boton-contador">-</button>
</div>
</>    
)
}

export default Contador
