const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser:true}, (error, client)  => {
    if(error) {
        return console.log('Unable to connect to database')
    }
    const db = client.db(databaseName)

    // create collection or document
        // db.collection('users').insertOne({
        //     _id: id,
        //     name: 'Mahim',
        //     age: 21,
        // }, (error, result) => {
        //     if(error) {
        //         return console.log('Unable to insert user.')
        //     }
        //     console.log(result.ops)
        // })

        // db.collection('users').insertMany([
        //     {
        //         name: 'John Doe',
        //         age: 34
        //     },
        //     {
        //         name: 'Jane Doe',
        //         age: 32
        //     }], (error, result) => {
        //         if(error) {
        //             return console.log('Unable to insert user')
        //         }

        //         console.log(result.ops)
        //     }
        // )

        // db.collection('tasks').insertMany([
        //     {
        //         description: 'Download mongodb in system',
        //         completed: true
        //     },
        //     {
        //         description: 'Download GUI robo 3t',
        //         completed: true
        //     }, {
        //         description: 'Connect nodejs with database',
        //         completed: false
        //     }
        // ], (error, result) => {
        //     if(error) {
        //         return console.log('Unable to add tasks')
        //     }

        //     console.log(result.ops)

        // })


    // Read document
        // find one
            // db.collection('users').findOne({_id: new ObjectID('610fcd75c8cd4d9498ed46a9')}, (error, user) => {
            //     if(error) {
            //         return console.log('Unable to find user')
            //     }
            //     console.log(user)
            // })
        // find multiple
            // db.collection('users').find({age: 20}).toArray((error, users) => {
            //     console.log(users)
            // })    

            // db.collection('users').find({age: 20}).limit(2).toArray((error, users) => {
            //     console.log(users)
            // })

            // db.collection('users').find({age: 20}).count((error, count) => {
            //     console.log(count)
            // })

            // db.collection('tasks').findOne({_id: new ObjectID('610fca5e8dbb219158838756')}, (error, task) => {
            //     console.log(task)
            // })

            // db.collection('tasks').find({completed: true}).toArray((error, tasks) => {
            //     console.log(tasks)
            // })

            // db.collection('tasks').find({completed: true}).limit(3).toArray((error, tasks) => {
            //     console.log(tasks)
            // })
   
    // update document
        // update one
            // db.collection('users').update({
            //     _id: new ObjectID('610fbe33f311b88782d2a42a'),
            // }, {
            //     $inc: {
            //         age: 2,
            //     }
            // }).then((result) => {
            //         console.log(result)
            //     }).catch((error) => {
            //         console.log(error)
            //     })

        // Update Many
            // db.collection('tasks').updateMany({
            //     completed: false
            // }, {
            //     $set: {
            //         completed: true,
            //     }
            // }).then((result) => {
            //     console.log(result)
            // }).catch((error) => {
            //     console.log(error)
            // })     
           
    // deleting document
        // delete many
            // db.collection('users').deleteMany({
            //     age: 20
            // }).then((result) => {
            //     console.log(result)
            // }).catch((error) => {
            //     console.log(error)
            // })   
        // delete one
            // db.collection('tasks').deleteOne({
            //     description: 'Download GUI robo 3t'
            // }).then((result) => {
            //     console.log(result)
            // }).catch((error) => {  
            //     console.log(error)
            // })    
})