import * as types from './ActionTypes'

export const login = (username, password) => ({
    type : types.LOGIN,
    username,
    password
// username, password는 Reducer에서 state의 input을 이용
});

export const getMeeting = (data) => ({
    type : types.GETMEET,
    data
})

export const logout = () => ({
    type : types.LOGOUT
})

export const logoutsuccess = () => ({
    type : types.LOGOUTSUCCESS
})

export const deleteMeeting = (id, username, password) => ({
    type : types.DELETE,
    id,
    username,
    password
})

export const newMeeting = (sinceWhen, tilWhen, username, password) =>({
    type : types.NEW,
    sinceWhen,
    tilWhen,
    username,
    password // POST
})

export const onChange = (newString, what) =>({
    type : types.CHANGE,
    newString,
    what
})

export const login_success = () =>({
    type : types.LOGINSUCCESS
})