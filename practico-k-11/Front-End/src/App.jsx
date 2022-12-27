import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {SocketsProvider} from "./context/socket-context";
import { HomeContainer } from "./pages/home/HomeContainer.jsx";
import {NavBar} from "./components/navbar/NavBar";



function App() {

    return (
        <SocketsProvider>
            <NavBar/>
            <HomeContainer/>
        </SocketsProvider>
    )
}

export default App
