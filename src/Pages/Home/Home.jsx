import CarouselScroll from "../../Styles/Carousel";
import styles from "./Home.module.css"

function ResumePage () {
    return(
        <div className={styles.page}>
            
            <div className={styles.landing}>
                <h1>Welcome, Thanks for visiting!</h1>
                <br/>
                <p>
                    I appreciate your visit to my portfolio site. I'm a new father working on building up my proficency in a multitude of software development 
                    areas. It's a really interesting field that I love learning about. 
                    The site is a work in progress and I make iterations frequently but between reading theory I like to implement the somewhat messy practical
                    here. Just getting the reps in and prettying it up over time.
                </p>
                <p>
                    I love being organised and making functional applications to assist with that, helps solve a problem or is just interesting!<br/>
                    CSS not a strong interest for me
                    BUT... Spending hours trying to work out how to move something to a specific area, how to
                    resize something consistently across screen sizes, what kind of colours I should use and why something is off by ONE pixel has 
                    made for an intense learning experience and I'm definitely getting better at it now that I'm trying to prepare the site for show.        
                </p>
                <br/>
                <p>
                    Currently working on making my site more responsive for mobile, as I've only recently stumbled upon the concept of 
                    Mobile First Development and it spoke a lot of sense to me. 
                    Going forward that'll definitely be the approach I take.<br/>Going the other direction I'm discovering is rather difficult, 
                    I'm breaking and fixing a lot of stuff but progress is progress {`:)`}
                </p>
            </div>
            <div className={styles.section}>
                <h2 className={styles.title}>About</h2>
                <p className={`${styles.about} ${styles.content}`}>
                    <img className={styles.profileImage}
                    src="https://images.unsplash.com/photo-1734004997284-475f71f8e161?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Pic"/>
                    I have been working as a disibility support worker for 9 years which has been a life enriching and character growing career. 
                    I am currently seeking a switch in career path, completing a Certificate IV in IT Programming at TAFE through online study. 
                    As I completed this course in 2022 as a complete beginner and have since continued working as a support worker while 
                    participating in self learning to improve upon my overall proficency in software development. 
                    My projects have largely been in areas of interest for myself and any cool ideas to motivate myself to practice my C#, database, 
                    Python, HTML, CSS and Javascript skills.
                    During my course I also worked on some database stuff utilising MSSMS.
                    However I've since decided to resume pursuing a career in technology in the form of software development. 
                    I think it's so cool to be able to develop useful applications to make the lives of everyone better and easier, 
                    I think this is a form of useful that appeals to me most and the ways I'd want to be useful.
                    As an aspiring developer, I have focused my learning on a broad spectrum of topics {`(unfocused I guess?)`} so that I may grasp as many different aspects of the profession
                    in a reasonably timely and practical manner.<br/>
                    I'm <bi>EXTREMELY</bi> interested in getting real life experience, to see the workflow and software that is utilized in a real work place, as
                    it can be hard to grasp a direction to focus one's learning efforts without any experience in a role.<br/>
                </p>
            </div>
            <div className={styles.section} >
                <h2 className={styles.title}>Skills & Projects</h2>
                <p className={`${styles.skills} ${styles.content}`}>
                    
                    Here are some of the languages, libraries, tools and frameworks I've gained experience and understanding in so far:<br/>
                    {`(Yes, I sought out as many svg icons as I could so I too could do the cool scrolling thing (Marquee? Who granted that title?) that everybody does to show off the tech they use)`}
                </p>
                <CarouselScroll/>
                <br/>
                <p>And here are some of the projects utilizing some of those mysterious symbols.</p>
                <div className={styles.projectCards}>
            
                    <div className={styles.card}>
                        <a href="TodoApp/TodoApp.jsx">
                            <img src={'/Assets/Images/Screenshot 2026-09-26 190236.jpg'}/>
                            <h3>Kanban Style Task Manager</h3>
                        </a>
                        <p>
                            This is the most complete project I have. I wanted to have at least one project that I would consider
                            'good enough'-complete. Not forever but good enough to move back {`(or forward)`} to some other projects.<br/>
                            <ul>
                            <li>Stylised in tribute to one of my favourite games of all time.</li>
                            <li>Utilises the users localstorage to store and recall tasks.</li>
                            <li>Uses dnd-kit to allow users to prioritize and arrange them into columns.</li>
                            <li>Allows the ability to rearrange tasks in their columns through defined droppable areas and sortable components.</li>
                            <li>Basic CRUD operations on tasks.</li>
                            </ul>
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
