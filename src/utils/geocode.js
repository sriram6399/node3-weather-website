const request = require('request')

const geocode = (address, callback) => {

    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiZ3V0dGlrb25kYXNyaXJhbTEyMzQiLCJhIjoiY2tkZnBuMm1qMGFpYjJ6cXAybmdnM3Z3ZCJ9.pteAnGyFx_ojdzNNAuuuGQ&limit=1'

    request({url , json :true},(error,{body})=>{
        if(error){
           callback('llow error',undefined)
            
        }else if(body.features.length == 0){
            callback('error',undefined)
        }else{
            callback(undefined,{
       latitude:body.features[0].center[1],
       longitude:body.features[0].center[0],
       location:body.features[0].place_name
    })
}
    })
}

module.exports = geocode