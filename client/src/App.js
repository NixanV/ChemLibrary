import {Route, Routes} from "react-router-dom"
import { Home } from './components/Home/Home';
import { Header } from "./components/Header/Header";
import {Login} from "./components/Login/Login";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
