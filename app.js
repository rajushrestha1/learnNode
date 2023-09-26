const app =require('express')()




app.get('/',(req,res)=>{
    // console.log(req)
    // res.send("This is home page")

    res.json({
        message : "I am Raju shrestha "
    })

})

app.get('/about',(req,res)=>{
    res.json({
        status: 20,
        message: "You are in about page"
    })
})



app.listen(3000,function(){
    console.log("node js project has been started on port 3000")
})