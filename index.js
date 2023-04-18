const express = require('express');
const app = express();

const PORT = 5000;

app.use(express.json());

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