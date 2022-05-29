const PORT = process.env.PORT || 4000
const Application = require('./framework/Application')
const userRouter = require('./src/user-router')
const jsonParser = require('./framework/parseJson')
const parseUrl = require('./framework/parseUrl')
const mongoose = require('mongoose')

const app = new Application()

app.use(jsonParser)
app.use(parseUrl('http://localhost:4000/'))
app.addRouter(userRouter)

const start = async () => {
  try {
      await mongoose.connect('mongodb+srv://rsh:qwe135@cluster0.n5c7d.mongodb.net/?retryWrites=true&w=majority')
    app.listen(PORT, () => {
      console.log(`Server have been started on PORT:${PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
}

start()