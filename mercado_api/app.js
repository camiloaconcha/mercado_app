const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(morgan('tiny'));

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

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
