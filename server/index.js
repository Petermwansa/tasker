const express = require('express');


const app = express();


app.get("/hello", (req, res) => {
    res.status(200).json({ mssg: "We are here"});
});

// this is the port var 
const port = 3000; 
app.listen(port, () => {
    console.log(`The server is listening on http://localhost:${port}`);
})