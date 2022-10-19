import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CustomLink from "./CustomLink";
import {useDispatch, useSelector} from "react-redux";
import {logoutInitiate} from "../redux/reducers/firebaseReducer/firebaseReducer";
import {useNavigate} from "react-router-dom";


export default function ButtonAppBar() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const navigate = useNavigate('');

    const handleAuth = () => {
        if(user) {
            dispatch(logoutInitiate())
        }
        setTimeout(() => {
            navigate('/login')
        }, 3000)
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>

                    </IconButton>

                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>

                    <CustomLink to='/'> Home </CustomLink>
                    <CustomLink to='/profile'> Profile </CustomLink>
                    <CustomLink to='/apidata'> ApiData </CustomLink>
                    <CustomLink to='/register'> Register </CustomLink>
                    <CustomLink to='/login'> Login </CustomLink>
                    <button onClick={handleAuth}>LOGOUT</button>

                </Typography>


            </Toolbar>
        </AppBar>

</Box>
)
    ;
}