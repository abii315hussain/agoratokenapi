let db=process.env.MONGODB_URL || "mongodb+srv://abid:12345@cluster0.jxv4u.mongodb.net/neighbour?retryWrites=true&w=majority";
const mongoose=require('mongoose');

mongoose.connect(db,{useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology: true ,useUnifiedTopology:true}).then(console.log("ok database connected"));

exports.mongoose=mongoose;
