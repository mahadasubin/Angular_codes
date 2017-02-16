var express = require('express');
var app = express();
var fs = require('fs');
var mongoose = require('mongoose');
var bodyParser= require('body-parser');

app.use(express.static('./client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://mahadasubin:whitebox123@ds159517.mlab.com:59517/classroom');
    process.on('SIGINT', function(){
	mongoose.connection.close(function(){
		console.log('Mongoose default connection disconnected through app termination');
		process.exit(0);
	});
});
var db = mongoose.connection; 
db.on('error',console.error.bind(console,'connection error:'));
    
db.once('open',function(){
    console.log("Connection is opened");
});

var schema = mongoose.Schema;
var mySchema = new schema({
    name :String,
    email:String,
   phone:String
});

var myModel =mongoose.model('contact',mySchema);

app.get('/contacts',function(req,res){
    /*fs.readFile('contacts.json',function(err,data){
    var contactList=JSON.parse(data.toString());*/
    myModel.find({},function(err,docs){
    if(err){console.log( "the error from the connection is"+ err);}
    //console.log(docs);
    res.json(docs);
    });
});   
    
app.post('/contacts',function(req,res){
    console.log("recived a post request");
    console.log(req.body);
    myModel.create(req.body,function(err,data){
        if(err){"Error from DB"+err}
        res.json(data);
    });
});

app.delete('/contacts/:id',function(req,res){
    console.log("recived a delete request");
    myModel.findOne({_id:req.params.id},function(err,contact){
        console.log(req.params.id);
        if(err) res.send("An error occured while trying to fetch the contact record");
        else{
            if(!contact) res.json({message:"such a contact does not exist"});
            else{
                contact.remove(function(err,data){
                    if(err){"Error from DB"+err}
                    console.log("contact has been removed successfully");
                    res.json({message:"Contact has been removed successfully"});
                });
            }
        }
    });
});

app.get('/contacts/:id',function(req,res){
    console.log("Recieved a request for a contact");
    myModel.findOne({_id:req.params.id},function(err,contact){
       if(err) console.log("An error from MangoDB"+ err);
       else{
           console.log(contact);
           res.json(contact);
           }
    });
});


app.put('/contacts/:id',function(req,res){
    console.log("recived a post request : "+req.body);
    var newContact = req.body;
    myModel.findOne({_id:req.params.id},function(err,contact){
        if(err) res.send("An error occured while trying to fetch the contact record");
        else{
            if(!contact) res.json({message:"such a contact does not exist"});
            else{
                for(key in newContact)
                 contact[key]=newContact[key];
                contact.save(function(err,data){
                    if(err){"Error from DB"+err}
                    console.log("contact has been updated successfully");
                    res.json({message:"Contact has been updated successfully"});
                });
            }
        }
    });
});

app.listen(8080);


