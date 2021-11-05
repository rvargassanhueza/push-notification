const PUBLIC_VAPID_KEY = 'BMGM7K5vSqmO1sPcwmN0wwMXzy1WvQtL8eJOZECtDH72PO1DQnhW4D51ly8PDN4tKl9AqBvo373xdmxE1CXNUZk';

const subscription = async ()=>{

    //Service worker
    const register = await navigator.serviceWorker.register('/worker.js',{
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