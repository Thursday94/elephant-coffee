/* =====================================================
   ELEPHANT COFFEE FINDER
===================================================== */


/* =====================================================
   1. COFFEE PROFILES
===================================================== */

const profiles = {

    classic: {
        name: "Elephant Classic",

        description:
            "Średnio palona, uniwersalna kawa o czekoladowo-orzechowym charakterze, niskiej kwasowości i przyjemnej słodyczy. Świetnie sprawdzi się zarówno w ekspresie, jak i AeroPressie."
    },

    balance: {
        name: "Elephant Balance",

        description:
            "Lżejsza niż Elephant Classic, bardziej delikatna i świeża, ale bez wyraźnej kwasowości. Uniwersalna kawa, która dobrze sprawdzi się zarówno w ekspresie, jak i AeroPressie."
    },

    dark: {
        name: "Elephant Dark",

        description:
            "Najciemniejsze palenie w naszej ofercie – intensywna i głęboka kawa o zdecydowanym profilu, z nutami gorzkiej czekolady, kakao i delikatnie palonym akcentem."
    },

    alternative: {
        name: "Elephant Alternative",

        description:
            "Jasno palona, lekka kawa o kwiatowo-owocowym charakterze i wyraźniejszej kwasowości. Palona specjalnie z myślą o V60 i AeroPressie."
    }

};


/* =====================================================
   2. QUESTIONS
===================================================== */

const questions = [

    /* =================================================
       1 — INTENSITY
    ================================================= */

    {
        text: "Jakiej intensywności kawy szukasz?",

        sub:
            "Wybierz poziom intensywności, który najbardziej Ci odpowiada.",

        answers: [

            {
                title: "Lekkiej",
                description: "Delikatna i łagodna",
                icon: "🌿",

                points: {
                    balance: 8
                }
            },

            {
                title: "Średniej",
                description: "Wyraźna, ale zbalansowana",
                icon: "☕",

                points: {
                    classic: 9
                }
            },

            {
                title: "Wyraźnej",
                description: "Pełna i zdecydowana",
                icon: "🤎",

                points: {
                    classic: 3,
                    dark: 6
                }
            },

            {
                title: "Bardzo intensywnej",
                description: "Głęboka i zdecydowana",
                icon: "🔥",

                points: {
                    dark: 12
                }
            }

        ]
    },


    /* =================================================
       2 — ACIDITY
    ================================================= */

    {
        text: "Jakiej kwasowości lubisz w kawie?",

        sub:
            "Wybierz poziom kwasowości, który najbardziej Ci odpowiada.",

        answers: [

            {
                title: "Bardzo niskiej",
                description: "Gładka i spokojna",
                icon: "🌰",

                points: {
                    dark: 6,
                    classic: 5
                }
            },

            {
                title: "Niskiej",
                description: "Słodka i łagodna",
                icon: "🍫",

                points: {
                    classic: 8,
                    balance: 5
                }
            },

            {
                title: "Bez wyraźnej kwasowości",
                description: "Delikatna i zbalansowana",
                icon: "🍯",

                points: {
                    balance: 8,
                    classic: 3
                }
            },

            {
                title: "Wyraźnej i owocowej",
                description: "Soczysta, świeża i lekko kwaśna",
                icon: "🍓",

                points: {
                    alternative: 15
                }
            }

        ]
    },


    /* =================================================
       3 — FLAVOUR
    ================================================= */

    {
        text: "Jaki charakter smaku najbardziej Ci odpowiada?",

        sub:
            "Wybierz profil smakowy, który najbardziej Cię przyciąga.",

        answers: [

            {
                title: "Czekolada",
                description: "Słodka i głęboka",
                icon: "🍫",

                points: {
                    classic: 8,
                    dark: 3
                }
            },

            {
                title: "Orzechy",
                description: "Kremowe i łagodne",
                icon: "🥜",

                points: {
                    classic: 8,
                    balance: 6
                }
            },

            {
                title: "Kakao / gorzka czekolada",
                description: "Głębokie i intensywne",
                icon: "🖤",

                points: {
                    dark: 12
                }
            },

            {
                title: "Owoce / kwiaty / cytrusy",
                description: "Świeże, aromatyczne i wyraźnie owocowe",
                icon: "🌸",

                points: {
                    alternative: 15
                }
            }

        ]
    },


    /* =================================================
       4 — BREW METHOD
    ================================================= */

    {
        text: "Jak najczęściej przygotowujesz kawę?",

        sub:
            "Sposób przygotowania pomoże dopasować kawę do Twojego rytuału.",

        answers: [

            {
                title: "Espresso",
                description: "Ekspres ciśnieniowy",
                icon: "☕",

                points: {
                    classic: 5,
                    dark: 5
                }
            },

            {
                title: "Kawiarka",
                description: "Moka pot",
                icon: "🫖",

                points: {
                    classic: 4,
                    dark: 5
                }
            },

            {
                title: "Kawa mleczna",
                description: "Latte / cappuccino",
                icon: "🥛",

                points: {
                    classic: 5,
                    dark: 5
                }
            },

            {
                title: "V60 / przelew",
                description: "Lekko, świeżo i aromatycznie",
                icon: "💧",

                points: {
                    alternative: 12
                }
            },

            {
                title: "AeroPress",
                description: "Uniwersalnie i lekko",
                icon: "☕",

                points: {
                    balance: 4,
                    alternative: 5
                }
            }

        ]
    },


    /* =================================================
       5 — FINAL CHOICE
    ================================================= */

    {
        text: "Który profil kawy najbardziej Ci odpowiada?",

        sub:
            "Ostatnie pytanie — wybierz to, czego naprawdę szukasz.",

        answers: [

            {
                title: "Klasyczna i uniwersalna",
                description:
                    "Nie za lekka, nie za intensywna, bez wyraźnej kwasowości",
                icon: "🤎",

                points: {
                    classic: 14
                }
            },

            {
                title: "Lekka i łagodna",
                description:
                    "Delikatna, słodka i bez wyraźnej kwasowości",
                icon: "🌿",

                points: {
                    balance: 14
                }
            },

            {
                title: "Intensywna i głęboka",
                description:
                    "Zdecydowany smak, kakao i gorzka czekolada",
                icon: "🔥",

                points: {
                    dark: 16
                }
            },

            {
                title: "Owocowa i wyraźnie kwasowa",
                description:
                    "Jasne palenie, owoce i kwiaty do V60",
                icon: "🍓",

                points: {
                    alternative: 18
                }
            }

        ]
    }

];


/* =====================================================
   3. STATE
===================================================== */

let currentQuestion = 0;

let selectedAnswer = null;

let scores = {

    classic: 0,
    balance: 0,
    dark: 0,
    alternative: 0

};


/* =====================================================
   4. DOM
===================================================== */

const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const nextButton =
    document.getElementById("next");

const progressElement =
    document.getElementById("progress");

const counterElement =
    document.getElementById("counter");

const centerElement =
    document.getElementById("center");

const quizElement =
    document.getElementById("quiz");

const resultElement =
    document.getElementById("result");

const resultNameElement =
    document.getElementById("resultName");

const resultDescriptionElement =
    document.getElementById("resultDescription");


/* =====================================================
   5. RENDER QUESTION
===================================================== */

function renderQuestion() {

    const question =
        questions[currentQuestion];


    questionElement.style.animation = "none";


    requestAnimationFrame(() => {

        questionElement.style.animation =
            "questionAnimation .6s cubic-bezier(.22,1,.36,1)";

    });


    questionElement.innerHTML = `

        <h2>
            ${question.text}
        </h2>

        <p>
            ${question.sub}
        </p>

    `;


    const number =
        String(currentQuestion + 1)
            .padStart(2, "0");


    const total =
        String(questions.length)
            .padStart(2, "0");


    counterElement.textContent =
        `${number} / ${total}`;


    progressElement.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;


    selectedAnswer = null;

    nextButton.disabled = true;

    answersElement.innerHTML = "";


    question.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");


        button.className = "answer";


        button.innerHTML = `

            <span class="icon">
                ${answer.icon}
            </span>

            <div class="answer-title">
                ${answer.title}
            </div>

            <div class="answer-description">
                ${answer.description}
            </div>

        `;


        button.addEventListener(
            "click",
            () => {

                selectAnswer(
                    answer,
                    button
                );

            }
        );


        button.style.opacity = "0";

        button.style.transform =
            "translateY(15px)";


        answersElement.appendChild(button);


        setTimeout(() => {

            button.style.transition =
                "opacity .4s ease, transform .4s ease";

            button.style.opacity = "1";

            button.style.transform =
                "translateY(0)";

        }, 70 * index);

    });

}


/* =====================================================
   6. SELECT ANSWER
===================================================== */

function selectAnswer(answer, button) {

    document
        .querySelectorAll(".answer")
        .forEach(element => {

            element.classList.remove("selected");

        });


    button.classList.add("selected");


    selectedAnswer = answer;


    nextButton.disabled = false;


    /*
     * Preview radar movement.
     */

    const previewScores = {
        ...scores
    };


    Object
        .keys(answer.points)
        .forEach(profile => {

            previewScores[profile] +=
                answer.points[profile];

        });


    moveRadar(previewScores);

}


/* =====================================================
   7. MOVE RADAR
===================================================== */

function moveRadar(data) {

    const total =
        Object
            .values(data)
            .reduce(
                (sum, value) => sum + value,
                0
            );


    if (total === 0) return;


    const classic =
        data.classic / total;

    const balance =
        data.balance / total;

    const dark =
        data.dark / total;

    const alternative =
        data.alternative / total;


    /*
     * Radar positions:
     *
     * Classic      = LEFT
     * Balance      = RIGHT
     * Alternative  = TOP
     * Dark         = BOTTOM
     */


    const x =
        (-43 * classic)
        +
        (43 * balance);


    const y =
        (-43 * alternative)
        +
        (43 * dark);


    centerElement.style.left =
        `${50 + x}%`;


    centerElement.style.top =
        `${50 + y}%`;


    /*
     * Highlight strongest profile.
     */

    const values = {

        classic,
        balance,
        dark,
        alternative

    };


    const strongest =
        Object
            .keys(values)
            .reduce(
                (a, b) =>
                    values[a] > values[b]
                        ? a
                        : b
            );


    document
        .querySelectorAll(".coffee")
        .forEach(element => {

            element.classList.remove("active");

        });


    const strongestElement =
        document.getElementById(strongest);


    if (strongestElement) {

        strongestElement.classList.add("active");

    }

}


/* =====================================================
   8. NEXT QUESTION
===================================================== */

function nextQuestion() {

    if (!selectedAnswer) return;


    /*
     * Save answer points.
     */

    Object
        .keys(selectedAnswer.points)
        .forEach(profile => {

            scores[profile] +=
                selectedAnswer.points[profile];

        });


    /*
     * Update radar.
     */

    moveRadar(scores);


    /*
     * Continue.
     */

    if (
        currentQuestion <
        questions.length - 1
    ) {

        currentQuestion++;


        setTimeout(() => {

            renderQuestion();

        }, 350);

    }

    else {

        setTimeout(() => {

            showResult();

        }, 900);

    }

}


/* =====================================================
   9. WINNER
===================================================== */

function getWinner() {

    return Object
        .keys(scores)
        .reduce(
            (a, b) =>
                scores[a] > scores[b]
                    ? a
                    : b
        );

}


/* =====================================================
   10. RESULT
===================================================== */

function showResult() {

    const winner =
        getWinner();


    quizElement.style.display =
        "none";


    resultElement.style.display =
        "block";


    resultNameElement.textContent =
        profiles[winner].name;


    resultDescriptionElement.textContent =
        profiles[winner].description;


    /*
     * Final positions.
     */

    const positions = {

        classic: {
            x: 7,
            y: 50
        },

        balance: {
            x: 93,
            y: 50
        },

        alternative: {
            x: 50,
            y: 7
        },

        dark: {
            x: 50,
            y: 93
        }

    };


    const position =
        positions[winner];


    centerElement.style.left =
        `${position.x}%`;


    centerElement.style.top =
        `${position.y}%`;


    /*
     * Highlight winner.
     */

    document
        .querySelectorAll(".coffee")
        .forEach(element => {

            element.classList.remove("active");

        });


    const winnerElement =
        document.getElementById(winner);


    if (winnerElement) {

        winnerElement.classList.add("active");

    }

}


/* =====================================================
   11. RESTART
===================================================== */

function restart() {

    currentQuestion = 0;

    selectedAnswer = null;


    scores = {

        classic: 0,
        balance: 0,
        dark: 0,
        alternative: 0

    };


    quizElement.style.display =
        "block";


    resultElement.style.display =
        "none";


    centerElement.style.left =
        "50%";


    centerElement.style.top =
        "50%";


    document
        .querySelectorAll(".coffee")
        .forEach(element => {

            element.classList.remove("active");

        });


    renderQuestion();

}


/* =====================================================
   12. START
===================================================== */

renderQuestion();