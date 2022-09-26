import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Route, Routes} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ProfilePage from "../Pages/ProfilePage";
import ChatsPage from "../Pages/ChatsPage";
import CustomLink from "./CustomLink";

export default function ButtonAppBar() {
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
                        <CustomLink to='/chats'> Chats </CustomLink>

                    </Typography>

                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

            <Routes>
                <Route path={'/profile'} element={<ProfilePage/>}> </Route>
                <Route path={'/chats'} element={<ChatsPage/>}> </Route>
                <Route exact path={'/'} element={<HomePage/>}> </Route>
            </Routes>

        </Box>
    );
}
