import React from 'react'
import { BrowserRouter, Route, Routes, useRoutes} from "react-router-dom";

import Publications from './Publications/Publs_page/Publications.jsx';
import Navbar2 from './NavbarNFooter/Navbar_2.jsx';
import Footer from './NavbarNFooter/Footer.jsx';
import Home from './Home/Home.jsx';
import Team from './Team/Team.jsx';

import './App.css'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar2/>
                <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/team" element={<Team />} />
                <Route path="/publications" element={<Publications />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}