
import { wait } from '@testing-library/user-event/dist/utils';
import './App.css';
import { defer } from 'react-router-dom';
import { useEffect } from 'react';
//import './CatPhoto.html';

function App() {
  return (
      <div className="App">      
        <header className='head'>
          <HeaderMenu/>
        </header>
          <div className='desc'>
            <p>These are <i>some</i> of the resources I've been using to try and learn.</p>
            <p>So this div and the code div were stacked because they were both inside of the body tag, so moved it outside and it
            is back to the being beside this desc div. Though I wonder if I change the body tag to have the css property of
            inline I can bring it back?</p>

            <p>Was using all kinds of silly things to get my code from the freeCodeCamp courses to display like 
            {'<xmp></xmp>'} and {'<pre></pre>'} by itself, didn't realise that {'<pre></pre>'} actually only means
            that it pays attention to white space?<br/>However I wasn't able to turn the code into a string but discovered that
            react uses ``{'(Backtick)'} for its multiline strings; Thought my single quotes weren't working and didn't know
            that the backtick was even a character. 24-12-23</p>

            <p>So I'm trying to work with transition effects but its weird and the smaller I make
              the individual sections the further apart they keep getting, might not even be worth
              the effort so might have to just forget the idea and leave it normal and no fancy effects.
              -01/01/24.
            </p>
            <p>Quick change to push</p>
          </div>
          <div className='codeContainer'>
              <div className='codesec'>
               
                <FccCatPhoto/>
                <iframe className='overl2' src='/StaticHTML/CatPhoto.html' title='CatPhoto' style={{backgroundColor:'white'}}/> 
                <button className='overButton' onClick={seeCode}>toggle code/result</button>
              </div>
              <div className='codesec'>
                <Menu/>
                <iframe src='/StaticHTML/Menu.html' width="100%" height="600px" title='Menu'/>
              </div>
              <div className='codesec'>
                <ColorMarkers/>
                <iframe src='/StaticHTML/ColorMarkers.html' width="100%" height="600px" title='ColorMarkers'/>
              </div>
              <div className='codesec'>
                <RegistrationForm/>
                <iframe src='/StaticHTML/RegistrationForm.html' width="100%" height="600px" title='RegoForm'/>
              </div>
              <div className='codesec'>
                <SurveyForm/>
                <iframe src='/StaticHTML/SurveyForm.html' width="100%" height="600px" title='SurveyForm'/>
              </div>
              <div className='codesec'>
                <RothkoPainting/>
                <iframe src='/StaticHTML/RothkoPainting.html' width="100%" height="600px" title='RothkoPainting'/>
              </div>
              <div className='codesec'>
                <PhotoGallery/>
                <iframe src='/StaticHTML/PhotoGallery.html' width="100%" height="600px" title='PhotoGallery'/>
              </div>
              <div className='codesec'>
                <NutritionLabel/>
                <iframe src='/StaticHTML/NutritionLabel.html' width="100%" height="600px" title='NutritionLabel'/>
              </div>
          </div>
      </div>
  );
}

function HeaderMenu(){
  return(
    <div>
      <a href='https://react.dev' target='_blank' rel='noreferrer'>React site</a>
      {/* <a/>is a hyperlink, target makes it open a new tab, no target uses the current tab */}
      <a href="https://youtube.com/watch?v=I2UBjN5ER4s" target="_blank" rel='noreferrer'>Youtube tutorial</a>
      <a href='https://www.youtube.com/@KevinPowell' target='_blank' rel='noreferrer'>Kevin Powell channel</a>
      <a href='https://www.youtube.com/watch?v=1WIMcknKQPg' target='_blank' rel='noreferrer'>Create Domain</a>
      <a href='https://www.youtube.com/watch?v=zJSY8tbf_ys' target='_blank' rel='noreferrer'>Frontend web development bootcamp</a>
      <a href='https://www.youtube.com/watch?v=bMknfKXIFA8&t=13s' target='_blank' rel='noreferrer'>React Course</a>
    </div>
    )
}

/*https://blog.logrocket.com/how-create-multilevel-dropdown-menu-react/#multi-level-dropdown-menu-project-setup-react*/
function FccCatPhoto(){
  var html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset='UTF-8'>
    <title>CatPhotoApp</title>
  </head>
  <body>
    <main>
      <h1>CatPhotoApp</h1>
      <section>
      <h2>Cat Photos</h2>
      <!-- TODO: Add link to cat photos -->
      <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
      <a href="https://freecatphotoapp.com"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
      </section>
      <section>
        <h2>Cat Lists</h2>
        <h3>Things cats love:</h3>
        <ul>
          <li>cat nip</li>
          <li>laser pointers</li>
          <li>lasagna</li>
        </ul>
        <figure>
          <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg" alt="A slice of lasagna on a plate.">
          <figcaption>Cats <em>love</em> lasagna.</figcaption>  
        </figure>
        <h3>Top 3 things cats hate:</h3>
        <ol>
          <li>flea treatment</li>
          <li>thunder</li>
          <li>other cats</li>
        </ol>
        <figure>
          <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" alt="Five cats looking around a field.">
          <figcaption>Cats <strong>hate</strong> other cats.</figcaption>
        </figure>
      </section>
      <section>
        <h2>Cat Form</h2>
        <form action="https://freecatphotoapp.com/submit-cat-photo">
        <fieldset>
          <legend>Is your cat an indoor or outdoor cat?</legend>
          <label><input id="indoor" type="radio" name="indoor-outdoor" value="indoor" checked> Indoor</label>
          <label><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label>
        </fieldset>
        <fieldset>
        <legend>What's your cat's personality?</legend>
          <input id="loving" type="checkbox" name="personality" value="loving" checked> <label for="loving">Loving</label>
          <input id="lazy" type="checkbox" name="personality" value="lazy"> <label for="lazy">Lazy</label>
          <input id="energetic" type="checkbox" name="personality" value="energetic"> <label for="energetic">Energetic</label>
        </fieldset>
          <input type="text" name="catphotourl" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
        </form>
      </section>
    </main>
    <footer>
      <p>
      No Copyright - <a href="https://www.freecodecamp.org">freeCodeCamp.org</a>
      </p>
    </footer>
  </body>
</html>
  `
  return(
  <>
    <h1>Cat Photo HTML</h1>
    <pre>
      <code>
        <div className={'html overl1'}>
          {html}
        </div>
      </code>
    </pre>
  </>
  );
}

function Menu(){
  var html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Cafe Menu</title>
      <link href="styles.css" rel="stylesheet"/>
    </head>
    <body>
      <div class="menu">
        <main>
          <h1>CAMPER CAFE</h1>
          <p class="established">Est. 2020</p>
          <hr>
          <section>
            <h2>Coffee</h2>
            <img src="https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg" alt="coffee icon"/>
            <article class="item">
              <p class="flavor">French Vanilla</p><p class="price">3.00</p>
            </article>
            <article class="item">
              <p class="flavor">Caramel Macchiato</p><p class="price">3.75</p>
            </article>
            <article class="item">
              <p class="flavor">Pumpkin Spice</p><p class="price">3.50</p>
            </article>
            <article class="item">
              <p class="flavor">Hazelnut</p><p class="price">4.00</p>
            </article>
            <article class="item">
              <p class="flavor">Mocha</p><p class="price">4.50</p>
            </article>
          </section>
          <section>
            <h2>Desserts</h2>
            <img src="https://cdn.freecodecamp.org/curriculum/css-cafe/pie.jpg" alt="pie icon"/>
            <article class="item">
              <p class="dessert">Donut</p><p class="price">1.50</p>
            </article>
            <article class="item">
              <p class="dessert">Cherry Pie</p><p class="price">2.75</p>
            </article>
            <article class="item">
              <p class="dessert">Cheesecake</p><p class="price">3.00</p>
            </article>
            <article class="item">
              <p class="dessert">Cinnamon Roll</p><p class="price">2.50</p>
            </article>
          </section>
        </main>
        <hr class="bottom-line">
        <footer>
          <p>
            <a href="https://www.freecodecamp.org" target="_blank">Visit our website</a>
          </p>
          <p class="address">123 Free Code Camp Drive</p>
        </footer>
      </div>
    </body>
  </html>
  `
  var css = `
      body {
        background-image: url(https://cdn.freecodecamp.org/curriculum/css-cafe/beans.jpg);
        font-family: sans-serif;
        padding: 20px;
      }

      h1 {
        font-size: 40px;
        margin-top: 0;
        margin-bottom: 15px;
      }

      h2 {
        font-size: 30px;
      }

      .established {
        font-style: italic;
      }

      h1, h2, p {
        text-align: center;
      }

      .menu {
        width: 80%;
        background-color: burlywood;
        margin-left: auto;
        margin-right: auto;
        padding: 20px;
        max-width: 500px;
      }

      img {
        display: block;
        margin-top:-25px;
        margin-left: auto;
        margin-right: auto;
      }

      hr {
        height: 2px;
        background-color: brown;
        border-color: brown;
      }

      .bottom-line {
        margin-top: 25px;
      }

      h1, h2 {
        font-family: Impact, serif;
      }

      .item p {
        display: inline-block;
        margin-top: 5px;
        margin-bottom: 5px;
        font-size: 18px;
      }

      .flavor, .dessert {
        text-align: left;
        width: 75%;
      }

      .price {
        text-align: right;
        width: 25%;
      }

      /* FOOTER */

      footer {
        font-size: 14px;
      }

      .address {
        margin-bottom: 5px;
      }

      a {
        color: black;
      }

      a:visited {
        color: black;
      }

      a:hover {
        color: brown;
      }

      a:active {
        color: brown;
      }
      `
  return(
    <div className='codePair'>
    <div>
    <h1>Menu HTML</h1>
      <pre>
        <code>
          <div className='html'>
            {html}
          </div>
        </code>
      </pre>
    </div>
    <div>
    <h1>Menu CSS</h1>
      <pre>
        <code>
          <div className='css'>
            {css}
          </div>
        </code>
      </pre>
    </div>
    </div>
  )
}

function ColorMarkers(){
  const html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Colored Markers</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <h1>CSS Color Markers</h1>
      <div class="container">
        <div class="marker red">
          <div class="cap"></div>
          <div class="sleeve"></div>
        </div>
        <div class="marker green">
          <div class="cap"></div>
          <div class="sleeve"></div>
        </div>
        <div class="marker blue">
          <div class="cap"></div>
          <div class="sleeve"></div>
        </div>
      </div>
    </body>
  </html>
  `
  const css = `
 h1 {
  text-align: center;
}

.container {
  background-color: rgb(255, 255, 255);
  padding: 10px 0;
}

.marker {
  width: 200px;
  height: 25px;
  margin: 10px auto;
}

.cap {
  width: 60px;
  height: 25px;
}

.sleeve {
  width: 110px;
  height: 25px;
  background-color: rgba(255, 255, 255, 0.5);
  border-left: 10px double rgba(0, 0, 0, 0.75);
}

.cap, .sleeve {
  display: inline-block;
}

.red {
  background: linear-gradient(rgb(122, 74, 14), rgb(245, 62, 113), rgb(162, 27, 27));
  box-shadow: 0 0 20px 0 rgba(83, 14, 14, 0.8);
}

.green {
  background: linear-gradient(#55680D, #71F53E, #116C31);
  box-shadow: 0 0 20px 0 #3B7E20CC;
}

.blue {
  background: linear-gradient(hsl(186, 76%, 16%), hsl(223, 90%, 60%), hsl(240, 56%, 42%));
  box-shadow: 0 0 20px 0 hsla(223, 59%, 31%, 0.8);
}
`
return(
  <div className='codePair'>
    <div>
    <h1>Color Markers HTML</h1>
      <pre>
        <code>
          <div className='html'>
            {html}
          </div>
        </code>
      </pre>
    </div>
    <div>
    <h1>Colour Markers CSS</h1>
      <pre>
        <code>
          <div className='css'>
            {css}
          </div>
        </code>
      </pre>
    </div>
  </div>
)
}

function RegistrationForm(){
  const html =`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Registration Form</title>
      <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
      <h1>Registration Form</h1>
      <p>Please fill out this form with the required information</p>
      <form method="post" action='https://register-demo.freecodecamp.org'>
        <fieldset>
          <label for="first-name">Enter Your First Name: <input id="first-name" name="first-name" type="text" required /></label>
          <label for="last-name">Enter Your Last Name: <input id="last-name" name="last-name" type="text" required /></label>
          <label for="email">Enter Your Email: <input id="email" name="email" type="email" required /></label>
          <label for="new-password">Create a New Password: <input id="new-password" name="new-password" type="password" pattern="[a-z0-5]{8,}" required /></label>
        </fieldset>
        <fieldset>
          <legend>Account type (required)</legend>
          <label for="personal-account"><input id="personal-account" type="radio" name="account-type" class="inline" checked /> Personal</label>
          <label for="business-account"><input id="business-account" type="radio" name="account-type" class="inline" /> Business</label>
        </fieldset>
        <fieldset>
          <label for="profile-picture">Upload a profile picture: <input id="profile-picture" type="file" name="file" /></label>
          <label for="age">Input your age (years): <input id="age" type="number" name="age" min="13" max="120" /></label>
          <label for="referrer">How did you hear about us?
            <select id="referrer" name="referrer">
              <option value="">(select one)</option>
              <option value="1">freeCodeCamp News</option>
              <option value="2">freeCodeCamp YouTube Channel</option>
              <option value="3">freeCodeCamp Forum</option>
              <option value="4">Other</option>
            </select>
          </label>
          <label for="bio">Provide a bio:
            <textarea id="bio" name="bio" rows="3" cols="30" placeholder="I like coding on the beach..."></textarea>
          </label>
        </fieldset>
        <label for="terms-and-conditions">
          <input class="inline" id="terms-and-conditions" type="checkbox" required name="terms-and-conditions" /> I accept the <a href="https://www.freecodecamp.org/news/terms-of-service/">terms and conditions</a>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </body>
  </html>
  `
  const css = `
  body {
    width: 100%;
    height: 100vh;
    margin: 0;
    background-color: #1b1b32;
    color: #f5f6f7;
    font-family: Tahoma;
    font-size: 16px;
  }
  
  h1, p {
    margin: 1em auto;
    text-align: center;
  }
  
  form {
    width: 60vw;
    max-width: 500px;
    min-width: 300px;
    margin: 0 auto;
    padding-bottom: 2em;
  }
  
  fieldset {
    border: none;
    padding: 2rem 0;
    border-bottom: 3px solid #3b3b4f;
  }
  
  fieldset:last-of-type {
    border-bottom: none;
  }
  
  label {
    display: block;
    margin: 0.5rem 0;
  }
  
  input,
  textarea,
  select {
    margin: 10px 0 0 0;
    width: 100%;
    min-height: 2em;
  }
  
  input, textarea {
    background-color: #0a0a23;
    border: 1px solid #0a0a23;
    color: #ffffff;
  }
  
  .inline {
    width: unset;
    margin: 0 0.5em 0 0;
    vertical-align: middle;
  }
  
  input[type="submit"] {
    display: block;
    width: 60%;
    margin: 1em auto;
    height: 2em;
    font-size: 1.1rem;
    background-color: #3b3b4f;
    border-color: white;
    min-width: 300px;
  }
  
  input[type="file"] {
    padding: 1px 2px;
  }
  
  .inline{
    display: inline; 
  }
  
  a{
    color: #dfdfe2;
  }
  `
  return(
  <div className='codePair'>
  <div>
    <h1>Registration Form HTML</h1>
      <pre>
        <code>
          <div className='html'>
            {html}
          </div>
        </code>
      </pre>
    </div>
    <div>
    <h1>Registration Form CSS</h1>
      <pre>
        <code>
          <div className='css'>
            {css}
          </div>
        </code>
      </pre>
    </div>  
  </div>
  )
}

function SurveyForm(){
  const html =`
  <!DOCTYPE html>
  <link rel="stylesheet" href="styles.css">
  <h1 id='title'>TITLE</h1>
  <p id='description'>Paragraph</p>
  <form id='survey-form'>
    <label id='name-label' for='name'>Name: <input required id='name' type='text' placeholder='Please enter name'</label>
    <label id='email-label' for='email'>Email: <input required id='email' type='email' placeholder='Enter email'></label>
    <label id='number-label' for='number'>Number: <input id='number' type='number' pattern='[0-9]' min='4' max='8' placeholder='Enter number'></label>
    <select id='dropdown'>
      <option>1</option>
      <option>2</option>
    </select>
    <input name='radio' type="radio" value='1'>
    <input name='radio' type="radio" value='2'>
    <input type='checkbox' value='1'>
    <input type='checkbox' value='2'>
    <textarea placeholder='Additional comments'></textarea>
    <input id='submit' type='submit'>
  <form>
  `
  return(
    <div>
    <h1>Survey Form HTML</h1>
      <pre>
        <code>
          <div className='html'>
            {html}
          </div>
        </code>
      </pre>
    </div>
  )
}

function RothkoPainting(){
  const html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Rothko Painting</title>
      <link href="./styles.css" rel="stylesheet">
    </head>
    <body>
      <div class="frame">
        <div class="canvas">
          <div class="one"></div>
          <div class="two"></div>
          <div class="three"></div>
        </div>
      </div>
    </body>
  </html>
  `
  const css = `
  .canvas {
    width: 500px;
    height: 600px;
    background-color: #4d0f00;
    overflow: hidden;
    filter: blur(2px);
  }
  
  .frame {
    border: 50px solid black;
    width: 500px;
    padding: 50px;
    margin: 20px auto;
  }
  
  .one {
    width: 425px;
    height: 150px;
    background-color: #efb762;
    margin: 20px auto;
    box-shadow: 0 0 3px 3px #efb762;
    border-radius: 9px;
    transform: rotate(-0.6deg);
  }
  
  .two {
    width: 475px;
    height: 200px;
    background-color: #8f0401;
    margin: 0 auto 20px;
    box-shadow: 0 0 3px 3px #8f0401;
    border-radius: 8px 10px;
    transform: rotate(0.4deg);
  }
  
  .one, .two {
    filter: blur(1px);
  }
  
  .three {
    width: 91%;
    height: 28%;
    background-color: #b20403;
    margin: auto;
    filter: blur(2px);
    box-shadow: 0 0 5px 5px #b20403;
    border-radius: 30px 25px 60px 12px;
    transform: rotate(-0.2deg)
  }
  `
  return(
    <div className='codePair'>
      <div>
      <h1>Rothko Painting HTML</h1>
        <pre>
          <code>
            <div className='html'>
              {html}
            </div>
          </code>
        </pre>
      </div>
      <div>
    <h1>Rothko Painting CSS</h1>
      <pre>
        <code>
          <div className='css'>
            {css}
          </div>
        </code>
      </pre>
    </div>
    </div>
  )
}

function PhotoGallery(){
  const html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Photo Gallery</title>
      <link rel="stylesheet" href="./styles.css">
    </head>
    <body>
      <header class="header">
        <h1>css flexbox photo gallery</h1>
      </header>
      <div class="gallery">
        <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg" alt='Sleeping Cat'>
        <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/2.jpg" alt='Playful Kitten'>
        <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/3.jpg" alt='Grumpy Cat'>
        <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/4.jpg" alt='Cat under blanket'>
        <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/5.jpg" alt='White Kitten with Blue eyes'>
        <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/6.jpg" alt='Two kittens'>
        <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/7.jpg" alt='Curious cat under a blanket'>
        <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/8.jpg" alt='Curious Tabby Cat'>
        <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/9.jpg" alt='Two resting cats'>
      </div>
    </body>
  </html>
`
const css =`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: sans-serif;
  background: #f5f6f7;
}

.header {
  text-align: center;
  text-transform: uppercase;
  padding: 32px;
  background-color: #0a0a23;
  color: #fff;
  border-bottom: 4px solid #fdb347;
}

.gallery {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 10px;
}

.gallery img {
  width: 100%;
  max-width: 350px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
}

.gallery::after {
  content: "";
  width: 350px;
}
`
return(
  <div className='codePair'>
    <div>
    <h1>Photo Gallery HTML</h1>
      <pre>
        <code>
          <div className='html'>
            {html}
          </div>
        </code>
      </pre>
    </div>
    <div>
    <h1>Photo Gallery CSS</h1>
      <pre>
        <code>
          <div className='css'>
            {css}
          </div>
        </code>
      </pre>
    </div>
  </div>
)
}

function NutritionLabel(){
  const html =`
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <title>Nutrition Label</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700,800" rel="stylesheet">
    <link href="./styles.css" rel="stylesheet">
  </head>

  <body>
    <div class="label">
      <header>
        <h1 class="bold">Nutrition Facts</h1>
        <div class="divider"></div>
        <p>8 servings per container</p>
        <p class="bold">Serving size <span>2/3 cup (55g)</span></p>
      </header>
      <div class="divider large"></div>
      <div class="calories-info">
        <div class="left-container">
          <h2 class="bold small-text">Amount per serving</h2>
          <p>Calories</p>
        </div>
        <span>230</span>
      </div>
      <div class="divider medium"></div>
      <div class="daily-value small-text">
        <p class="bold right no-divider">% Daily Value *</p>
        <div class="divider"></div>
        <p><span><span class="bold">Total Fat</span> 8g</span> <span class="bold">10%</span></p>
        <p class="indent no-divider">Saturated Fat 1g <span class="bold">5%</span></p>
        <div class="divider"></div>
        <p class="indent no-divider"><span><i>Trans</i> Fat 0g</span></p>
        <div class="divider"></div>
        <p><span><span class="bold">Cholesterol</span> 0mg</span> <span class="bold">0%</span></p>
        <p><span><span class="bold">Sodium</span> 160mg</span> <span class="bold">7%</span></p>
        <p><span><span class="bold">Total Carbohydrate</span> 37g</span> <span class="bold">13%</span></p>
        <p class="indent no-divider">Dietary Fiber 4g</p>
        <div class="divider"></div>
        <p class="indent no-divider">Total Sugars 12g</p>
        <div class="divider double-indent"></div>
        <p class="double-indent no-divider">Includes 10g Added Sugars <span class="bold">20%</span></p>
        <div class="divider"></div>
        <p class="no-divider"><span class="bold">Protein</span> 3g</p>
        <div class="divider large"></div>
        <p>Vitamin D 2mcg <span>10%</span></p>
        <p>Calcium 260mg <span>20%</span></p>
        <p>Iron 8mg <span>45%</span></p>
        <p class="no-divider">Potassium 235mg <span>6%</span></p>
      </div>
      <div class="divider medium"></div>
      <p class="note">* The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily
        diet. 2,000 calories a day is used for general nutrition advice.</p>
    </div>
  </body>
  </html>
`
  const css =`
  * {
  box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Open Sans', sans-serif;
  }

  .label {
    border: 2px solid black;
    width: 270px;
    margin: 20px auto;
    padding: 0 7px;
  }

  header h1 {
    text-align: center;
    margin: -4px 0;
    letter-spacing: 0.15px
  }

  p {
    margin: 0;
    display: flex;
    justify-content: space-between;
  }

  .divider {
    border-bottom: 1px solid #888989;
    margin: 2px 0;
  }

  .bold {
    font-weight: 800;
  }

  .large {
    height: 10px;
  }

  .large, .medium {
    background-color: black;
    border: 0;
  }

  .medium {
    height: 5px;
  }

  .small-text {
    font-size: 0.85rem;
  }


  .calories-info {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .calories-info h2 {
    margin: 0;
  }

  .left-container p {
    margin: -5px -2px;
    font-size: 2em;
    font-weight: 700;
  }

  .calories-info span {
    margin: -7px -2px;
    font-size: 2.4em;
    font-weight: 700;
  }

  .right {
    justify-content: flex-end;
  }

  .indent {
    margin-left: 1em;
  }

  .double-indent {
    margin-left: 2em;
  }

  .daily-value p:not(.no-divider) {
    border-bottom: 1px solid #888989;
  }

  .note {
    font-size: 0.6rem;
    margin: 5px 0;
    padding: 0px 8px;
    text-indent: -8px;
  }
`
return(
  <div className='codePair'>
    <div>
    <h1>Nutrition Label HTML</h1>
      <pre>
        <code>
          <div className='html'>
            {html}
          </div>
        </code>
      </pre>
    </div>
    <div>
    <h1>Nutrition Label CSS</h1>
      <pre>
        <code>
          <div className='css'>
            {css}
          </div>
        </code>
      </pre>
    </div>
  </div>
)
}

// window.onload = function () {
//   // This runs when the page has loaded, ensuring elements are available in the DOM

//   // Get references to the button and the elements
//   let overl1 = document.querySelector('.overl1');
//   let overl2 = document.querySelector('.overl2');
//   let button = document.querySelector('.overButton');

//   // Check if the elements are found before adding an event listener
//   if (overl1 && overl2 && button) {
//     button.addEventListener('click', seeCode);
//   }
// };


function seeCode(){
  let overl1 = (document.querySelector('.overl1'));
  let overl2 = (document.querySelector('.overl2'));
  

  // if(overl1.style.zIndex === '1'){
  //  overl1.style.zIndex = '2'; 
  //  overl2.style.zIndex = '1';
    
  // }else{
  //   overl1.style.zIndex = '1';
  //   overl2.style.zIndex = '2';
  //   }
  // }

  if(overl2.style.width === '0%'){
    overl1.style.width = '0%';
    overl1.style.height = '0%';
    // overl1.style.zIndex = '2';
  
    overl2.style.width = '100%';
    overl2.style.height = '100%';
    // overl2.style.zIndex = '1';

   
  }else{
    overl2.style.width = '0%';
    overl2.style.height = '0%';
    // overl2.style.zIndex = '2'

    overl1.style.width = '100%';
    overl1.style.height = '100%';
    // overl1.style.zIndex = '1';
  }
}

//template:
{/* <div className='codesec'>

</div> */}
{/* <div>
    <h1></h1>
      <pre>
        <code>
          <div className=''>
            {}
          </div>
        </code>
      </pre>
    </div> */}


// {/* <div>
//     <iframe src='https://www.youtube.com/watch?v=1WIMcknKQPg'>
//     </iframe>
//     </div> */}

// function InputValidation(uinput, arr) //isNaN = Is not a number| The drop down box invalidates this
// {
//     let valid = parseInt(uinput); // checks to make sure the user has entrered an interger. 
//     return (isNaN(valid) || uinput > arr.Length || uinput <= 0) ? false : true;
// } 
// function StringInputBox({onEnter}) {
//   const [inputVal, setInputVal] = useState('')
//   const handleKey = (event) => {
//     if(event.key === "Enter"){
//       onEnter(inputVal)
//       setInputVal('');
//     }
//   };
//   return (<input type="text"
//   value={inputVal}
//   onChange={(event) => setInputVal(event.target.value)}
//   onKeyDown={handleKey}
//   />
// );
// }

//Original kind of working idea
// function UInputBox1({value}) {
//   const [inputVal, setInputVal] = useState('');
//   const [displayVal, setDisplayVal] = useState('');
//   const handleKey = (event) => {
//     if(event.key === "Enter"){
//       setDisplayVal(inputVal);
//       setInputVal('');
//     }
//   };
//   return (
//     <div className='container'>
//     <input type="text"
//     value={inputVal}
//     onChange={(event) => setInputVal(event.target.value)}
//     onKeyDown={handleKey}
//     />
//     <p>{value}: {displayVal}</p>
//     </div>);
// }
//#endregion
export default App;
