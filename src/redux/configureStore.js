import {applyMiddleware, combineReducers, createStore} from "redux";
import {messagesReducer} from "./reducers/messageReducer/messagesReducer";
import {chatsReducer} from "./reducers/chatReducer/chatsReducer";
import storage from "redux-persist/lib/storage"
import {persistReducer, persistStore} from "redux-persist";
import {apiReducer} from "./reducers/apiReducer/apiReducer";
import thunk from "redux-thunk";


export const reducer = combineReducers({
    messages: messagesReducer,
    chats: chatsReducer,
    api: apiReducer
})


const timeout = store => next => action => {
    const delay = action?.meta?.delayMs
    if(!delay) {
        return next(action)
    }
    const result = setTimeout(() => next(action), delay)

    return () => {
        clearTimeout(result)
    }
}

const config = {
    key: 'root',
    storage
}

const persistedReduser = persistReducer(config, reducer);

export const store = createStore(persistedReduser, applyMiddleware(timeout, thunk));

export const persist = persistStore(store);