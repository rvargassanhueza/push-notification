const { Router } = require('express')
const router = Router()

const webpush = require('../webpush');
const methods = require('../private/methods/subscriptionMethods')

router.post('/subscription', async (req,res)=>{
    // pushSubscription.push(req.body);

    await methods._insert(req.body)

    res.status(200).json();
})

router.post('/new-message', async (req,res)=>{
    const {title,message,destino,imagen} = req.body
        const payload = JSON.stringify({
            title:title,
            message:message,
            destino:destino,
            imagen:imagen
        }) 

    let dataSubscription = await methods._get()
    let JsonSubscription;

        try {
            
            for(let i=0; i<dataSubscription.length; i++){
                JsonSubscription = JSON.parse(dataSubscription[i].
                    json_subscription);
            
            // const response = await webpush.sendNotification(JsonSubscription.json_subscription,payload)

            dataSubscription.map(function(e){
                let data = JSON.parse(e.json_subscription)
                
            if(data.json_subscription.endpoint === JsonSubscription.json_subscription.endpoint){
                    console.log('se repite');
                }else{
                    // await webpush.sendNotification(data,payload);
                    // const response = await webpush.sendNotification(JsonSubscription.json_subscription,payload)
                    console.log('enviado');
                }
            })
        }
            res.status(201).json();

        } catch (error) {
            console.log(error)
        }
})
 
module.exports = router;
