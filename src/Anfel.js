import React ,{useState} from 'react';
import operationFunctionWithSwich from './functions/operationFunction';


 function Anfel(props) {
     const [operation,setOperation]=useState("somme");
     const [value1,setValue1]=useState(0);
     const [value2,setValue2]=useState(0);

     const operationValue= operationFunctionWithSwich(operation,value1,value2);
     console.log("fhtfh", props)
     return(
         <div>
         
        <p>{props.fchgc.cheuveux}</p>
        <p>{props.fchgc.yeux}</p>
        <p>{props.fchgc.nom}</p>
        <button
        
          onClick={() =>
          {
            setOperation("somme");
          }
        }>
          somme
        </button>
        <p>{operation}</p> 
        <button onClick={() =>
          {
            setOperation("division");
          }
        }>
          division
        </button>
        <button onClick={() => 
          {
            setOperation("multiplication");
          }
        }>
          multiplication
        </button>
                
                <button onClick={() =>{
                 setOperation("soustraction");
                }
                }
                >soustraction</button>
                
                <button onClick={() =>{
                    setValue1(value1 +1)
                }}>increment value1</button>
                <p> {value1}</p>;
                <button onClick={() => {
                   setValue1(value1 -1)
                }}>decrement value1</button>
                  
                  <button onClick={() =>{
                    setValue2(value2 +1)
                }}>increment Value2</button>
                <p> {value2}</p>;
                <button onClick={() => {
                   setValue2(value2 -1)
                }}>decrement Value2</button>


<div>
<p>operationFunction égale :{operationValue}</p>  

</div>
         </div>

);
 }
 export default Anfel;
