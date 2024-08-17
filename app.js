const express = require('express');
const app = express();
const port = 4000;

app.post('/calc', (req, res) => {
    a = parseInt(req.query.a);
    b = parseInt(req.query.b);
    ops = req.query.ops;
    c = 0;

    switch(true){
        case (ops == 'p'): c = a + b; break;
        case (ops == 'm'): c = a * b; break;
        case (ops == 's'): c = a - b; break;
        case (ops == 'd'): c = a / b; break;
    }

    res.send(`Sum of ${req.query.a} ${ops} ${req.query.b} is ${c}`);
});

app.get('/', (req, res) => {
    res.send(`Hello ${req.query.name} (${req.query.age})!`);
});

app.post('/nice', (req, res) => {
    res.send('Buhahah!');
});

app.listen(port, () => {
    console.log(`Web server started at http://localhost:${port}`);
});