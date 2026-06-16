importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyBq_NSp1OYCnNfGDe48S0BZfU-4wJrWcY4",
    authDomain: "the-flying-birds.firebaseapp.com",
    databaseURL: "https://the-flying-birds-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "the-flying-birds",
    storageBucket: "the-flying-birds.firebasestorage.app",
    messagingSenderId: "534013143311",
    appId: "1:534013143311:web:2be435e609a8bd2f7bb67a",
    measurementId: "G-HKZ39555YX"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'logo.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
