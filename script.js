
// navbar
    document.addEventListener("DOMContentLoaded", () => {
        const navbar = document.getElementById("Navbar");
        navbar.style.animation = "slideDown 0.8s ease-out forwards";
    });
// navbar

//tentang
document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.getElementById("About");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          aboutSection.classList.add("animate");
        }
      });
    }, { threshold: 0.5 });

    observer.observe(aboutSection);
  });
//tentang

  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah submit default

    // Ambil data dari form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Format pesan WhatsApp
    const text = `Halo, saya ${name}%0AEmail: ${email}%0APesan: ${message}`;

    // Ganti dengan nomor WhatsApp tujuan (format internasional, tanpa tanda +)
    const phoneNumber = "6289524202684"; // contoh: 62 untuk Indonesia

    // Buat link WhatsApp dan arahkan pengguna
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  });

  let lastScrollTop = 0;
const navbar = document.getElementById("Navbar");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-60px"; // Sembunyikan navbar
    } else {
        navbar.style.top = "0"; // Tampilkan navbar
    }
    lastScrollTop = scrollTop;
});

//navbar hamburger//
// Pilih elemen yang dibutuhkan
const menuToggle = document.querySelector('.menu-toggle');
const navbarNav = document.querySelector('.Navbar-Nav');

// --- KODE LAMA ANDA ---
// Tambahkan event listener saat hamburger menu di-klik
menuToggle.addEventListener('click', function(e) {
    // Mencegah event klik ini "naik" ke document listener di bawah
    // Ini adalah langkah opsional namun baik untuk mencegah konflik
    e.stopPropagation();

    // Toggle class 'active' pada daftar menu dan ikon
    navbarNav.classList.toggle('active');
    menuToggle.classList.toggle('active');
});


// --- KODE BARU YANG DITAMBAHKAN ---
// Menutup hamburger menu ketika klik di luar area navbar
document.addEventListener('click', function(e) {
    // Cek apakah elemen yang di-klik BUKAN ikon hamburger DAN BUKAN bagian dari navbar
    if (!menuToggle.contains(e.target) && !navbarNav.contains(e.target)) {
        
        // Jika kondisi terpenuhi (artinya klik terjadi di luar),
        // maka kita HAPUS class 'active' untuk menutup menu.
        navbarNav.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

//send message//
        // 1. Pilih elemen form
        const contactForm = document.getElementById('contact-form');

        // 2. Tambahkan event listener saat form di-submit
        contactForm.addEventListener('submit', function (e) {
            
            // 3. Hentikan aksi default form (biar halaman tidak refresh)
            e.preventDefault();

            // --- NOMOR TUJUAN ---
            // Ganti nomor di bawah dengan nomor WhatsApp tujuanmu
            // Format: 62... (jangan pakai 08... atau +62)
            const nomorTujuan = '6289524202684'; // <<< GANTI NOMOR INI

            // 4. Ambil isi dari input nama dan pesan
            const nama = document.getElementById('name').value;
            const pesan = document.getElementById('message').value;

            // 5. Buat format pesan untuk WhatsApp
            const templatePesan = `Halo, perkenalkan saya *${nama}*.%0ASaya ingin bertanya tentang:%0A%0A"${pesan}"%0A%0ATerima kasih.`;

            // 6. Buat URL WhatsApp
            const whatsappURL = `https://wa.me/${nomorTujuan}?text=${templatePesan}`;

            // 7. Buka URL di tab baru
            window.open(whatsappURL, '_blank');
        });

        // Ambil elemen modal (ini masih sama)
var modal = document.getElementById("modalSaya");
var modalImg = document.getElementById("gambarBesar");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];
// ... (kode untuk ambil elemen modal tetap sama) ...

// Ambil SEMUA DIV dengan class "portfolio-item"
var portfolioItems = document.querySelectorAll(".portfolio-item");

// Lakukan looping untuk setiap item portofolio
portfolioItems.forEach(function(item) {
  // Tambahkan event 'onclick' ke setiap item
  item.onclick = function() {
    var imgDiDalam = this.querySelector("img"); // Logika ini tetap sama

    modal.style.display = "block";
    modalImg.src = imgDiDalam.src;
    captionText.innerHTML = imgDiDalam.alt;
  }
});

// ... (kode untuk menutup modal juga tetap sama) ...

// Logika untuk menutup modal tetap sama persis
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}