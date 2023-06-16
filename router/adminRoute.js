const express = require('express');
const AdminRouter = express.Router();
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

//create application:
const jsonParser = bodyParser.json();

//Parse application/json:
app.use(jsonParser);


require('../db/connection');

// Add all of your userSchema:
const Student = require('../model/user/userSchema');
const Admin = require('../model/admin/adminSchema');
const Message = require('../model/messages/messageSchema');


//GET Message from Admin:
AdminRouter.get('/admin/messages', async(req, res) => {
    const contactMessages = await Message.find({});
    res.send(contactMessages);
})

//GET All Students:
AdminRouter.get('/admin/students', async(req, res) => {
    const allStudents = await Student.find({});
    res.send(allStudents);
})



//POST Teacher:



//GET All teacher:



module.exports = AdminRouter;