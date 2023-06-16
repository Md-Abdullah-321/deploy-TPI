const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const adminSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: true
    },
    department:{
        type:String,
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
    status:{
        type:"String",
        default:"admin"
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
adminSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
        next();
    }
})




//Generate jsonwebtoken:
adminSchema.methods.generateAuthToken = async function(next){
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
const Admin = mongoose.model('ADMIN',adminSchema);

module.exports = Admin;