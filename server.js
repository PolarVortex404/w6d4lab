const express = require('express')

const app = express()
const path = require('path')
const cors = require('cors')

app.use(express.json())

app.use(cors())


app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname, '/display.html'))
    
})
