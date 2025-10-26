//const express = require('express');
//const cors = require('cors');
//const {Pool} = require('pg');
import express from 'express'
import pkg from 'pg'
import cors from 'cors'
const {Pool} = pkg

//Middleware?
const app = express();
const port = 8080;

const corsOptions = {
    origin: 'http://localhost:5173', // Your React app's address
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
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
        const result = await pool.query("SELECT *, TO_CHAR(time, 'HH12:MI:SS') AS time, TO_CHAR(date, 'DD-MM-YYYY') AS date FROM appointments");
        res.json(result.rows.map(row => ({
            id: row.id,
            fname: row.first_name,
            lname: row.last_name,
            time: row.time,
            date: row.date
        })
        ));
    } catch(error){
        console.error(error);
        res.status(500).send('Server Error')
    }
});

app.delete('/api/appointment', async(req,res) => {
    try{
        console.log("Deleting data:", req.query);
        const {id} = req.query;
        const remove = await pool.query(
            "DELETE FROM appointments WHERE id = $1", [id]
        );
        res.status(201).send({Message:"Deleted booking for:", remove});
    }catch{
        console.error(error);
        res.status(500).send('Server Error');
    }
});

app.put('/api/appointment', async(req,res) =>{
    try{
        console.log("Updating data:", req.body);
        const {id, first_name, last_name, time, date} = req.body;
        const update = await pool.query(
            "UPDATE appointments SET first_name=$2, last_name=$3, time=$4, date=$5 WHERE id = $1", [id, first_name, last_name, time, date]
        );
        res.status(200).send({Message:"Updated booking for:", update});
    } catch(error){
        console.error(error);
        res.status(500).send('Server Error');
    }
});

app.post('/api/appointment', async(req, res)=>{
    try{
        console.log("Data recieved:", req.body);
        const {first_name, last_name, time, date} = req.body;
        const result = await pool.query(
           "INSERT INTO appointments (first_name, last_name, time, date) VALUES($1,$2,$3,$4)" , [first_name, last_name, time, date]
        );
        res.status(201).send({Message:"Submitted a booking for:", result});
    } catch(error){
        console.error(error);
        res.status(500).send('Server Error');
    }
});

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.listen(port,() => {
    console.log("Database running on port:8080");
});


//Next time I commit staged changes, I gotta do this: 
//git rm -r --cached .git add . >git commit -m"removed all files from gitignore" > git push origin master
