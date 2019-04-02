import React from 'react';

// import './User.css' ;
// This is a Component for Login

const AddMeeting = ({sinceWhen, tilWhen, username, password, onPost, onChangeSI, onChangeTI, flag }) => {
    const onChangeTHISSI = (e) => {
        onChangeSI(e.target.value)
    }
    const onChangeTHISTI = (e) => {
        onChangeTI(e.target.value)
    }
    if(flag)
    {
    return(
        <div>
            Start : <input type = "datetime-local" value = {sinceWhen} onChange = {onChangeTHISSI} />
            Finish : <input type = "datetime-local" value = {tilWhen} onChange = {onChangeTHISTI}/>
            <button onClick = {() => onPost(sinceWhen, tilWhen, username, password)}>New Meeting (POST) </button>
        </div>
    )
    }
    else{
        return null
    }
}


export default AddMeeting;