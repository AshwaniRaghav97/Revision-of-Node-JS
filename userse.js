const express = require('express');;
const app = express();

app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    res.send(`Get user with ID ${id}`);
}).listen(3000);