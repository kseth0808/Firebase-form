import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Logedin from "./Logedin";
import LoginForm from "./LoginForm";
import SingUp from "./SingUp";
import { signOut } from "firebase/auth";
function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/LoginForm" element={<LoginForm/>}/>
                <Route path="/SignUp" element={<SingUp/>}/>
                <Route path="/LogedIn" element={<Logedin/>}/>
            </Routes>
        </Router>
    )
}

export default App;