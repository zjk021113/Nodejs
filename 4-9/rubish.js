const express=require('express')
const bodyParser=require('body-parser')
const mysql=require('mysql')
const app=express()
const port=8080

var connection=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"root",
    database:"2008"
})

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-type",);
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(bodyParser.json())

// 登录接口
app.post('/user/login',function(require,results){
    console.log(require.body)
    let user_name=require.body.user_name
    let user_pwd=require.body.user_pwd
        // 查询数据库
    results.send("ok")
})
// 个人中心
app.get('/user/center',function(require,results){

})
// 用户列表
app.get('/user/list',(require,results)=>{
    connection.query('select * from p_users limit 5',function(error,require,fields){
        results.send(require)
    })
})

app.get('/',(require,results)=>{
    results.send()
})
app.post('/user/reg',function(require,results){
    // 接收数据
    const body=require.body
})

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})