import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CustomLink from "./CustomLink";
import {useContext, useState} from "react";
import { ThemeContext, themes } from "./context"


export default function ButtonAppBar() {

    const [theme, setTheme] = useState(themes.light)

    const toggleTheme = () => {
        setTheme(prevState => prevState == themes.light ? themes.dark : themes.light)
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
                        <CustomLink to='/chats'> Chats </CustomLink>

                    </Typography>

                   <ThemeContext.Provider value={theme}>
                       <Button style={{background: theme.background, color: theme.text}} onClick={toggleTheme} color="inherit">Dark/Light</Button>
                   </ThemeContext.Provider>

                </Toolbar>
            </AppBar>

        </Box>
    );
}
