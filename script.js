function buatconfetti() {
    const warna =  ['#ffd23f', '#3ddc97','#ff3366', '#33ccff', '#ff9933',
        '#ffffff'
     ];

     for (let i=0; i<70; i++) {
        const confetti = document.createElement('div');
        confetti.className='confetti';

        confetti.style.left = Math.random()  * 100 + 'vw';

        confetti.style.backgroundColor =  warna[Math.floor(Math.random() * warna.length)];
         confetti.style.width = (Math.random() * 8 + 6) + 'px';
        confetti.style.height = (Math.random() * 12 + 8) + 'px';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4000);
     }
}



const tombol = document.getElementById('btn-pesta');
tombol.addEventListener('click', buatconfetti);
// Kontrol Musik Play / Pause
const btnMusik = document.getElementById('btn-musik');
const lagu = document.getElementById('lagu');

btnMusik.addEventListener('click', () => {
    if (lagu.paused) {
        lagu.play();
        btnMusik.innerText = '⏸️ Jeda Musik';
    } else {
        lagu.pause();
        btnMusik.innerText = '🎵 Putar Musik';
    }
});
// Membuat Langit Malam Berbintang
function buatBintang() {
    const jumlahBintang = 70;

    for (let i = 0; i < jumlahBintang; i++) {
        const bintang = document.createElement('div');
        bintang.className = 'bintang';

        // Posisi acak di seluruh layar (lebar & tinggi)
        bintang.style.left = Math.random() * 100 + 'vw';
        bintang.style.top = Math.random() * 100 + 'vh';

        // Ukuran acak antara 1px sampai 3px (kecil imut)
        const ukuran = Math.random() * 2 + 1;
        bintang.style.width = ukuran + 'px';
        bintang.style.height = ukuran + 'px';

        // Kecepatan dan jeda kedip acak agar tidak kedip serempak
        bintang.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
        bintang.style.animationDelay = Math.random() * 2 + 's';

        document.body.appendChild(bintang);
    }
}

// Jalankan otomatis
buatBintang();
// Aksi saat tombol "Open Me" diklik
const btnOpen = document.getElementById('btn-open');
const layarBuka = document.getElementById('layar-buka');

btnOpen.addEventListener('click', () => {
    // 1. Hilangkan layar pembuka secara mulus
    layarBuka.classList.add('buka-hilang');

    // 2. Putar lagu otomatis
    lagu.play();
    btnMusik.innerText = '⏸️ Jeda Musik';

    // 3. Ledakkan confetti meriah!
    buatconfetti();
});