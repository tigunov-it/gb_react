import {Route, Routes} from "react-router-dom";
import Chats from "./Pages/Chats";
import Messages from "./Pages/Messages";
import Headerbar from "./components/Headerbar"
import Profile from "./Pages/Profile";
import ApiData from "./Pages/ApiData";


function App() {

    return (
        <div>
            <Headerbar/>
            <Routes>
                <Route path={'/'} element={<Chats/>} />
                <Route path={'/messages/:id'} element={<Messages/>} />
                <Route path={'/profile'} element={<Profile/>} />
                <Route path={'/apidata'} element={<ApiData/>} />
            </Routes>
        </div>
    );
}

export default App;
