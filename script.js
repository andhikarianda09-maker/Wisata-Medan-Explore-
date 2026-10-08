const destinations = [
    {
        name: "Istana Maimun",
        category: "Wisata Sejarah",
        location: "Medan Maimun, Medan",
        description: "Istana Kesultanan Deli yang menjadi salah satu ikon bersejarah Kota Medan.",
        detailDescription: "Istana Maimun adalah istana bersejarah yang dibangun pada tahun 1888 oleh Sultan Deli, Sultan Ma'mun Al Rashid Perkasa Alamsyah. Istana ini menggabungkan arsitektur Melayu, Islam, Spanyol, India, dan Italia. Dengan warna kuning yang mencolok, Istana Maimun menjadi simbol kebanggaan Kota Medan dan merupakan salah satu destinasi wisata sejarah yang populer di Sumatera Utara.",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Istana%20Maimun%2C%20Medan.jpg",
        source: "Anton Leddin / Wikimedia Commons",
        rating: "4.6 (1,2k ulasan)",
        hours: "08.00 - 17.00 WIB",
        ticket: "Rp 10.000",
        address: "Jl. Brigjend Katamso No.66, Medan Maimun, Medan",
        gallery: [
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Istana%20Maimun%2C%20Medan.jpg",
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Istana%20Maimun%2C%20Medan.jpg",
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Istana%20Maimun%2C%20Medan.jpg",
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Istana%20Maimun%2C%20Medan.jpg"
],
        maps: "https://maps.app.goo.gl/EX6SW93S7VQ2diaZ8"
    },
    {
        name: "Tjong A Fie Mansion",
        category: "Wisata Sejarah",
        location: "Kesawan, Medan",
        description: "Rumah bersejarah Tjong A Fie dengan arsitektur dan kisah budaya yang menarik.",
        detailDescription: "Tjong A Fie Mansion adalah rumah bersejarah yang dibangun oleh Tjong A Fie, seorang pengusaha sukses keturunan Tionghoa di Medan pada awal abad ke-20. Rumah ini menampilkan arsitektur unik yang menggabungkan gaya Tionghoa, Eropa, dan Melayu. Selain sebagai tempat tinggal, mansion ini juga menjadi pusat kegiatan sosial dan bisnis pada masanya. Saat ini, Tjong A Fie Mansion menjadi destinasi wisata sejarah yang menarik bagi pengunjung yang ingin mengetahui lebih dalam tentang sejarah dan budaya Medan.",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Skewed_Front_View%2C_Tjong_A_Fie_Mansion%2C_Medan.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
        source: "Herusutimbul / Wikimedia Commons",
        rating: "4.5 (800 ulasan)",
        hours: "09.00 - 16.00 WIB",
        ticket: "Rp 15.000",
        address: "Jl. Kebon Sirih No.12, Kesawan, Medan",
        maps: "https://maps.app.goo.gl/2m3jMTudvdSSmZAD9"
    },
    {
        name: "Masjid Raya Al-Mashun",
        category: "Wisata Sejarah",
        location: "Medan Kota, Medan",
        description: "Masjid bersejarah peninggalan Kesultanan Deli dengan arsitektur yang khas.",
        detailDescription: "Masjid Raya Al-Mashun, juga dikenal sebagai Masjid Raya Medan, adalah masjid bersejarah yang dibangun pada tahun 1906 oleh Sultan Ma'mun Al Rashid Perkasa Alamsyah dari Kesultanan Deli. Masjid ini menampilkan arsitektur yang menggabungkan gaya Timur Tengah, India, dan Spanyol. Dengan kubah besar dan menara yang menjulang, masjid ini menjadi salah satu ikon keagamaan dan budaya di Kota Medan. Selain sebagai tempat ibadah, Masjid Raya Al-Mashun juga menjadi destinasi wisata sejarah yang menarik bagi pengunjung yang ingin mengeksplorasi warisan budaya Islam di Sumatera Utara.",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Masjid%20Raya%20Al-Mashun%20Medan.jpg",
        source: "Herusutimbul / Wikimedia Commons",
        rating: "4.7 (1,5k ulasan)",
        hours: "05.00 - 20.00 WIB",
        ticket: "Gratis",
        address: "Jl. Sisingamangaraja No.1, Medan Kota, Medan",
        maps: "https://maps.app.goo.gl/npXDwVrSVFWd92m4A"
    
    },
    {
        name: "Air Terjun Sipiso-piso",
        category: "Alam",
        location: "Karo, Sumatera Utara",
        description: "Air terjun tinggi dengan panorama alam pegunungan yang sangat indah.",
        detailDescription: "Air Terjun Sipiso-piso adalah salah satu air terjun tertinggi di Indonesia, dengan ketinggian sekitar 120 meter. Terletak di Kabupaten Karo, Sumatera Utara, air terjun ini menawarkan pemandangan alam yang menakjubkan, termasuk tebing curam dan lembah yang hijau. Nama 'Sipiso-piso' berasal dari bahasa Batak yang berarti 'pisau', menggambarkan bentuk air terjun yang seperti pisau yang jatuh dari tebing. Selain keindahan alamnya, lokasi ini juga menjadi tempat populer untuk fotografi dan wisata alam bagi pengunjung yang ingin menikmati udara segar pegunungan.",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sipiso-piso%20Waterfalls.jpg",
        source: "Wikimedia Commons",
        rating: "4.8 (2k ulasan)",
        hours: "08.00 - 17.00 WIB",
        ticket: "Rp 5.000",
        address: "Kec. Merek, Kab. Karo, Sumatera Utara",
        maps: "https://maps.app.goo.gl/4WPB6kZykhFVd5SP7"
    },
    {
        name: "Danau Toba",
        category: "Alam",
        location: "Sumatera Utara",
        description: "Danau vulkanik luas dengan panorama pegunungan dan budaya Batak.",
        detailDescription: "Danau Toba adalah danau vulkanik terbesar di Indonesia dan salah satu yang terbesar di dunia, terletak di Provinsi Sumatera Utara. Danau ini terbentuk dari letusan gunung berapi purba dan memiliki panjang sekitar 100 km dan lebar 30 km. Di tengah danau terdapat Pulau Samosir, yang merupakan pusat budaya Batak. Danau Toba menawarkan pemandangan alam yang menakjubkan, termasuk pegunungan hijau, air jernih, dan udara segar. Selain keindahan alamnya, Danau Toba juga menjadi destinasi wisata populer untuk kegiatan seperti berenang, berperahu, dan menjelajahi budaya lokal.",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Danau%20toba.png",
        source: "Zaenulihsan91 / Wikimedia Commons",
        rating: "4.6 (1,2k ulasan)",
        hours: "06.00 - 18.00 WIB",
        ticket: "Rp 3.000",
        address: "Kab. Tapanuli Utara, Sumatera Utara",
        maps: "https://maps.app.goo.gl/Xep6ApAT3yXGwGxC6"
    },
    {
        name: "Taman Cadika",
        category: "Rekreasi",
        location: "Medan Johor, Medan",
        description: "Ruang terbuka hijau yang cocok untuk bersantai, olahraga, dan menikmati alam.",
        detailDescription: "Taman Cadika adalah taman kota yang terletak di Medan Johor, Medan. Taman ini menyediakan ruang terbuka hijau yang luas, cocok untuk berbagai kegiatan rekreasi seperti berjalan-jalan, berolahraga, atau sekadar bersantai menikmati udara segar. Dengan pepohonan rindang dan area bermain anak-anak, Taman Cadika menjadi tempat favorit bagi warga lokal dan wisatawan untuk melepas penat dari kesibukan kota. Selain itu, taman ini juga sering digunakan untuk acara komunitas dan kegiatan sosial.",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Taman%20Cadika%20Medan%20Johor.jpg",
        source: "Wikimedia Commons",
        rating: "4.5 (800 ulasan)",
        hours: "07.00 - 19.00 WIB",
        ticket: "Gratis",
        address: "Jl. Sisingamangaraja No.1, Medan Kota, Medan",
        maps: "https://maps.app.goo.gl/nV2cRHRtGzeijy8P6"
    },
    {
        name: "Lapangan Merdeka",
        category: "Rekreasi",
        location: "Kesawan, Medan",
        description: "Ruang publik bersejarah di pusat Kota Medan yang sering digunakan untuk kegiatan warga.",
        detailDescription: "Lapangan Merdeka adalah sebuah ruang publik yang terletak di pusat Kota Medan, Sumatera Utara. Lapangan ini memiliki nilai sejarah yang tinggi karena menjadi saksi berbagai peristiwa penting dalam sejarah kota. Selain itu, Lapangan Merdeka juga menjadi tempat favorit bagi warga lokal untuk berolahraga, bersantai, dan mengadakan berbagai kegiatan komunitas. Dengan pemandangan yang indah dan udara yang sejuk, lapangan ini menjadi salah satu destinasi rekreasi yang populer di Medan.",
        image: "https://assetd.kompas.id/E_e96XvtE3W5TNDqaYS4jnSiDzg=/480x480/smart/filters:format(webp):quality(80)/https://asset.kgnewsroom.com/photo/pre/2025/02/19/cdef6dc5-3e22-4694-835e-a2d3fa9ea2fc_jpg.jpg",
        source: "Fadhil Dimas Nabillah / Wikimedia Commons",
        rating: "4.4 (600 ulasan)",
        hours: "06.00 - 20.00 WIB",
        ticket: "Gratis",
        address: "Jl. Merdeka No.1, Kesawan, Medan",
        maps: "https://maps.app.goo.gl/cNVuxneuwKgJ8ecbA"
    },
    {
        name: "Soto Medan",
        category: "Kuliner",
        location: "Kota Medan",
        description: "Kuliner khas Medan dengan kuah santan yang gurih dan kaya rempah.",
        detailDescription: "Soto ttps://mapsMedan adalah salah satu kuliner khas Kota Medan yang terkenal dengan kuah santannya yang gurih dan kaya rempah. Hidangan ini biasanya disajikan dengan potongan daging ayam atau sapi, bihun, tauge, dan taburan bawang goreng. Soto Medan memiliki cita rasa yang unik dan menjadi favorit bagi warga lokal maupun wisatawan yang berkunjung ke Medan. Selain rasanya yang lezat, Soto Medan juga dikenal sebagai makanan yang menghangatkan tubuh, terutama saat cuaca dingin.",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Soto%20medan.jpg",
        source: "Fachriazmi9 / Wikimedia Commons",
        rating: "4.3 (500 ulasan)",
        hours: "07.00 - 21.00 WIB",
        ticket: "Rp 15.000",
        address: "-",
        maps: "-"
    },
    {
        name: "Bika Ambon",
        category: "Kuliner",
        location: "Kota Medan",
        description: "Kue khas Medan dengan tekstur berserat dan rasa manis yang khas.",
        detailDescription: "Bika Ambon adalah kue tradisional khas Kota Medan yang terkenal dengan teksturnya yang berserat dan rasa manis yang khas. Kue ini terbuat dari campuran tepung tapioka, santan, gula, dan ragi, yang kemudian dipanggang hingga menghasilkan tekstur yang kenyal dan berongga. Bika Ambon biasanya disajikan dalam potongan kecil dan memiliki aroma pandan yang harum. Kue ini menjadi oleh-oleh favorit bagi wisatawan yang berkunjung ke Medan dan merupakan bagian dari kekayaan kuliner Indonesia.",
        image: "https://pesonanusantara.co.id/images/upload//b/o/bolumerantiwdd_02produk_variasi_04bikambon.jpg",
        source: "Taman Renyah / Wikimedia Commons",
        rating: "4.2 (400 ulasan)",
        hours: "08.00 - 20.00 WIB",
        ticket: "Rp 10.000",
        address: "-",
        maps: "-"
    },
    {
        name: "Kuil Shri Mariamman",
        category: "Wisata Sejarah",
        location: "Kampung Madras, Medan",
        description: "Kuil Hindu bersejarah yang menjadi bagian dari keragaman budaya Kota Medan.",
        detailDescription: "Kuil Shri Mariamman adalah sebuah kuil Hindu bersejarah yang terletak di Kampung Madras, Medan. Kuil ini memiliki arsitektur yang unik dan merupakan bagian dari keragaman budaya Kota Medan. Kuil ini menjadi tempat ibadah bagi umat Hindu di wilayah tersebut dan juga menjadi destinasi wisata yang menarik bagi para pengunjung yang ingin mengetahui lebih banyak tentang budaya dan agama di Medan.",
        image: "https://awsimages.detik.net.id/community/media/visual/2023/10/04/gerbang-kuil-shri-mariamman-di-medan-farid-achyadi-siregardetiksumut-1_169.jpeg?w=620",
        source: "Wikimedia Commons",
        rating: "4.1 (300 ulasan)",
        hours: "08.00 - 17.00 WIB",
        ticket: "Rp 5.000",
        address: "Kampung Madras, Medan",
        maps: "https://maps.app.goo.gl/mJDg5ajo2pDym6wr6"
    }
];

const gallery = destinations.slice(0, 8);

const destinationContainer = document.getElementById("destinationContainer");
const topDestination = document.getElementById("topDestination");
const galleryGrid = document.getElementById("galleryGrid");
const searchInput = document.getElementById("searchInput");

function cardTemplate(item) {
    return `
        <article class="destination-card">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="card-body">
                <span class="badge">${item.category}</span>
                <h3>${item.name}</h3>
                <div class="location">Lokasi: ${item.location}</div>
                <p>${item.description}</p>
            </div>
        </article>
    `;
}

function renderDestinations(items) {
    if (!items.length) {
        destinationContainer.innerHTML =
            `<p style="grid-column:1/-1;text-align:center;color:#81928c">Destinasi tidak ditemukan.</p>`;
        return;
    }
    destinationContainer.innerHTML = items.map(cardTemplate).join("");
}

function renderTop() {
    const top = [
        destinations[0],
        destinations[4],
        destinations[1],
        destinations[3],
        destinations[6]
    ];

    topDestination.innerHTML = top.map((item, index) => `
        <article class="top-card">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="card-body">
                <span class="rank">${index + 1}</span>
                <h3>${item.name}</h3>
                <div class="location">${item.category}</div>
            </div>
        </article>
    `).join("");
}

function renderGallery() {
    galleryGrid.innerHTML = gallery.map(item => `
        <div class="gallery-item" data-image="${item.image}" data-caption="${item.name}">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
    `).join("");
}

renderDestinations(destinations);
renderTop();
renderGallery();

let selectedCategory = "Semua";

document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        selectedCategory = button.dataset.category;
        applySearch();
    });
});

function applySearch() {
    const keyword = searchInput.value.toLowerCase().trim();

    const result = destinations.filter(item => {
        const categoryMatch =
            selectedCategory === "Semua" || item.category === selectedCategory;

        const searchMatch =
            item.name.toLowerCase().includes(keyword);

        return categoryMatch && searchMatch;
    });

    renderDestinations(result);
}

searchInput.addEventListener("input", applySearch);

const heroSearch = document.getElementById("heroSearch");
const heroSearchBtn = document.getElementById("heroSearchBtn");

function runHeroSearch() {
    searchInput.value = heroSearch.value;
    document.getElementById("destinasi").scrollIntoView({ behavior: "smooth" });
    applySearch();
}

heroSearch.addEventListener("keydown", event => {
    if (event.key === "Enter") runHeroSearch();
});

heroSearchBtn.addEventListener("click", runHeroSearch);

document.getElementById("navSearch").addEventListener("click", () => {
    document.getElementById("searchInput").focus();
    document.getElementById("destinasi").scrollIntoView({ behavior: "smooth" });
});

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");

galleryGrid.addEventListener("click", event => {
    const item = event.target.closest(".gallery-item");
    if (!item) return;

    modalImage.src = item.dataset.image;
    modalCaption.textContent = item.dataset.caption;
    modal.classList.remove("hidden");
});

function closeImageModal() {
    modal.classList.add("hidden");
    modalImage.src = "";
}

document.getElementById("closeModal").addEventListener("click", closeImageModal);

modal.addEventListener("click", event => {
    if (event.target === modal) closeImageModal();
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeImageModal();
});

document.getElementById("contactForm").addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("nameError");
    const messageError = document.getElementById("messageError");
    const success = document.getElementById("successMessage");

    nameError.textContent = "";
    messageError.textContent = "";
    success.textContent = "";

    let valid = true;

    if (name === "") {
        nameError.textContent = "Nama wajib diisi.";
        valid = false;
    }

    if (message === "") {
        messageError.textContent = "Pesan wajib diisi.";
        valid = false;
    }

    if (valid) {
        const emailTujuan = "wisatamedanexplore@gmail.com";

    window.location.href =
    `mailto:${emailTujuan}?subject=${encodeURIComponent("Tanya Tentang Destinasi")}&body=${encodeURIComponent(`Nama: ${name}\n\nPesan: ${message}`)}`;
    }
});

const detailModal = document.createElement("div");

detailModal.className = "detail-modal-overlay hidden";

detailModal.innerHTML = `
    <div class="detail-modal-box">

        <button id="detailClose">×</button>

        <img id="detailImage" class="detail-main-image">

        <div id="detailGallery" class="detail-gallery"></div>

        <div class="detail-body">

            <span id="detailCategory" class="badge"></span>

            <h2 id="detailTitle"></h2>

            <div class="detail-location-rating">
                <div>
                    📍
                    <span>
                        <small>Lokasi</small>
                        <b id="detailLocation"></b>
                    </span>
                </div>

                <div>
                    ⭐
                    <span>
                        <small>Rating</small>
                        <b id="detailRating"></b>
                    </span>
                </div>
            </div>

            <h3>Deskripsi</h3>

            <p id="detailDescription"></p>

            <div class="detail-info">

                <div>
                    🏛️
                    <span>
                        <small>Kategori</small>
                        <b id="detailCategoryInfo"></b>
                    </span>
                </div>

                <div>
                    🎟️
                    <span>
                        <small>Harga Tiket</small>
                        <b id="detailTicket"></b>
                    </span>
                </div>

                <div>
                    🕐
                    <span>
                        <small>Jam Operasional</small>
                        <b id="detailHours"></b>
                    </span>
                </div>

                <div>
                    📍
                    <span>
                        <small>Alamat</small>
                        <b id="detailAddress"></b>
                    </span>
                </div>

            </div>

            <div class="detail-buttons">

                <button id="detailMaps">
                    📍 Lihat di Google Maps →
                </button>

                <button id="detailShare">
                    ↗ Bagikan →
                </button>

            </div>

        </div>
    </div>
`;

document.body.appendChild(detailModal);


// Ketika card diklik
destinationContainer.addEventListener("click", function(event) {

    const card = event.target.closest(".destination-card");

    if (!card) return;

    const name = card.querySelector("h3").textContent;

    const item = destinations.find(function(destination) {
        return destination.name === name;
    });

    if (!item) return;


    // Isi data popup
    document.getElementById("detailImage").src = item.image;

    document.getElementById("detailTitle").textContent = item.name;

    document.getElementById("detailCategory").textContent = item.category;

    document.getElementById("detailLocation").textContent = item.location;

    document.getElementById("detailRating").textContent =
        item.rating || "-";

    document.getElementById("detailDescription").textContent =
        item.detailDescription || item.description;

    document.getElementById("detailCategoryInfo").textContent =
        item.category;

    document.getElementById("detailTicket").textContent =
        item.ticket || "-";

    document.getElementById("detailHours").textContent =
        item.hours || "-";

    document.getElementById("detailAddress").textContent =
        item.address || "-";


    // Gallery
    const gallery = document.getElementById("detailGallery");

    gallery.innerHTML = "";

    if (item.gallery) {

        item.gallery.forEach(function(image) {

            const img = document.createElement("img");

            img.src = image;

            img.onclick = function() {
                document.getElementById("detailImage").src = image;
            };

            gallery.appendChild(img);

        });

    }


    // Tombol Google Maps
    document.getElementById("detailMaps").onclick = function() {
        window.open(item.maps, "_blank");
    };


    // Tombol Bagikan
    document.getElementById("detailShare").onclick = function() {

        navigator.clipboard.writeText(window.location.href);

        alert("Link berhasil disalin!");

    };


    // Tampilkan popup
    detailModal.classList.remove("hidden");

});


// Tombol tutup
document.getElementById("detailClose").onclick = function() {

    detailModal.classList.add("hidden");

};


// Klik area luar popup untuk menutup
detailModal.onclick = function(event) {

    if (event.target === detailModal) {
        detailModal.classList.add("hidden");
    }

};
