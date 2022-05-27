const User = require('../model/userModel')
const bcrypt = require("bcryptjs");

exports.user_create =async (req,res) => {
    let user = new User(
        {
            userid:
         req.body.userid,
            firstname:
        req.body.firstname,
            username:
        req.body.username,
            password:
        req.body.password

        }
    );
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User created')
    })
};

exports.user_details = function(req,res) {
    User.findById(req.params.id, function (err ,user) {
        if (err)
        return next(err);
        res.send(user);
    })
};

exports.user_update = function (req,res){
    User.findByIdAndUpdate(req.params.id,{$set: req.body},
        function (err , user){
            if (err) 
            return next(err);
            res.send('User updated')
        });
};

exports.user_delete = function(req,res){
    User.findByIdAndRemove(req.params.id, function(err){
        if (err)
        return next(err);
        res.send('Deleted!!');
    });
};




