const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.json({ message: 'Api Mercado Libre ON!' });
});
app.get('/hello', (req, res) => {
    res.json({ message: 'Hey hello!' });
});

require('./routes/items.routes.js')(app);

app.listen(22001, () => {
    console.log('Listening at :22001...');
});
