var express = require('express');
app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/hey', function (req, res) {
    res.send('You are at the hey page');
});

app.get('/:id/:comments', function (req, res) {
    console.log(req.params.id);

    console.log(req.params.comments);
    res.send('You are at the params page');
});

app.get('*', function (req, res) {
    res.send('You are at the star page');
});

var port = process.env.port || 3000;

app.listen(port);