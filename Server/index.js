const express = require('express');
const cors = require('cors');
const {Pool} = require('pg');

//Middleware?
const app = express();
const port = 8080;

const corsOptions = {
    origin: 'http://localhost:3000', // Your React app's address
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  };

app.use(cors(corsOptions));
app.use(express.json());

//postgres connection
const pool = new Pool({
    host: 'localhost',
    port: 5432, //default port apparently, I wonder if I can change it?
    database: 'Bookings',
    user: 'Fulcrumbs',
    password: 'FerynysSeven7!',
    idleTimeoutMillis: 1000,
    connectionTimeoutMillis: 1000
});

/**This my API for the Booking & AppointmentSys project
 * Should fetch the appointments table and grab all rows. 
 * How does it know what the columns are?
 * So in my projects, I'll have to ask for 'api/appoinment'?
 */
app.get('/api/appointment', async(req,res)=>{ //this is the part where I believe I 'create' the api
    try{
        const result = await pool.query('SELECT * FROM appointments');
        res.json(result.rows.map(row => ({
            id: row.ID,
            name: row.name,
            time: row.appointmenttime
        })
        ));
    } catch(error){
        console.error(error);
        res.status(500).send('Server Error')
    }
});

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.listen(port,() => {
    console.log("unga bunga");
});


//Next time I commit staged changes, I gotta do this: 
//git rm -r --cached .git add . >git commit -m"removed all files from gitignore" > git push origin master
