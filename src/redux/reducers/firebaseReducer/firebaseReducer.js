import * as types from './actionTypes'
import {
    loginError,
    loginStart,
    loginSuccess, logoutError,
    logoutStart, logoutSuccess,
    registerError,
    registerStart,
    registerSuccess
} from "./actions";
import {auth} from '../../../service/firebase'

const initialstate = {
    loading: false,
    error: null,
    currentUser: null
}

export const firebaseReducer = (state = initialstate, action) => {
    switch (action.type) {
        case types.LOADING_TO_REGISTER:
        case types.LOADING_LOGIN:
        case types.LOGOUT_START:
            return {
                ...state,
                loading: true
            }
        case types.ERROR_REGISTER:
        case types.ERROR_LOGIN:
        case types.LOGOUT_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case types.SUCCESS_REGISTER:
        case types.SUCCESS_LOGIN:
            return {
                ...state,
                currentUser: action.payload
            }
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                currentUser: state.currentUser = null
            }

        default:
            return state

    }
}

export const registerInitiate = (email, password, displayName) => {
    return (dispatch) => {
        dispatch(registerStart())
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({user}) => {
                user.updateProfile({displayName})
                dispatch(registerSuccess(user))
            })
            .catch((error) => dispatch(registerError(error.toString())))

    }
}

export const loginInitiate = (email, password) => {
    return (dispatch) => {
        dispatch(loginStart())
        auth
            .signInWithEmailAndPassword(email, password)
            .then(({user}) => {
                dispatch(loginSuccess(user))
            })
            .catch(error => dispatch(loginError(error)))
    }
}

export const logoutInitiate = () => {
    return (dispatch) => {
        dispatch(logoutStart())
        auth
            .signOut()
            .then(() => dispatch(logoutSuccess()))
            .catch((error) => dispatch(logoutError(error)))
    }
}