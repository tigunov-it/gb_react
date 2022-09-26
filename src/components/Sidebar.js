import React, {useState} from 'react';
import './Sidebar.css'
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import TelegramIcon from '@mui/icons-material/Telegram';

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

    return (
        <div className="chat_list">
            <h2> Список чатов </h2>
            <hr/>
            <nav aria-label="secondary mailbox folders">
                <List>
                    {chatList.map((item) => {
                        return (
                            <ListItem disablePadding key={item.id} className="message_body">
                                <ListItemButton>
                                    <ListItemText primary={item.name}/>
                                    <TelegramIcon/>
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </nav>

        </div>
    );
}


export default Sidebar;