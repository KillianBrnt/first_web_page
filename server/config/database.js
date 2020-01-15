module.exports = {
'connection':{
    'host': process.env.DATABASE_HOST || '127.0.0.1',
    'user':'root',
    'password':'mysql',
    'port':'3306',
},
'database':'db',
'user_table':'users'
}
