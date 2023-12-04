const St_data = require('../Models/Students');

console.log(St_data);

exports.getStudents= (req , res)=>{
  res.status(200).json({
    message:"students data fetched successfully",
    req_data : St_data
  })
}

exports.getStudent=(req, res)=>{
    const name_ = req.params.name;
    var data = {}
    if(name_ == 'tushar'){
        data = 
        {
          "name":"tushar",
          "age":21
        }
    }else if (name_ == 'shikha'){
        data = 
        {
          "name":"shikha",
          "age":20
        }
    }
   
  
    res.status(200).json({
      message:"student data fetched successfully",
      req_data : data
    })
}

//add student
exports.addStudent = (req , res)=>{
    console.log(req.body);
    const {
       name,
       age
    } = req.body;

    student = {
        "name":name,
        "age":age
    }


    St_data.push(student);
    res.status(200).json({
        message:"new data fetched successfully",
        req_data : St_data
      })
}

//update

exports.updateStudent=(req,res)=>{
    //update student
    const {
        name,
        age
     } = req.body;
 
     updatedstudent = {
         "name":name,
         "age":age
     }
     //rest code logic to update array

    res.status(200).json({
        message:"updated fetched successfully",
        req_data : St_data
      })
}

//delete
exports.deleteStudent=(req,res)=>{
    //delete student
    const name_ = req.params.name;
    //logic to delete array


    res.status(200).json({
        message:"data after deletion fetched successfully",
        req_data : St_data
      })
}