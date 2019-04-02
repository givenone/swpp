import * as types from '../actions/ActionTypes';

const initialState = {
    Meetings : [
        // contains meetings
    ],

        username : '',
        password : '', // reset only when logout

        sinceWhen : '',
        tilWhen : '',
     // for post

    isLogIn : false // when loggedin : ture and  logout toggle
}

function change(state = initialState, action) {
    switch(action.type) {
        case types.LOGINSUCCESS :
            return{
                /// TODO
                 // USERINPUT 유지
                ...state,
                isLogin : true
            };
        case types.LOGOUTSUCCESS :
            return{
                /// TODO
                ...state,

                    username : '',
                    password : '',
                isLogin : false
                };
        case types.GETMEET :
            return{
                ...state,
                Meetings : action.data
            };
        case types.NEW :
            return{
                ///TODO : input만 리셋
                ...state,   
                    sinceWhen : '',
                    tilWhen : ''
            };    
        case types.CHANGE :
            console.log(state)
            console.log(action)
                // binding ? change를 부른 애의 인풋만 바꿔주도록... ?
                switch(action.what){
                    case 0: // username
                        return{
                            ...state,
                            username : action.newString,
                            password : state.password
                        }
                    case 1: // password
//                        console.log(action.newString)
                        return{
                            ...state,

                                username : state.username,
                                password : action.newString
                        }
                    case 2: // sincewhen
                    return{
                            ...state,

                                sinceWhen : action.newString,
                                tilWhen : state.tilwhen
                            
                    }
                    case 3: // tillwhen
                    console.log(action.newString)
                    return{
                        ...state,
                            sinceWhen : state.sinceWhen,
                            tilWhen : action.newString
                    }
                    default :
                        return state;
                }   
        default:
            return state;
    }
}

export default change;