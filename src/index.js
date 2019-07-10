const express = require('express')
require("./db/mongoose")
const User = require("./models/user")
const Task = require("./models/task")

const app = express()
const port = process.env.PORT || 3000

app.listen(port, () =>{
    console.log('Server is up on port' + port)
})

app.use(express.json())

app.post("/task", async (request,response)=>{
    const tasks = new Task(request.body)
    try{
        const tasks = await new Task(request.body)
        response.status(201).send(tasks)
    }catch(e){
        response.send(e)
    }
})

app.get("/task", async(request,response)=>{

    try{
         const tasks = await Task.find({})
         response.send(tasks)
    }catch(e){

    }
    
})

app.get("/task/:id", async (request,response)=>{
    const _id = request.params.id

    try{
        const task = await Task.findById(_id)
        if(!task){
                response.status(404).send()
                    }
                    response.send(task)

    }catch(e){
        response.send(e)
    }

})

app.post('/users', async (request, response)=>{
    console.log(request.body)
    const user = new User(request.body)
        try{
            await user.save()
            response.status(201).send(user)
        } catch(e){
            response.status(400).send(e)
        }
})

app.get("/users/:id", async (request,response)=>{
    const _id = request.params.id
    try{
      const foundUser = await User.findById(_id)
      if(!foundUser){
        response.status(404).send()
      }
      response.send(foundUser)
    }catch(e){
        response.status(500).send(e)
    }

})

app.get("/users", async (request, response)=>{
    try{
       const foundUsers = await User.find({})
       response.send(foundUsers)
    }catch(e){
        response.status(404).send(e)
    }
})