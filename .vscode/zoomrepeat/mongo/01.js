var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/itcast')
var Schema = mongoose.Schema;
//设计集合结构
var userSchema = new Schema({
    username: {
      type: String,
      required: true // 必须有
    },
    password: {
      type: String,
      required: true//加上required 
    },
    email: {
      type: String
    }
  })
  userSchema.remove({name:'cz'},function(err,ret){
      if(err){
          
      }
  })