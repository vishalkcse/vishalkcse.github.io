// ================================
// 🌙 DARK MODE TOGGLE + SAVE MODE
// ================================

function toggleTheme() {
    document.body.classList.toggle("dark");

    // Save theme preference
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Load saved theme on page refresh
window.onload = function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }
};


// =====================================
// 📄 DOWNLOAD RESUME (PRINT TO PDF)
// =====================================

function downloadResume() {
    window.print();
}

