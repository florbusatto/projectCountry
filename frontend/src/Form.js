import React, { Component } from 'react';
import intiveLogo from '../src/intiveLogo.png';
import './form.css';

class form extends Component {

constructor (props) {
   super(props);
     this.state = {
        Name:"",
        Surname:"",
        Birthday:"",
        countriesSelect: [],
        Day: "",
        Month: "",
        Years:"",
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
};

render() {

   return (
        <div className="intro">
        <form>
         <img src={intiveLogo}/>
         <tr>
          <th><label>Name:</label></th>
          <td><input placeholder="name here" ref="name" value={this.state.Name} onChange={e =>this.setState({ Name: e.target.value})}/></td>
         </tr>
         <tr>
          <th><label>Surname:</label></th>
          <td><input placeholder= "name here" ref= "surname" value={this.state.Surname} onChange={e =>this.setState({ Surname: e.target.value})}/></td>
         </tr>
         <tr>
          <th><label>Countries:</label></th>
          <td><select value={this.state.Country} ref= "country" onChange={e =>this.setState({ Country: e.target.value})}>
          <option value=''>Choose an option</option>{this.state.countriesSelect.map(country=><option value={country}>{country}</option>)}
          </select></td>
         </tr>
         <tr>
          <th><label>Birthday:</label></th>
          <td><input type="date" name="fecha" ref=""value={this.state.Birthday} onChange={e =>this.setState({ Birthday: e.target.value})}/></td>
         </tr>
          <button onClick={(e) => this.onSubmit(e)}>Save</button>  
       </form> 
      </div>
   );
 }
}


export default form;