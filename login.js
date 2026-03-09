const ADMIN_USER = "cubingadmin";
const ADMIN_PASS = "cubemaster123";

function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (navigator.onLine) {  // check internet
        if (user && pass) {   // user entered credentials
            if (user === ADMIN_USER && pass === ADMIN_PASS) { // admin check
                localStorage.setItem("isAdmin", "true");
                message.style.color = "green";
                message.textContent = "Login successful! Redirecting...";
                setTimeout(() => {
                    window.location.href = "../admin/index.html";
                }, 1000);
            } else {
                message.textContent = "Incorrect credentials";
            }
        } else {
            message.textContent = "Please enter username and password";
        }
    } else {
        message.textContent = "You must be online to login";
    }
}

// redirect if already logged in and online
if(localStorage.getItem("isAdmin") === "true" && navigator.onLine) {
    window.location.href = "../admin/index.html";
}
