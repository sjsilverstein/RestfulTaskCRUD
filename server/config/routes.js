const mongoose = require('mongoose');
const control = require('../controllers/controller.js')();

module.exports = function(app){
    
    app.get('/tasks', function(req, res){
        control.index(req, res);
    });
    app.get('/tasks/:id', function(req,res){
        control.task(req,res);
    });
    app.post('/tasks', function(req,res){
        control.createtask(req,res);
    });
    app.put('/tasks/edit/:id', function(req,res){
        control.updatetask(req,res);
    });
    app.delete('/tasks/:id', function(req,res){
        control.deletetask(req,res);
    });
    
}