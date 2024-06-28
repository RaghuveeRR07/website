import React from 'react'
import { BrowserRouter, Route, Routes, useRoutes} from "react-router-dom";

import Publications from './Publications/Publs_page/Publications.jsx';
import Navbar from './NavbarNFooter/Navbar.jsx';
import Footer from './NavbarNFooter/Footer.jsx';
import Home from './Home/Home.jsx';
import Team from './Team/Team.jsx';
import './App.css'
import Project from './Projects/Project.jsx';
import 
import ParticlesBackground  from './Projects/ParticlesBackground';

export default function App() {
    return (
        <>
        <ParticlesBackground/>
            <BrowserRouter>
            
                <Navbar/>
                <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/team" element={<Team />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/projects" element={<Project/>} />
                <Route path="/projects/completed" element={<Project-completed/>} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}