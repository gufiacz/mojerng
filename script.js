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
CURRENCY ELEMENTS
========================= */

const coinsButton =
document.getElementById("coinsButton");

const tokenButton =
document.getElementById("tokenButton");

const coinsValue =
document.getElementById("coinsValue");

const tokenValue =
document.getElementById("tokenValue");

const currencyGain =
document.getElementById("currencyGain");

/* =========================
LOAD SAVE
========================= */

let xp =
Number(
localStorage.getItem("xp") || "0"
);

let level =
Number(
localStorage.getItem("level") || "1"
);

let xpMultiplier =
Number(
localStorage.getItem("xpMultiplier") || "1"
);

let luck =
Number(
localStorage.getItem("luck") || "1"
);

let animationSpeed =
Number(
localStorage.getItem("animationSpeed") || "1"
);

let normalStreak =
Number(
localStorage.getItem("normalStreak") || "0"
);

/* =========================
CURRENCY SAVE
========================= */

let coins =
Number(
localStorage.getItem("coins") || "0"
);

let larpTokens =
Number(
localStorage.getItem("larpTokens") || "0"
);

let activeCurrency =
localStorage.getItem("activeCurrency") || "coins";

/* =========================
ACHIEVEMENT SAVE
========================= */

let unlockedAchievements;

try {

unlockedAchievements =
    JSON.parse(
        localStorage.getItem(
            "unlockedAchievements"
        ) || "[]"
    );

} catch {

unlockedAchievements = [];

}

/* =========================
VALIDATE SAVE
========================= */

if (
!Number.isFinite(xp) ||
xp < 0
) {
xp = 0;
}

if (
!Number.isFinite(level) ||
level < 1
) {
level = 1;
}

if (
!Number.isFinite(xpMultiplier) ||
xpMultiplier < 1
) {
xpMultiplier = 1;
}

if (
!Number.isFinite(luck) ||
luck < 1
) {
luck = 1;
}

if (
!Number.isFinite(animationSpeed) ||
animationSpeed < 1
) {
animationSpeed = 1;
}

if (
!Number.isFinite(normalStreak) ||
normalStreak < 0
) {
normalStreak = 0;
}

if (
!Number.isFinite(coins) ||
coins < 0
) {
coins = 0;
}

if (
!Number.isFinite(larpTokens) ||
larpTokens < 0
) {
larpTokens = 0;
}

normalStreak =
Math.floor(normalStreak);

coins =
Math.floor(coins);

larpTokens =
Math.floor(larpTokens);

if (
activeCurrency !== "coins" &&
activeCurrency !== "larpTokens"
) {
activeCurrency = "coins";
}

if (
!Array.isArray(
unlockedAchievements
)
) {
unlockedAchievements = [];
}

/* =========================
ACHIEVEMENTS
========================= */

const achievements = [

{
    id: "zeroEnd",
    name: "Zero End",
    xp: 64,
    description: "Roll a number that ends in 0."
},

{
    id: "lowBall",
    name: "Low Ball",
    xp: 73,
    description: "Every digit has to be below 5."
},

{
    id: "highFive",
    name: "High Five",
    xp: 81,
    description: "Two adjacent digits have to be exactly 5 apart."
},

{
    id: "grandpa",
    name: "Grandpa",
    xp: 96,
    description: "Roll a number between 70 and 99."
},

{
    id: "threeQuarters",
    name: "Three Quarters",
    xp: 108,
    description: "Roll a number ending in 75."
},

{
    id: "quarter",
    name: "Quarter",
    xp: 126,
    description: "Roll a number ending in 25."
},

{
    id: "consecutive",
    name: "Consecutive",
    xp: 143,
    description: "Roll two digits in consecutive order."
},

{
    id: "luckySum",
    name: "Lucky Sum",
    xp: 157,
    description: "Two adjacent digits must add up to exactly 9."
},

{
    id: "halfwayThere",
    name: "Halfway There",
    xp: 166,
    description: "Roll a number ending in 50."
},

{
    id: "teenager",
    name: "Teenager",
    xp: 179,
    description: "Roll a number between 11 and 18."
},

{
    id: "mirror",
    name: "Mirror",
    xp: 184,
    description: "Roll a number containing 14 or 41."
},

{
    id: "highFiveSum",
    name: "High Five Sum",
    xp: 197,
    description: "Two adjacent digits must add up to exactly 5."
},

{
    id: "facebookFan",
    name: "Facebook Fan",
    xp: 76,
    description: "Roll a number between 39 and 69."
},

{
    id: "ultraLowBall",
    name: "Ultra Low Ball",
    xp: 224,
    description: "The sum of all digits has to be below 5."
},

{
    id: "doubleDown",
    name: "Double Down",
    xp: 239,
    description: "One adjacent digit has to be exactly twice the other."
},

{
    id: "mirrorEight",
    name: "Mirror Eight",
    xp: 247,
    description: "Roll a number containing 88, 84, or 48."
},

{
    id: "ultraHighBall",
    name: "Ultra High Ball",
    xp: 253,
    description: "The sum of all digits has to be above 20."
},

{
    id: "perfectSum",
    name: "Perfect Sum",
    xp: 268,
    description: "Two adjacent digits must add up to exactly 10."
},

{
    id: "fortyTwo",
    name: "42",
    xp: 281,
    description: "Roll a number containing 42."
},

{
    id: "thePrime",
    name: "The Prime",
    xp: 303,
    description: "Roll a number containing 37."
},

{
    id: "doubleDigits",
    name: "Double Digits",
    xp: 317,
    description: "Roll any two-digit number."
},

{
    id: "maximumGap",
    name: "Maximum Gap",
    xp: 329,
    description: "Two adjacent digits have to be 9 apart."
},

{
    id: "perfectTen",
    name: "Perfect Ten",
    xp: 344,
    description: "Roll a number containing 10."
},

{
    id: "unluckyThirteen",
    name: "Unlucky 13",
    xp: 358,
    description: "Roll a number containing 13."
},

{
    id: "perfectFifteen",
    name: "Perfect Fifteen",
    xp: 371,
    description: "Two adjacent digits must add up to exactly 15."
},

{
    id: "doubleTrouble",
    name: "Double Trouble",
    xp: 389,
    description: "Roll a number with two matching adjacent digits."
},

{
    id: "sixtyOne",
    name: "61",
    xp: 407,
    description: "Roll a number containing 61."
},

{
    id: "nice",
    name: "Nice",
    xp: 421,
    description: "Roll a number containing 69."
},

{
    id: "firstLast",
    name: "First & Last",
    xp: 438,
    description: "The first and last digit have to be the same."
},

{
    id: "fiftyFive",
    name: "55",
    xp: 456,
    description: "Roll a number containing 55."
},

{
    id: "tripleTrouble",
    name: "Triple Trouble",
    xp: 473,
    description: "Roll a three-digit number with three matching digits."
},

{
    id: "boomer",
    name: "Boomer",
    xp: 501,
    description: "Roll exactly 40."
},

{
    id: "doubleZero",
    name: "Double Zero",
    xp: 523,
    description: "Roll a number containing two adjacent zeros."
},

{
    id: "child",
    name: "Child",
    xp: 547,
    description: "Roll exactly 3, 4, 5 or 6."
},

{
    id: "baby",
    name: "Baby",
    xp: 569,
    description: "Roll exactly 1 or 2."
},

{
    id: "toddler",
    name: "Toddler",
    xp: 583,
    description: "Roll exactly 7, 8, 9 or 10."
},

{
    id: "earlyMaximum",
    name: "Early Maximum",
    xp: 601,
    description: "Roll exactly 99."
},

{
    id: "singleDigit",
    name: "Single Digit",
    xp: 624,
    description: "Roll exactly a single-digit number."
},

{
    id: "sixtySeven",
    name: "67",
    xp: 648,
    description: "Roll a number containing 67."
},

{
    id: "stepByStep",
    name: "Step By Step",
    xp: 671,
    description: "Roll a three-digit number with three consecutive digits."
},

{
    id: "blackHole",
    name: "Black Hole",
    xp: 697,
    description: "The middle digit has to be 0."
},

{
    id: "doubleEight",
    name: "Double Eight",
    xp: 718,
    description: "Roll exactly 88."
},

{
    id: "soClose",
    name: "So Close (-99)",
    xp: 743,
    description: "Roll a number ending in 99, including exactly 99."
},

{
    id: "luckyDouble",
    name: "Lucky Double",
    xp: 758,
    description: "Roll exactly 77."
},

{
    id: "wrapik",
    name: "Wrapik",
    xp: 786,
    description: "Roll exactly 339."
},

{
    id: "firstCentury",
    name: "First Century",
    xp: 813,
    description: "Roll exactly 100."
},

{
    id: "error404",
    name: "Error 404",
    xp: 842,
    description: "Roll exactly 404."
},

{
    id: "century",
    name: "Century",
    xp: 871,
    description: "Roll a number like 300, 600 or 700."
},

{
    id: "calendar",
    name: "Calendar",
    xp: 913,
    description: "Roll exactly 365 or 366."
},

{
    id: "applePi",
    name: "Apple Pi",
    xp: 957,
    description: "Roll a three-digit number containing 1, 4 and 3, but not 314."
},

{
    id: "larpcio",
    name: "34 (LARPCIO)",
    xp: 1027,
    description: "Roll exactly 34."
},

{
    id: "maximum",
    name: "Maximum",
    xp: 1089,
    description: "Roll exactly 999."
},

{
    id: "pi",
    name: "Pi",
    xp: 1173,
    description: "Roll exactly 314."
},

{
    id: "casino",
    name: "Casino",
    xp: 1462,
    description: "Roll exactly 777."
},

{
    id: "backOnTrack",
    name: "Back On Track",
    xp: 84,
    description: "Roll at least 3 Normal numbers in a row, then roll a Rare or Ultra Rare number."
}

];

/* =========================
SAVE
========================= */

function saveProgress() {

localStorage.setItem(
    "xp",
    String(xp)
);

localStorage.setItem(
    "level",
    String(level)
);

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
    "normalStreak",
    String(normalStreak)
);

localStorage.setItem(
    "coins",
    String(coins)
);

localStorage.setItem(
    "larpTokens",
    String(larpTokens)
);

localStorage.setItem(
    "activeCurrency",
    activeCurrency
);

localStorage.setItem(
    "unlockedAchievements",
    JSON.stringify(
        unlockedAchievements
    )
);

}

/* =========================
CURRENCY SAVE
========================= */

function saveCurrency() {

localStorage.setItem(
    "coins",
    String(coins)
);

localStorage.setItem(
    "larpTokens",
    String(larpTokens)
);

localStorage.setItem(
    "activeCurrency",
    activeCurrency
);

}

/* =========================
CURRENCY UI
========================= */

function updateCurrencyUI() {

coinsValue.textContent =
    coins;

tokenValue.textContent =
    larpTokens;

coinsButton.classList.toggle(
    "active",
    activeCurrency === "coins"
);

tokenButton.classList.toggle(
    "active",
    activeCurrency === "larpTokens"
);

/*
   Tylko druga waluta jest blur.
   Jeżeli żadna nie jest aktywna,
   obie są normalne.
*/

coinsButton.classList.toggle(
    "blurred",
    activeCurrency !== null &&
    activeCurrency !== "coins"
);

tokenButton.classList.toggle(
    "blurred",
    activeCurrency !== null &&
    activeCurrency !== "larpTokens"
);

updateUpgradeButtons();

}

/* =========================
CURRENCY GAIN
========================= */

function showCurrencyGain(
amount,
type
) {

if (!currencyGain) {
    return;
}

const element =
    document.createElement("div");

element.className =
    type === "coins"

        ? "currency-gain-animation"

        : "currency-gain-animation token-gain-animation";

element.textContent =
    type === "coins"

        ? `+${amount} COINS`

        : `+${amount} LARP TOKEN${amount === 1 ? "" : "S"}`;

currencyGain.innerHTML = "";

currencyGain.appendChild(
    element
);

setTimeout(
    () => {

        if (
            element.parentNode ===
            currencyGain
        ) {

            element.remove();

        }

    },
    1000
);

}

/* =========================
ADD COINS
========================= */

function addCoins(amount) {

if (
    !Number.isFinite(amount) ||
    amount <= 0
) {
    return;
}

amount =
    Math.floor(amount);

coins += amount;

saveCurrency();
updateCurrencyUI();

showCurrencyGain(
    amount,
    "coins"
);

}

/* =========================
ADD LARP TOKENS
========================= */

function addLarpTokens(amount) {

if (
    !Number.isFinite(amount) ||
    amount <= 0
) {
    return;
}

amount =
    Math.floor(amount);

larpTokens += amount;

saveCurrency();
updateCurrencyUI();

showCurrencyGain(
    amount,
    "tokens"
);

}

/* =========================
LEVEL / XP
========================= */

function getXPNeeded() {

return (
    100 +
    (level - 1) * 50
);

}

function updateXP() {

const requiredXP =
    getXPNeeded();

levelElement.textContent =
    level;

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
        amount *
        xpMultiplier
    );

xp += multipliedAmount;

while (
    xp >= getXPNeeded()
) {

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

if (
    xpValue <= 99
) {

    return {
        name: "Common",
        color: "#aaa"
    };

}

if (
    xpValue <= 199
) {

    return {
        name: "Uncommon",
        color: "#55d66b"
    };

}

if (
    xpValue <= 299
) {

    return {
        name: "Rare",
        color: "#4da6ff"
    };

}

if (
    xpValue <= 499
) {

    return {
        name: "Epic",
        color: "#a855f7"
    };

}

if (
    xpValue <= 749
) {

    return {
        name: "Legendary",
        color: "#ff9d00"
    };

}

if (
    xpValue <= 999
) {

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

function getUpgradeCount(type) {

if (
    type === "xp"
) {

    return Math.round(
        (xpMultiplier - 1) * 10
    );

}

if (
    type === "luck"
) {

    return Math.round(
        (luck - 1) * 10
    );

}

if (
    type === "speed"
) {

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

/* =========================
UPDATE UPGRADE BUTTONS
========================= */

function updateUpgradeButtons() {

const upgrades = [

    {
        button:
            xpUpgradeButton,

        costElement:
            xpUpgradeCost,

        type:
            "xp"
    },

    {
        button:
            luckUpgradeButton,

        costElement:
            luckUpgradeCost,

        type:
            "luck"
    },

    {
        button:
            speedUpgradeButton,

        costElement:
            speedUpgradeCost,

        type:
            "speed"
    }

];

upgrades.forEach(
    upgrade => {

        const coinCost =
            getUpgradeCost(
                upgrade.type
            );

        /*
           Coins:
           normalny koszt levelowy
           z Twojego starego systemu.

           LARP Tokens:
           zawsze 1 token.
        */

        if (
            activeCurrency ===
            "larpTokens"
        ) {

            upgrade.costElement.textContent =
                "1 TOKEN";

        } else {

            upgrade.costElement.textContent =
                `${coinCost} COINS`;

        }

        let canBuy =
            false;

        if (
            activeCurrency ===
            "coins"
        ) {

            canBuy =
                coins >= coinCost;

        }

        if (
            activeCurrency ===
            "larpTokens"
        ) {

            canBuy =
                larpTokens >= 1;

        }

        upgrade.button.disabled =
            !canBuy;

        upgrade.button.classList.toggle(
            "cant-buy",
            !canBuy
        );

    }
);

}

/* =========================
UPGRADE UI
========================= */

function updateUpgradeUI() {

const xpText =
    xpMultiplier.toFixed(1) +
    "x";

const luckText =
    luck.toFixed(1) +
    "x";

const speedText =
    animationSpeed.toFixed(1) +
    "x";

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

/* =========================
BUY UPGRADE
========================= */

function buyUpgrade(type) {

const coinCost =
    getUpgradeCost(type);

/*
   =========================
   COINS
   =========================
*/

if (
    activeCurrency === "coins"
) {

    if (
        coins < coinCost
    ) {
        return;
    }

    coins -= coinCost;
}

/*
   =========================
   LARP TOKENS
   =========================

   1 token = 1 upgrade.

   Coins NIE są zabierane.
*/

else if (
    activeCurrency ===
    "larpTokens"
) {

    if (
        larpTokens < 1
    ) {
        return;
    }

    larpTokens -= 1;

}

/*
   Brak aktywnej waluty
*/

else {

    return;
}

if (
    type === "xp"
) {

    xpMultiplier =
        Number(
            (
                xpMultiplier +
                0.1
            ).toFixed(1)
        );

}

if (
    type === "luck"
) {

    luck =
        Number(
            (
                luck +
                0.1
            ).toFixed(1)
        );

}

if (
    type === "speed"
) {

    animationSpeed =
        Number(
            (
                animationSpeed +
                0.1
            ).toFixed(1)
        );

}

saveProgress();

updateXP();

updateUpgradeUI();

updateCurrencyUI();

}

/* =========================
ACHIEVEMENT DETECTION
========================= */

function getAchievements(number) {

const found = [];

const numberString =
    String(number);

const digitValues =
    [...numberString]
        .map(Number);

const add = id => {

    if (
        !found.includes(id)
    ) {

        found.push(id);

    }
};

const contains = value =>
    numberString.includes(
        String(value)
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
    number === 1 ||
    number === 2
) {

    add("baby");

}

if (
    number >= 3 &&
    number <= 6
) {

    add("child");

}

if (
    number >= 7 &&
    number <= 10
) {

    add("toddler");

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

if (
    contains("10")
) {

    add("perfectTen");

}

if (
    contains("00")
) {

    add("doubleZero");

}

/* =====================
   DIGIT CONDITIONS
===================== */

const allDigitsBelowFive =
    digitValues.length > 1 &&
    digitValues.every(
        digit =>
            digit < 5
    );

if (
    allDigitsBelowFive
) {

    add("lowBall");

}

if (
    digitSum < 5 &&
    number >= 10
) {

    add("ultraLowBall");

}

if (
    digitSum > 20
) {

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
            first ===
            second * 2 &&
            second !== 0
        ) ||

        (
            second ===
            first * 2 &&
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
    number >= 39 &&
    number <= 69
) {

    add("facebookFan");

}

if (
    number >= 70 &&
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
   ENDING CONDITIONS
===================== */

if (
    number >= 25 &&
    number % 100 === 25
) {

    add("quarter");

}

if (
    number >= 50 &&
    number % 100 === 50
) {

    add("halfwayThere");

}

if (
    number >= 75 &&
    number % 100 === 75
) {

    add("threeQuarters");

}

if (
    number >= 99 &&
    number % 100 === 99
) {

    add("soClose");

}

/* =====================
   EXACT NUMBERS
===================== */

if (
    number === 40
) {

    add("boomer");

}

if (
    number === 99
) {

    add("earlyMaximum");

}

if (
    number === 77
) {

    add("luckyDouble");

}

if (
    number === 88
) {

    add("doubleEight");

}

if (
    number === 999
) {

    add("maximum");

}

if (
    number === 314
) {

    add("pi");

}

if (
    number === 100
) {

    add("firstCentury");

}

if (
    number === 777
) {

    add("casino");

}

if (
    number === 339
) {

    add("wrapik");

}

if (
    number === 404
) {

    add("error404");

}

if (
    number === 34
) {

    add("larpcio");

}

if (
    number === 365 ||
    number === 366
) {

    add("calendar");

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
    contains("13")
) {

    add("unluckyThirteen");

}

if (
    contains("61")
) {

    add("sixtyOne");

}

if (
    contains("67")
) {

    add("sixtySeven");

}

if (
    contains("69")
) {

    add("nice");

}

if (
    contains("37")
) {

    add("thePrime");

}

if (
    contains("42")
) {

    add("fortyTwo");

}

if (
    contains("55")
) {

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
   APPLE PI
===================== */

if (
    number !== 314 &&
    number >= 100 &&
    number <= 999 &&
    numberString.includes("1") &&
    numberString.includes("4") &&
    numberString.includes("3")
) {

    add("applePi");

}

/* =====================
   FIRST = LAST
===================== */

if (
    digitValues.length === 3 &&
    digitValues[0] ===
    digitValues[2]
) {

    add("firstLast");

}

/* =====================
   STEP BY STEP
===================== */

if (
    digitValues.length === 3 &&
    (
        (
            digitValues[1] ===
            digitValues[0] + 1 &&

            digitValues[2] ===
            digitValues[1] + 1
        ) ||

        (
            digitValues[1] ===
            digitValues[0] - 1 &&

            digitValues[2] ===
            digitValues[1] - 1
        )
    )
) {

    add("stepByStep");

    add("consecutive");

}

/* =====================
   CONSECUTIVE
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

    if (
        Math.abs(first - second) === 1
    ) {

        add("consecutive");

        break;

    }

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
   TRIPLE MATCHING
===================== */

if (
    number >= 100 &&
    number <= 999 &&
    digitValues.length === 3 &&
    digitValues[0] ===
    digitValues[1] &&
    digitValues[1] ===
    digitValues[2]
) {

    add("tripleTrouble");

}

/* =====================
   CENTURY
===================== */

if (
    number >= 200 &&
    number <= 999 &&
    number % 100 === 0
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
        .map(
            id =>
                achievements.find(
                    achievement =>
                        achievement.id === id
                )
        )
        .filter(Boolean);

const rarityAchievements =
    foundAchievements.filter(
        achievement =>
            achievement.id !==
            "backOnTrack"
    );

const hasHighRarity =
    rarityAchievements.some(
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

if (
    hasHighRarity
) {

    return "Ultra Rare";

}

const hasEpic =
    rarityAchievements.some(
        achievement =>
            getRarity(
                achievement.xp
            ).name === "Epic"
    );

if (
    hasEpic ||
    rarityAchievements.length >= 2
) {

    return "Rare";

}

return "Normal";

}

/* =========================
RARITY COLOR
========================= */

function getRarityColor(
rarity
) {

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
SHOW ROLL RARITY
========================= */

function showRollRarity(
rarity
) {

rollRarity.textContent =
    rarity.toUpperCase();

rollRarity.className =
    getRarityColor(
        rarity
    );

rollRarity.classList.add(
    "visible"
);

}

/* =========================
ROLL SYSTEM
========================= */

function rollNumber() {

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

    let weight = 100;

    if (
        rarity === "Rare"
    ) {

        weight =
            10 +
            (
                luck * 8
            );

    }

    if (
        rarity === "Ultra Rare"
    ) {

        weight =
            1 +
            (
                luck * 2.5
            );

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

    totalWeight +=
        weight;
}

let random =
    Math.random() *
    totalWeight;

for (
    const item of pool
) {

    random -=
        item.weight;

    if (
        random <= 0
    ) {

        return item.number;

    }
}

return 1;

}

/* =========================
BACK ON TRACK
========================= */

function checkBackOnTrack(
rarity
) {

if (
    rarity === "Normal"
) {

    normalStreak++;

    saveProgress();

    return false;
}

if (
    normalStreak >= 3 &&
    (
        rarity === "Rare" ||
        rarity === "Ultra Rare"
    )
) {

    normalStreak = 0;

    saveProgress();

    return true;
}

normalStreak = 0;

saveProgress();

return false;

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

if (
    changed
) {

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

            if (
                !search
            ) {

                return true;

            }

            return (

                achievement.name
                    .toLowerCase()
                    .includes(search)

                ||

                achievement.description
                    .toLowerCase()
                    .includes(search)

                ||

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

        if (
            !unlocked
        ) {

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

achievementElement.innerHTML =
    "";

const sortedAchievements =
    [...foundAchievements].sort(
        (a, b) =>
            a.xp - b.xp
    );

let totalDelay = 0;

sortedAchievements.forEach(
    (achievement, index) => {

        const isNew =
            !unlockedAchievements.includes(
                achievement.id
            );

        if (
            index > 0
        ) {

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

                if (
                    isNew
                ) {

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

if (
    !confirmed
) {

    return;

}

xp = 0;

level = 1;

xpMultiplier = 1;

luck = 1;

animationSpeed = 1;

normalStreak = 0;

coins = 0;

larpTokens = 0;

activeCurrency = "coins";

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
    "normalStreak"
);

localStorage.removeItem(
    "coins"
);

localStorage.removeItem(
    "larpTokens"
);

localStorage.removeItem(
    "activeCurrency"
);

localStorage.removeItem(
    "unlockedAchievements"
);

achievementElement.innerHTML =
    "";

rollRarity.textContent =
    "";

rollRarity.className =
    "";

button.disabled =
    false;

digits.forEach(
    digit => {

        digit.classList.remove(
            "drop"
        );

        digit.textContent =
            "";

        digit.style.removeProperty(
            "--animation-duration"
        );

    }
);

achievementSearch.value =
    "";

indexOverlay.classList.remove(
    "open"
);

updateXP();

updateUpgradeUI();

updateCurrencyUI();

renderIndex();

}

/* =========================
UPGRADE BUTTONS
========================= */

xpUpgradeButton.addEventListener(
"click",
() => {

    buyUpgrade(
        "xp"
    );

}

);

luckUpgradeButton.addEventListener(
"click",
() => {

    buyUpgrade(
        "luck"
    );

}

);

speedUpgradeButton.addEventListener(
"click",
() => {

    buyUpgrade(
        "speed"
    );

}

);

/* =========================
COINS BUTTON
========================= */

coinsButton.addEventListener(
"click",
event => {

    event.stopPropagation();

    /*
       Kliknięcie Coins:

       Coins -> odkliknięcie
       LARP -> Coins
    */

    if (
        activeCurrency ===
        "coins"
    ) {

        activeCurrency = null;

    } else {

        activeCurrency = "coins";

    }

    saveCurrency();

    updateCurrencyUI();

}

);

/* =========================
LARP TOKENS BUTTON
========================= */

tokenButton.addEventListener(
"click",
event => {

    event.stopPropagation();

    /*
       Kliknięcie LARP:

       LARP -> odkliknięcie
       Coins -> LARP
    */

    if (
        activeCurrency ===
        "larpTokens"
    ) {

        activeCurrency = null;

    } else {

        activeCurrency =
            "larpTokens";

    }

    saveCurrency();

    updateCurrencyUI();

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

    /*
       WALUTA NIE MA ŻADNEGO
       WPŁYWU NA ROLL.

       Roll zawsze działa.
    */

    if (
        button.disabled
    ) {

        return;

    }

    const number =
        rollNumber();

    button.disabled =
        true;

    achievementElement.innerHTML =
        "";

    digits.forEach(
        digit => {

            digit.classList.remove(
                "drop"
            );

            digit.textContent =
                "";

        }
    );

    rollRarity.classList.remove(
        "visible"
    );

    /*
       Wymuszenie ponownego
       przeliczenia animacji.
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

            const achievementIds =
                getAchievements(
                    number
                );

            const foundAchievements =
                achievementIds
                    .map(
                        id =>
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

            /*
               Back On Track.
            */

            const backOnTrack =
                checkBackOnTrack(
                    rarity
                );

            if (
                backOnTrack
            ) {

                const achievement =
                    achievements.find(
                        item =>
                            item.id ===
                            "backOnTrack"
                    );

                if (
                    achievement &&
                    !foundAchievements.some(
                        item =>
                            item.id ===
                            "backOnTrack"
                    )
                ) {

                    foundAchievements.push(
                        achievement
                    );

                }

            }

            /*
               =========================
               COINS
               =========================

               Normal = 1
               Rare = 2
               Ultra Rare = 5
            */

            if (
                rarity === "Normal"
            ) {

                addCoins(1);

            }

            if (
                rarity === "Rare"
            ) {

                addCoins(2);

            }

            if (
                rarity === "Ultra Rare"
            ) {

                addCoins(5);

            }

            /*
               =========================
               LARP TOKENS
               =========================

               Za każdy achievement
               będący Mythic albo
               Exclusive = +1 token.
            */

            let tokenAmount = 0;

            foundAchievements.forEach(
                achievement => {

                    /*
                       Back On Track ma XP 84,
                       więc jest Common i tutaj
                       automatycznie nie daje tokena.
                    */

                    const achievementRarity =
                        getRarity(
                            achievement.xp
                        ).name;

                    if (
                        achievementRarity ===
                        "Mythic" ||

                        achievementRarity ===
                        "Exclusive"
                    ) {

                        tokenAmount++;

                    }

                }
            );

            if (
                tokenAmount > 0
            ) {

                addLarpTokens(
                    tokenAmount
                );

            }

            /*
               Pokazanie rarity.
            */

            showRollRarity(
                rarity
            );

            /*
               Achievementy.
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

                    unlockAchievements(
                        foundAchievements
                    );

                    /*
                       XP za roll.
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

                    updateXP();

                    updateUpgradeUI();

                    updateCurrencyUI();

                    /*
                       Dopiero tutaj
                       odblokowujemy ROLL.
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

updateCurrencyUI();

renderIndex();