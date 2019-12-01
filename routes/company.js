var express=require('express')
var mydb=require('../db')
var connection=mydb.connect();

var app1=express();

app1.get('/',(request,response)=>
{
    var text='select * from company';
     connection.query(text,(error,result)=>
    {  if(error==null){
        response.send(JSON.stringify(result));
    }
    else{
        response.send(JSON.stringify(error));
    }
    });
});



module.exports=app1;
