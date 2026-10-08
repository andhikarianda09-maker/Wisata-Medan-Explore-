const destinations = [
    {
        name: "Istana Maimun",
        category: "Wisata Sejarah",
        location: "Medan Maimun, Medan",
        description: "Istana Kesultanan Deli yang menjadi salah satu ikon bersejarah Kota Medan.",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Istana%20Maimun%2C%20Medan.jpg",
        source: "Anton Leddin / Wikimedia Commons"
    },
    {
        name: "Tjong A Fie Mansion",
        category: "Wisata Sejarah",
        location: "Kesawan, Medan",
        description: "Rumah bersejarah Tjong A Fie dengan arsitektur dan kisah budaya yang menarik.",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Skewed_Front_View%2C_Tjong_A_Fie_Mansion%2C_Medan.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
        source: "Herusutimbul / Wikimedia Commons"
    },
    {
        name: "Masjid Raya Al-Mashun",
        category: "Wisata Sejarah",
        location: "Medan Kota, Medan",
        description: "Masjid bersejarah peninggalan Kesultanan Deli dengan arsitektur yang khas.",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Masjid%20Raya%20Al-Mashun%20Medan.jpg",
        source: "Herusutimbul / Wikimedia Commons"
    },
    {
        name: "Air Terjun Sipiso-piso",
        category: "Alam",
        location: "Karo, Sumatera Utara",
        description: "Air terjun tinggi dengan panorama alam pegunungan yang sangat indah.",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sipiso-piso%20Waterfalls.jpg",
        source: "Wikimedia Commons"
    },
    {
        name: "Danau Toba",
        category: "Alam",
        location: "Sumatera Utara",
        description: "Danau vulkanik luas dengan panorama pegunungan dan budaya Batak.",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Danau%20toba.png",
        source: "Zaenulihsan91 / Wikimedia Commons"
    },
    {
        name: "Taman Cadika",
        category: "Rekreasi",
        location: "Medan Johor, Medan",
        description: "Ruang terbuka hijau yang cocok untuk bersantai, olahraga, dan menikmati alam.",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Taman%20Cadika%20Medan%20Johor.jpg",
        source: "Wikimedia Commons"
    },
    {
        name: "Lapangan Merdeka",
        category: "Rekreasi",
        location: "Kesawan, Medan",
        description: "Ruang publik bersejarah di pusat Kota Medan yang sering digunakan untuk kegiatan warga.",
        image: "https://assetd.kompas.id/E_e96XvtE3W5TNDqaYS4jnSiDzg=/480x480/smart/filters:format(webp):quality(80)/https://asset.kgnewsroom.com/photo/pre/2025/02/19/cdef6dc5-3e22-4694-835e-a2d3fa9ea2fc_jpg.jpg",
        source: "Fadhil Dimas Nabillah / Wikimedia Commons"
    },
    {
        name: "Soto Medan",
        category: "Kuliner",
        location: "Kota Medan",
        description: "Kuliner khas Medan dengan kuah santan yang gurih dan kaya rempah.",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Soto%20medan.jpg",
        source: "Fachriazmi9 / Wikimedia Commons"
    },
    {
        name: "Bika Ambon",
        category: "Kuliner",
        location: "Kota Medan",
        description: "Kue khas Medan dengan tekstur berserat dan rasa manis yang khas.",
        image: "https://pesonanusantara.co.id/images/upload//b/o/bolumerantiwdd_02produk_variasi_04bikambon.jpg",
        source: "Taman Renyah / Wikimedia Commons"
    },
    {
        name: "Kuil Shri Mariamman",
        category: "Wisata Sejarah",
        location: "Kampung Madras, Medan",
        description: "Kuil Hindu bersejarah yang menjadi bagian dari keragaman budaya Kota Medan.",
        image: "https://awsimages.detik.net.id/community/media/visual/2023/10/04/gerbang-kuil-shri-mariamman-di-medan-farid-achyadi-siregardetiksumut-1_169.jpeg?w=620",
        source: "Wikimedia Commons"
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
        success.textContent = "Pesan berhasil divalidasi dan siap dikirim.";
        event.target.reset();
    }
});
