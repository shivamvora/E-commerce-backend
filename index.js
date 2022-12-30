import express from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import defaultData from './default.js'
const app = express();
dotenv.config({ path: "./envs/.env" });

const PORT = 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
Connection(USERNAME, PASSWORD);
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
})

defaultData();