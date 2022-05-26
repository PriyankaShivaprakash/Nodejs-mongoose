const Role = require("../model/roleModel")

exports.role_create =
function (req,res) {
    let role = new Role(
        {
            roleid:
         req.body.roleid,
            rolename:
        req.body.rolename,
        }
    );

    role.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Role created')
    })
};

exports.role_details = function(req,res) {
    Role.findById(req.params.id, function (err ,role) {
        if (err)
        return next(err);
        res.send(role);
    })
};

exports.role_update = function (req,res){
    Role.findByIdAndUpdate(req.params.id,{$set: req.body},
        function (err , role){
            if (err) 
            return next(err);
            res.send('Role updated')
        });
};

exports.role_delete = function(req,res){
    Role.findByIdAndRemove(req.params.id, function(err){
        if (err)
        return next(err);
        res.send('Deleted!!');
    });
};