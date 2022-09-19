import React, {useState, useEffect, useRef} from "react";
import './Message.css'

function Message() {

    const [messageValue, setMessageValue] = useState('');
    const [authorValue, setAuthorValue] = useState('');
    const [messageList, setMessageList] = useState([]);

    // console.log(messageValue);
    // console.log(messageList);

    const submitHandler = () => {
        // messageList.push(authorValue, messageValue);
        setMessageList([authorValue, messageValue]); // разобраться, как запушить данные в массив
        console.log(messageList);
        setMessageValue('');
        setAuthorValue('');
    }

    const ref = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            console.log('Ответ робота с задержкой!')

        }, "3000")

    }, [messageList]);

    return (
        <div>
            <h1> Введите сообщение </h1>

            <label> Сообщение </label>
            <input type="text" value={messageValue} onInput={(event) => setMessageValue(event.target.value)}/>
            <label> Автор </label>
            <input type="text" value={authorValue} onInput={(event) => setAuthorValue(event.target.value)}/>
            {/*<button onClick={() => setMessageList([messageValue, authorValue])}> Send</button>*/}
            <button onClick={submitHandler}> Send</button>

            <h2 className='message_title'> Список входящих сообщений </h2>

            {messageList.map((item) => {
                return (
                    <div>
                        <p> {item} </p> <br/>

                    </div>
                );
            })}
        </div>
    )

}

export default Message;