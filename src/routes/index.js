const { Router } = require('express')
const router = Router()

const webpush = require('../webpush');

let pushSubscription;

router.post('/subscription', async (req,res)=>{
    console.log(req.body)
    pushSubscription = req.body;
    console.log("tipo de datos: ", pushSubscription)
    res.status(200).json();
})

router.post('/new-message', async (req,res)=>{
console.log("req.body: ",req.body);
    const {title,message,destino,imagen} = req.body

        const payload = JSON.stringify({
            title:title,
            message:message,
            destino:destino,
            imagen:imagen
        })

        try {
            await webpush.sendNotification(pushSubscription,payload)
        } catch (error) {
            console.log(error)
        }
})
 
module.exports = router;
