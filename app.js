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

app.post('/agora-access-token', (req, res) => {
 
    const appID = 'a6b42ead96b54e2a897239f272892a6e';
    const appCertificate = '2eec4082e6dd47d38893a1b7e0ce9797';
    const channelName = req.body.channelName;
    const uid = req.body.uid;
    const account = req.body.account;
    const role = RtcRole.PUBLISHER;
    
    const expirationTimeInSeconds = 3600
    
    const currentTimestamp = Math.floor(Date.now() / 1000)
    
    const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds
    
    const tokenA = RtcTokenBuilder.buildTokenWithUid(appID, appCertificate, channelName, uid, role, privilegeExpiredTs);
    
    res.status(200).json({"status":200,"token":tokenA});
    });

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



