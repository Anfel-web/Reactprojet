import React, { useState } from 'react';
import getAgeSex from '../functions/getAgeSex';
    
function InputText(){
    const [age, setAge]= useState(0);
    const [sex, setSex]= useState("homme");
    const ageSex = getAgeSex(age, sex);

    
   // function getAgeSex(age, sex) {
       //if(age ===0) {
           // return `hedha ${sex} wmezel metouledich`
      // } else if ()
   //}
   // const ageSex = getAgeSex(age, sex)

   // "hedha ${sex} w mezel metouledich"
  return(
      <div>

          <input value={age} onChange={(e) => setAge(e.target.value)} />
          <input value={sex} onChange= {(e)=> setSex(e.target.value)} />

          <div>
          <p>getAgeSex égale:{ageSex}</p>
          </div>
        
      </div>
  );
}

export default InputText;
