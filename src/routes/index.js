const { Router } = require('express')
const router = Router()

const webpush = require('../webpush');
const methods = require('../private/methods/subscriptionMethods')

router.post('/subscription', async (req,res)=>{
   try{
         await methods._insert(req.body)
         res.status(200).json();
        }catch (error) {
            console.log(error)
        }
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

            await webpush.sendNotification(JsonSubscription.json_subscription,payload);
        }
            res.status(201).json();
        } catch (error) {
            console.log(error)
        }
})

module.exports = router;