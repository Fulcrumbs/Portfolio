
import styles from './ReactCourse.module.css';

function ReactCourse() {
  return (
    <div className={styles.App}>
      <Header/>
      <Body/>
    </div>
      
  );
}

function Header(){
  return(
  <header className={styles.Appheader}>
    FreeCodeCamp's react course.
    <a href='https://www.youtube.com/watch?v=bMknfKXIFA8&t=13s' target='_blank' rel='noreferrer'>
      <button>React Course</button>
    </a>
  </header>
  )
}

function Body(){
  return(
      <body className={styles.Appbody}>
      <h1>This is the header of the body section</h1>
      <div className={styles.listContainer}>
        <span>I want this to list stuff.</span> 
        <span>I want this to list stuff.</span>
        <span>I need to see if it works first.</span>
        <span>test</span>
        <span>Bit annoying to always have to write {'<span></span>'}</span>
        <ol>
          <li>Okay so I don't have to do {'<span></span>'}</li>
          <li>Instead I can use {'<ol></ol>(ordered list) or <ul></ul>(unordered list)'}</li>
          <li>Then I can use {'<li></li>'} to list stuff</li>
          <li>Also just for future reference to myself (in case I forget): use  {'{}'} to comment out html elements so you can see them on the page</li>
        </ol>
      </div>
      <h1>Okay this is the work area</h1>
      <h2>Challenges</h2>
      <div className={styles.challengeContainer}>
        <h3>Challenge 1: <p> Memorize this line?</p></h3>
        <h3>Answer:</h3>
        <span>{"ReactDOM.render('<h1>Hello, everyone!</h1>, document.getElementbyId('root'))"}</span>
      </div>

      <div className={styles.challengeContainer}>
        <h3>Challenge 2:<p> Render unordered list with two list items</p></h3>
        <h3>Answer:</h3>
        <span>
          <ul>
          <li>1</li>
          <li>2</li>
          </ul>
        </span>
        </div>
      <div className={styles.challengeContainer}>
        <h3>Challenge 3: <p>Create components(Functions)</p></h3>
        <h3>Answer:</h3>
        <span>
        You can't really see this one, basically just turned the header and 
          body into components that are put into the main app function
        </span>
      </div>
      <div className={styles.challengeContainer}>
        <h3>Challenge 4: <p>Append an H1 to the div#root (without using innerHTML)</p></h3>
        <p>
          <ul>
            <li>create new h1 element</li>
            <li>give it some textContent</li>
            <li>give it a className of "header"</li>
            <li>append it as a child of the div#root</li>
          </ul>
        </p>
        <h3>Answer:</h3>
        <span>
          Didn't really do this one, seems like it was just to prove that declaritive
          is better than whatever the other thing was.
        </span>
      </div>
      <div className={styles.uchallengeContainer}>
        <h3>Challenge : </h3>
        <h3>Answer:</h3>
        <span>
          <button onClick={() => {alert("hello")}}>Test</button> 
          {/* so if it's not in a function it just triggers constantly even if it's not clicked */}
        </span>
      </div>
      
      
      </body>
  )
}
export default ReactCourse;
