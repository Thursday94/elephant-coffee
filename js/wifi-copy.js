const wifiPassword = document.querySelector(".wifi-password");
const wifiDetails = document.getElementById("wifi");

if (window.location.hash === "#wifi" && wifiDetails) {
    wifiDetails.open = true;
}

if (wifiPassword) {
    wifiPassword.addEventListener("click", function () {
        navigator.clipboard.writeText(wifiPassword.dataset.password);

        wifiPassword.textContent = "Hasło skopiowane!";
        wifiPassword.style.filter = "none";
        wifiPassword.style.cursor = "default";
    });
}