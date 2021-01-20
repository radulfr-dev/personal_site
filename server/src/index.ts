require('dotenv').config()

const express = require('express')
const logger = require('morgan')
const helmet = require('helmet')
const group = require('express-group-routes')
const fs = require('fs')

const app = express()
const PORT : String = process.env.PORT

app.use(helmet())
app.use(logger('common', {
    stream: fs.createWriteStream('./access.log', {flags: 'a'})
}))
app.use(logger('common'))

app.group('/api/v1', (router) => {
    router.get('/test', (req, res) => {
        res.json({
            "message": "Hello World!"
        })
    })
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})

