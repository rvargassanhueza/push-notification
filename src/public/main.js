
const PUBLIC_VAPID_KEY = 'BKJ7BjejQ9wpbYJhheVwYDr6jxDhjYrEwRk7sR-ZvfuvvIo2Ga7SaYTIdVQ5rvOaJiTORQnuFLuGDzAAVEHGZiI';

const subscription = async ()=>{

    //Service worker
    const register = await navigator.serviceWorker.register('./worker.js')

    console.log("new service worker")

    const subscription = await register.pushManager.subscribe({
        userVisibleOnly:true,
        applicationServerKey:PUBLIC_VAPID_KEY
    })

    let plataforma  = detectmob();
    let userAgent =   getBrowserInfo();  

    const data = {
          "subscription":subscription,
          "userAgent":userAgent,
          "plataforma":plataforma
    }
    await fetch('/subscription',{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            "Content-type":"application/json"
        }
    });
    console.log("suscrito")
}

function detectmob() {
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
       return 1;
     }
    else {
       return 0;
     }
}

var getBrowserInfo = function() {
    var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
};

// console.log(getBrowserInfo());
subscription();


