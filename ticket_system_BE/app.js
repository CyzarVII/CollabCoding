// This is the basic Server for Node.js Setup
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.get('/api/data', (req, res) => {
    const data = {
        message: 'Hello from the API Side',
        date: new Date(),
    };

    res.json(data);

});