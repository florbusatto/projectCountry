import React, { Component } from 'react';
import '../css/form.css';
import {List} from './List'
import {Hello} from './Hello'

class form extends Component {

//1st:Create the constructor and set the states of your component//
//a)countriesSelect array: Countries list built from Api:https://restcountries.eu/rest/v2/all//
//b)Name & Surname: Field that visitor fills with her/his name and lastname.//
//c)Country: The visitor selects a country from the array.
//d)Birthday: Field that visitor fills with her/his birth date.

constructor (props) {
   super(props);
     this.state = {
       countriesSelect: [],
       Name:"",
       Surname:"",
       Country:"",
       Birthday:"",
       sent:false,
       List:[]
 }

}

//2nd: Lifecycle method "DidMount" - API Calling//
//a)I used "fetch" in order to call the information from the API.//
//b)After that, data shows each country name from the list.//
//If you want to know that this worked you can check it at your browser's console.//

componentDidMount() {
fetch('https://restcountries.eu/rest/v2/all')
.then(results => {
 return results.json();
}).then(data => {

    let countriesList=data.map(country=>country.name)
    this.setState ({countriesSelect: countriesList});
    console.log(this.state.countriesSelect)
})
}


//3rd: Create the onSubmit event & New Item//
//a)onSubmit event: This event will be invoked when the visitor submits her/his previous data//
//b)Let newReg: It refers to the creation of a new item//

onSubmit =(e) => {
 e.preventDefault();
 console.log(this.state);

let newReg={
  name:this.state.Name,
  surname:this.state.Surname,
  country:this.state.Country,
  birthday:this.state.Birthday,
 }

 this.setState({sent:true})


               //******LOCALSTORAGE********//

//4th: Using localStorage: I used this method as is the most recommended when the data needs to be persistent //

        var regs = window.localStorage.getItem('items');

        if (regs === null) {
            regs = []; //Creating an empty list//
        } else {
            regs = JSON.parse(regs);
        }
        regs.push(newReg);//Pushing new register at the end of the list//

        this.setState({ List: regs})//Updating list in order to send data to List component//
         let items = JSON.stringify(regs);

        window.localStorage.setItem('items', items);//Saving at localStorage//
        

//Clean localStorage//
//If you don't want to see the complete list of recent visitors,//
//please uncomment the sentence at line 87//

//localStorage.clear();
//*************************************//

};

//5th: onClear Event: This event will be invoked 
//when a new visitor wants to submit her/his new register//

onClear=(e)=>{
  e.preventDefault();
  this.setState({Name:''});
  this.setState({Surname:''});
  this.setState({Birthday:''});
  this.setState({sent:false});
}

//6th: Time to show up!: Render.
//I choose to show the form data as a table.
//When the main Div closes, it's important to remember//
//to close the component with the export line at the end//

render() {
   return (
    <div className="main">
     <form>
       <table>
         <tr>
          <td>
           <label>Name:</label>
           <input placeholder=" name here " value={this.state.Name} onChange={e =>this.setState({ Name: e.target.value})}/>
          </td>
         </tr>
         <tr>
          <td>
           <label>Surname:</label>
           <input placeholder= " name here " value={this.state.Surname} onChange={e =>this.setState({ Surname: e.target.value})}/>
          </td>
         </tr>
         <tr> 
          <td>
           <label>Countries:</label>
           <select value={this.state.Country} onChange={e =>this.setState({ Country: e.target.value})}>
            <option value=''>Countries</option>
            {this.state.countriesSelect.map(country=><option value={country}>{country}</option>)}
           </select>
          </td>
         </tr>
         <tr>
          <td>
           <label>Birthday:</label>
           <input type="date" name=" fecha " value={this.state.Birthday} onChange={e =>this.setState({ Birthday: e.target.value})}/>
           <button onClick={(e) => this.onSubmit(e)}>Save</button>
           <button onClick={(e) => this.onClear(e)}>New Register</button>  
          </td> 
        </tr>
      </table>  
    </form>
      
      <p>{this.state.sent?<Hello name={this.state.Name} from country={this.state.Country} surname={this.state.Surname} birthday={this.state.Birthday}/>:''} </p>
      
      <List list={this.state.List}/>
    
    <footer>
     <h2>Florencia Busatto</h2>
    </footer>
</div>
   
    );
  
  }

}

export default form;