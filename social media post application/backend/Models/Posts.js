const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//available datatypes -> bool ,Array
const postSchema = new Schema(
  {
    username:{
      type:String,
      required:true
    },
    post_title:{
        type:String,
        required:true
    },
    post_description:{
        type:String,
        required:true
    },
     post_tags:{
        type:[String],
        required:true
     },
     post_date_time:{
        type: Date,
        default:Date.now
     }   
    
    
  
  }
)
                   //          collectionname, schema , export name
module.exports = mongoose.model('posts', postSchema , 'posts')