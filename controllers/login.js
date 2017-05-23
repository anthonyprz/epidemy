var schema = require("../models/users.js");

exports.login = function(req,res){
    var username = req.body.username;
    var password = req.body.password
    
    schema.findOne({
        'usuario': username,
        'password':password
    }, function(err,user){
        if(!user){
            console.error("no se ha iniciado session")
            res.redirect('/');
        }
        else{
            req.session.usuario = user.usuario
            console.log("session del usuario: " + req.session.usuario)
            res.redirect("/home");
           // usuario:req.session.usuario
             /*res.render("home",{
                usuario:req.session.usuario
            });*/
        }
    });
};

exports.session = function(req,res){
     console.log("session nice " , req.session.usuario)
    if (req.session.usuario){
               console.log("render")
        schema.findOne({'usuario':req.session.usuario},function(err,user){
     
            res.render("home",{
                usuario:req.session.usuario
            });
            
        })
    }
}