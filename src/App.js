
import './App.css';
import './Components/NavPage/Nav.css'

function App() {
  return (
      <div className="App">      
        <header className='menu'>
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
            <p>Quick change to push
            </p>
          </div>
          <div className='codeContainer'>
              <div className='codesec'>
                <FccCatPhoto/>
              </div>
              <div className='codesec'>
                <Menu/>
              </div>
            
          </div>
      </div>
  );
}
// function LRMenu(){
//   return(
//     <NavPage/>
//   )
// }

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
        <div className='html'>
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

// function MenuCSS(){
    
//     return(
//       <pre>
//         {code}
//       </pre>
//   )
// }

// function(){
//   return(
//     <pre>
//       <code>
        
//       </code>
//     </pre>
//   )
// }

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
