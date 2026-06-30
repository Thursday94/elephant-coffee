const status = document.getElementById('shop-status');

function checkOpeningHours() {
    const now = new Date();
    const day = now.getDay(); // 0=Sun ... 6=Sat
    const currentTime = now.getHours() * 60 + now.getMinutes();

    const schedule = {
        1: [600, 1020], // Mon 10-17
        2: null,        // Tue closed
        3: [540, 1020], // Wed 9-17
        4: [540, 1020], // Thu
        5: [540, 1020], // Fri
        6: [600, 1020], // Sat
        0: [600, 1020]  // Sun
    };

    const dayNames = {
        0: "niedzielę",
        1: "poniedziałek",
        2: "wtorek",
        3: "środę",
        4: "czwartek",
        5: "piątek",
        6: "sobotę"
    };

    const today = schedule[day];

    if (today && currentTime >= today[0] && currentTime < today[1]) {
        status.textContent = "● Otwarte teraz";
        status.classList.add("open");
        status.classList.remove("closed");
        return;
    }

    // Ищем ближайший день открытия
    for (let i = 0; i < 7; i++) {
        const nextDay = (day + i) % 7;
        const hours = schedule[nextDay];

        if (!hours) continue;

        // если сегодня, но ещё не открылись
        if (i === 0 && currentTime < hours[0]) {
            const openHour = Math.floor(hours[0] / 60);
            const openMin = String(hours[0] % 60).padStart(2, "0");

            status.textContent =
                `● Zamknięte — otwieramy dziś o ${openHour}:${openMin}`;
            break;
        }

        // следующий день открытия
        if (i > 0) {
            const openHour = Math.floor(hours[0] / 60);
            const openMin = String(hours[0] % 60).padStart(2, "0");

            status.textContent =
                `● Zamknięte — otwieramy w ${dayNames[nextDay]} o ${openHour}:${openMin}`;
            break;
        }
    }

    status.classList.add("closed");
    status.classList.remove("open");
}

checkOpeningHours();