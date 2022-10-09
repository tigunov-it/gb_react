import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {messagesSelector} from "../redux/reducers/messageReducer/messagesSelector";

const Messages = () => {
    const [text, setText] = useState('');
    const {id} = useParams();
    const messages = useSelector(messagesSelector)
    const dispatch = useDispatch();

    const handleAdd = () => {
        const obj = {
            // id: Number(id),
            id: Date.now(),
            text: text,
        }
        dispatch({
            type: 'add',
            payload: obj,
            meta: {
                delayMs: 5000
            }
        })
    }

    return (
        <div>
            <input value={text} onChange={(elem) => setText(elem.target.value)}/>
            <button onClick={handleAdd}>Send</button>
            {messages.map((message) => {
                return (
                    <div key={message.id}>
                        {message.text}
                        <button onClick={()=>dispatch({type: 'delete', payload: message.id})}>Delete </button>
                    </div>
                )
            })}

        </div>
    );
};

export default Messages;