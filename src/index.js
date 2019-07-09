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

app.post("/task",(request,response)=>{
    const tasks = new Task(request.body)

    tasks.save().then(()=>{
        response.status(201).send(tasks)
    }).catch((e)=>{
        response.status(400).send(e)
    })
})

app.get("/task",(request,response)=>{
    Task.find({}).then((tasks)=>{
        response.send(tasks)
    }).catch((e)=>{
        response.send(e)
    })
})

app.get("/task/:id", (request,response)=>{
    const _id = request.params.id

    Task.findById(_id).then((task)=>{
        if(!task){
            response.status(404).send()
        }
        response.send(task)
    }).catch((e)=>{
        response.send(e)
    })
})





app.post('/users', (request, response)=>{
    console.log(request.body)
    const user = new User(request.body)

    user.save().then(()=>{
        response.status(201).send(user)
    }).catch((e)=>{
        response.status(400).send(e)
    })    
    
})

app.get("/users/:id",(request,response)=>{
    const _id = request.params.id

    User.findById(_id).then((user)=>{
        if(!user){
            return response.status(404).send()
        }
        response.send(user)
    }).catch((e)=>{
        response.status(500).send(e)
    })
})

app.get("/users",(request, response)=>{
    User.find({}).then((users)=>{
        response.send(users)
    }).catch((e)=>{
        response.status(404).send(e)
    })
})