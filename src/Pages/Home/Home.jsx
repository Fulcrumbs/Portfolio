import styles from "./Home.module.css"


function ResumePage () {
    return(
        <div className={styles.homepage}>
            
            {/* <div className="pfp-wrap"> */}
            <div className={styles.pfp}>
                <img  src="https://images.unsplash.com/photo-1734004997284-475f71f8e161?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Pic"/>
                <h1>Jason Callaghan-Barrett</h1>
            </div>
            {/* </div> */}
            <div >
                <div className={styles.title}>
                    <h2>About</h2>
                </div>
                <p className={`${styles.about} ${styles.content}`}> 
                    I have been working as a disibility support worker for 9 years which has been a life enriching and character growing career.<br/>
                    I am currently seeking a switch in career path, completing a certIV in IT{'(Programming)'} at TAFE
                    through online study.<br></br>
                    As I completed this course in 2022 as a complete beginner and have since continued working as a support worker while participating in 
                    self learning to improve upon my overall proficency in software development.<br></br>
                    My projects have largely been in areas of interest for myself and any cool ideas to motivate myself to practice my C#, database, Python,
                    HTML, CSS and Javascript skills.<br></br> 
                    During my course I also worked on some database stuff utilising MSSMS.
                    However I've since decided to resume pursuing a career in technology in the form of software development. 
                    I think it's so cool to be able to develop useful applications to make the lives of everyone better and easier, 
                    I think this is a form of useful that appeals to me most and the ways I'd want to be useful.
                </p>
            </div>
            <div className={styles.section} >
                <div className={styles.title}>
                    <h2 >Skills & Experience</h2>
                </div>
                <p className={`${styles.skills} ${styles.content}`}>
                    As a beginner, I have been developing my skills in a broad spectrum in an attempt to grasp as many different aspects of the profession
                    in a reasonably practical sense as quickly as possible.<br/>
                    I'm very interested in getting real life experience, to see the workflow and 
                    software that is utilized in a real work place, as
                    it can be hard to grasp a direction to focus one's learning efforts without any experience in a role.<br/>
                    However these are some of the technologies I've gained some understanding in so far:
                    <br/>
                    <ul>
                        <b>Languages:</b><br/> 
                        <ol>
                            <li>JavaScript has been my main focus as Web Development has been great immediate and visual feedback during development.</li>
                            <li>C# was the main language utilized during my studies and while I don't focus on it much currently, I have some experience with it.</li>
                            <li>Python was my second language I began using as its popularity and famed ease of use were appealing selling points to a beginner such as myself.</li>
                        </ol>
                    </ul>
                        <li>React has been my JavaScript library of choice.</li>
                        <li>Node.js and Express for backend and server capabilities.</li>
                        <li>Database: PostgreSQL - Utilised within my mock Booking application</li>
                
                    
                    
                </p>
            </div>
            {/* <div className="project">
                <h2>Projects</h2>
                The things I like working on are kind of in the realm of record keeping but I like to try and present it in interesting ways.
                I love when things finally click and work, I love the sense of progression when something that was originally undecipherable alien language
                suddenly starts to make sense. I also find it fun to go back to my code and sort it out, format it in more organised ways.
                i have utilised Playwright for end to end testing in my calculator applications as it can be pr 
            </div> */}
        <input type='checkbox' id='green-theme-toggle'></input>
        </div>
    )
}

export default ResumePage;
