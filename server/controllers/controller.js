const mongoose = require('mongoose');
const Task = require('../models/task.js');

module.exports = function(){
    return {
        index: function(req, res){
            Task.find({}, function(err,tasks){
                if(err){
                    console.log(err);
                }
                res.json({message: "Yeah, All Tasks", tasks:tasks});
            });
            console.log("Looking for Tasks");
        },
        task:function(req, res){
            let id = req.params.id;
            Task.findOne({_id:id}, function(err, task){
                if(err){
                    console.log('Something is Wrong');
                }else{
                    console.log('Found the Task');
                    res.json(task);
                }
            });
        },
        createtask: function(req, res){
            let newTask = new Task({
                                title: req.body.title, 
                                description: req.body.description,
                                completed: req.body.completed
                                })
            newTask.save(function(err){
                if(err){
                    console.log('Something When wrong in save');
                    res.json(err);
                }else{
                    console.log('Successfully saved task');
                    res.json({message: "Success"});
                }
            });
            console.log('Saving Task...');
        },
        updatetask: function(req, res){
            let taskid = req.params.id;
            if(req.body.completed == null){
                req.body.completed = false;
            }
            Task.findByIdAndUpdate( taskid, 
                                    {title: req.body.title, 
                                    description: req.body.description, 
                                    completed: req.body.completed},
                                    function(err){
                                        if(err){
                                            console.log('Something went Wrong');
                                        }else{
                                            console.log('Successfully edited a Task!');
                                            res.json({message:'Successfully edited a Task!'});
                                        }
                                    });

        },
        deletetask: function(req, res){
            let taskid = req.params.id;
            Task.deleteOne({_id: taskid}, function(err){
                if (err){
                    console.log("Error's in Deleting");
                    res.json({error: err});
                }else{
                    console.log("Successfuly Deleted");
                    res.json({message: "Successfully Delete"});
                }
            });
        }

    }
}