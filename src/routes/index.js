const { Router } = require('express')
const router = Router()

const webpush = require('../webpush');

let pushSubscription;

router.post('/subscription', async (req,res)=>{
    pushSubscription = req.body;

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

        try {
            const response = await webpush.sendNotification(pushSubscription,payload)
            console.log("response: ",response);
            res.status(201).json();

        } catch (error) {
            console.log(error)
        }
})
 
module.exports = router;
