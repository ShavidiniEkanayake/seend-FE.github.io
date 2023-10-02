import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Landing from '../Pages/Home.jsx'

function PageRoutes() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Landing/>}/>
            </Routes>
        </Router>
    )
}

export default PageRoutes;