const mySql=require('mysql2');

const pool=mySql.createPool({
    host:'localhost',
    user:'root',
    database:'databace1',
    password:'1122'
});

module.exports=pool.promise();