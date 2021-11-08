const { Router } = require('express')
const router = Router()

const webpush = require('../webpush');

let pushSubscription;

router.post('/subscription', async (req,res)=>{
    console.log(req.body)
    pushSubscription = req.body;
    console.log("pushSubscription 1: ",pushSubscription)

    res.status(200).json();
})

router.post('/new-message', async (req,res)=>{
    const {title,message,destino,imagen} = req.body
console.log("request: ",req.body )
        const payload = JSON.stringify({
            title:title,
            message:message,
            destino:destino,
            imagen:imagen
        }) 

        try {
            console.log("pushSubscription: ",pushSubscription)
            const response = await webpush.sendNotification(pushSubscription,payload)
            console.log("response: ",response)
        } catch (error) {
            console.log(error)
        }
})
 
module.exports = router;
