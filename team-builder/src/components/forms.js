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
        <label>First Name:&nbsp;
          <input
            value={props.formValues.firstName}
            type='text'
            onChange={onInputChange}
            name='firstName'/>
        </label>
        <label>Last Name:&nbsp;
          <input
            value={props.formValues.lastName}
            type='text'
            onChange={onInputChange}
            name='lastName'/>
        </label>
        <button onClick={onSubmit}>submit</button>
      </form>

    )
}

export default Forms;