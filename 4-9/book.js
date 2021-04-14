var mysql=require("mysql")

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
        console.log(results)
    }
})
