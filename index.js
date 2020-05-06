express = require('express')
cookieParser = require('cookie-parser')
session = require('express-session')
var route = require('./routes/index')

let app = express()
app.listen(9001)

// CORS回避
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
// session
app.use(cookieParser())
app.use(session({
  secret: 'A66Rprwo6gb',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: false,
    maxAge: 60 * 60 * 1000
  }
}))
app.use(route)

console.log('server listening...')

module.exports = app;