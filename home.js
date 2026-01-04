const role = localStorage.getItem("role");

if (!role) {
    window.location.href = "login.html";
}

document.getElementById("userRole").innerText =
    role === "admin" ? "Login sebagai ADMIN" : "Login sebagai SISWA";
