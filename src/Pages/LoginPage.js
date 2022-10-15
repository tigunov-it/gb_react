import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {loginInitiate} from "../redux/reducers/firebaseReducer/firebaseReducer";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!email || !password) {
            return;
        }
        dispatch(loginInitiate(email, password))
        navigate('/')
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
                <input type="text" value={password} onChange={(event) => setPassword(event.target.value)}/>
                <button type={'submit'}>Sign In</button>
            </form>
        </div>
    );
};

export default LoginPage;