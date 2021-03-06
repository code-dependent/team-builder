import React, { useState } from 'react';
import logo from './logo.svg';
import { v4 as uuid } from 'uuid' // GROSS
import './App.css';
import MemberCard from "./components/memberCard";
import Forms from "./components/forms";



const theTeam = [
  {id:uuid(), name:'John Snow', email:'John@Snow.got',role:`Night's Watch`},
  {id:uuid(), name:'Daenerys Targaryen', email:'Daenerys@Targaryen.got', role:'Mother of Dragons'}
]
const initialFornValues = {
  name:'',
  email:'',
  role:''

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
      name: formValues.name,
      email: formValues.email,
      role: formValues.role
    }
    setTeammates([...teammates, newFriend])
    setFormValues(initialFornValues)
  }
  
  return (
    <div className="App">
      <h1 style={{color:'darkblue'}}>Team Builder</h1>

      <Forms 
        formValues={formValues} 
        onInputChange={onInputChange} 
        onSubmit={onSubmit}/>

      <MemberCard teammates={teammates}/>

      
    </div>
  );
}

export default App;
