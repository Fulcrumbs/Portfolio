import "./Home.css"


function ResumePage () {
    return( 
        <div className="homepage">
            {/* <div className="pfp-wrap"> */}
            <div className="pfp">
                <img  src="https://images.unsplash.com/photo-1734004997284-475f71f8e161?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Pic"/>
                <h3>Jason Callaghan-Barrett</h3>
            </div>
            {/* </div> */}
            <div className="about">
                <h2>About me</h2>
                
                <p> I have been working as a disibility support worker for 9 years which has been a life enriching and character growing career.<br/>
                I am currently seeking a switch in career path, completing a certIV in IT{'(Programming)'} at TAFE
                through online study.<br></br>
                As I completed this course in 2022 as a complete beginner and have since continued working as a support worker while participating in 
                self learning to improve upon my overall proficency in software development.<br></br>
                My projects have largely been in areas of interest for myself and any cool ideas to motivate myself to practice my C#, database, Python,
                HTML, CSS and Javascript skills.<br></br> 
                During my course I also worked on some database stuff utilising MSSMS.
                I've had a long time interest in technology but due to circumstances I was unable to pursue a career related to this interest.
                However I've since decided to resume pursuing a career in technology in the form of software development. 
                I think it's so cool to be able to develop useful applications to make the lives of everyone better and easier, 
                I think this is a form of useful that appeals to me most and the ways I'd want to be useful.
                </p>
            </div>
            <div className="skills">
                <h2>Skills & Experience</h2>
                <p>I have been developing my skills in a broad spectrum in an attempt to grasp full stacks concepts in a reasonably practical sense 
                    as quickly as possible.</p>
                <p>
                    React has been my library of choice to practice my frontend development.<br></br>
                    Node.js and Express for backend and server capabilities.<br></br>
                    In terms of database intergration I've been utilising PostgreSQL.<br></br>
                    I'm very interested in getting real life experience, to see the workflow and software that is utilized in a real work place, as
                    it can be hard to grasp a direction to focus ones learning efforts without any experience in a role.
                </p>
            </div>
            <div className="project">
                <h2>Projects</h2>
                The things I like working on are kind of in the realm of record keeping but I like to try and present it in interesting ways.
                I love when things finally click and work, I love the sense of progression when something that was originally undecipherable alien language
                suddenly starts to make sense. I also find it fun to go back to my code and sort it out, format it in more organised ways.
            </div>

        </div>
    )
}

export default ResumePage;
