const Students = require('../Models/Students');

exports.getStudents= (req , res)=>{

  //mongodb method to fetch all data
  Students.find().then(result=>{
    res.status(200).json({
      message:"students data fetched successfully",
      req_data : result
    })
  }).catch(error=>{
    res.status(500).json({
      message:"error in database",
      error: error
    })
  })

 
}

exports.getStudent=(req, res)=>{
    const name_ = req.params.name;
    //mongodb method to fetch all data
  Students.find({"name":name_}).then(result=>{
    res.status(200).json({
      message:"students data fetched successfully",
      req_data : result
    })
  }).catch(error=>{
    res.status(500).json({
      message:"error in database",
      error: error
    })
  })
}

//add student
exports.addStudent = (req , res)=>{
    console.log(req.body);
    const {
       name,
       age
    } = req.body;

    const studentObj =new Students({
      name:name,
      age:age
    })

    
    studentObj.save().then(result=>{
      res.status(200).json({
        message:"new data fetched successfully",
        result: result
      })
    }).catch(error=>{
      res.status(500).json({
        message:"error in database unable to add data",
        error: error
      })
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
    
    Students.find({name:name_})
    .then(result=>{
      var id = result[0].id
      Students.deleteOne({ "_id" : id })
      .then(data=>{
        if(!data){
          res.status(404).send({
            message: `data of ${name_} doesnot exist in our database`
          })
        }else{
          res.status(200).send({
            message: `data of ${name_} successfully deleted from our database database`
          })
        }
      })
    })
    
}