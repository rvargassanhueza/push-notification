
const { insertSubscription,getSubscription } = require ('../database/subscription');
const { NOT_FOUND, CREATED, INTERNAL_SERVER_ERROR } = require ('http-status');


let _insert = async function (subscription){
    try{
        const dataJson = {
            "json_subscription":{
                "endpoint" : subscription.endpoint,
                "expirationTime" : subscription.expirationTime,
                "keys": subscription.keys}
            }
        let result = await insertSubscription(dataJson)

        if(result === null){
            // res.json(NOT_FOUND);
            // res.end();
            // return;
        }
        // res.json(CREATED, result);
        // res.end();
        
    }catch(err){
       console.log(INTERNAL_SERVER_ERROR, JSON.stringify({Error: INTERNAL_SERVER_ERROR, Message: constants.Error.INTERNALERROR}) );

    }
};


let _get = async function (){
    try{
       
        let result = await getSubscription()

        if(result === null){
            // res.json(NOT_FOUND);
            // res.end();
            // return;
        }
        return result;
        // res.json(CREATED, result);
        // res.end();
        
    }catch(err){
       console.log(INTERNAL_SERVER_ERROR, JSON.stringify({Error: INTERNAL_SERVER_ERROR, Message: constants.Error.INTERNALERROR}) );

    }
};

module.exports = {
    
    _insert: _insert,
    _get: _get
}