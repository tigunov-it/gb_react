import * as types from './actionTypes'

export const registerStart = () => ({
    type: types.LOADING_TO_REGISTER
})

export const registerError = (error) => ({
    type: types.ERROR_REGISTER,
    payload: error.toString()
})

export const registerSuccess = (user) => ({
    type: types.SUCCESS_REGISTER,
    payload: user
})

export const loginStart = () => ({
    type: types.LOADING_LOGIN
})

export const loginSuccess = (user) => ({
    type: types.SUCCESS_LOGIN,
    payload: user
})

export const loginError = (error) => ({
    type: types.ERROR_LOGIN,
    payload: error.toString()
})

export const logoutStart = () => ({
    type: types.LOGOUT_START
})

export const logoutSuccess = () => ({
    type: types.LOGOUT_SUCCESS,
})

export const logoutError = (error) => ({
    type: types.LOGOUT_ERROR,
    payload: error.toString()
})