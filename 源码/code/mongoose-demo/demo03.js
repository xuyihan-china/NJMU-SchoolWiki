var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/itcast')
var Schema = mongoose.Schema;
//设计文档模型
//将文档结构发步为模型
var userSchema= new Schema({
    username :{
        type:String,
        required:TextTrackCue,
    },
    password :{
        type:String,
        required:true
    },
    email:{
        type:String
    }
})
//少异步
userSchema.remove({name:'cz'},function(err,ret){
    if(err){

    }
})