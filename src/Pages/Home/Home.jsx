import CarouselScroll from "../../Styles/Carousel";
import styles from "./Home.module.css"

function ResumePage () {
    return(
        <div className={styles.page}>
            
            <div className={styles.landing}>
                <h1>Welcome, Thanks for visiting!</h1>
                <br/>
                <p>
                    I appreciate your visit to my portfolio site, it is my training ground, I like to display the nitty-gritty, messy, practical.. uh practice, 
                    getting the reps in and prettying it up over time.
                </p>
                <br/>
                <p>
                    I love working with data for record-keeping and organisation. 
                    Making functional applications that solves the problem of that intitial motivational friction is my goal.<br/>
                    {/* CSS not a strong interest for me
                    BUT... Spending hours trying to work out how to move something to a specific area, how to
                    resize something consistently across screen sizes, what kind of colours I should use and why something is off by ONE pixel has 
                    made for an intense learning experience and I'm definitely getting better at it now that I'm trying to prepare the site for show.         */}
                </p>
                <br/>
                <p>
                    Currently working on making my site more responsive for mobile, stumbled upon the concept of 
                    Mobile First Development and it spoke a lot of sense to me.  
                    I'm always breaking and fixing a lot of stuff but progress is progress {`:)`}
                </p>
            </div>
            <div className={styles.section}>
                <h2 className={styles.title}>About</h2>
                <p className={`${styles.about} ${styles.content}`}>
                    <img className={styles.profileImage}
                    src="https://images.unsplash.com/photo-1734004997284-475f71f8e161?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Pic"/>
                    I have been working as a disibility support worker for 9 years which has been a life enriching and character growing career. 
                    I am currently seeking to change career path and have completed a Certificate IV - IT{`(Programming)`} at TAFE through online study. 
                    I have since continued working as a support worker while participating in self-directed learning while searching for an opportunity. 
                
                    As an aspiring developer, I have focused my learning in a multitude of software development areas.<br/>
                    As a pragmatic learner, I'd love to see and get hands-on with the workflow and software that is utilized in a real work place.
                    It's a really interesting field that is surprisingly relaxing and trance like to learn about and would love to be apart of professionally.
                </p>
            </div>
            <div className={styles.section} >
                <h2 className={styles.title}>Skills & Projects</h2>
                <p className={`${styles.skills} ${styles.content}`}>
                    My projects are just things I thought were interesting, cool or potentially useful and allow me to practice my React, C#, database, 
                    Python, HTML, CSS and JavaScript skills.<br/>
        
                    Here are some of the languages, libraries, tools and frameworks I've gained experience and understanding in so far:<br/>
                    {`(Yes, I sought out as many svg icons as I could so I too could do the cool scrolling thing, all the cool kids seem to be doing it.`}
                </p>
                <CarouselScroll/>
                <br/>
                <p>These are some of the completed projects utilizing some of those mysterious symbols.</p>
                <div className={styles.projectCards}>
            
                    <div className={styles.card}>
                        <a href="/TodoApp/TodoApp.jsx">
                            <img src={'/Assets/Images/Screenshot 2026-09-26 190236.jpg'}/>
                            <h3>Kanban Style Task Manager</h3>
                        </a>
                        <p>
                            This is the most complete project I have, one that I can say is 'good enough' for now. 
                            Not perfect but good enough to move back {`(or forward)`} to some of my other projects.<br/>
                            {/* <ul>
                            <li>Stylised in tribute to one of my favourite games of all time.</li>
                            <li>Utilises the users localstorage to store and recall tasks.</li>
                            <li>Uses dnd-kit to allow users to prioritize and arrange them into columns.</li>
                            <li>Allows the ability to rearrange tasks in their columns through defined droppable areas and sortable components.</li>
                            <li>Basic CRUD operations on tasks.</li>
                            </ul> */}
                        </p>
                    </div>


                    {/* <div className={styles.card}>
                        <a href="TodoApp/TodoApp.jsx">
                            <img src={'/Assets/Images/Screenshot 2026-09-26 190236.jpg'}/>
                        </a>
                        <h3>Kanban Style Task Manager</h3>
                    </div>
                    <div className={styles.card}>
                        <h3>Kanban Style Task Manager</h3>
                        <a href="TodoApp/TodoApp.jsx">
                            <img src={'/Assets/Images/Screenshot 2026-09-26 190236.jpg'}/>
                        </a>
                        
                    </div> */}
                </div>
                
                {/* <ul>
                    <b>Languages:</b>
                    <ol>
                        <li>As I've been enjoying Web Development, I've become very familar with HTML, CSS and JavaScript and expanding into TypeScript.</li>
                        <li>C# was the first and main language utilized during my studies.</li>
                        <li>Python was the second language I began learning as part of my studies.</li>
                    </ol>
                    <b>Libraries:</b>
                    <ol>
                        <li>React has been my JavaScript library of choice.</li>
                        <li>dnd-kit </li>
                    </ol>
                    <b>Backend</b>
                    <ol>
                        <li>Node.js and Express for server capabilities.</li>
                        <li>PostgreSQL is my Database of choice as Render is my web host of choice and offers native management for Postgres</li>
                    </ol>   
                </ul> */}
            </div>
            {/* <div className="project">
                <h2>Projects</h2>
                The things I like working on are kind of in the realm of record keeping but I like to try and present it in interesting ways.
                I love when things finally click and work, I love the sense of progression when something that was originally undecipherable alien language
                suddenly starts to make sense. I also find it fun to go back to my code and sort it out, format it in more organised ways.
                i have utilised Playwright for end to end testing in my calculator applications as it can be pr 
            </div> */}
        
        </div>
    )
}

export default ResumePage;
