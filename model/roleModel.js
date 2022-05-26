const Mongoose = require('mongoose');


const roleSchema = new Mongoose.Schema( {
    roleid: {type : Number,
        required: true,
        unique:true},
    rolename: {type:String,
        required: true},

});


const Role = Mongoose.model('role',roleSchema);
module.exports = Role;