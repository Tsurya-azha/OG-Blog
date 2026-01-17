document.querySelector('.ShareBtn').addEventListener('click', ev => {
        navigator.clipboard.writeText(window.location.href);

    const shareNotification = document.getElementById('ShareNotification');

        shareNotification.innerText = 'Link tersalin!';

        setTimeout(() => {
            shareNotification.innerText = '';
        }, 3 * 1000);
    });