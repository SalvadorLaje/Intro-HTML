const express = require('express')
const path = require('path')

const app = express()
let publicPath = path.join(__dirname,'/public')
app.use(express.static(publicPath))

app.listen(3030,()=> console.log('Servidor corriendo puerto 3030'))

app.get('/',(req,res)=>{
    let htmlPath = path.join(__dirname,'/views/index.html')
    res.sendFile(htmlPath)
})
