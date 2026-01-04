const role = localStorage.getItem("role");
if (!role) window.location.href = "login.html";

if (role !== "admin") {
    document.querySelectorAll(".admin-only").forEach(el => el.style.display = "none");
}

let info = JSON.parse(localStorage.getItem("infoUmum")) || [];

function renderInfo() {
    const list = document.getElementById("info-list");
    list.innerHTML = "";

    info.forEach((item, index) => {
        list.innerHTML += `
        <div class="card">
            <h4>${item.judul}</h4>
            <p>${item.isi}</p>

            ${role === "admin" ? `
            <button onclick="hapusInfo(${index})">Hapus</button>
            ` : ""}
        </div>
        `;
    });

    localStorage.setItem("infoUmum", JSON.stringify(info));
}

function tambahInfo() {
    const judul = document.getElementById("judul").value;
    const isi = document.getElementById("isi").value;

    if (!judul || !isi) return alert("Lengkapi data!");

    info.push({ judul, isi });
    renderInfo();

    document.getElementById("judul").value = "";
    document.getElementById("isi").value = "";
}

function hapusInfo(index) {
    if (confirm("Hapus informasi ini?")) {
        info.splice(index, 1);
        renderInfo();
    }
}

function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}

renderInfo();
