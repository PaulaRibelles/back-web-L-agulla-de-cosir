const express = require('express');
const app = express();
const db = require("./db/db");

require('dotenv').config();

const PORT = 5000;

app.use(express.json());
app.use(userRoutes);

// app.listen(PORT, () =>{
//     console.log(`Server up and running on port ${PORT}`);

//     db.authenticate()
//     .then(() => {
//         console.log("Connected to the database, sync is ok");
//     })
//     .catch((error) => {
//         console.log("Error: " + error);
//     });
// })