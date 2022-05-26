const Mongoose = require('mongoose');
const user =require('./userModel');
const role = require('./roleModel')


const userRoleSchema = new Mongoose.Schema({
    person:[{
       type: Mongoose.Schema.Types.ObjectId,
       ref: 'user'
    }],
    role:[{
        type:Mongoose.Schema.Types.ObjectId,
        ref:'role'
    }]
});



const userRole = Mongoose.model('userRole',userRoleSchema)
module.exports = userRole;