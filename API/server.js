const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const cookbook = require('./recipes'); 
const cors = require('cors');

app.use(cors());

//app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:recipeName', (req, res) =>{
    const recipeName = req.params.recipeName;
    if(cookbook.CookBook[recipeName]){
        res.json(cookbook.CookBook[recipeName])
    }
    else{
        res.json('you fucked it, bro.')
    }
})












app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
    console.log(cookbook.CookBook, cookbook.Recipe)
})
