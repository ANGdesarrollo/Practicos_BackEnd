import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {SocketsProvider} from "./context/socket-context";
import {NavBar} from "./components/navbar/NavBar";
import {AuthContainer, HomeContainer} from "./pages/index.js";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <SocketsProvider>
            <NavBar/>
            <Routes>
                <Route path='/' element={<AuthContainer/>}></Route>
                <Route path='/home' element={<HomeContainer/>}></Route>
            </Routes>
        </SocketsProvider>
    )
}

export default App
