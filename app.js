var express =require('express');
var cors =require('cors');
var bodyparser= require('body-parser');
const { request, response, query } = require('express');


const http = require('http');

// use 
var app= express();
app.use(cors());
app.use(bodyparser.json());

// require folder

const port=require('./db/server')


app.get('/',(req,res)=>{
    res.send("api is working");
})

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
    });

// Server listen on
app.listen(port,()=>{
    console.log("sever is running....");
});

app.use((req,res)=>{
    res.status(404).json({status:404,msg:"Invalid Request "})
})



