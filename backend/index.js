const express = require("express");
const cors =require("cors");
const logic= require("./server/logic");

const server = express();
server.use(
  cors({
    origin: "http://localhost:3000",
  })
);

server.use(express.json());

server.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});

// add new task api : add-task
server.post('/add-employee',(req,res)=>{
    logic.addEmployee(req.body.id,req.body.empName,req.body.empAge,req.body.empDesg,req.body.empSalary)
    .then((result)=>{
       res.status(result.statusCode).json(result)
    })
   })

   // delete task api : delete-task
server.delete('/delete-task/:id',(req,res)=>{
    logic.removeTask(req.params.id)
    .then((result)=>{
       res.status(result.statusCode).json(result)
    })
   })

   // get a task api
server.get('/get-an-task/:id',(req,res)=>{
    logic.getTask(req.params.id)
    .then((result)=>{
       res.status(result.statusCode).json(result)
    })
   })

   // update task api : add-task
server.post('/update-task',(req,res)=>{
   logic.editTask(req,res)
   .then((result)=>{
      res.status(result.statusCode).json(result)
   })
  })