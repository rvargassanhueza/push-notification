
const { insertSubscription,getSubscription, getSubscriptionById } = require ('../database/subscription');
const { NOT_FOUND, CREATED, INTERNAL_SERVER_ERROR } = require ('http-status');

let _insert = async function (subscription){
    try{
        
        const dataJson = {
            "json_subscription":{
                "endpoint" : subscription.subscription.endpoint,
                "expirationTime" : subscription.subscription.expirationTime,
                "keys": subscription.subscription.keys
            },
            "movil":subscription.plataforma,
            "userAgent":subscription.userAgent
        }

        let resultGetById = await getSubscriptionById(subscription.subscription.keys.auth);
       
        if(resultGetById.length != 0){
        }else{
            await insertSubscription(dataJson);
        }
        
    }catch(err){
       console.log(INTERNAL_SERVER_ERROR, JSON.stringify({Error: INTERNAL_SERVER_ERROR, Message: constants.Error.INTERNALERROR}) );
    }
};



let _get = async function (){
    try{
       
        let result = await getSubscription()

        if(result === null){
        }
        return result;
    }catch(err){
       console.log(INTERNAL_SERVER_ERROR, JSON.stringify({Error: INTERNAL_SERVER_ERROR, Message: constants.Error.INTERNALERROR}) );
    }
};

module.exports = {
    
    _insert: _insert,
    _get: _get
}