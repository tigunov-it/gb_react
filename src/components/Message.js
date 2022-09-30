import React, {useState, useEffect, useRef, useContext} from "react";
import './Message.css'
import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Sidebar from "./Sidebar";

function Message() {

    const [messageValue, setMessageValue] = useState('');
    const [authorValue, setAuthorValue] = useState('');
    const [messageList, setMessageList] = useState([
        {
            id: 1,
            text: 'Where are you?',
            chatId: 1
        },
        {
            id: 2,
            text: 'Where are you?',
            chatId: 2
        },
        {
            id: 3,
            text: 'Where are you?',
            chatId: 3
        },

    ]);

    const inputRef = useRef(null);

    const submitHandler = (event) => {
        event.preventDefault();
        setMessageList(prevState => [...prevState, {
            id: getArrayId(prevState),
            text: messageValue,
            author: authorValue
        }]);
        setMessageValue('');
        setAuthorValue('');

    }

    function getArrayId(array) {
        return array.length ? array[array.length - 1].id + 1 : 0;
    }

    useEffect(() => {
        setTimeout(() => {
            const lastAuthor = messageList[messageList.length - 1];
            if (lastAuthor && lastAuthor.author) {
                setMessageList(prevState => [
                    ...prevState, {
                        id: getArrayId(prevState),
                        text: `Сообщение автора ${lastAuthor.author} отправлено`
                    }
                ])
            }
        }, "3000")
    }, [messageList]);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div>

            <Box
                onSubmit={submitHandler}
                component="form"
                sx={{
                    '& > :not(style)': {m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="off"
            >
                <h1> Введите сообщение </h1>

                <TextField label="Сообщение" color="secondary" focused ref={inputRef} value={messageValue}
                           onInput={(event) => setMessageValue(event.target.value)}/>
                <TextField label="Автор" color="secondary" focused value={authorValue}
                           onInput={(event) => setAuthorValue(event.target.value)}/> <br/>
                <Button variant="contained" type="submit" size="large" endIcon={<SendIcon/>}> Отправить </Button>

            </Box>


            <div className="chat_body">

                <Sidebar/>

                <div className='messages'>

                    <h2> Список входящих сообщений </h2>
                    <hr/>

                    {messageList.map((item) => {
                        return (
                            <div key={item.id} className="message_body">
                                <p> {item.text} </p>
                                <p> {item.author} </p>
                            </div>
                        );
                    })}
                </div>

            </div>


        </div>
    )
}

export default Message;