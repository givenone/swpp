import React from 'react';
//import PropTypes from 'prop-types';

// import './User.css' ;
// This is a Component for Login

 

const User = ({username, password, onLogin, onChangeUSER, onChangePW, flag}) => {
    
    const onChangeTHISUSER = (e) => {
        onChangeUSER(e.target.value)
    }
    const onChangeTHISPW = (e) => {
//        console.log(e.target.value)
        onChangePW(e.target.value)
    }
    if(!flag){
    return(

        <div /*className = 'user'*/>
            
            USERNAME : <input type = 'text' value = {username} onChange = {onChangeTHISUSER}/>
            PASSWORD : <input type = 'text' value = {password} onChange = {onChangeTHISPW}/>
            <button type='submit' onClick = {() => onLogin(username,password)}>Log In !</button>
        </div>
    );
    }
    else{
        return null;
    }
}

/*
User.propTypes = {
    username : PropTypes.string,
    password : PropTypes.string,
    onLogin : PropTypes.func,
    onChange : PropTypes.func,
    onKeyPress : PropTypes.func,
}*/

export default User;