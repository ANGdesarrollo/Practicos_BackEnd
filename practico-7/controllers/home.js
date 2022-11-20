const { response } = require('express');

const renderHome = (req, res = response) => {
    res.render('home');
};

module.exports = {
    renderHome
}