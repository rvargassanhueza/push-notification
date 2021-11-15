'use strict';
const mysql = require('mysql2/promise');
const configDb = require('../../common/configDb');


const pool = mysql.createPool(configDb.db);

async function insertSubscription(params){
let data = JSON.stringify(params)
const {json_subscription:{endpoint,expirationTime,keys:{p256dh,auth}}} = params;    
let query = 'INSERT INTO T_subscription SET id_subscription = ?, json_subscription = ?';

    const result = await pool.query(query,[auth, data]);

    if (!result[0]) {
        throw new Error('Error al insertar datos');
      }
      return result[0];
}


async function getSubscription(){

    let query = 'SELECT * FROM T_subscription';

    const result = await pool.query(query);

    if (!result[0]) {
        throw new Error('GET with this id was not found');
      }
      return result[0];
}

async function getSubscriptionById(id){

    let auth_subscription = String(id);

    let query = 'SELECT * FROM T_subscription WHERE id_subscription ="'+auth_subscription+'"';

    const result = await pool.query(query);

    if (!result[0]) {
        throw new Error('GET with this id was not found');
      }
      return result[0];
}

module.exports = {
    insertSubscription: insertSubscription,
    getSubscription:getSubscription,
    getSubscriptionById:getSubscriptionById
}