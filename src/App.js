import Headerbar from "./components/Headerbar"
import Footer from "./components/Footer"
import {Outlet, Route, Routes} from "react-router-dom";
import ProfilePage from "./Pages/ProfilePage";
import ChatsPage from "./Pages/ChatsPage";
import MessagePage from "./Pages/MessagePage";
import HomePage from "./Pages/HomePage";
import * as React from "react";

function App() {

    return (
        <div>
            <Headerbar/>
            <Outlet/>
            <Routes>
                <Route path={'/profile'} element={<ProfilePage/>}> </Route>
                <Route path={'/chats'} element={<ChatsPage/>}> </Route>
                <Route path={'/messages'} element={<MessagePage/>}> </Route>
                <Route exact path={'/'} element={<HomePage/>}> </Route>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
