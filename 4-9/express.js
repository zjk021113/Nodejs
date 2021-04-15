const express=require("express")
const mysql=require("mysql")
const app=express()
const  port=8080
app.get('/user',function(req,res){
    // 向客户端响应数据
    res.send("欢迎你")
})
app.get('/list',(req,res)=>{
    var connection=mysql.createConnection({
        host:"127.0.0.1",
        user:"root",
        password:"root",
        database:"2008"
    })
    
    connection.query("select user_name,email,mobile from p_users limit 10",function (error,results,fields) {
        if(!error==null){
             console.log(error)
        }else{
            // console.log(results)
            res.send(JSON.stringify(results))
        }
    
    
    })
    

    
})
app.get("/",(req,res)=>{
    const list=[
        {
            userid:1001,
            name:"zhangsan",
            age:12
        },
        {
            userid:1002,
            name:"lisi",
            age:13
        },
        {
            userid:1003,
            name:"wangwu",
            age:14
        }
    ]
    // 妆化数组

    res.send(JSON.stringify(list))
})
app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})