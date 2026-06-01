importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBmpytMiyKzMEpOTD3ru8i8HetHPZtRBvs",
  authDomain: "bisang-class.firebaseapp.com",
  projectId: "bisang-class",
  storageBucket: "bisang-class.firebasestorage.app",
  messagingSenderId: "602966990273",
  appId: "1:602966990273:web:f243d9c196502eb3016340"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const { title, body } = payload.notification || {};
  self.registration.showNotification(title || '비상반 알림', {
    body: body || '',
    icon: 'https://em-content.zobj.net/source/google/387/school_1f3eb.png',
    badge: 'https://em-content.zobj.net/source/google/387/school_1f3eb.png',
    vibrate: [200, 100, 200],
    tag: 'bisang-notif',
    renotify: true,
  });
});
