// JSON Web Token
const jwt = require('jsonwebtoken')

const myFunction = async () => {
  const token = jwt.sign({ _id: 'abc123' }, 'thisismytoken' )
  console.log(token)

  const data = jwt.verify(token, 'thisismytoken')
  console.log(data)
}

myFunction()
