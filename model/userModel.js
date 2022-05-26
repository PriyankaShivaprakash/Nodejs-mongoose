const Mongoose = require('mongoose');

const userSchema = new Mongoose.Schema( {
    userid: {type : Number,
        required: true,
        unique:true},
    firstname: {type:String,
        required: true},
    username: {type: String,
        required: true},
    password: {type: String,
        required: true}
});

const User = Mongoose.model('user',userSchema);
module.exports = User;


// userid: {type : Mongoose.Schema.Types.ObjectId,

