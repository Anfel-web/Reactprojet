import React ,{useState} from 'react';
import Loading from './Loading';
import Users from './Users';
import InputText from './InputText';

function TestLoadingExercice() {
    const [loading,setloading]=useState(true);
    const [isDisplayP, setIsDisplayP] = useState(false);

return(

    <div>
        <InputText />
    {isDisplayP && 
    <p> si tu clique sur le button tu vas fetcher les utilisateurs</p>}
            <button 
            
            onClick={() =>{
                setloading(false);
                
            }
        }
        onMouseEnter={() => setIsDisplayP(true)}
        onMouseLeave={() => setIsDisplayP(false)}
        
>fetch users </button>
        {loading===true ? <Loading /> : <Users />}
    
        </div>
        
    );
}
export default TestLoadingExercice;         