var mongoose = require('mongoose');
var schema = require("../models/users.js");

exports.registro = function(req,res){
    
    var usuario = req.body.username
    var password = req.body.password
   
    
    var registar_Usuario = new schema({
        usuario: usuario,
        password:password
    });
    registar_Usuario.save(function(err, anadirusuario, numberAffected) {
        if (err) {
            console.error(err);
            res.send('Error');
        }
        else {
            console.log('usuario creado')
            res.redirect('/');
        }
          
      });
}