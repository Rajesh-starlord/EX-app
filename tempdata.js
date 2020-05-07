var express = require('express');
var router = express.Router();
var mongoClient=require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

/* GET home page. */

var data={};
router.get('/',function(req, res) {
  console.log("hello");
    var data={};
    if(req.query.for){

          if(req.query.type=='insert'){
            data.note=req.query.text;
            data.id=req.query.id;
            console.log(data);
            mongoClient.connect(url,{ useUnifiedTopology: true }, function(err, client){
              var db = client.db("ToDoList");
                var collection = db.collection("tempdata1");
                collection.insertOne(data,function() {
                  console.log('one doc inserted');
                });
                res.redirect('/');
            });//mongodb

        }else if(req.query.type=='delete'){

            mongoClient.connect(url,{ useUnifiedTopology: true }, function(err, client){
              var db = client.db("ToDoList");
                var collection = db.collection("tempdata1");
                collection.deleteMany({id:req.query.id},function(err,res) {
                  if(err){
                    console.log(err);
                  }else{
                    console.log(res);
                  }

                });
                res.redirect('/');

          });
        }

    }else{
          if(req.query.type=='insert'){
            data.note=req.query.text;
            data.id=req.query.id;
            console.log(data);
            mongoClient.connect(url,{ useUnifiedTopology: true }, function(err, client){
              var db = client.db("ToDoList");
                var collection = db.collection("tempdata");
                collection.insertOne(data,function() {
                  console.log('one doc inserted');
                });
                res.redirect('/');
            });//mongodb

        }else if(req.query.type=='delete'){
                var tempid=req.query.id;
                var id="objectId"+"("+'"'+tempid+'"'+")";
                console.log(id);
            mongoClient.connect(url,{ useUnifiedTopology: true }, function(err, client){
              var db = client.db("ToDoList");
                var collection = db.collection("tempdata");
                collection.deleteMany({id:req.query.id},function(err,res) {
                  if(err){
                    console.log(err);
                  }else{
                    console.log(res);
                  }

                });
                res.redirect('/');

          });
        }

  }

});//get
module.exports = router;
