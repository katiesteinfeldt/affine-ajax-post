const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.static('server/public'));

let wolves = require('./modules/wolves');

app.get('/wolves', (req, res) => {
    res.send(wolves);
}); 

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});