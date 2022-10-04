import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom"
import {chatsSelector} from "../redux/reducers/chatReducer/chatsSelector";
import {List, ListItem, ListItemButton} from "@mui/material";
import TelegramIcon from '@mui/icons-material/Telegram';

const Chats = () => {
    const [chatText, setChat] = useState('');
    const {id} = useParams();
    const dispatch = useDispatch();

    const handleAdd = () => {
        const obj = {
            id: Date.now(),
            name: chatText
        }
        dispatch({type: 'add', payload: obj})
    }

    const chats = useSelector(chatsSelector)
    return (
        <div>
            <h2>Add Chat</h2>
            <input value={chatText} onChange={(e) => setChat(e.target.value)}/>
            <button onClick={handleAdd}>Add Chat</button>
            <h3>Chat list</h3>
            <List>
                {chats.map((chat) => {
                    return (
                        <ListItem key={chat.id}>
                            <ListItemButton>
                                <Link key={chat.id} to={`/messages/${chat.id}`}>
                                    {chat.name}
                                    <TelegramIcon/>
                                </Link>
                            </ListItemButton>
                            <button onClick={() => dispatch({type: 'delete', payload: chat.id})}>Delete</button>
                        </ListItem>
                    )
                })
                }
            </List>
        </div>
    );
};

export default Chats;