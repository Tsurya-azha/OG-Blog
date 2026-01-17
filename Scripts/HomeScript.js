function bukaBlogRandom() {
    const daftarUrl = [
        'Blog1.html',
        'Blog2.html',
        'Blog3.html',
        'Blog4.html'
    ];

    const indeksAcak = Math.floor(Math.random() * daftarUrl.length);
    window.location.href = daftarUrl[indeksAcak];
}
document.querySelector('.BtnAcak').addEventListener('click', function() {
    bukaBlogRandom();
});