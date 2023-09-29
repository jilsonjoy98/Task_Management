const mongoosee =require("mongoose");

mongoosee.connect("mongodb://localhost:27017/tasks");

const Task= mongoosee.model("Task",{
    id: String,
    task:String
});

module.exports={
    Task
}