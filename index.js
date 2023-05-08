const express = require('express');
const cors = require('cors');
const app = express();
const db = require("./db/db");
const router = require('./router');

require('dotenv').config();

const PORT = 5000;

// app.use(cors())
let corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    // methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    preflightContinue: false,
    // allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization",
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());

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