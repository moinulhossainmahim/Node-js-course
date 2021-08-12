const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

// mongoose model for user
const User = mongoose.model('User',{
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error ('This email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if(value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain password')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error ('You must provide a positive number')
            }
        }
    }
})

// const myself = new User({
//     name: '   Moinul Hossain   ',
//     email: '  MOINULhossainmahim@gmail.com   ',
//     password: ' moinulhossain123  '
// })

// myself.save().then(() => {
//     console.log(myself)
// }).catch((error) => {
//     console.log(error)
// })


// mongoose model for tasks
const tasks = mongoose.model('tasks', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const addtasks = new tasks({
    description: '    Complete rest api section   ',
    completed: true
})

addtasks.save().then(() => {
    console.log(addtasks)
}).catch((error) => {
    console.log(error)
})