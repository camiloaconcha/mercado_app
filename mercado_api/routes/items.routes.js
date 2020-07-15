module.exports = (app) => {
    const corsOptions = {
        origin: 'http://localhost:3000',
    };

    const items = require('../controllers/items.controller.js');
    app.get('/api/items', items.search);
    app.get('/api/items/:id', items.searchById);
};
