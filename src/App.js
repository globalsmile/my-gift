import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Gifts from "./components/Gifts";
import Navbar from "./components/Navbar";
import Receivers from "./components/Receivers";
import Records from "./components/Records";
import Reminders from "./components/Reminders";
import Suggestions from "./components/Suggestions";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Gifts />} />
                <Route path="/Receivers" element={<Receivers />} />
                <Route path="/Records" element={<Records />} />
                <Route path="/Reminders" element={<Reminders />} />
                <Route path="/Suggestions" element={<Suggestions />} />
            </Routes>
        </Router>
    );
}
 
export default App;