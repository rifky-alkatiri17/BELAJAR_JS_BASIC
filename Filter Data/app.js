const sentences = [
  "Kopi hitam tanpa gula",
  "Gula pasir manis",
  "Air mineral dingin",
  "Teh hangat di pagi hari",
  "Susu segar murni",
  "Coklat panas susu",
  "Kopi susu gula aren",
  "Es teh lemon segar"
];

const search = document.getElementById("search");
const box = document.getElementById("suggest-box");
const list = document.querySelector('.list');

search.addEventListener("keyup", () => {
  const keyword = search.value.toLowerCase();

  if (keyword === "") {
    box.style.display = "none";
    return;
  }

  const filtered = sentences.filter(item =>
    item.toLowerCase().includes(keyword)
  );

  // Jika tidak ada hasil
  if (filtered.length === 0) {
    box.innerHTML = "<li>Tidak ada hasil</li>";
    box.style.display = "block";
    return;
  }

  // Buat daftar suggestion
  box.innerHTML = "";
  filtered.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;

    // klik suggestion → isi input
    li.addEventListener("click", () => {
      search.value = item;
      box.style.display = "none";
    });

    box.appendChild(li);
  });

  box.style.display = "block";
});

// sembunyikan dropdown ketika klik di luar
document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-box")) {
    box.style.display = "none";
  }
});

// buat elemen ul
const ul = document.createElement("ul");

//looping li
sentences.forEach(item => {
  const li = document.createElement('li');  
  li.textContent = item;
  ul.appendChild(li)
});

//menampilkan list
list.appendChild(ul)
