const button = document.getElementById("rollButton");

const digit1 = document.getElementById("digit1");
const digit2 = document.getElementById("digit2");
const digit3 = document.getElementById("digit3");

const digits = [digit1, digit2, digit3];

const levelElement = document.getElementById("level");
const xpElement = document.getElementById("xp");
const xpFill = document.getElementById("xpFill");

const achievementElement = document.getElementById("achievement");
const rollRarity = document.getElementById("rollRarity");

const indexButton = document.getElementById("indexButton");
const closeIndex = document.getElementById("closeIndex");
const indexOverlay = document.getElementById("indexOverlay");
const indexList = document.getElementById("indexList");
const indexStats = document.getElementById("indexStats");
const achievementSearch = document.getElementById("achievementSearch");

const xpMultiplierValue = document.getElementById("xpMultiplierValue");
const luckValueElement = document.getElementById("luckValue");
const speedValueElement = document.getElementById("speedValue");

const statXP = document.getElementById("statXP");
const statLuck = document.getElementById("statLuck");
const statSpeed = document.getElementById("statSpeed");

const xpUpgradeCost = document.getElementById("xpUpgradeCost");
const luckUpgradeCost = document.getElementById("luckUpgradeCost");
const speedUpgradeCost = document.getElementById("speedUpgradeCost");

const xpUpgradeButton = document.getElementById("xpUpgradeButton");
const luckUpgradeButton = document.getElementById("luckUpgradeButton");
const speedUpgradeButton = document.getElementById("speedUpgradeButton");


/* =========================
   LOAD SAVE
========================= */

let xp = Number(localStorage.getItem("xp") || "0");
let level = Number(localStorage.getItem("level") || "1");

let xpMultiplier = Number(
    localStorage.getItem("xpMultiplier") || "1"
);

let luck = Number(
    localStorage.getItem("luck") || "1"
);

let animationSpeed = Number(
    localStorage.getItem("animationSpeed") || "1"
);

let unlockedAchievements;

try {
    unlockedAchievements = JSON.parse(
        localStorage.getItem("unlockedAchievements") || "[]"
    );
} catch {
    unlockedAchievements = [];
}


/* =========================
   VALIDATE SAVE
========================= */

if (!Number.isFinite(xp) || xp < 0) {
    xp = 0;
}

if (!Number.isFinite(level) || level < 1) {
    level = 1;
}

if (!Number.isFinite(xpMultiplier) || xpMultiplier < 1) {
    xpMultiplier = 1;
}

if (!Number.isFinite(luck) || luck < 1) {
    luck = 1;
}

if (!Number.isFinite(animationSpeed) || animationSpeed < 1) {
    animationSpeed = 1;
}

if (!Array.isArray(unlockedAchievements)) {
    unlockedAchievements = [];
}


/* =========================
   ACHIEVEMENTS
========================= */

const achievements = [
    {
        id: "facebookFan",
        name: "Facebook Fan",
        xp: 65,
        description: "Roll a number between 49 and 61."
    },
    {
        id: "zeroEnd",
        name: "Zero End",
        xp: 70,
        description: "Roll a number that ends in 0."
    },
    {
        id: "lowBall",
        name: "Low Ball",
        xp: 75,
        description: "Every digit has to be below 5."
    },
    {
        id: "grandpa",
        name: "Grandpa",
        xp: 80,
        description: "Roll a number between 90 and 99."
    },
    {
        id: "teenager",
        name: "Teenager",
        xp: 85,
        description: "Roll a number between 11 and 18."
    },
    {
        id: "highBall",
        name: "High Ball",
        xp: 90,
        description: "Every digit has to be above 5."
    },
    {
        id: "perfectTen",
        name: "Perfect Ten",
        xp: 113,
        description: "Roll exactly 10."
    },
    {
        id: "quarter",
        name: "Quarter",
        xp: 125,
        description: "Roll exactly 25."
    },
    {
        id: "mirror",
        name: "Mirror",
        xp: 145,
        description: "Roll a number containing 14 or 41."
    },
    {
        id: "halfwayThere",
        name: "Halfway There",
        xp: 150,
        description: "Roll exactly 50."
    },
    {
        id: "highFive",
        name: "High Five",
        xp: 155,
        description: "Two adjacent digits have to be exactly 5 apart."
    },
    {
        id: "ultraLowBall",
        name: "Ultra Low Ball",
        xp: 175,
        description: "The sum of all digits has to be below 5."
    },
    {
        id: "ultraHighBall",
        name: "Ultra High Ball",
        xp: 190,
        description: "The sum of all digits has to be above 20."
    },
    {
        id: "highFiveSum",
        name: "High Five Sum",
        xp: 205,
        description: "Two adjacent digits must add up to exactly 5."
    },
    {
        id: "bookends",
        name: "Bookends",
        xp: 219,
        description: "Roll a number containing 19 or 91."
    },
    {
        id: "luckySum",
        name: "Lucky Sum",
        xp: 225,
        description: "Two adjacent digits must add up to exactly 9."
    },
    {
        id: "fortyOne",
        name: "41",
        xp: 241,
        description: "Roll a number containing 41."
    },
    {
        id: "consecutive",
        name: "Consecutive",
        xp: 249,
        description: "Two adjacent digits have to be next to each other."
    },
    {
        id: "doubleDown",
        name: "Double Down",
        xp: 265,
        description: "One adjacent digit has to be exactly twice the other."
    },
    {
        id: "threeQuarters",
        name: "Three Quarters",
        xp: 275,
        description: "Roll exactly 75."
    },
    {
        id: "stepByStep",
        name: "Step By Step",
        xp: 275,
        description: "Two adjacent digits have to differ by exactly 1."
    },
    {
        id: "maximumGap",
        name: "Maximum Gap",
        xp: 299,
        description: "Two adjacent digits have to be 9 apart."
    },
    {
        id: "doubleDigits",
        name: "Double Digits",
        xp: 300,
        description: "Roll any two-digit number."
    },
    {
        id: "perfectSum",
        name: "Perfect Sum",
        xp: 304,
        description: "Two adjacent digits must add up to exactly 10."
    },
    {
        id: "unluckyThirteen",
        name: "Unlucky 13",
        xp: 313,
        description: "Roll a number containing 13."
    },
    {
        id: "perfectFifteen",
        name: "Perfect Fifteen",
        xp: 315,
        description: "Two adjacent digits must add up to exactly 15."
    },
    {
        id: "doubleTrouble",
        name: "Double Trouble",
        xp: 333,
        description: "Roll a number with two matching adjacent digits."
    },
    {
        id: "mirrorEight",
        name: "Mirror Eight",
        xp: 348,
        description: "Roll a number containing 88, 84, or 48."
    },
    {
        id: "sixtyOne",
        name: "61",
        xp: 361,
        description: "Roll a number containing 61."
    },
    {
        id: "luckySeven",
        name: "Lucky Seven",
        xp: 398,
        description: "Roll exactly 7."
    },
    {
        id: "nice",
        name: "Nice",
        xp: 401,
        description: "Roll a number containing 69."
    },
    {
        id: "firstLast",
        name: "First & Last",
        xp: 411,
        description: "The first and last digit have to be the same."
    },
    {
        id: "adult",
        name: "Adult",
        xp: 418,
        description: "Roll exactly 18."
    },
    {
        id: "thePrime",
        name: "The Prime",
        xp: 437,
        description: "Roll a number containing 37."
    },
    {
        id: "fortyTwo",
        name: "42",
        xp: 442,
        description: "Roll a number containing 42."
    },
    {
        id: "fiftyFive",
        name: "55",
        xp: 455,
        description: "Roll a number containing 55."
    },
    {
        id: "doubleZero",
        name: "Double Zero",
        xp: 477,
        description: "Roll a number containing two adjacent zeros."
    },
    {
        id: "tripleTrouble",
        name: "Triple Trouble",
        xp: 490,
        description: "Roll a three-digit number with three matching digits."
    },
    {
        id: "boomer",
        name: "Boomer",
        xp: 540,
        description: "Roll exactly 40."
    },
    {
        id: "baby",
        name: "Baby",
        xp: 566,
        description: "Roll a single-digit number from 1 to 6."
    },
    {
        id: "earlyMaximum",
        name: "Early Maximum",
        xp: 572,
        description: "Roll exactly 99."
    },
    {
        id: "singleDigit",
        name: "Single Digit",
        xp: 600,
        description: "Roll any single-digit number."
    },
    {
        id: "sixtySeven",
        name: "67",
        xp: 670,
        description: "Roll a number containing 67."
    },
    {
        id: "doubleEight",
        name: "Double Eight",
        xp: 688,
        description: "Roll exactly 88."
    },
    {
        id: "luckyDouble",
        name: "Lucky Double",
        xp: 777,
        description: "Roll exactly 77."
    },
    {
        id: "wrapik",
        name: "Wrapik",
        xp: 803,
        description: "Roll exactly 339."
    },
    {
        id: "blackHole",
        name: "Black Hole",
        xp: 850,
        description: "The middle digit has to be 0."
    },
    {
        id: "error404",
        name: "Error 404",
        xp: 947,
        description: "Roll exactly 404."
    },
    {
        id: "maximum",
        name: "Maximum",
        xp: 981,
        description: "Roll exactly 999."
    },
    {
        id: "firstCentury",
        name: "First Century",
        xp: 1000,
        description: "Roll exactly 100."
    },
    {
        id: "century",
        name: "Century",
        xp: 1050,
        description: "Roll a number like 300, 600 or 700."
    },
    {
        id: "pi",
        name: "Pi",
        xp: 1157,
        description: "Roll exactly 314."
    },
    {
        id: "casino",
        name: "Casino",
        xp: 1453,
        description: "Roll exactly 777."
    }
];


/* =========================
   SAVE
========================= */

function saveProgress() {
    localStorage.setItem("xp", String(xp));
    localStorage.setItem("level", String(level));
    localStorage.setItem(
        "xpMultiplier",
        String(xpMultiplier)
    );
    localStorage.setItem(
        "luck",
        String(luck)
    );
    localStorage.setItem(
        "animationSpeed",
        String(animationSpeed)
    );
    localStorage.setItem(
        "unlockedAchievements",
        JSON.stringify(unlockedAchievements)
    );
}


/* =========================
   LEVEL / XP
========================= */

function getXPNeeded() {
    return 100 + (level - 1) * 50;
}

function updateXP() {
    const requiredXP = getXPNeeded();

    levelElement.textContent = level;

    xpElement.textContent =
        `${xp} / ${requiredXP}`;

    xpFill.style.width =
        `${Math.min(
            (xp / requiredXP) * 100,
            100
        )}%`;

    updateUpgradeButtons();
}

function addXP(amount) {
    const multipliedAmount =
        Math.floor(
            amount * xpMultiplier
        );

    xp += multipliedAmount;

    while (xp >= getXPNeeded()) {
        xp -= getXPNeeded();
        level++;
    }

    saveProgress();
    updateXP();
}


/* =========================
   RARITY
========================= */

function getRarity(xpValue) {
    if (xpValue <= 99) {
        return {
            name: "Common",
            color: "#aaa"
        };
    }

    if (xpValue <= 199) {
        return {
            name: "Uncommon",
            color: "#55d66b"
        };
    }

    if (xpValue <= 299) {
        return {
            name: "Rare",
            color: "#4da6ff"
        };
    }

    if (xpValue <= 499) {
        return {
            name: "Epic",
            color: "#a855f7"
        };
    }

    if (xpValue <= 749) {
        return {
            name: "Legendary",
            color: "#ff9d00"
        };
    }

    if (xpValue <= 999) {
        return {
            name: "Mythic",
            color: "#ff3b3b"
        };
    }

    return {
        name: "Exclusive",
        color: "rainbow"
    };
}


/* =========================
   UPGRADES
========================= */

/*
   Każdy upgrade ma osobną cenę.

   XP:
   pierwszy = 2 LVL
   drugi = 3 LVL
   trzeci = 4 LVL
   itd.

   Luck:
   pierwszy = 3 LVL
   drugi = 4 LVL
   trzeci = 5 LVL
   itd.

   Speed:
   pierwszy = 2 LVL
   drugi = 3 LVL
   trzeci = 4 LVL
   itd.
*/

function getUpgradeCount(type) {
    if (type === "xp") {
        return Math.round(
            (xpMultiplier - 1) * 10
        );
    }

    if (type === "luck") {
        return Math.round(
            (luck - 1) * 10
        );
    }

    if (type === "speed") {
        return Math.round(
            (animationSpeed - 1) * 10
        );
    }

    return 0;
}

function getUpgradeCost(type) {
    const upgradeCount =
        getUpgradeCount(type);

    const baseCost = {
        xp: 2,
        luck: 3,
        speed: 2
    };

    return (
        baseCost[type] +
        upgradeCount
    );
}

function updateUpgradeButtons() {
    const upgrades = [
        {
            button: xpUpgradeButton,
            costElement: xpUpgradeCost,
            type: "xp"
        },
        {
            button: luckUpgradeButton,
            costElement: luckUpgradeCost,
            type: "luck"
        },
        {
            button: speedUpgradeButton,
            costElement: speedUpgradeCost,
            type: "speed"
        }
    ];

    upgrades.forEach(upgrade => {
        const cost =
            getUpgradeCost(
                upgrade.type
            );

        upgrade.costElement.textContent =
            `${cost} LVL`;

        const canBuy =
            level >= cost;

        upgrade.button.disabled =
            !canBuy;

        upgrade.button.classList.toggle(
            "cant-buy",
            !canBuy
        );
    });
}

function updateUpgradeUI() {
    const xpText =
        xpMultiplier.toFixed(1) + "x";

    const luckText =
        luck.toFixed(1) + "x";

    const speedText =
        animationSpeed.toFixed(1) + "x";

    xpMultiplierValue.textContent =
        xpText;

    luckValueElement.textContent =
        luckText;

    speedValueElement.textContent =
        speedText;

    statXP.textContent =
        xpText;

    statLuck.textContent =
        luckText;

    statSpeed.textContent =
        speedText;

    updateUpgradeButtons();
}

function buyUpgrade(type) {
    const cost =
        getUpgradeCost(type);

    /*
       Teraz upgrade NIE jest
       odblokowywany przez level.

       Level jest walutą.
       Jeżeli masz np. 5 leveli
       i upgrade kosztuje 3,
       zostają Ci 2 levele.
    */

    if (level < cost) {
        return;
    }

    /* Zabieramy levele */
    level -= cost;

    if (type === "xp") {
        xpMultiplier =
            Number(
                (
                    xpMultiplier + 0.1
                ).toFixed(1)
            );
    }

    if (type === "luck") {
        luck =
            Number(
                (
                    luck + 0.1
                ).toFixed(1)
            );
    }

    if (type === "speed") {
        animationSpeed =
            Number(
                (
                    animationSpeed + 0.1
                ).toFixed(1)
            );
    }

    saveProgress();

    /*
       Natychmiastowe odświeżenie
       całego interfejsu.
    */

    updateXP();
    updateUpgradeUI();
}


/* =========================
   ACHIEVEMENT DETECTION
========================= */

function getAchievements(number) {
    const found = [];

    const numberString =
        String(number);

    const digitValues =
        [...numberString].map(Number);

    const add = id => {
        if (!found.includes(id)) {
            found.push(id);
        }
    };

    const contains = value =>
        numberString.includes(
            String(value)
        );

    const allDigitsBelowFive =
        digitValues.length > 1 &&
        digitValues.every(
            digit => digit < 5
        );

    const allDigitsAboveFive =
        digitValues.length > 1 &&
        digitValues.every(
            digit => digit > 5
        );

    const digitSum =
        digitValues.reduce(
            (sum, digit) =>
                sum + digit,
            0
        );


    /* =====================
       SINGLE / DOUBLE
    ===================== */

    if (
        number >= 1 &&
        number <= 6
    ) {
        add("baby");
    }

    if (
        number >= 1 &&
        number <= 9
    ) {
        add("singleDigit");
    }

    if (
        number >= 10 &&
        number <= 99
    ) {
        add("doubleDigits");
    }


    /* =====================
       BASIC
    ===================== */

    if (
        number >= 10 &&
        number % 10 === 0
    ) {
        add("zeroEnd");
    }

    if (number === 10) {
        add("perfectTen");
    }

    if (contains("00")) {
        add("doubleZero");
    }


    /* =====================
       DIGIT CONDITIONS
    ===================== */

    if (allDigitsBelowFive) {
        add("lowBall");
    }

    if (allDigitsAboveFive) {
        add("highBall");
    }

    if (
        digitSum < 5 &&
        number >= 10
    ) {
        add("ultraLowBall");
    }

    /*
       Ultra High Ball:
       suma MUSI być > 20.
    */

    if (digitSum > 20) {
        add("ultraHighBall");
    }


    /* =====================
       ADJACENT DIGITS
    ===================== */

    for (
        let i = 0;
        i < digitValues.length - 1;
        i++
    ) {
        const first =
            digitValues[i];

        const second =
            digitValues[i + 1];

        const sum =
            first + second;

        const difference =
            Math.abs(
                first - second
            );


        if (
            first === second
        ) {
            add("doubleTrouble");
        }

        if (
            difference === 1
        ) {
            add("consecutive");
            add("stepByStep");
        }

        if (
            difference === 5
        ) {
            add("highFive");
        }

        if (
            difference === 9
        ) {
            add("maximumGap");
        }

        if (
            sum === 5
        ) {
            add("highFiveSum");
        }

        if (
            sum === 9
        ) {
            add("luckySum");
        }

        if (
            sum === 10
        ) {
            add("perfectSum");
        }

        if (
            sum === 15
        ) {
            add("perfectFifteen");
        }

        if (
            (
                first === second * 2 &&
                second !== 0
            ) ||
            (
                second === first * 2 &&
                first !== 0
            )
        ) {
            add("doubleDown");
        }
    }


    /* =====================
       RANGES
    ===================== */

    if (
        number >= 49 &&
        number <= 61
    ) {
        add("facebookFan");
    }

    if (
        number >= 90 &&
        number <= 99
    ) {
        add("grandpa");
    }

    if (
        number >= 11 &&
        number <= 18
    ) {
        add("teenager");
    }


    /* =====================
       EXACT NUMBERS
    ===================== */

    if (number === 25) {
        add("quarter");
    }

    if (number === 50) {
        add("halfwayThere");
    }

    if (number === 75) {
        add("threeQuarters");
    }

    if (number === 18) {
        add("adult");
    }

    if (number === 40) {
        add("boomer");
    }

    if (number === 99) {
        add("earlyMaximum");
    }

    if (number === 7) {
        add("luckySeven");
    }

    if (number === 77) {
        add("luckyDouble");
    }

    if (number === 88) {
        add("doubleEight");
    }

    if (number === 999) {
        add("maximum");
    }

    if (number === 314) {
        add("pi");
    }

    if (number === 100) {
        add("firstCentury");
    }

    if (number === 777) {
        add("casino");
    }


    /* =====================
       SPECIAL PATTERNS
    ===================== */

    if (
        contains("14") ||
        contains("41")
    ) {
        add("mirror");
    }

    if (
        contains("19") ||
        contains("91")
    ) {
        add("bookends");
    }

    if (contains("41")) {
        add("fortyOne");
    }

    if (contains("13")) {
        add("unluckyThirteen");
    }

    if (contains("61")) {
        add("sixtyOne");
    }

    if (contains("67")) {
        add("sixtySeven");
    }

    if (contains("69")) {
        add("nice");
    }

    if (contains("37")) {
        add("thePrime");
    }

    if (contains("42")) {
        add("fortyTwo");
    }

    if (contains("55")) {
        add("fiftyFive");
    }

    if (
        contains("88") ||
        contains("84") ||
        contains("48")
    ) {
        add("mirrorEight");
    }


    /* =====================
       FIRST = LAST
    ===================== */

    if (
        digitValues.length === 3 &&
        digitValues[0] === digitValues[2]
    ) {
        add("firstLast");
    }


    /* =====================
       WRAPIK
    ===================== */

    if (number === 339) {
        add("wrapik");
    }


    /* =====================
       BLACK HOLE
    ===================== */

    if (
        digitValues.length === 3 &&
        digitValues[1] === 0
    ) {
        add("blackHole");
    }


    /* =====================
       ERROR 404
    ===================== */

    if (number === 404) {
        add("error404");
    }


    /* =====================
       TRIPLE MATCHING
    ===================== */

    if (
        number >= 100 &&
        number <= 999 &&
        digitValues.length === 3 &&
        digitValues[0] === digitValues[1] &&
        digitValues[1] === digitValues[2]
    ) {
        add("tripleTrouble");
    }


    /* =====================
       CENTURY
    ===================== */

    if (
        number >= 100 &&
        number <= 999 &&
        number % 100 === 0 &&
        number !== 100
    ) {
        add("century");
    }


    return [
        ...new Set(found)
    ];
}


/* =========================
   NUMBER RARITY
========================= */

function getNumberRarity(
    number,
    achievementIds
) {
    const foundAchievements =
        achievementIds
            .map(id =>
                achievements.find(
                    achievement =>
                        achievement.id === id
                )
            )
            .filter(Boolean);


    /*
       ULTRA RARE

       Wystarczy JEDEN:
       Legendary
       Mythic
       Exclusive
    */

    const hasHighRarity =
        foundAchievements.some(
            achievement => {
                const rarity =
                    getRarity(
                        achievement.xp
                    ).name;

                return (
                    rarity === "Legendary" ||
                    rarity === "Mythic" ||
                    rarity === "Exclusive"
                );
            }
        );

    if (hasHighRarity) {
        return "Ultra Rare";
    }


    /*
       RARE

       Epic lub minimum
       dwa achievementy.
    */

    const hasEpic =
        foundAchievements.some(
            achievement =>
                getRarity(
                    achievement.xp
                ).name === "Epic"
        );

    if (
        hasEpic ||
        foundAchievements.length >= 2
    ) {
        return "Rare";
    }


    return "Normal";
}

function getRarityColor(rarity) {
    if (
        rarity === "Ultra Rare"
    ) {
        return "rarity-ultra";
    }

    if (
        rarity === "Rare"
    ) {
        return "rarity-rare";
    }

    return "rarity-normal";
}


/* =========================
   ROLL RARITY
========================= */

function showRollRarity(rarity) {
    rollRarity.textContent =
        rarity.toUpperCase();

    rollRarity.className =
        getRarityColor(rarity);

    rollRarity.classList.add(
        "visible"
    );
}


/* =========================
   ROLL SYSTEM
========================= */

function rollNumber() {
    /*
       Luck wpływa na wagę
       Rare i Ultra Rare.

       Większy Luck =
       większa szansa na rzadkie
       liczby.
    */

    let totalWeight = 0;

    const pool = [];


    for (
        let number = 1;
        number <= 999;
        number++
    ) {
        const achievementIds =
            getAchievements(
                number
            );

        const rarity =
            getNumberRarity(
                number,
                achievementIds
            );


        /*
           Zwykła liczba.
        */

        let weight = 100;


        /*
           Rare.
        */

        if (
            rarity === "Rare"
        ) {
            weight =
                10 +
                (luck * 8);
        }


        /*
           Ultra Rare.

           Luck zwiększa szansę,
           ale ultra rare nadal
           jest znacznie rzadsze.
        */

        if (
            rarity === "Ultra Rare"
        ) {
            weight =
                1 +
                (luck * 2.5);
        }


        weight =
            Math.max(
                0.5,
                weight
            );


        pool.push({
            number,
            weight
        });

        totalWeight += weight;
    }


    let random =
        Math.random() *
        totalWeight;


    for (const item of pool) {
        random -= item.weight;

        if (random <= 0) {
            return item.number;
        }
    }


    return 1;
}


/* =========================
   UNLOCK ACHIEVEMENTS
========================= */

function unlockAchievements(
    foundAchievements
) {
    let changed = false;


    foundAchievements.forEach(
        achievement => {
            if (
                !unlockedAchievements.includes(
                    achievement.id
                )
            ) {
                unlockedAchievements.push(
                    achievement.id
                );

                changed = true;
            }
        }
    );


    if (changed) {
        saveProgress();
    }


    renderIndex();
}


/* =========================
   INDEX STATS
========================= */

function updateIndexStats() {
    indexStats.textContent =
        `${unlockedAchievements.length} / ${achievements.length} Achievements Unlocked`;
}


/* =========================
   INDEX
========================= */

function renderIndex() {
    indexList.innerHTML = "";

    updateIndexStats();


    const search =
        achievementSearch.value
            .trim()
            .toLowerCase();


    const sortedAchievements =
        [...achievements].sort(
            (a, b) =>
                a.xp - b.xp
        );


    const filteredAchievements =
        sortedAchievements.filter(
            achievement => {
                if (!search) {
                    return true;
                }

                return (
                    achievement.name
                        .toLowerCase()
                        .includes(search) ||

                    achievement.description
                        .toLowerCase()
                        .includes(search) ||

                    getRarity(
                        achievement.xp
                    ).name
                        .toLowerCase()
                        .includes(search)
                );
            }
        );


    if (
        filteredAchievements.length === 0
    ) {
        indexList.innerHTML = `
            <div class="index-no-results">
                No achievements found.
            </div>
        `;

        return;
    }


    filteredAchievements.forEach(
        (achievement, index) => {
            const unlocked =
                unlockedAchievements.includes(
                    achievement.id
                );


            const rarity =
                getRarity(
                    achievement.xp
                );


            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "index-achievement";


            if (!unlocked) {
                item.classList.add(
                    "locked"
                );
            }


            if (
                rarity.name ===
                "Exclusive"
            ) {
                item.classList.add(
                    "exclusive-border"
                );
            }


            const rarityHTML =
                rarity.name ===
                "Exclusive"
                    ? `
                        <div class="index-rarity exclusive">
                            Exclusive
                        </div>
                    `
                    : `
                        <div
                            class="index-rarity"
                            style="color: ${rarity.color}"
                        >
                            ${rarity.name}
                        </div>
                    `;


            const nameHTML =
                rarity.name ===
                "Exclusive"
                    ? `
                        <div class="index-name exclusive">
                            ${achievement.name}
                        </div>
                    `
                    : `
                        <div class="index-name">
                            ${achievement.name}
                        </div>
                    `;


            item.innerHTML = `
                <div class="index-number">
                    ${index + 1}
                </div>

                <div class="index-info">

                    ${nameHTML}

                    <div class="index-description">
                        ${achievement.description}
                    </div>

                    ${rarityHTML}

                </div>

                <div class="index-xp">
                    +${achievement.xp} XP
                </div>

                ${
                    unlocked
                        ? ""
                        : `
                            <div class="index-locked">
                                LOCKED
                            </div>
                        `
                }
            `;


            indexList.appendChild(
                item
            );
        }
    );
}


/* =========================
   ACHIEVEMENT NOTIFICATIONS
========================= */

function showAchievements(
    foundAchievements
) {
    achievementElement.innerHTML = "";


    const sortedAchievements =
        [...foundAchievements].sort(
            (a, b) =>
                a.xp - b.xp
        );


    let totalDelay = 0;


    sortedAchievements.forEach(
        (achievement, index) => {

            /*
               Sprawdzamy tutaj,
               czy achievement był
               już wcześniej odblokowany.

               Dzięki temu nowe achievementy
               mogą być żółte.
            */

            const isNew =
                !unlockedAchievements.includes(
                    achievement.id
                );


            if (index > 0) {
                totalDelay +=
                    (
                        600 +
                        (
                            (index - 1) *
                            300
                        )
                    ) /
                    animationSpeed;
            }


            setTimeout(
                () => {
                    const rarity =
                        getRarity(
                            achievement.xp
                        );


                    const notification =
                        document.createElement(
                            "div"
                        );


                    notification.className =
                        "achievement-notification";


                    /*
                       NOWY ACHIEVEMENT
                       dostaje klasę:
                       new-achievement
                    */

                    if (isNew) {
                        notification.classList.add(
                            "new-achievement"
                        );
                    }


                    const titleClass =
                        rarity.name ===
                        "Exclusive"
                            ? "achievement-title exclusive"
                            : "achievement-title";


                    const rarityHTML =
                        rarity.name ===
                        "Exclusive"
                            ? `
                                <div class="achievement-rarity exclusive">
                                    Exclusive
                                </div>
                            `
                            : `
                                <div
                                    class="achievement-rarity"
                                    style="color: ${rarity.color}"
                                >
                                    ${rarity.name}
                                </div>
                            `;


                    notification.innerHTML = `
                        <div class="${titleClass}">
                            ${achievement.name}
                        </div>

                        ${rarityHTML}

                        <div class="achievement-xp">
                            +${Math.floor(
                                achievement.xp *
                                xpMultiplier
                            )} XP
                        </div>

                        ${
                            isNew
                                ? `
                                    <div class="achievement-new-label">
                                        NEW!
                                    </div>
                                `
                                : ""
                        }
                    `;


                    achievementElement.appendChild(
                        notification
                    );
                },
                totalDelay
            );
        }
    );


    return totalDelay;
}


/* =========================
   RESET
========================= */

function resetProgress() {
    const confirmed =
        confirm(
            "Are you sure you want to reset everything?"
        );


    if (!confirmed) {
        return;
    }


    xp = 0;
    level = 1;

    xpMultiplier = 1;
    luck = 1;
    animationSpeed = 1;

    unlockedAchievements = [];


    localStorage.removeItem(
        "xp"
    );

    localStorage.removeItem(
        "level"
    );

    localStorage.removeItem(
        "xpMultiplier"
    );

    localStorage.removeItem(
        "luck"
    );

    localStorage.removeItem(
        "animationSpeed"
    );

    localStorage.removeItem(
        "unlockedAchievements"
    );


    achievementElement.innerHTML = "";


    rollRarity.textContent = "";

    rollRarity.className = "";


    button.disabled = false;


    digits.forEach(
        digit => {
            digit.classList.remove(
                "drop"
            );

            digit.textContent = "";

            digit.style.removeProperty(
                "--animation-duration"
            );
        }
    );


    achievementSearch.value = "";


    indexOverlay.classList.remove(
        "open"
    );


    updateXP();

    updateUpgradeUI();

    renderIndex();
}


/* =========================
   UPGRADE BUTTONS
========================= */

xpUpgradeButton.addEventListener(
    "click",
    () => {
        buyUpgrade("xp");
    }
);

luckUpgradeButton.addEventListener(
    "click",
    () => {
        buyUpgrade("luck");
    }
);

speedUpgradeButton.addEventListener(
    "click",
    () => {
        buyUpgrade("speed");
    }
);


/* =========================
   RESET BUTTON
========================= */

document
    .getElementById("resetButton")
    .addEventListener(
        "click",
        resetProgress
    );


/* =========================
   ROLL BUTTON
========================= */

button.addEventListener(
    "click",
    () => {
        if (button.disabled) {
            return;
        }


        const number =
            rollNumber();


        button.disabled = true;


        /*
           Czyścimy stare
           achievementy.
        */

        achievementElement.innerHTML = "";


        /*
           Czyścimy poprzednią
           animację.
        */

        digits.forEach(
            digit => {
                digit.classList.remove(
                    "drop"
                );

                digit.textContent = "";
            }
        );


        rollRarity.classList.remove(
            "visible"
        );


        /*
           Wymuszenie restartu
           animacji CSS.
        */

        digits.forEach(
            digit => {
                void digit.offsetWidth;
            }
        );


        const numberString =
            number.toString();


        const baseDuration =
            1000 /
            animationSpeed;


        const digitDelay =
            1000 /
            animationSpeed;


        digits.forEach(
            digit => {
                digit.style.setProperty(
                    "--animation-duration",
                    `${baseDuration}ms`
                );
            }
        );


        /*
           Animujemy tylko tyle cyfr,
           ile faktycznie ma liczba.
        */

        numberString
            .split("")
            .forEach(
                (digit, index) => {

                    const element =
                        digits[index];


                    element.textContent =
                        digit;


                    setTimeout(
                        () => {
                            element.classList.add(
                                "drop"
                            );
                        },
                        digitDelay +
                        index *
                        digitDelay
                    );
                }
            );


        /*
           Czas oczekiwania
           na zakończenie rolla.
        */

        const animationTime =
            numberString.length === 1
                ? 2200 /
                    animationSpeed
                : numberString.length === 2
                    ? 3200 /
                        animationSpeed
                    : 4200 /
                        animationSpeed;


        setTimeout(
            () => {

                /*
                   Znajdujemy achievementy
                   dla wylosowanej liczby.
                */

                const achievementIds =
                    getAchievements(
                        number
                    );


                const foundAchievements =
                    achievementIds
                        .map(id =>
                            achievements.find(
                                achievement =>
                                    achievement.id === id
                            )
                        )
                        .filter(Boolean);


                /*
                   Rarity liczby.
                */

                const rarity =
                    getNumberRarity(
                        number,
                        achievementIds
                    );


                showRollRarity(
                    rarity
                );


                /*
                   Pokazujemy achievementy
                   POD liczbą.
                */

                const achievementDelay =
                    showAchievements(
                        foundAchievements
                    );


                const achievementAnimationTime =
                    500 /
                    animationSpeed;


                setTimeout(
                    () => {

                        /*
                           Dopiero teraz
                           oznaczamy achievementy
                           jako odblokowane.

                           Dzięki temu showAchievements()
                           wie, które były nowe.
                        */

                        unlockAchievements(
                            foundAchievements
                        );


                        /*
                           Podstawowe XP
                           za każdy roll.
                        */

                        addXP(10);


                        /*
                           XP za achievementy.
                        */

                        foundAchievements.forEach(
                            achievement => {
                                addXP(
                                    achievement.xp
                                );
                            }
                        );


                        saveProgress();


                        /*
                           Ponownie aktualizujemy
                           UI po wszystkim.
                        */

                        updateXP();
                        updateUpgradeUI();


                        /*
                           Odblokowanie rolla.
                        */

                        button.disabled =
                            false;

                    },
                    achievementDelay +
                    achievementAnimationTime
                );

            },
            animationTime
        );
    }
);


/* =========================
   INDEX BUTTON
========================= */

indexButton.addEventListener(
    "click",
    () => {
        renderIndex();

        indexOverlay.classList.add(
            "open"
        );
    }
);


/* =========================
   CLOSE INDEX
========================= */

closeIndex.addEventListener(
    "click",
    () => {
        indexOverlay.classList.remove(
            "open"
        );
    }
);


/* =========================
   CLOSE ON BACKGROUND
========================= */

indexOverlay.addEventListener(
    "click",
    event => {
        if (
            event.target ===
            indexOverlay
        ) {
            indexOverlay.classList.remove(
                "open"
            );
        }
    }
);


/* =========================
   ESC
========================= */

document.addEventListener(
    "keydown",
    event => {
        if (
            event.key === "Escape"
        ) {
            indexOverlay.classList.remove(
                "open"
            );
        }
    }
);


/* =========================
   SEARCH
========================= */

achievementSearch.addEventListener(
    "input",
    renderIndex
);


/* =========================
   START
========================= */

updateXP();
updateUpgradeUI();
renderIndex();