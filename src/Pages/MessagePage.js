import React from 'react';
import {useParams} from "react-router-dom";

function MessagePage(props) {

    const params = useParams();
    console.log(params);

    return (
        <div>

            Чат номер:

        </div>
    );
}

export default MessagePage;