import React from 'react';
import '../css/hello.css';

//General information: 
//This representational component was created in order to show a 
//greeting message to every visitor that submits her/his data//


//1st: I created a function to calculate visitor's age //

function calculateAge (date) {
  var values=date.split("-");
  var day = values[2];
  var month = values[1];
  var year = values[0];

  var current_date = new Date();
  var current_year= current_date.getFullYear();
  var current_month = current_date.getMonth()+1;
  var current_day = current_date.getDate();

  var age = current_year - year + 1;
  if ( current_month < month )
  {
      age--;
  }
  if ((month == current_month) && (current_day < day))
  {
      age--;
  }

  return age;
}

//2nd: I created the following "const" to show  
//the day,the month and the age of the visitor in the message//
//Line 46 contains greeting's structure//

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const getDay = date => date.split("-")[2]
const getMonth = date => months[parseInt(date.split("-")[1]) - 1 ]

export const Hello = (props) =>

<div className="Hello">
 <p>Hello {props.name+' '}{props.surname+' '} from {props.country+' '} on {getDay(props.birthday)} of {getMonth(props.birthday)+ '' } you will have {calculateAge(props.birthday) + ' years '}</p>
</div>