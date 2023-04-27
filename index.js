const express = require('express');
const app = express();
const db = require("./db/db");
const router = require('./router');

require('dotenv').config();

const PORT = 5000;

app.use(cors())
app.use(express.json());

const router = require('./router');
app.use(router);

app.listen(PORT, () =>{
    console.log(`Server up and running on port ${PORT}`);

    db.authenticate()
    .then(() => {
        console.log("Connected to the database, sync is ok");
    })
    .catch((error) => {
        console.log("Error: " + error);
    });
})