'use strict'
//urls for database secrets
const userSecret = process.env.KV_SQL_SERVER_USER;
const passwordSecret = process.env.KV_SQL_SERVER_PASSWORD;
const dbSecret = process.env.KV_SQL_SERVER_BD;
const hostSecret = process.env.KV_SQL_SERVER_HOST;
 
const mysql = require('mysql2/promise');
 
module.exports = {
    name: 'notification-push-ms',
    hostname : 'http://localhost',
    version: '1.0.0',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 4000,
    db: {
			host     : hostSecret,
			user     : userSecret,
			password : passwordSecret,
			database : dbSecret,
    }
}