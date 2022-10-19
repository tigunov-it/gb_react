import {GET_POSTS} from "./actionTypes";

const initialState = {
    posts: []
}

export const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }

        default:
            return state
    }
}

//thunk
export const getData = () => {
    return async (dispatch) => {
        try {
            const responce = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await responce.json();
            dispatch({
                type: GET_POSTS,
                payload: data
            })
        }
        catch (error) {
            console.log('error')
        }
        finally {
            console.log('getData function finished')
        }
    }
}