
const { insertSubscription,getSubscription, getSubscriptionById } = require ('../database/subscription');
const { NOT_FOUND, CREATED, INTERNAL_SERVER_ERROR } = require ('http-status');

// function obtenerIdNavegador() {
//     var
//         aKeys = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"],
//         sUsrAg = navigator.userAgent, nIdx = aKeys.length - 1;

//     for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--);

//     return nIdx
// }

// console.log(obtenerIdNavegador());

let _insert = async function (subscription){
    try{



        // let plataforma  = 0;
        // let userAgent =   obtenerIdNavegador();   
        
        const dataJson = {
            "json_subscription":{
                "endpoint" : subscription.endpoint,
                "expirationTime" : subscription.expirationTime,
                "keys": subscription.keys
            },
            "movil":plataforma,
            "userAgent":userAgent
        }

        let resultGetById = await getSubscriptionById(subscription.keys.auth);
       
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