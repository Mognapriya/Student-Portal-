import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import MainMenu from './components/MainMenu';
import Profile from './components/Profile';
import Courses from './components/Courses';
import Grades from './components/Grades';
import Schedule from './components/Schedule';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/menu" element={<MainMenu />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/grades" element={<Grades />} />
                <Route path="/schedule" element={<Schedule />} />
            </Routes>
        </Router>
    );
};

export default App;

