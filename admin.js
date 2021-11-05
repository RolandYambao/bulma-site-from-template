let ore = parseInt(document.querySelectorAll(".title")[1].innerText);
let attackPower = parseInt(document.querySelectorAll(".title")[2].innerText);
let yourPoints = parseInt(document.querySelectorAll(".title")[3].innerText);
let enemyPoints = parseInt(document.querySelectorAll(".title")[4].innerText);
let enemyAttack = Math.floor(Math.random() * 200) + 1;
let gatherOre = document.querySelectorAll(".button")[0];
let cannonFodder = document.querySelectorAll(".button")[1];
let blindOverseers = document.querySelectorAll(".button")[2];
let eviserators = document.querySelectorAll(".button")[3];
let masterminds = document.querySelectorAll(".button")[4];
let adjudicators = document.querySelectorAll(".button")[5];
let enslavers = document.querySelectorAll(".button")[6];
let subjugators = document.querySelectorAll(".button")[7];
let ferventDespoilation = document.querySelectorAll(".button")[8];
let spiritOfOblivion = document.querySelectorAll(".button")[9];
let marchOfTyranny = document.querySelectorAll(".button")[10];
let edictOfAnnihilation = document.querySelectorAll(".button")[11];


console.log(ore);
console.log(attackPower);
console.log(yourPoints);
console.log(enemyPoints);


function victoryOrDefeat() {
    if (yourPoints <= 0) {
        return alert("Defeat");
    }
    if (enemyPoints <= 0) {
        return alert("Victory");
    }
}

gatherOre.addEventListener('click', function () {
    ore = ore + 1000;
    document.querySelectorAll(".title")[1].innerText = ore.toString();
    yourPoints = yourPoints - enemyAttack;
    document.querySelectorAll(".title")[3].innerText = yourPoints.toString();
    victoryOrDefeat();
})
cannonFodder.addEventListener('click', function () {
    ore = ore - 10;
    document.querySelectorAll(".title")[1].innerText = ore.toString();
    attackPower = attackPower + 10;
    document.querySelectorAll(".title")[2].innerText = attackPower.toString();
    yourPoints = yourPoints - enemyAttack;
    document.querySelectorAll(".title")[3].innerText = yourPoints.toString();
    victoryOrDefeat();
})
blindOverseers.addEventListener('click', function () {
    ore = ore - 30;
    document.querySelectorAll(".title")[1].innerText = ore.toString();
    attackPower = attackPower + 25;
    document.querySelectorAll(".title")[2].innerText = attackPower.toString();
    yourPoints = yourPoints - enemyAttack;
    document.querySelectorAll(".title")[3].innerText = yourPoints.toString();
    victoryOrDefeat();
})
eviserators.addEventListener('click', function () {
    ore = ore - 50;
    document.querySelectorAll(".title")[1].innerText = ore.toString();
    attackPower = attackPower + 45;
    document.querySelectorAll(".title")[2].innerText = attackPower.toString();
    yourPoints = yourPoints - enemyAttack;
    document.querySelectorAll(".title")[3].innerText = yourPoints.toString();
    victoryOrDefeat();
})
masterminds.addEventListener('click', function () {
    ore = ore - 75;
    document.querySelectorAll(".title")[1].innerText = ore.toString();
    attackPower = attackPower + 60;
    document.querySelectorAll(".title")[2].innerText = attackPower.toString();
    yourPoints = yourPoints - enemyAttack;
    document.querySelectorAll(".title")[3].innerText = yourPoints.toString();
    victoryOrDefeat();
})
adjudicators.addEventListener('click', function () {
    ore = ore - 100;
    document.querySelectorAll(".title")[1].innerText = ore.toString();
    attackPower = attackPower + 80;
    document.querySelectorAll(".title")[2].innerText = attackPower.toString();
    yourPoints = yourPoints - enemyAttack;
    document.querySelectorAll(".title")[3].innerText = yourPoints.toString();
    victoryOrDefeat();
})
enslavers.addEventListener('click', function () {
    ore = ore - 500;
    document.querySelectorAll(".title")[1].innerText = ore.toString();
    attackPower = attackPower + 250;
    document.querySelectorAll(".title")[2].innerText = attackPower.toString();
    yourPoints = yourPoints - enemyAttack;
    document.querySelectorAll(".title")[3].innerText = yourPoints.toString();
    victoryOrDefeat();
})
subjugators.addEventListener('click', function () {
    ore = ore - 1000;
    document.querySelectorAll(".title")[1].innerText = ore.toString();
    attackPower = attackPower + 500;
    document.querySelectorAll(".title")[2].innerText = attackPower.toString();
    yourPoints = yourPoints - enemyAttack;
    document.querySelectorAll(".title")[3].innerText = yourPoints.toString();
    victoryOrDefeat();
})
ferventDespoilation.addEventListener('click', function () {
    ore = ore + 250;
    document.querySelectorAll(".title")[1].innerText = ore.toString();
    enemyPoints = enemyPoints - 50;
    document.querySelectorAll(".title")[4].innerText = enemyPoints.toString();
    yourPoints = yourPoints - enemyAttack;
    document.querySelectorAll(".title")[3].innerText = yourPoints.toString();
    victoryOrDefeat();
})
spiritOfOblivion.addEventListener('click', function () {
    ore = ore - 250;
    document.querySelectorAll(".title")[1].innerText = ore.toString();
    enemyPoints = enemyPoints - 250;
    document.querySelectorAll(".title")[4].innerText = enemyPoints.toString();
    attackPower = attackPower - 250;
    document.querySelectorAll(".title")[2].innerText = attackPower.toString();
    yourPoints = yourPoints - enemyAttack;
    document.querySelectorAll(".title")[3].innerText = yourPoints.toString();
    victoryOrDefeat();
})
marchOfTyranny.addEventListener('click', function () {
    ore = ore - 500;
    document.querySelectorAll(".title")[1].innerText = ore.toString();
    enemyPoints = enemyPoints - (attackPower * 0.5);
    document.querySelectorAll(".title")[4].innerText = enemyPoints.toString();
    attackPower = attackPower * 0.5;
    document.querySelectorAll(".title")[2].innerText = attackPower.toString();
    yourPoints = yourPoints - enemyAttack;
    document.querySelectorAll(".title")[3].innerText = yourPoints.toString();
    victoryOrDefeat();
})
edictOfAnnihilation.addEventListener('click', function () {
    ore = 0;
    document.querySelectorAll(".title")[1].innerText = ore.toString();
    enemyPoints = enemyPoints - attackPower;
    document.querySelectorAll(".title")[4].innerText = enemyPoints.toString();
    attackPower = 0;
    document.querySelectorAll(".title")[2].innerText = attackPower.toString();
    yourPoints = yourPoints - enemyAttack;
    document.querySelectorAll(".title")[3].innerText = yourPoints.toString();
    victoryOrDefeat();
});
