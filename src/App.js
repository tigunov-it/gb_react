import {Route, Routes} from "react-router-dom";
import Chats from "./Pages/Chats";
import Messages from "./Pages/Messages";
import Headerbar from "./components/Headerbar"
import Profile from "./Pages/Profile";
import ApiData from "./Pages/ApiData";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";


function App() {

    return (
        <div>
            <Headerbar/>
            <Routes>
                <Route path={'/'} element={<Chats/>} />
                <Route path={'/messages/:id'} element={<Messages/>} />
                <Route path={'/profile'} element={<Profile/>} />
                <Route path={'/apidata'} element={<ApiData/>} />
                <Route path={'/register'} element={<RegisterPage/>} />
                <Route path={'/login'} element={<LoginPage/>} />
            </Routes>
        </div>
    );
}

export default App;
