const bcrypt = require('bcryptjs')

const securePassword = async () => {
    const password = 'helloworld123!'
    const hashedPassword = await bcrypt.hash(password, 8)
    console.log(password, hashedPassword)

    const isMatch = await bcrypt.compare(password, hashedPassword)
    console.log(isMatch)
}

securePassword()
