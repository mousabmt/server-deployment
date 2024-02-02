`use strict`;

const express = require(`express`)
const app = express();
const cors = require('cors')
app.use(cors());


const checkAutho = require('./middleware/checkAutho')
const getMessage = require('./middleware/checkAutho')
const notFound = require('./middleware/404')
const ErrorHandler = require('./middleware/500')
const getTime = require('./middleware/time')
app.get('/',checkAutho, getTime, handleHome);
app.use('*', notFound);
app.use(ErrorHandler);
function handleHome(req, res) {
    try {
        res.status(200).json({
            message: 'Welcome To Home Page !',
            Date:req.date
        })

    } catch (error) {
        console.log(error);
    }
}

function start(port) {

    app.listen(port, () => console.log('Up and Listening to Port :', port))
}
module.exports = {
    app,
    start
}