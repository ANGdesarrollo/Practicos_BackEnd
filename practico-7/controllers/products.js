const { response } = require('express');

const showProducts = (req, res = response) => {
    let { id } = req.params;
    console.log( 'Entro la funcion', id )
    res.json({
        name: 'Mariel'
    });
};

module.exports = {
    showProducts
}