// Nested conditions for admin access
if (!navigator.onLine) {
    alert("You must be online to access admin");
    window.location.href = "../index.html";
} else if (localStorage.getItem("isAdmin") !== "true") {
    alert("Not logged in! Redirecting...");
    window.location.href = "../login/index.html";
}

function logout() {
    localStorage.removeItem("isAdmin");
    window.location.href = "../login/index.html";
}

function goBlog() {
    window.location.href = "blog.html";
}

function goProducts() {
    window.location.href = "products.html";
}
