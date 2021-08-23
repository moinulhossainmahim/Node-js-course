const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    const task = await Task.findById('6122948347fe734a06bf563c')
    await task.populate('owner').execPopulate()
    console.log(task.owner);

     const user = await User.findById('612231237f0b7247d1bb44ee')
     await user.populate('tasks').execPopulate()
     console.log(user.tasks)
}

main()
