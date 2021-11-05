let destino;
self.addEventListener('push',e =>{
    const data = e.data.json()
    destino = data.destino

self.registration.showNotification(data.title,{
    body:data.message,
    icon:data.imagen
})
})

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
      clients.openWindow(destino)
    );
  });
