var mysql=require('mysql')
function connect()
{
    var connection=mysql.createConnection(
        {   
        
        host:'192.168.2.43',
        user:'root',
        password:'root',
        database:'dac',
        port:'9099'
        }
    );
    connection.connect();
    return connection;
}

module.exports={ connect:connect};
