const request = require('request')

const forecast=(latitude,longitude,callback)=>{
const url = 'http://api.weatherstack.com/current?access_key=7fb4bd40c793ecbebe6c8bac098079cb&query='+latitude+','+longitude+'&units=f'

request({url , json: true}, (error,{body})=>{
if(error){
    callback("error low",undefined)
}else if(body.error){
    callback('error',undefined)
}else{
    callback(undefined,body.current.temperature)
}
})
}

module.exports= forecast