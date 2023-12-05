const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//available datatypes -> bool ,Array
const StudentSchema = new Schema(
  {
    name:{
      type:String,
      required: true
    },
    age:{
      type: Number,
      required: true
    }
  }
)
                   //          collectionname, schema , export name
module.exports = mongoose.model('Students', StudentSchema , 'Students')