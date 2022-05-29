const Router = require('../framework/Router')
const controller = require('../src/user-controller')
const router = new Router()

const users = [
  {id: 1, name: 'Roma'},
  {id: 2, name: 'Zhenya'}
]

router.get('/users', controller.getUsers)

router.post('/users', controller.createUser)

module.exports = router