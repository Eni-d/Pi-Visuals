const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const router = require('./routes/router')
const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', router)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})