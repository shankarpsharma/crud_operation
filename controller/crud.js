const user=require('../models/user');
var objectId=require('mongoose').Types.ObjectId;

exports.details=(req,res)=>{
    
    user.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log('Error in retrieving Employees:'+JSON.stringify(err,undefined,2));}
    });
    //res.send('working');
};

exports.create=(req,res)=>{
    console.log('eneterd in create post..');
    let users=new user({
        Name:req.body.Name,
        Email:req.body.Email,
        Phone:req.body.Phone,
        password:req.body.password,
        Device_token:req.body.Device_token,
        Access_token:req.body.Access_token,
        Is_verify:req.body.Is_verify,
        Location:req.body.Location
    })
    users.save((err,doc)=>{
        if(!err){res.send('user is updated');}
        else {console.log('user is not created')}
    
    })
};

exports.update=(req,res)=>{
    if(!objectId.isValid(req.params.id))
        return res.status(400).send('no record : ');

        
        user.findByIdAndUpdate(req.params.id,{ $set:req.body},{new:true},(err,doc)=>{
            if(!err){
                res.send('user is updated');}
            else {console.log('Error in Employee Update:'+ JSON.stringify(err,undefined,2));}
        });
};

exports.delete=(req,res)=>{
    if(!objectId.isValid(req.params.id))
    return res.status(400).send('No record');

    user.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){res.send('user is deleted');
        }
        else {console.log('Error in Employee delete:'+ JSON.stringify(err,undefined,2));}
    })
}


