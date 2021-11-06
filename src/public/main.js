const PUBLIC_VAPID_KEY = 'BKJ7BjejQ9wpbYJhheVwYDr6jxDhjYrEwRk7sR-ZvfuvvIo2Ga7SaYTIdVQ5rvOaJiTORQnuFLuGDzAAVEHGZiI';

const subscription = async ()=>{

    //Service worker
    const register = await navigator.serviceWorker.register('https://whispering-temple-99303.herokuapp.com/worker.js',{
        scope:'/'
    })

    console.log("new service worker")

    const subscription = await register.pushManager.subscribe({
        userVisibleOnly:true,
        applicationServerKey:PUBLIC_VAPID_KEY
    })

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