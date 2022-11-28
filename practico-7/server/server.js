// Express
const express = require('express');
const app = express();
const { HTTP_CODE_NOT_FOUND } = process.env;
//PORT
const PORT = process.env.PORT | 8080;
// General Configs.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//isAdmin?
module.exports.isAdmin = true;

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});

app.use('/api/products', require('../routes/products'));
app.use('/api/cart', require('../routes/cart'));
app.use((req, res) => {
    res.json({
        code: Number(HTTP_CODE_NOT_FOUND),
        message: 'Method or Route not valid'
    })
})



