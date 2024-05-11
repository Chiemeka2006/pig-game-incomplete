"use strict";

const dice = document.querySelector(".dice");
const pvpCard = document.querySelector(".player");
const computerCard = document.querySelector(".computer");
const welcomeCards = document.querySelectorAll(".card");
const welcome = document.querySelector(".welcome");
const cover = document.querySelectorAll(".cover");
const main = document.querySelector("main");
const main2 = document.querySelector(".main");
const title = document.querySelectorAll(".title");
const btn = document.querySelectorAll(".container button");
const newBtn = document.querySelector(".new-game");
const diceBtn = document.querySelector(".dice-btn");
const holdBtn = document.querySelector(".hold");
const currentScoreEl1 = document.querySelector(".first-play .current-score");
const totalScoreEl1 = document.querySelector(".first-play .total-score");
const totalScoreEl2 = document.querySelector(".second-play .total-score");
const currentScoreEl2 = document.querySelector(".second-play .current-score");
const player1 = document.querySelector(".first-play");
const player2 = document.querySelector(".second-play");
const audio = document.querySelector("audio");
const navBtns = document.querySelectorAll("nav li");
const navBtnsBefore = document.querySelectorAll("nav li .shade");
const navBtnsImg = document.querySelectorAll("nav li img");

let diceRoll = Number(Math.trunc(Math.random() * 6) + 1);
let totalScore1, currentScore, totalScore2;
let scores = [0, 0];

const initial = function () {
    scores = [0, 0];
    totalScore1 = 0;
    totalScore2 = 0;
    currentScore = 0;
    currentScoreEl1.textContent = currentScore;
    currentScoreEl2.textContent = currentScore;
    totalScoreEl1.textContent = totalScore1;
    totalScoreEl2.textContent = totalScore2;
    player1.classList.add("player-active");
    player1.classList.remove("player-winner");
    player2.classList.remove("player-active");
    dice.style.transform = "rotateX(150deg) rotateY(-135deg)";
};

initial();

function switchPlayer() {
    if (player1.classList.contains("player-active")) {
        // player 1
        player1.classList.remove("player-active");
        player2.classList.add("player-active");
        currentScoreEl1.textContent = 0;
    } else if (player2.classList.contains("player-active")) {
        // player 2
        player2.classList.remove("player-active");
        player1.classList.add("player-active");
        currentScoreEl2.textContent = 0;
    }
}

const rollDice = () => {
    setTimeout(() => {
        switch (diceRoll) {
            case 1:
                if (dice.style.transform == "rotateX(360deg) rotateY(360deg)") {
                    dice.style.transform = "rotateX(720deg) rotateY(720deg)";
                    console.log(`case ${diceRoll}`);
                } else {
                    dice.classList.add("one");
                    setTimeout(() => {
                        dice.classList.remove("one");
                    }, 1050);
                    dice.style.transform = "rotateX(360deg) rotateY(360deg)";
                }
                break;
            case 0:
                if (dice.style.transform == "rotateX(360deg) rotateY(360deg)") {
                    dice.style.transform = "rotateX(720deg) rotateY(720deg)";
                    console.log(`case ${diceRoll}`);
                } else {
                    dice.classList.add("one");
                    setTimeout(() => {
                        dice.classList.remove("one");
                    }, 1050);
                    dice.style.transform = "rotateX(360deg) rotateY(360deg)";
                }
                break;

            case 6:
                if (dice.style.transform == "rotateX(540deg) rotateY(360deg)") {
                    dice.style.transform = "rotateX(900deg) rotateY(720deg)";
                    console.log(`case ${diceRoll}`);
                } else {
                    dice.classList.add("six");
                    setTimeout(() => {
                        dice.classList.remove("six");
                    }, 1050);
                    dice.style.transform = "rotateX(540deg) rotateY(360deg)";
                }
                break;

            case 2:
                if (dice.style.transform == "rotateX(-90deg) rotateY(360deg)") {
                    dice.style.transform = "rotateX(-450deg) rotateY(720deg)";
                    console.log(`case ${diceRoll}`);
                } else {
                    dice.classList.add("two");
                    setTimeout(() => {
                        dice.classList.remove("two");
                    }, 1050);
                    dice.style.transform = "rotateX(-90deg) rotateY(360deg)";
                }
                break;

            case 5:
                if (dice.style.transform == "rotateX(90deg) rotateY(360deg)") {
                    dice.style.transform = "rotateX(450deg) rotateY(720deg)";
                    console.log(`case ${diceRoll}`);
                } else {
                    dice.classList.add("five");
                    setTimeout(() => {
                        dice.classList.remove("five");
                    }, 1050);
                    dice.style.transform = "rotateX(90deg) rotateY(360deg)";
                    console.log("normal");
                }
                break;

            case 3:
                if (dice.style.transform == "rotateX(360deg) rotateY(90deg)") {
                    dice.style.transform = "rotateX(720deg) rotateY(450deg)";
                    console.log(`case ${diceRoll}`);
                } else {
                    dice.classList.add("three");
                    setTimeout(() => {
                        dice.classList.remove("three");
                    }, 1050);
                    dice.style.transform = "rotateX(360deg) rotateY(90deg)";
                }
                break;

            case 4:
                if (dice.style.transform == "rotateX(360deg) rotateY(-90deg)") {
                    dice.style.transform = "rotateX(720deg) rotateY(-450deg)";
                    console.log(`case ${diceRoll}`);
                } else {
                    dice.classList.add("four");
                    setTimeout(() => {
                        dice.classList.remove("four");
                    }, 1050);
                    dice.style.transform = "rotateX(360deg) rotateY(-90deg)";
                }
                break;

            default:
                break;
        }

        dice.style.animation = "none";
    }, 50);
};

function roll() {
    diceRoll = Number(Math.trunc(Math.random() * 6) + 1);
    rollDice();
    if (diceRoll === 1) {
        // diceRoll = 0
        // forceHold();
        switchPlayer();
        if (totalScore1 != 0 || totalScore2 != 0) {
            diceRoll = 0;
            currentScore = 0;
            currentScoreEl1.textContent = 0;
            currentScoreEl2.textContent = 0;
        }
    }
}

function hold() {
    let score = 0;
    switchPlayer();
    if (player2.classList.contains("player-active")) {
        totalScore1 = currentScore;
        score += totalScore1;
        scores[0] = scores[0] + score;
        totalScoreEl1.textContent = scores[0];
        currentScore = 0;
    } else if (player1.classList.contains("player-active")) {
        totalScore2 = currentScore;
        score += totalScore2;
        scores[1] = scores[1] + score;
        totalScoreEl2.textContent = scores[1];
        currentScore = 0;
    }
}

function player() {
    initial();
    welcome.classList.add("fade-out");
    main.classList.add("fade-in");
    title[1].textContent = "player2";

    newBtn.addEventListener("click", initial);

    dice.addEventListener("click", () => {
        roll();
        if (player1.classList.contains("player-active")) {
            currentScore += diceRoll;
            totalScore1 = currentScore;
            console.log(
                `diceRoll: ${diceRoll} currentScore: ${currentScore}, totalScore1: ${totalScore1}`
            );
            if (diceRoll === 1) {
                currentScore = 0;
            }
            // console.log(diceRoll, totalScore1);
            currentScoreEl1.textContent = currentScore;
        } else if (player2.classList.contains("player-active")) {
            currentScore += diceRoll;
            totalScore2 = currentScore;
            console.log(
                `diceRoll: ${diceRoll} currentScore: ${currentScore}, totalScore2: ${totalScore2}`
            );
            if (diceRoll === 1) {
                currentScore = 0;
            }
            // console.log(diceRoll, totalScore2);
            currentScoreEl2.textContent = currentScore;
        }
    });
    diceBtn.addEventListener("click", () => {
        roll();
        if (player1.classList.contains("player-active")) {
            currentScore += diceRoll;
            totalScore1 = currentScore;
            console.log(
                `diceRoll: ${diceRoll} currentScore: ${currentScore}, totalScore1: ${totalScore1}`
            );
            if (diceRoll === 1) {
                currentScore = 0;
            }
            // console.log(diceRoll, totalScore1);
            currentScoreEl1.textContent = currentScore;
        } else if (player2.classList.contains("player-active")) {
            currentScore += diceRoll;
            totalScore2 = currentScore;
            console.log(
                `diceRoll: ${diceRoll} currentScore: ${currentScore}, totalScore2: ${totalScore2}`
            );
            if (diceRoll === 1) {
                currentScore = 0;
            }
            // console.log(diceRoll, totalScore2);
            currentScoreEl2.textContent = currentScore;
        }
    });

    holdBtn.addEventListener("click", () => {
        // switchPlayer();
        hold();
        if (scores[0] >= 100) {
            audio.setAttribute(
                "src",
                "audio/trumpet-fanfare-success-epic-stock-media-1-00-02.mp3"
            );
            audio.play();
            player1.classList.add("player-winner");
            player2.classList.remove("player-active");
        } else if (scores[1] >= 100) {
            audio.setAttribute(
                "src",
                "audio/trumpet-fanfare-success-epic-stock-media-1-00-02.mp3"
            );
            audio.play();
            player2.classList.add("player-winner");
            player1.classList.remove("player-active");
        }
    });
}

function computer() {
    console.log("PVE");
    initial();
    welcome.classList.add("fade-out");
    main2.classList.add("fade-in");
    title[1].textContent = "cpu";
};

welcomeCards.forEach((card) => {
    card.addEventListener("click", (e) => {
        card.classList.add("card-active");
        audio.setAttribute(
            "src",
            "audio/positive-notification-digital-twinkle-betacut-1-00-03.mp3"
        );
        audio.play();
        // console.log(e.target, welcomeCards[0], welcomeCards[1]);

        setTimeout(() => {
            card.classList.remove("card-active");
        }, 100);

        

        setTimeout(() => {
            welcome.style.display = "none";
        }, 500);

        setTimeout(() => {
            // To select the mode
            if (e.target === welcomeCards[0] || e.target === cover[0]) {
                setTimeout(() => {
                    main.style.display = "block";
                    main2.style.display = "none";
                }, 500);
                player();
            } else if (e.target === welcomeCards[1] || e.target === cover[1]) {
                setTimeout(() => {
                    main2.style.display = "block";
                    main.style.display = "none";
                }, 500);
                computer();
            }
        }, 400);
    });
});

//tutorial
navBtns[0].addEventListener("click", (e) => {
    console.log(e.target);
    navBtnsBefore[0].classList.add("nav-active");

    setTimeout(() => {
        navBtnsBefore[0].classList.remove("nav-active");
    }, 100);
});

//main menu
navBtns[1].addEventListener("click", (e) => {
    navBtnsBefore[1].classList.add("nav-active");

    setTimeout(() => {
        navBtnsBefore[1].classList.remove("nav-active");
    }, 100);

    setTimeout(() => {
        welcome.classList.add("fade-in");
        welcome.classList.remove("fade-out");
        main.classList.add("fade-out");
        main.classList.remove("fade-in");
        main2.classList.add("fade-out");
        main2.classList.remove("fade-in");

        setTimeout(() => {
        welcome.classList.remove("fade-in");
        main.classList.remove("fade-out");
        main2.classList.remove("fade-out");
        }, 800)
    }, 400);

    setTimeout(() => {
        main.style.display = "none";
        main2.style.display = "none";
    }, 500);

    setTimeout(() => {
        welcome.style.display = "grid";
    }, 700);
});

navBtns[2].addEventListener("click", (e) => {
    console.log(e.target);
    navBtnsBefore[2].classList.add("nav-active");

    setTimeout(() => {
        navBtnsBefore[2].classList.remove("nav-active");
    }, 100);
});

btn.forEach((btns) => {
    btns.addEventListener("click", () => {
        btns.classList.add("translate-btn");

        setTimeout(() => {
            btns.classList.remove("translate-btn");
        }, 100);
    });
});
