const wifiPassword = document.querySelector(".wifi-password");

if (wifiPassword) {
    wifiPassword.addEventListener("click", function () {
        navigator.clipboard.writeText(wifiPassword.dataset.password);

        wifiPassword.textContent = "Hasło skopiowane!";
        wifiPassword.style.filter = "none";
        wifiPassword.style.cursor = "default";
    });
}