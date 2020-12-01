
function getAgeSex(age, sex) {
    if(age ===0) {

        return `hedha ${sex} wmezel metouledich`;

    }else if 
    (age>=1 && age<=15) {
        return `hedha ${sex} wmezel sghir`;
    
    }
  else if 
          (age>=15 && age<=35) {

       return `hedha ${sex} wmezel jeune`;
}else 
    

        return `hedha ${sex} rajel kbir`;

}



export default getAgeSex ;