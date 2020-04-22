import React, { useState } from 'react';

const MemberCard =(props)=>{
    const teammates = props.teammates
    const cardStyle = {
        backgroundColor:'gray',
        color:'smokegray',
        width:'35%',
        boxSizing:'con',
        height:'18vh'

    }
    return(
        <div>
        {
            teammates.map(member=>(
                <div style={cardStyle}>
                    <h2><lable>Name:&nbsp;</lable>{member.name}</h2>
                    
                    <h2><lable>Email:&nbsp;</lable>{member.email}</h2>
                    
                    <h2><lable>Role:&nbsp;</lable>{member.role}</h2>
                    
                </div>))
        }
        </div>
    )
}
export default MemberCard;