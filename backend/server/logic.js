const db =require("./db");

const allTask =()=>{
   return db.Task.find().then((result) => {
     if (result) {
       return {
         statusCode: 200,
         Products: result,
       };
     } else {
       return {
         statusCode: 404,
         message: "No data is present",
       };
     }
   });
}


// add Task
 const addTask =(id,task)=>{
    return db.Task.findOne({
        id
    }).then((result)=>{
        if(result){
            return{
                statusCode:401,
                message:"Task Id Already exist"
            }
        }
        else{
            const newTask =new db.Task({
                id,
                Task
            })
            newTask.save()
            return{
                statusCode:200,
                message:"New data added successfully"
                }
        }
    })

 }

//  delete Task
const removeTask =(id)=>{
    return db.Task.deleteOne({
        id
    }).then((result)=>{
        if(result){
            return{
                statusCode:200,
                message:" Data deleted successfully"
                }
        }
        else{
            return{
                statusCode:404,
                message:" No data is available"
                }
        }
    })
}

// get a particular Task details
const getTask =(id)=>{
    return db.Task.findOne({
        id
    }).then((result)=>{
        if(result){
            return{
                statusCode:200,
                employee:result
            }
        }
        else{
            return{
                statusCode:404,
                message:" No data is available"
            }
        }
    })
}

// update Task
const editTask =(id,task)=>{
    return db.Task.findOne({
        id
    }).then((result)=>{
        if(result){
            result.id=id
            result.uname=Task
            

            result.save()
            return{
                statusCode:200,
                message:" Data Updated successfully"
                }

        }
        else{
            return{
                statusCode:404,
                message:" No data is available"
            }
        }
    })

}



module.exports={
    allTask,
    addTask,
    removeTask,
    getTask,
    editTask
}