import {combineReducers, createStore} from "redux";
import {messagesReducer} from "./reducers/messageReducer/messagesReducer";
import {chatsReducer} from "./reducers/chatReducer/chatsReducer";

export const reducer = combineReducers({
    messages: messagesReducer,
    chats: chatsReducer
})

export const store = createStore(reducer);