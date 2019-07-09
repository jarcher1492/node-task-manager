//CRUD-Create, Read, Update and Delete

const {MongoClient, ObjectID} = require('mongodb')

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionUrl, {useNewUrlParser: true }, (error, client) => {
    if(error){
       return console.log("Unable to connect to database")
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Manny',
    //     age: 24
    // }, (error, result) =>{
    //         if(error){
    //             return console.log(error)
    //         }
    //         console.log(result.ops)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("5d11d19d14f00687309ca2a1") }, (error, task) => {
    //     console.log(task)
    // })

    // db.collection('tasks').find({completed: false}).toArray((error, tasks) =>{
    //     console.log(tasks)
    // }) 

//    db.collection('users').updateOne({
//         _id: new ObjectID("5d1bf0573063297b26fc9b84")
//     }, {
//         $inc: {
//             age: 2
//         }
//     }).then((result)=>{
//         console.log(result)
//     }).catch((error)=>{
//         console.log(error)
//     })

// db.collection('tasks').updateMany({
//     completed: true
// }, {
//     $set:{
//        completed: false 
//     }
// }).then((result) =>{
//     console.log(result.modifiedCount)
// }).catch((error) =>{
//     console.log(error)
// })
    
// db.collection('users').deleteMany({
//         age: 26
//     }).then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })

db.collection('tasks').deleteOne({
    description: 'Do Laundry'
}).then((result) =>{
    console.log(result)
}).catch((error) =>{
    console.log(error)
})


})
