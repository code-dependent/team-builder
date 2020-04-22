import React, { useState } from 'react';

const MemberCard =(props)=>{
    const teammates = props.teammates
    const cardStyle = {
        backgroundColor:'gray',
        color:'smokegray',
        width:'30%',

    }
    return(
        <div>
        {
            teammates.map(member=>(
                <div style={cardStyle}>
                    <h2>{member.firstName}&nbsp;{member.lastName}</h2>
                </div>))
        }
        </div>
    )
}
export default MemberCard;