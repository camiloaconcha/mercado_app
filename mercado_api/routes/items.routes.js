module.exports = (app) => {
    const items = require('../controllers/items.controller.js');
    app.get('/api/items', items.search);
    app.get('/api/items/:id', items.searchById);
};
