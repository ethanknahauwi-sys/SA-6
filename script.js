
function beli(namaMakanan) {
    alert("Berhasil! " + namaMakanan + " telah ditambahkan ke keranjang belanja.");
}

function prosesDaftar(event) {
    event.preventDefault(); 
    alert("Registrasi Berhasil! Selamat Datang di Nusantara Delight.");
    window.location.href = "index.html"; 
}