const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname,'assets')))
app.set('view engine','ejs')

app.use('/',(req,res,next)=>{
    res.render('index')
})

app.listen(3000,()=>{
    console.log(' server listen on port 3000 ')
})

