const dotenv = require('dotenv');
// const mongoose = require('mongoose');
const express =  require('express');
const app = express();
const path = require('path');

dotenv.config({path: './config.env'});
require('./db/connection');
// const User = require('./model/userSchema');


// Cookie Parser: 
const cookieParser = require("cookie-parser");
app.use(cookieParser())

//Middlewares:(Connecting with Router Files)
app.use(require('./router/userRoute'));
app.use(express.json()); 
// Routing End:

//serve Client:
app.use(express.static(path.join(__dirname,"./client/build")));

app.get("*", (req, res) => {
    res.sendFile(
        path.join(__dirname, './client/build/index.html'),
        function(err) {
            res.status(500).send(err)
        }
    )
})

const PORT = process.env.port || 5000; 
app.listen(PORT, () => {
    console.log(`Server is running at Port no ${PORT}`);
})