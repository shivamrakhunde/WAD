const express=require('express')
const app = express()
port=4000
app.use(express.static('public'))
app.listen(port,()=>{
    console.log("Listening")
})