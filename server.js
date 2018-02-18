const fs = require('fs');
const express = require('express');

const app = express();
const port = process.env.PORT || 9000;

// custom settings
app.disable('x-powered-by')
app.set('env', 'development')  // process.env ...

app.get('/api/data', (req, res) => {
    // read file async
    let content;
    fs.readFile('./countries.json', 'utf8', function (err, data) {
        if (err) throw err;
        content = JSON.parse(data);
        res.send({ data: content });
    });

});

app.listen(port, () => console.log(`Listening on port ${port}`));