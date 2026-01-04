document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    // DATABASE AKUN (SIMPLE)
    const users = [
        { username: "admin1", password: "admin123", role: "admin" },
        { username: "admin2", password: "admin456", role: "admin" },

        { username: "siswa", password: "siswa123", role: "siswa" },
    ];

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem("username", user.username);
        localStorage.setItem("role", user.role);
        window.location.href = "home.html";
    } else {
        error.textContent = "Username atau password salah!";
    }
});
