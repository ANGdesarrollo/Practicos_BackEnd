// Express
const express = require('express');
const app = express();
//PORT
const PORT = process.env.PORT | 8080;
//Public Path
const path = require('path');
const publicPath = path.resolve(__dirname, '../public')
// General Configs.
app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//isAdmin?
module.exports.isAdmin = true;

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});

app.use('/api/products', require('../routes/products'));
app.use('/api/cart', require('../routes/cart'));



