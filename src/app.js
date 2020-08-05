const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app=express()

const publicdirector = path.join(__dirname,'../public')
const viewspath = path.join(__dirname,"../templates/views")
const partialspath = path.join(__dirname,"../templates/partials")


app.set('view engine','hbs')
app.set('views',viewspath)
hbs.registerPartials(partialspath)


app.use(express.static(publicdirector))

app.get('',(req,res)=>{
    res.render('index',{title:'Weather',name:"pa1"})
})

app.get('/help',(req,res)=>{
    res.render('help',{title:'help',name:"pa1"})
})
app.get('/about',(req,res)=>{
    res.render('about',{title:'About',name:"pa1"})
})

 app.get('/weather', (req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'search not available'
        })
    }
    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
        if(error){
            return res.send(error)
        }
    
    
    forecast(latitude,longitude,(error,forecastdata)=>{
        if(error){
            res.send(error)
            }
        
    res.send({data:forecastdata,
            location:req.query.address   
    })
    })
    })
        
 //res.render('index',{title:'Weather',name:"pa1"})
            
})

app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error:'search not available'
        })
    }
    console.log(req.query.search)
    res.send({
        products:[]
    })

})

app.get('/help/*',(req,res)=>{

res.send('help not found')

})

     app.get('*',(req,res)=>{
res.send('404 page')

     })       

app.listen(3000,()=>{

    console.log('sever on port 3000')
})