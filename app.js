const app =require('express')()




app.get('/',(req,res)=>{
    // console.log(req)
    // res.send("This is home page")

    res.json({
        message : "I am RAju"
    })

})

app.get('/about',(req,res)=>{
    res.send("This is about page")
})






app.listen(3000,function(){
    console.log("node js project has been started on port 3000")
})