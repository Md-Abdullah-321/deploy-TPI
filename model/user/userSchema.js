const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: true
    },
    session:{
        type: String, 
        required: true
    },
    department:{
        type: String, 
        required: true
    },
    semester:{
        type: String, 
        required: true
    },
    shift:{
        type: String, 
        required: true
    },
    roll:{
        type: Number, 
        required: true
    },
    registration:{
        type: Number, 
        required: true
    },
    email:{
        type: String, 
        required: true
    },
    password:{
        type: String, 
        required: true
    },
    tokens:[
        {
            token:{
                type: String, 
                required:true
            }
        }
    ]
})

//Hash password before Saving:
userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
        next();
    }
})


//Generate jsonwebtoken:
userSchema.methods.generateAuthToken = async function(next){
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);

        //Adding token to Schema:
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
        next();
    }catch(e){
        console.log(e);
    }
}
const Student = mongoose.model('STUDENT',userSchema);

module.exports = Student;