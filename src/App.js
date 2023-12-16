
import './App.css';

function App() {
  return (
      <div className="App">
        
        <header className="App-header">
          <HeaderMenu/>
        </header>

      <body className='App-Body'>
        <p>Content content content content</p>
      </body>

      </div>
  );
}

function HeaderMenu(){
  return(
    <>
    <a href='https://react.dev' target='_blank' rel='noopener noreferrer'>
      <button>React site</button>
    </a>
    {/* <a/>is a hyperlink, target makes it open a new tab, no target uses the current tab */}
    <a href="https://youtube.com/watch?v=I2UBjN5ER4s" target="_blank" rel='noopener noreferrer'>
      <button>Youtube tutorial</button>
    </a>

    <a href='https://www.youtube.com/@KevinPowell' target='_blank' rel='noopener noreferrer'>
     <button>Kevin Powell channel</button> 
    </a>
    
    <a href='https://www.youtube.com/watch?v=1WIMcknKQPg' target='_blank' rel='noopener noreferrer'>
      <button>Create Domain</button>
    </a>

    <a href='https://www.youtube.com/watch?v=zJSY8tbf_ys' target='_blank' rel='noopener noreferrer'>
      <button>Frontend web development bootcamp</button>
    </a>

    <a href='https://www.youtube.com/watch?v=bMknfKXIFA8&t=13s' target='_blank' rel='noopener noreferrer'>
      <button>React Course</button>
    </a>
    </>  
    
    )
}


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
