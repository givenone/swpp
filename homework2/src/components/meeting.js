import React from 'react';
//import PropTypes from 'prop-types';

// import './User.css' ;
// This is a Component for Login

const Meeting = ({id, created, sinceWhen, tilWhen, user, onDelete , username, password }) => {
    return(
        <div className = 'meeting'>
            <tr>
                "ID" : {id} <br/>
                "CREATED" : {created}<br/>
                "SINCEWHEN" : {sinceWhen}<br/>
                "TILWEHN" : {tilWhen}<br/>
                "USER ID " {user}<br/>
                <button type='submit' onClick={() => onDelete(id, username, password)} > Delete this Meeting</button>
                <br/>
                <br/>
            </tr>
        </div>
    )
}

/*
meeting.propTypes = {
    sinceWhen : PropTypes.string,
    tilWhen : PropTypes.string,
    onSubmit : PropTypes.func,
    onChange : PropTypes.func,
    onKeyPress : PropTypes.func,
}*/

export default Meeting;