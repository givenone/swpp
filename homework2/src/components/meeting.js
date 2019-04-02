import React from 'react';
//import PropTypes from 'prop-types';

// import './User.css' ;
// This is a Component for Login

const Meeting = ({id, created, sinceWhen, tilWhen, user, onDelete , username, password }) => {
    return(
        <div className = 'meeting'>
            <div>id : {id}</div> <div>created : {created}</div> <div>sinceWhen : {sinceWhen}</div> <div>tilWhen : {tilWhen}</div>
             <div>user : {user}</div>
            <button type='submit' onClick={() => onDelete(id, username, password)} > Delete this Meeting</button>
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