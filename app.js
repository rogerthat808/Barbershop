import express from 'express';
import pg from 'pg';
import 'dotenv/config'
import path from 'path';

const { Pool } = pg;
const app = express();
const PORT = 8080;

const databaseURL = process.env.
PG_DATABASE_URL;

const pool = new Pool ({
  connectionString: databaseURL
});

app.use(express.static('public'));
app.use(express.json());

// routes

app.get('/clients', async (req, res) => {
    try {
        let data = await pool.query('SELECT * FROM clients;')
        res.status(200).json(data)
    } catch (err) {
        console.log(err)
        res.status(500).send('Failed to GET clients')
    }
})

app.post('/clients', async (req, res) => {
    try {
        let value = [req.body.email]
        await pool.query('INSERT INTO clients (email) VALUES ($1);', value)
        res.status(200).send('Client posted to table')
    } catch (err) {
        console.error(err)
        res.status(500).send('Failed to POST client')
    }
})



function logger(req, res, next) {
    console.log('Request URL: ', req.url)
    console.log('Request method: ', req.method)
    next()
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))