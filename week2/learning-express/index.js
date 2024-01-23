const { kMaxLength } = require("buffer");
const express = require("express");
const { request } = require("http");
const app=express()
let users=[
    {
        name:'John',
        kidneys:[
            {healthy:false}
        ]
    }
]
// req=request
// res=express.response
app.get("/",function(req,res){
    const johnKidneys=users[0].kidneys;
    console.log(johnKidneys)
    const numberofKidneys=johnKidneys.length;
    let numberofHealthkidneys=0;
    for(let i=0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            ++numberofHealthkidneys;
        }

    }
    const numberOfUnhealthyKidneys=numberofKidneys - numberofHealthkidneys;
    res.json({
        johnKidneys,
        numberofHealthkidneys,
        numberOfUnhealthyKidneys
    })

})
app.use(express.json())
app.post('/',function(req,res){
    const isHealthy=req.body.isHealthy
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done!"
    })
})

app.put("/",function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({})
})
app.delete("/",function(req,res){
    const newKidneys=[]
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys=newKidneys;
    res.json({})
})
app.listen(3000)