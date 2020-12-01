import React , {useState} from 'react';
import test from '../functions/test';
import getJobName from '../functions/getJobName';


// partie 1: bch t3ml deux equipe kol equipe tnajem tzidlha les buts eli mrkethom 
// kol equipe 3ndha deux buttons button yzid bountwet w button yna9es bontwet
// ken l'equipe ettoile merkya akkther bountwet nheb taffichili l'etoile à gangné 
// ken l'equipe traji  merkya akkther bountwet nheb taffichili taraji à gangné 

// partie 2:

// bch ta3ml 2 zone de text input name w job
// ki n7out fi job developpeur  w name saber naffichi ta7et les zone de text saber informaticien
// ki n7out fi job prof wname anfel naffichi anfel proffesseur
// ki n7out fi job foot w name oussema naffichi oussema footboleur


// partie 3 :
// meloul taffichi je n'ai pas terminé l'exercice
// bech n3ml button ki nekliqui 3lih taffichili j'ai terminé l'exercice
// WkI THOVRI 3AL BUTTON TAFFICHI IL FAUT cliki sur le button pour terminé l'exercie
// wki tna7i hover trja3 je n'ai pas terminé l'exercide 

function Users (props) {

const [value1,setValue1]=useState(0);
const [value2,setValue2]=useState(0);
const [job, setJob]= useState(0);
const [name, setName]= useState(0);
const jobName = getJobName(job,name);
const match = test (value1,value2);
const [isExercice, setIsExercice] = useState(false);
const[affichier,setAffichier]=useState("je n'ai pas terminé l'exercice");
const [number1,setNumber1]=useState(0);
const [number2,setNumber2]=useState(0);

 console.log("fhtfh", props)
    return(
       <div>
           <button
              onMouseEnter={() => setIsExercice(true)}
              onMouseLeave={() => setIsExercice(false)}
            >
             ex button
            </button>
            {isExercice ? (
                <div>
                  IL FAUT cliki sur le button pour terminé l'exercie
                </div>
                   ) : <p>je n'ai pas terminé l'exercide </p>}

            <button onClick={() =>{
              setValue1(value1 +1)
              }}>increment but etoile</button>
                <p> {value1}</p>;
            <button onClick={() => {
              setValue1(value1 -1)
              }}>decrement but etoile</button>
                  
            <button onClick={() =>{
              setValue2(value2 +1)
              }}>increment but taraji</button>
                <p> {value2}</p>;
            <button onClick={() => {
              setValue2(value2 -1)
              }}>decrement but taraji</button> ;


           <button onClick={() =>{
             setNumber1(number1 +2)
            }}>increment</button>
              <p> {number1}</p>;
           <button onClick={() =>{
             setNumber1(number1 -2)
            }}>decrement </button>
          <button onClick={() =>{
             setNumber2(number2 +3)
            }}>increment</button>
              <p> {number2}</p>;
           <button onClick={() =>{
             setNumber2(number2 -3)
            }}>decrement </button>

<p>lezem tzid {number2-number1} bch number1 égael number2</p>





        <p>test égale : {match} </p>

          <input value={job} onChange={(e) => setJob(e.target.value)} />
          <input value={name} onChange= {(e)=> setName(e.target.value)} />
          <p>getJobName égale:{jobName} </p>
       
          <button onClick={() =>{
           setAffichier("j'ai terminé l'exercice");
         }
        }
              > termine</button>
          <p>{affichier}</p> 
      </div>
       
    )       
    };
export default Users;