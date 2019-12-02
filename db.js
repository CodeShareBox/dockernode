var mysql=require('mysql')
function connect()
{
    var connection=mysql.createConnection(
        {   
        
        host:'172.18.6.157',
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
