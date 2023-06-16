const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
const AuthenticateStudent = require('../middleware/authentication');
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





//SignIn Route:
router.post('/signin',jsonParser,async(req, res) => {
    try{
        const {email,password, checkbox} = req.body;
        
        //if any one input is empty return error:
        if(!email || !password){
            return res.status(400).json({error: 'Please, fill the data'});
        }
        console.log(checkbox);
        //check if the user is admin or student:
       if(!checkbox){
            const userLogin = await Student.findOne({email: email});
            if(userLogin){
                const isMatch = await bcrypt.compare(password, userLogin.password);

                const token = await userLogin.generateAuthToken();

                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true
                });
                if(!isMatch){
                    res.status(400).json({error: 'Invalid Credientials'});
                }else{
                    res.json({message: 'User SignIn successfully',
                        status:"student"});
                }
            }else{
                res.status(400).json({error: 'Invalid Credientials.'});
            }
       }else{
            const adminLogin = await Admin.findOne({email:email});

            if(adminLogin){
                const isMatch = await bcrypt.compare(password, adminLogin.password);

                const token = await adminLogin.generateAuthToken();
                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true
                });

                if(!isMatch){
                    res.status(400).json({error: 'Invalid Credientials'});
                }else{
                    res.json({message: 'Admin SignIn successfully',
                        status:"admin"});
                }

            }
            else{
                res.status(400).json({error: 'User not found as Admin'});
            }
       }
        


    }catch(err){
        console.log(err);
    }
})

// SignUP Route: 
router.post('/signup',jsonParser, async(req, res) => {
    const {name, session, department, semester, shift, roll, registration, email, password} = req.body;

    if(!name || !session || !department || !semester || !shift || !roll || !registration || !email || !password){
        return res.json({error: "Please, filled the Registration form"});
    }
    //check if the user already exist or not:
    const userRoll = await Student.findOne({roll: roll});
    const userEmail = await Student.findOne({email: email})

    if(userRoll){
        //if exist return an error:
        return res.status(422).json({error: 'Student Already Exist'});
    }
    if(userEmail){
        //if email is already exist:
        return res.status(422).json({error:"This email is not available"});
    }

    try{
        const student = new Student({name, session, department, semester, shift, roll, registration, email, password});
    
        await student.save();
        res.status(201).json({message:"New Profile Created successfully."});
    }catch(err){
        console.log(err);
    }
})

//Profile Route:
router.get('/userProfile',AuthenticateStudent, async(req, res) => {
    res.send(req.rootUser);
});


//logout Route:
router.get('/logout',(req,res) => {
    res.clearCookie('jwtoken', {path: '/'})
    res.status(200).send("I am from logout");
});


//admin logout Route:
router.get('/admin/logout',(req,res) => {
    res.clearCookie('jwtoken', {path: '/'})
    res.status(200).send("I am from logout");
});



//POST Message from user:
router.post('/contact',jsonParser, async(req, res) => {
    const {fname, lname, email, phone, message} = req.body;

    //if any field is empty return error:
    if(!fname || !lname || !email || !phone || !message){
        return res.json({error: "Please, filled the contact form"});
    }

    // if all okay 
    const userMessage = new Message({fname, lname, email, phone, message});
    
    await userMessage.save();
    res.status(201).json({message:"Message submitted successfully."});

});

module.exports = router;


