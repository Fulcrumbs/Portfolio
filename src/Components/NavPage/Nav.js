import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import { lazy, Suspense } from "react";

import "./Nav.css"


const Board = lazy(() => import("../../Pages/LearningCourses/TicTacToe/TicTacToe.js"));
const ArtifactApp = lazy(() => import("../../Pages/Projects/Artifact/ArtifactApp"));
const ReplayImages = lazy(() => import("../../Pages/Projects/YGOReplays&Images/ReplayImages"));
// import Page from "../../Pages/LearningCourses/ReactCourse/Page";
const ReactCourse = lazy(() => import("../../Pages/LearningCourses/ReactCourse/ReactCourse"));
//import Experiment from "../../Pages/Projects/Artifact/Experiment";
const BookingApp = lazy(() => import("../../Pages/Projects/BookingApp/AppointmentSys"));
const Home = lazy(() => import("../../Pages/Home/Home.js"));

const RWD = lazy(() => import("../../Pages/LearningCourses/ResponsiveWebDesign/RWD"));
const TodoApp = lazy(() => import("../../Pages/Projects/To-Do/TodoApp.js"));
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
    { Path: '/',
      Element: <Home/>,
      Label: "Home"
    },
    { Path: "/LearningCourses/*",
      Element: <Home/>, //CourseRoutes
      Label: "Learning Material",
      Submenu: [
          {Path:"TicTacToe/TicTacToe.js", Element: <Board/>, Label: "React Tic-Tac-Toe Tutorial"},
          {Path: "ReactCourse/ReactCourse.js", Element: <ReactCourse />, Label:"Beginner's React Course 2022"},
          {Path: "ResponsiveWebDesign/RWD.js", Element: <RWD/>, Label:"Responsive Web Design"}
        ]
    },
    { Path: "/Projects/*",
      Element: <Home/>, //ProjectRoutes if i need to revert
      Label: "Projects",
      Submenu: [
          {Path:"Artifact/ArtifactApp.js", Element: <ArtifactApp/>, Label:"Artifact Calculator"},
          {Path: "YGOReplays&Images/ReplayImages.js", Element:<ReplayImages/>, Label:"YGOReplays"},
          {Path:"BookingApp/AppointmentSys.js", Element:<BookingApp/>, Label:"Booking App"},
          {Path:"TodoApp/TodoApp.js", Element:<TodoApp/>, Label:"To-Do App"},
        ]
    }
]
const Nav = () =>{
    return (
      <div className="navpage noScroll">
        <nav className="nav">
          {menulinks.map((menulinks, index) => {
            return (
              <li className="menu-items" key={index}>
                <Link to={menulinks.Path} className="tab-link"> {menulinks.Label} </Link>
                {menulinks.Submenu && (
                  <nav className="submenu">
                    {menulinks.Submenu.map((submenuItem, index) => (
                      <li className="menu-items" key={index}>
                        <Link to={submenuItem.Path} className="tab-link"> {submenuItem.Label} </Link>
                      </li>
                    ))}
                  </nav>
                )}
              </li>
            );
          })}
        </nav>
        <Suspense fallback={<div>'...Loading'</div>}>
          <Routes>
            {menulinks.map((menulinks, index) => (
              <Route key={index} path={menulinks.Path} element={menulinks.Element}/>
            ))}
            {menulinks.map((menuLink) =>
              menuLink.Submenu
                ? menuLink.Submenu.map((submenuItem, subIndex) => (
                    <Route key={subIndex} path={submenuItem.Path} element={submenuItem.Element}/>
                  ))
                : []
            )}
          </Routes>
        </Suspense>
      </div>
    );
};

function NavPage(){
    return <Nav/>
};


export default NavPage;