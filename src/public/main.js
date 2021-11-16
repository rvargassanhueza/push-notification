
const PUBLIC_VAPID_KEY = 'BKJ7BjejQ9wpbYJhheVwYDr6jxDhjYrEwRk7sR-ZvfuvvIo2Ga7SaYTIdVQ5rvOaJiTORQnuFLuGDzAAVEHGZiI';

const subscription = async ()=>{

    //Service worker
    const register = await navigator.serviceWorker.register('https://whispering-temple-99303.herokuapp.com/worker.js')

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

// function detectmob() {
//     if( navigator.userAgent.match(/Android/i)
//     || navigator.userAgent.match(/webOS/i)
//     || navigator.userAgent.match(/iPhone/i)
//     || navigator.userAgent.match(/BlackBerry/i)
//     || navigator.userAgent.match(/Windows Phone/i)
//     ){
//        return 1;
//      }
//     else {
//        return 0;
//      }
// }

subscription();


