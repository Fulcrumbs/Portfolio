import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import "./Nav.css"

import App from "../../App";
import Board from "../TicTacToe/TicTacToe";
import ArtifactApp from "../Artifact/ArtifactApp";
import ReplayImages from "../YGOReplays&Images/ReplayImages";
import Page from "../WebDev/FrontEndWebDev/Page";
import ReactCourse from "../WebDev/ReactCourse/ReactCourse";

const submenu =[
    {
        Path: "ReactCourse/ReactCourse.js",
        Element: <ReactCourse />,
        Label:"WebDEV"
    },
    {
        Path: "FrontEndWebDev/Page.js",
        Element: <Page/>,
        Label: "Course"
    }
]
const WebDevRoute = () =>{
    return(
    <div className="navpage">
        <nav className="nav">
            {submenu.map((submenu, index) =>{
                return(
                    <li className="menu-items" key={index}>
                        <Link to={submenu.Path} className="tab-link">{submenu.Label}</Link>
                    </li>
                )
            })}
        </nav>
        <Routes>
            {submenu.map((submenu, index) =>(
                <Route key={index} path={submenu.Path} element={submenu.Element}></Route>
            ))}
        </Routes>
    </div>)
}

const menulinks = [
    {
        Path: "/App",
        Element: <App/>,
        Label:"Learning Resources"
    },
    {
        Path:"/TicTacToe",
        Element: <Board/>,
        Label: "TicTacToe"
    },
    {
        Path:"/ArtifactApp",
        Element: <ArtifactApp/>,
        Label:"Artifact Calculator"
    },
    {
        Path: "/ReplayImages",
        Element:<ReplayImages/>,
        Label:"YGOReplays"
    },
    {
        Path: "/WebDev/*",
        Element: <WebDevRoute/>,
        Label: "Web Development"
    }
]
const Nav = () =>{
    return(
        <div className="navpage">
            <nav className="nav">
                {menulinks.map((menulinks, index) =>{
                    return(
                        <li className="menu-items" key={index}>
                            <Link to={menulinks.Path} className="tab-link">{menulinks.Label}</Link>
                        </li>
                    )
                })}
            </nav>
            <Routes>
                {menulinks.map((menulinks, index) =>(
                    <Route key={index} path={menulinks.Path} element={menulinks.Element}></Route>
                ))}
            </Routes>
        </div>
    )
}
;

function NavPage(){
    return <Nav/>;
}
// function NavPage(){
//     return(
//         <>
//         <div className="navpage">
//             <nav className="nav"> {/*<So not necessary but good semantic practice */}
//                 <Link to="/App" className="tab-link">Learning Resources</Link>
//                 <Link to="/TicTacToe" className="tab-link">TicTacToe</Link>
//                 <Link to="/ArtifactApp" className="tab-link">Artifact Calculator</Link>
//                 <Link to="/ReplayImages" className="tab-link">YGOReplays</Link>
//             </nav>
    
//             <Routes>
//                 <Route path="/App" element={<App/>}></Route>
//                 <Route path="/TicTacToe" element={<Board/>}></Route>
//                 <Route path="/ArtifactApp" element={<ArtifactApp/>}></Route>
//                 <Route path="/ReplayImages" element={<ReplayImages/>}></Route>
//             </Routes>
//         </div>
//         </>
//     )
// }

export default NavPage;