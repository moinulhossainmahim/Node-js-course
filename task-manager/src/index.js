const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

// Resource creation endpoint
app.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send({
            error: true,
            message: 'Something went wrong. Try again'
        })
    }

    // user.save().then(() => {
    //     res.status(201).send(user)
    // }).catch((error) => {
    //     res.status(400).send(error)
    // })
})

app.post('/tasks', async (req, res) => {
    const task = new Task(req.body)
    try {
        await task.save()
        res.status(201).send(task)
    } catch (error) {
        res.status(400).send({
            error: true,
            message: 'Something went wrong. Try again.'
        })
    }


    // task.save().then(() => {
    //     res.status(201).send(task)
    // }).catch((error) => {
    //     res.status(400).send(error)
    // })
})


// Resource Reading endpoint
app.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch(error) {
        res.status(400).send({
            error: true,
            message: 'Something went wrong. Try again.'
        })
    }
    
    
    // User.find({}).then((users) => {
    //     res.send(users)
    // }).catch((error) => {
    //     res.status(500).send()
    // })
})

app.get('/users/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const user = await User.findById(_id)
        res.send(user)   
    } catch (error) {
        res.status(404).send({
            error: true,
            message: 'Something went wrong. Try again.'
        })
    }

    // User.findById(_id).then((user) => {
    //     res.send(user)
    // }).catch((error) => {
    //     res.status(404).send({
    //         error: true,
    //         message: 'Something went wrong!'
    //     })
    // })  
})

app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (error) {
        res.status(500).send({
            error: true,
            message: 'Something went wrong. Try again.'
        })
    }
    
    // Task.find({}).then((tasks) => {
    //     res.send(tasks)
    // }).catch((error) => {
    //     res.status(500).send()
    // })
})

app.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const task = await Task.findById(_id)
        res.send(task)
    } catch (error) {
        res.status(404).send({
            error: true,
            message: 'Something went wrong. Try again.'
        })
    }
    
    // Task.findById(_id).then((task) => {
    //     res.send(task)
    // }).catch((error) => {
    //     res.status(404).send({
    //         error: true,
    //         message: 'Something went wrong!'
    //     })
    // })
})

// Resource updating endpoint



app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})
