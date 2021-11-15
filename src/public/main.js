'use strict';

// import { insertSubscription } from '../private/database/subscription';
// const {insertSubscription} = require('../private/database/subscription');

// const methods = require('../private/methods/subscriptionMethods')

const PUBLIC_VAPID_KEY = 'BKJ7BjejQ9wpbYJhheVwYDr6jxDhjYrEwRk7sR-ZvfuvvIo2Ga7SaYTIdVQ5rvOaJiTORQnuFLuGDzAAVEHGZiI';

const subscription = async ()=>{

    //Service worker
    const register = await navigator.serviceWorker.register('./worker.js',{
        scope:'/'
    })

    console.log("new service worker")

    const subscription = await register.pushManager.subscribe({
        userVisibleOnly:true,
        applicationServerKey:PUBLIC_VAPID_KEY
    })
    // await _insert(subscription);

    await fetch('/subscription',{
        method:'POST',
        body:JSON.stringify(subscription),
        headers:{
            "Content-type":"application/json"
        }
    });
    console.log("suscrito")
}

subscription();


