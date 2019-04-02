import {take, put, call, fork} from 'redux-saga/effects'
import * as actions from './actions'
import * as actiontype from './actions/ActionTypes'

 // Action을 처리해서  1. dispatch를 기다리는 부분, 2. Action을 처리하는 부분
const url = 'http://localhost:7000/meetings/'

// Delete

function deleteReal(id, username, password)
{
    return fetch(url + id + '/', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + Buffer.from(username + ":" + password).toString("base64")
        },
        body:{
            id
        }
      })
      .then(response => {
        if (response.status === 403) throw new Error("403 error")
        return response
    })

        //.then(handleApiErrors)
//        .then(response => response.json())
       // .then(json => json)
        .catch((error) => { throw error })

}
function GetMeetingData(username, password)
{
    return fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + Buffer.from(username + ":" + password).toString("base64")
        },

      })
      
        //.then(handleApiErrors)
        .then(response => response.json())
       // .then(json => json)
        .catch((error) => { throw error })

}
export function* deleteIt(id, username, password){

    try{

        yield call(deleteReal, id, username, password)

        const data = yield call(GetMeetingData, username, password)

        yield put(actions.getMeeting(data))
        // GET or state 변경
    }
    
    catch(error)
    {
        console.log(error)
        // Delete 실패
    }
}

export function* deleteWatch(){
    while(true) {
        const {id, username, password} = yield take(actiontype.DELETE)
        yield call(deleteIt, id, username, password);
    
    }
}


// Post 하는 부분

function postReal(sinceWhen, tilWhen, username, password)
{
    console.log(tilWhen)
    return fetch(url/*meetings*/, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + Buffer.from(username + ":" + password).toString("base64")
        },
        body: JSON.stringify({
            sinceWhen,
            tilWhen
        })
      })
      .then(response => {
        if (response.status === 403) throw new Error("403 error")
        return response
    })

        //.then(handleApiErrors)
        .then(response => response.json())
       // .then(json => json)
        .catch((error) => { throw error })

}
export function* postNew(sinceWhen, tilWhen, username, password){

    try{

        yield call(postReal, sinceWhen, tilWhen, username, password)
        const data = yield call(GetMeetingData, username, password)

        yield put(actions.getMeeting(data))
        // GET or state 변경
    }

    catch(error)
    {
        console.log("failed to post")
        // Post 실패
    }
}

export function* watchPostNewRequest(){
    while(true) {
        const {sinceWhen, tilWhen, username, password} = yield take(actiontype.NEW)
        
            yield call(postNew, sinceWhen, tilWhen, username,password)
    }
}

// Login 하는 부분

function loginApi (email, password) {  
  return fetch(url,  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + Buffer.from(email + ":" + password).toString("base64")
    },
    })
    .then(response => {
        if (response.status === 403) throw new Error("403 error")
        return response
    })
    .then(response => response.json())
   // .then(json => json)
    .catch((error) => { throw error })
}

export function* login(username, password){
    let token
    try {

        token = yield call(loginApi, username, password)

        console.log(token)
        yield put(actions.login_success())
        console.log('b')
        yield put(actions.getMeeting(token))

      } catch (error) {
        // error? send it to redux
        console.log(error)
        //  yield put({ type: LOGIN_ERROR, error })
     
        }
      
}
function *loginWatch(){
    while(true){
        const {username, password} = yield take(actiontype.LOGIN)
            //console.log("failed to login")
            //if(username)
                yield call(login, username, password)
    }
}
// Logout 하는 부분

function* logout () {  
    // dispatches the CLIENT_UNSET action
    yield put(actions.logoutsuccess()) // reducer에서 처리해라
   
}

function *logoutWatch(){
    while(true){
        yield take(actiontype.LOGOUT)
        yield call(logout)
    }
}

// export

export default function* (){
    yield fork(watchPostNewRequest);
    yield fork(loginWatch);
    yield fork(logoutWatch);
    yield fork(deleteWatch);
}

