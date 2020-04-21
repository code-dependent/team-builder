import React, { useState } from 'react';
import logo from './logo.svg';
import { v4 as uuid } from 'uuid' // GROSS
import './App.css';

const theTeam = [
  {id:uuid(), firstName:'John', lastName:'Snow'},
  {id:uuid(), firstName:'Daenerys', lastName:'Targaryen'}
]
const initialFornValues = {
  firstName:'',
  lastName:''

}

function App() {
  const [teammates, setTeammates] = useState(theTeam)
  const [formValues, setFormValues] = useState(initialFornValues)
  const onInputChange=(event)=>{
    const name = event.target.name
    const value = event.target.value
    setFormValues({
      ...formValues,
      [name]:value
    })
  }
  const onSubmit = (event)=>{
    event.preventDefault()
    const newFriend = {
      id:uuid(),
      firstName: formValues.firstName,
      lastName: formValues.lastName,
    }
    setTeammates([...teammates, newFriend])
    setFormValues(initialFornValues)
  }
  
  return (
    <div className="App">
      <form>
        <label>First Name:&nbsp;
          <input
            value={formValues.firstName}
            type='text'
            onChange={onInputChange}
            name='firstName'/>
        </label>
        <label>Last Name:&nbsp;
          <input
            value={formValues.lastName}
            type='text'
            onChange={onInputChange}
            name='lastName'/>
        </label>
        <button onClick={onSubmit}>submit</button>
      </form>

      <friends></friends>

      
    </div>
  );
}

export default App;
