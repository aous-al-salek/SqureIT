if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js', { scope: '/' })
        .then(() => {
            console.info('Service worker registered');
        }, err => console.error("Service worker registration failed: ", err));

    navigator.serviceWorker
        .ready
        .then(() => {
            console.info('Service worker ready');
        });
}
