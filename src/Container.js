import React from 'react';
import './App.css';
import Saber from './Saber';
import Anfel from './Anfel';
import TestButtonHover from './components/TestButtonHover';                     
import TestLoadingExercice from './components/TestLoadingExercice';

import Users from './components/Users';
// comosant TestLoadingExercice 

// loading===true ? <Loading /> : <Users>
// if(loading) return <Loading />
// return <Users />

// te7tha el button 
// exercie state ismha loading melou true  on va afficher le composant Loading <p>Loading ....</p> 
// button fetch users si je clique sur le button  fetch users bch (loading sera false) yaffchili composant users <p> users</p>


// si je fait un hover sur le button je vais afficher  <p> si tu clique sur le button tu vas fetcher les utilisateurs</p>
// si je fait un 3akes hover je vais pas afficher le <p>



// deux zone de text age w sex meloul homme tnajm tbedlou femme
// bch ta3ml function te5ou en paramete age et sex 
// ken age ben el 1 w 15 bch traje3   hedha homme w mezel sghir
// ken 3omrou 0 t9oul   hedha homme w mezel metouledich
// ken bin el 15 w 35   t9oul hedha homme w jeune
// ken akber men 35   t9oul hedha homme w rajel kbir 
function Container() {
    const homme={nom:"chabchoub",cheuveux:"mchabcheb",yeux:"maron"}
    const femme={nom:"smina",cheuveux:"lisse",yeux:"noir"}
    const fruits =["apple", "banana"];
    console.log("hgfgf",fruits[0])
    return(
        <div>
            <Saber
            dgefdh={homme}
        />
             <Anfel
             fchgc={femme}
        />

            hghfg ={fruits}
        <TestButtonHover />
        <hr></hr>


        <TestLoadingExercice />      
        <hr></hr>
        <Users />
        
       
        </div>
        
    );
}
export default Container;