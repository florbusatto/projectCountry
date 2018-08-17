import React, { Component } from 'react';
import '../Form.css';
import {List} from './List'
import {Hello} from './Hello'

class form extends Component {

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

onSubmit =(e) => {
 e.preventDefault();
 console.log(this.state);

 let newReg={
  name:this.state.Name,
  surname:this.state.Surname,
  country:this.state.Country,
  birthday:this.state.Birthday
 }

 this.setState({sent:true})


//******LOCALSTORAGE********//

        var regs = window.localStorage.getItem('items');

        if (regs === null) {
            regs = []; 
        } else {
            regs = JSON.parse(regs);
        }
        regs.push(newReg);

        this.setState({ List: regs})
         let items = JSON.stringify(regs);

        window.localStorage.setItem('items', items);
        

////////Limpieza de localStorage////////
      //localStorage.clear();
//*************************************//

};

onClear=(e)=>{
  e.preventDefault();
  this.setState({Name:''});
  this.setState({Surname:''});
  this.setState({Birthday:''});
  this.setState({sent:false});
}

render() {

   return (
    <div>
        <form>
         <table>
         <tr>
          <th><label>Name:</label></th>
          <input placeholder="name here" value={this.state.Name} onChange={e =>this.setState({ Name: e.target.value})}/>
         </tr>
         <tr>
          <th><label>Surname:</label></th>
          <input placeholder= "name here" value={this.state.Surname} onChange={e =>this.setState({ Surname: e.target.value})}/>
         </tr>
         <tr>
          <th><label>Countries:</label></th>
          <select value={this.state.Country} onChange={e =>this.setState({ Country: e.target.value})}>
            <option value=''>Choose an option</option>
            {this.state.countriesSelect.map(country=><option value={country}>{country}</option>)}
          </select>
         </tr>
         <tr>
          <th><label>Birthday</label></th>
          <input type="date" name="fecha" value={this.state.Birthday} onChange={e =>this.setState({ Birthday: e.target.value})}/>
         </tr>
         <button onClick={(e) => this.onSubmit(e)}>Save</button>
         <button onClick={(e) => this.onClear(e)}>New Registration</button>
         <p>{this.state.sent?<Hello name={this.state.Name} from country={this.state.Country} surname={this.state.Surname} birthday={this.state.Birthday}/>:''} </p>
       </table>
       </form>

      <List list={this.state.List}/>
      
    </div>
   );
  
 }
}

export default form;