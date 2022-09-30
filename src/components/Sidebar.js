import React, {useState} from 'react';
import './Sidebar.css'
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import TelegramIcon from '@mui/icons-material/Telegram';
import {Link} from "react-router-dom";

function Sidebar(props) {

    const [chatList, setChat] = useState([
        {
            id: 1,
            name: 'Чат номер 1'
        },
        {
            id: 2,
            name: 'Чат номер 2'
        },
        {
            id: 3,
            name: 'Чат номер 3'
        },
        {
            id: 4,
            name: 'Чат номер 4'
        },
    ]);

    const [name, setName] = useState('');

    const handleDelete = (id) => {
        const filtered = chatList.filter((item) => item.id !== id)
        setChat(filtered);
    }

    const handleAdd = () => {
        const obj = {
            id: Date.now(),
            name: name
        }
        setChat(prevState => [...prevState, obj]);
    }


    return (
        <div className="chat_list">
            <h2> Список чатов </h2>
            <hr/>
            <input value={name} onChange={(event)=> setName(event.target.value)}/>
            <button onClick={handleAdd}>Add Chat</button>
            <nav aria-label="secondary mailbox folders">
                <List>
                    {chatList.map((item) => {
                        return (
                            <ListItem disablePadding key={item.id} className="message_body">
                                <ListItemButton>
                                    <Link to={`/messages/${item.id}`} key={item.id}>
                                        <ListItemText primary={item.name}/>
                                    </Link>
                                    <TelegramIcon/>
                                </ListItemButton>
                                <button onClick={()=> handleDelete(item.id)}> Delete</button>
                            </ListItem>

                        );
                    })}
                </List>
            </nav>

        </div>
    );
}


export default Sidebar;