import React from 'react';
import '../css/hello.css';

export const Hello = (props) =>

<div className="Hello">
      <p>Hello<h5>{props.name+' '}{props.surname+' '} from {props.country+' '}</h5></p>
</div>



