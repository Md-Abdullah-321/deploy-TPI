const jwt = require('jsonwebtoken');
const Student = require('../model/user/userSchema');


const AuthenticateStudent = async(req, res, next) => {
    try{
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await Student.findOne({_id:verifyToken._id,"tokens.token":token});


        if(!rootUser){throw new Error('User not Found')}

        req.token = token;
        req.rootUser = rootUser;
        req.studentId = rootUser._id;

        next();

    }catch(err){
        res.status(401).json({error:'Unauthorized: No token provided'});
        console.log(err);
    }
}


module.exports = AuthenticateStudent;