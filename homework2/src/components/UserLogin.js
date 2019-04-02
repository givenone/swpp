import React from 'react';
import PropTypes from 'prop-types';

// import './User.css' ;
// This is a Component for Login

const UserLogin = ({username, onLogout, flag}) => {
    const style={
        display :'inline-block'
    }
    
    if(flag){
    return(
        <div>
            <div style={style}>{username}</div>
            <button style={style}onClick = {onLogout}>LOGOUT!!!</button>
        </div>
    )
    }

    else{
        return null;
    }
}

UserLogin.propTypes = {
    username : PropTypes.string,
    password : PropTypes.string,
    onLogin : PropTypes.func,
    onChange : PropTypes.func,
    onKeyPress : PropTypes.func,
}

export default UserLogin;