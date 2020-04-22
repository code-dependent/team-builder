import React, { useState } from 'react';

const Forms = (props)=>{
    const onInputChange = props.onInputChange
    const onSubmit = props.onSubmit

    

    const formStyle = {
        backgroundColor:'gray',
        color:'smokegray',

    }

    return(
        <form style={formStyle}>
        <label>Name:&nbsp;
          <input
            value={props.formValues.name}
            type='text'
            onChange={onInputChange}
            name='name'/>
        </label>
        <label>Email:&nbsp;
          <input
            value={props.formValues.email}
            type='text'
            onChange={onInputChange}
            name='email'/>
        </label>
        <label>Role:&nbsp;
          <select
            value={props.formValues.role}
            onChange={onInputChange}
            name='role'>
            <option defaultValue=''>Please choose</option>
            <option value='married'>Team Lead</option>
            <option value='back-end Web Developer'>back-end Web Developer</option>
            <option value='Front-end Web Developer'>Front-end Web Developer</option>
            <option value='Consultant'>Consultant</option>
          </select>
        </label>
        <button onClick={onSubmit}>submit</button>
      </form>

    )
}

export default Forms;