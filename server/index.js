const express = require('express');
const app = express();
const path = require('path');
const port = 3000;


// app.get('/', (req, res) => res.send('wassup'));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`App listening on ${port}`));

