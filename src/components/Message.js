import React, {useState, useEffect, useRef} from "react";
import './Message.css'

function Message() {

    const [messageValue, setMessageValue] = useState('');
    const [authorValue, setAuthorValue] = useState('');
    const [messageList, setMessageList] = useState([]);

    // console.log(messageValue);
    // console.log(messageList);

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

    const ref = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            const lastAuthor = messageList[messageList.length - 1];
            if (lastAuthor && lastAuthor.author) {
                setMessageList(prevState => [
                    ...prevState, {
                        id: getArrayId(prevState),
                        text:  `Сообщение автора ${lastAuthor.author} отправлено`
                    }
                ])
            }

        }, "3000")

    }, [messageList]);

    return (
        <div>
            <h1> Введите сообщение </h1>

            <form onSubmit={submitHandler}>
                <label> Сообщение </label>
                <input type="text" value={messageValue} onInput={(event) => setMessageValue(event.target.value)}/>
                <label> Автор </label>
                <input type="text" value={authorValue} onInput={(event) => setAuthorValue(event.target.value)}/>
                <button type='submit'> Send</button>

            </form>


            <h2 className='message_title'> Список входящих сообщений </h2>

            {messageList.map((item) => {
                return (
                    <div>
                        <p> Текст сообщения: {item.text} </p> <br/>
                        <p> Автор сообщения: {item.author} </p> <br/>
                    </div>
                );
            })}
        </div>
    )

}

export default Message;