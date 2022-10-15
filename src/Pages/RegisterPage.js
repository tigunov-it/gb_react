import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {registerInitiate} from "../redux/reducers/firebaseReducer/firebaseReducer";
import {useNavigate} from "react-router-dom";


const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [displayName, setDisplayName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== passwordConfirm) {
            return
        }
        dispatch(registerInitiate(email, password, displayName))
        navigate('/')
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={displayName} onChange={(event) => setDisplayName(event.target.value)}/>
                <input type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
                <input type="text" value={password} onChange={(event) => setPassword(event.target.value)}/>
                <input type="text" value={passwordConfirm}
                       onChange={(event) => setPasswordConfirm(event.target.value)}/>
                <button type={'submit'}>SEND</button>
            </form>
        </div>
    );
};

export default RegisterPage;