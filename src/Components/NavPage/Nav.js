import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import "./Nav.css"

import App from "../../Pages/LearningCourses/ResponsiveWebDesign/App";
import Board from "../../Pages/Projects/TicTacToe/TicTacToe";
import ArtifactApp from "../../Pages/Projects/Artifact/ArtifactApp";
import ReplayImages from "../../Pages/Projects/YGOReplays&Images/ReplayImages";
import Page from "../../Pages/LearningCourses/ReactCourse/Page";
import ReactCourse from "../../Pages/LearningCourses/ReactCourse/ReactCourse";
//import Experiment from "../../Pages/Projects/Artifact/Experiment";

/*Pages
Home- (Nav.js) Rename App?
        - Courses - Null Page
            - FrontEndWebDev(Two folders currently there)
            - App is also a course - Freecodecamp's html/css interactive course. (Rename and move)
        - Projects - Null Page
            - Artifact
            - Calculators
            - TicTacToe
            - Webskim
            - YGOReplays&Images
        - Resume
*/  
//could probably simplify futher, I think only the submenu part really matters but I'm tired of thinking. 22-01-24        

const menulinks = [
    {
        Path: "/LearningCourses/*",
        Element: null, //CourseRoutes
        Label: "Learning Material",
        Submenu: [
            {
                Path: "ReactCourse/ReactCourse.js",
                Element: <ReactCourse />,
                Label:"Beginner's React Course 2022"
            },
            {
                Path: "FrontEndWebDev/Page.js",
                Element: <Page/>,
                Label: "Course"
            },
            {
                Path: "ResponsiveWebDesign/App.js",
                Element: <App/>,
                Label:"Responsive Web Design"
            }
        ]
    },
    {
        Path: "/Projects/*",
        Element: null, //ProjectRoutes if i need to revert
        Label: "Projects",
        Submenu: [
            {
                Path:"TicTacToe/TicTacToe.js",
                Element: <Board/>,
                Label: "TicTacToe"
            },
            {
                Path:"Artifact/ArtifactApp.js",
                Element: <ArtifactApp/>,
                Label:"Artifact Calculator"
            },
            {
                Path: "YGOReplays&Images/ReplayImages.js",
                Element:<ReplayImages/>,
                Label:"YGOReplays"
            }
            //,
            // {
            //     Path:"Artifact/Experiment.js",
            //     Element:<Experiment/>,
            //     Label:"Artifact test area"
            // }
        ]
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
                            {menulinks.Submenu &&(
                                <nav className="submenu">
                                    {menulinks.Submenu.map((submenuItem, index) => (
                                        <li className="menu-items" key={index}>
                                            <Link to={submenuItem.Path} className="tab-link">{submenuItem.Label}</Link>
                                        </li>
                                    ))}
                                </nav>
                            )}
                        </li>
                    );
                })}
            </nav>
            
            <Routes>
                {menulinks.map((menulinks, index) =>(
                    <Route key={index} path={menulinks.Path} element={menulinks.Element}></Route>
                ))}
                {menulinks.map((menuLink) =>
                    menuLink.Submenu
                    ? menuLink.Submenu.map((submenuItem, subIndex) => (
                        <Route key={subIndex} path={submenuItem.Path} element={submenuItem.Element}></Route>)) : null)}
            </Routes>
        </div>
    )
}
;

function NavPage(){
    return <Nav/>;
}


export default NavPage;