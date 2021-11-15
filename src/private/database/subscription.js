'use strict';
const mysql = require('mysql2/promise');
const configDb = require('../../common/configDb');


const pool = mysql.createPool(configDb.db);

async function insertSubscription(params){
let data = JSON.stringify(params)
    let query = 'INSERT INTO T_subscription SET json_subscription = ?';

    const result = await pool.query(query,[data]);

    if (!result[0]) {
        throw new Error('Error al insertar datos');
      }
      return result[0];
}


async function getSubscription(params){

    let query = 'SELECT * FROM T_subscription';

    const result = await pool.query(query);

    if (!result[0]) {
        throw new Error('GET with this id was not found');
      }
      return result[0];
}

module.exports = {
    insertSubscription: insertSubscription,
    getSubscription:getSubscription
}