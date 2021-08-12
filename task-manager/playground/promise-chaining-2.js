require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('611145abad385d84d110b80a').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const deleteTaskCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: true})
    return count
}

deleteTaskCount('611210772542c62f9d1176f6').then((count) => {
    console.log('count', count)
}).catch((error) => {
    console.log(error)
})