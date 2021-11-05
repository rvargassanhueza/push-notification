const webpush = require('web-push')

// console.log(process.env.PUBLIC_VAPID_KEY,process.env.PRIVATE_VAPID_KEYS)

webpush.setVapidDetails(
    'mailto:rvargas@cooperativa.cl',
    process.env.PUBLIC_VAPID_KEY, 
    process.env.PRIVATE_VAPID_KEYS
    )

    module.exports = webpush;
