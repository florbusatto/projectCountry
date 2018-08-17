import React from 'react';

//Componente representacional para para renderizar el componente de saludo "Hello".
export const Hello = (props) =>
 <div className="Hello">
         <p>Hello <h5>{props.name+' '}{props.surname+' '} from {props.country+' '}{props.birthday}</h5></p>
        
 </div>
