import React, { Component } from 'react';

class form extends Component {

  constructor (props) {
    super(props);
      this.state = {
        name: '',
        surname: '',
        countries: '',
        birthday:'',
      }
    }

  handleUserInput (e) {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({[name]: value},() => { this.validateField(name, value) });
  }  

 render() {

    return (
      <div className="Formulario">
        <div className="Form">
         <form>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={(event) => this.handleUserInput(event)}/>
          <label>Surname:</label>
          <input type="text" name="surname" value={this.state.surname} onChange={(event) => this.handleUserInput(event)}/>
          <button type="submit" className="btn" disabled={!this.state.formValid}>Save</button>
        </form>
      </div>  
     </div>
    );
  }

}

export default form;