import {Route, Routes} from "react-router-dom";
import Chats from "./Pages/Chats";
import Messages from "./Pages/Messages";
import Headerbar from "./components/Headerbar"
import Profile from "./Pages/Profile";


function App() {

    return (
        <div>
            <Headerbar/>
            <Routes>
                <Route path={'/'} element={<Chats/>} />
                <Route path={'/messages/:id'} element={<Messages/>} />
                <Route path={'/profile'} element={<Profile/>} />
            </Routes>
        </div>
    );
}

export default App;
