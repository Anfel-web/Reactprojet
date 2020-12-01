import React ,{useState} from 'react';

// isShow equivalent isShow === true 
// ken isShowwn egale true affichi el div bili fi westha sinon metafichi chy  
//{isShown && (
  //  <div>
 //  I'll appear when you hover over the button.
    //</div>
  // )}


  //////////////////////////////////////
  // kenha isShown true naffichi div sinon naffichi el p
  //{isShown ? (
  //  <div>
 //  I'll appear when you hover over the button.
    //</div>
  // ) : <p>is not hover</p>}

 function TestButtonHover() {

     const [isShown, setIsShown] = useState(false);

     return(
           <div> 
        <button
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
    
        >
          hover button
        </button>
        {isShown && (
        <div>
          I'll appear when you hover over the button.
        </div>
      ) }
         </div>

);
 }
 export default TestButtonHover;
