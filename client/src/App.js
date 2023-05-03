import { Route, Routes } from "react-router-dom"
import { Home } from './components/Home/Home';
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { AuthProvider } from "./context/AuthContext";
import { Logout } from "./components/Logout/Logout";
import { Register } from "./components/Register/Register";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </AuthProvider>

        </div>
    );
}

export default App;
