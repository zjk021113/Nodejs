var mysql=require("mysql")

var connection=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"root",
    database:"2008"
})
function select(){
    connection.connect(function(err){
        if(err){
            console.error('error connecting:'+err.stack)
        }
        console.log('connected as id '+connection.thteadId);
    })
    connection.query('SELECT *FROM p_goods',function(error,results,fields){
        console.log('the solution is:',results)
    })
    connection.end()
}


select()