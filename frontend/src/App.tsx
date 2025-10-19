import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Matches from "./components/Matches";
import Chat from "./components/Chat";

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/matching" element={<Matches />} />
                <Route path="/chat" element ={<Chat />} />
            </Routes>
        </Router>
    );
};

export default App;
