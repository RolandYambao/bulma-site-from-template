let ore = parseInt(document.querySelectorAll(".title")[1].innerText);
let attackPower = parseInt(document.querySelectorAll(".title")[2].innerText);
let yourPoints = parseInt(document.querySelectorAll(".title")[3].innerText);
let enemyPoints = parseInt(document.querySelectorAll(".title")[4].innerText);
let enemyAttack = Math.floor(Math.random() * 1000) + 1;
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
    if (yourPoints == "0") {
        return alert("Defeat");
    }
    if (enemyPoints == "0") {
        return alert("Victory");
    }
}
gatherOre.onClick = function () {
    ore = ore + 1000;
    document.querySelectorAll(".title")[1].innerText = parseString(ore);
    yourPoints = yourPoints - enemyAttack;
    document.querySelectorAll(".title")[3].innerText = parseString(yourPoints);
    victoryOrDefeat();
}
cannonFodder.onClick = function () {
    ore = ore - 10;
    document.querySelectorAll(".title")[1].innerText = parseString(ore);
    attackPower = attackPower + 10;
    document.querySelectorAll(".title")[2].innerText = parseString(attackPower);
    yourPoints = yourPoints - enemyAttack;
    document.querySelectorAll(".title")[3].innerText = parseString(yourPoints);
    victoryOrDefeat();
}
blindOverseers.onClick = function () {
    ore = ore - 30;
    document.querySelectorAll(".title")[1].innerText = parseString(ore);
    attackPower = attackPower + 25;
    document.querySelectorAll(".title")[2].innerText = parseString(attackPower);
    yourPoints = yourPoints - enemyAttack;
    document.querySelectorAll(".title")[3].innerText = parseString(yourPoints);
    victoryOrDefeat();
}
eviserators.onClick = function () {
    ore = ore - 50;
    document.querySelectorAll(".title")[1].innerText = parseString(ore);
    attackPower = attackPower + 45;
    document.querySelectorAll(".title")[2].innerText = parseString(attackPower);
    yourPoints = yourPoints - enemyAttack;
    document.querySelectorAll(".title")[3].innerText = parseString(yourPoints);
    victoryOrDefeat();
}
masterminds.onClick = function () {
    ore = ore - 75;
    document.querySelectorAll(".title")[1].innerText = parseString(ore);
    attackPower = attackPower + 60;
    document.querySelectorAll(".title")[2].innerText = parseString(attackPower);
    yourPoints = yourPoints - enemyAttack;
    document.querySelectorAll(".title")[3].innerText = parseString(yourPoints);
    victoryOrDefeat();
}
adjudicators.onClick = function () {
    ore = ore - 100;
    document.querySelectorAll(".title")[1].innerText = parseString(ore);
    attackPower = attackPower + 80;
    document.querySelectorAll(".title")[2].innerText = parseString(attackPower);
    yourPoints = yourPoints - enemyAttack;
    document.querySelectorAll(".title")[3].innerText = parseString(yourPoints);
    victoryOrDefeat();
}
enslavers.onClick = function () {
    ore = ore - 500;
    document.querySelectorAll(".title")[1].innerText = parseString(ore);
    attackPower = attackPower + 250;
    document.querySelectorAll(".title")[2].innerText = parseString(attackPower);
    yourPoints = yourPoints - enemyAttack;
    document.querySelectorAll(".title")[3].innerText = parseString(yourPoints);
    victoryOrDefeat();
}
subjugators.onClick = function () {
    ore = ore - 1000;
    document.querySelectorAll(".title")[1].innerText = parseString(ore);
    attackPower = attackPower + 500;
    document.querySelectorAll(".title")[2].innerText = parseString(attackPower);
    yourPoints = yourPoints - enemyAttack;
    document.querySelectorAll(".title")[3].innerText = parseString(yourPoints);
    victoryOrDefeat();
}
ferventDespoilation.onClick = function () {
    ore = ore + 250;
    document.querySelectorAll(".title")[1].innerText = parseString(ore);
    enemyPoints = enemyPoints - 50;
    document.querySelectorAll(".title")[4].innerText = parseString(enemyPoints);
    yourPoints = yourPoints - enemyAttack;
    document.querySelectorAll(".title")[3].innerText = parseString(yourPoints);
    victoryOrDefeat();
}
spiritOfOblivion.onClick = function () {
    ore = ore - 250;
    document.querySelectorAll(".title")[1].innerText = parseString(ore);
    enemyPoints = enemyPoints - 250;
    document.querySelectorAll(".title")[4].innerText = parseString(enemyPoints);
    attackPower = attackPower - 250;
    document.querySelectorAll(".title")[2].innerText = parseString(attackPower);
    yourPoints = yourPoints - enemyAttack;
    document.querySelectorAll(".title")[3].innerText = parseString(yourPoints);
    victoryOrDefeat();
}
marchOfTyranny.onClick = function () {
    ore = ore - 500;
    document.querySelectorAll(".title")[1].innerText = parseString(ore);
    enemyPoints = enemyPoints - (attackPower*0.5);
    document.querySelectorAll(".title")[4].innerText = parseString(enemyPoints);
    attackPower = attackPower*0.5;
    document.querySelectorAll(".title")[2].innerText = parseString(attackPower);
    yourPoints = yourPoints - enemyAttack;
    document.querySelectorAll(".title")[3].innerText = parseString(yourPoints);
    victoryOrDefeat();
}
edictOfAnnihilation.onClick = function () {
    ore = 0;
    document.querySelectorAll(".title")[1].innerText = parseString(ore);
    enemyPoints = enemyPoints - attackPower;
    document.querySelectorAll(".title")[4].innerText = parseString(enemyPoints);
    attackPower = 0;
    document.querySelectorAll(".title")[2].innerText = parseString(attackPower);
    yourPoints = yourPoints - enemyAttack;
    document.querySelectorAll(".title")[3].innerText = parseString(yourPoints);
    victoryOrDefeat();
}
