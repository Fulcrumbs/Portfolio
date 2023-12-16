import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import "./Nav.css"

import App from "../../App";
import Board from "../TicTacToe/TicTacToe";
import ArtifactApp from "../Artifact/ArtifactApp";
import ReplayImages from "../YGOReplays&Images/ReplayImages";

function NavPage(){
return(
    <>
    <div className="navpage">
        <nav className="nav"> {/*<So not necessary but good semantic practice */}
            <Link to="/App" className="tab-link">Learning Resources</Link>
            <Link to="/TicTacToe" className="tab-link">TicTacToe</Link>
            <Link to="/ArtifactApp" className="tab-link">Artifact Calculator</Link>
            <Link to="/ReplayImages" className="tab-link">YGOReplays</Link>
        </nav>
   
        <Routes>
            <Route path="/App" element={<App/>}></Route>
            <Route path="/TicTacToe" element={<Board/>}></Route>
            <Route path="/ArtifactApp" element={<ArtifactApp/>}></Route>
            <Route path="/ReplayImages" element={<ReplayImages/>}></Route>
        </Routes>
    </div>
    </>
)
}

export default NavPage;