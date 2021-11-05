let ore = parseInt(document.querySelectorAll(".title")[1].innerText);
let attackPower = parseInt(document.querySelectorAll(".title")[2].innerText);
let yourPoints = parseInt(document.querySelectorAll(".title")[3].innerText);
let enemyPoints = parseInt(document.querySelectorAll(".title")[4].innerText);
let searchOre = document.querySelector("#searchOre");
let inputOre = document.querySelector("#inputOre");
let searchAttack = document.querySelector("#searchAttack");
let inputAttack = document.querySelector("#inputAttack");
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

function victoryOrDefeat() {
    if (yourPoints <= 0) {
        alert("Defeat");
        return  location.reload();
    }
    if (enemyPoints <= 0) {
        alert("Victory");
        return location.reload();
    }
}
searchOre.addEventListener('click', function () {
    if (inputOre.value > 0 && inputOre.value != null && inputOre.value <= 2000) {
        let randomChance = Math.floor(Math.random() * 10) + 1;
        if (randomChance >= 5) {
            ore = ore + parseInt(inputOre.value);
            document.querySelectorAll(".title")[1].innerText = ore.toString();
            yourPoints = yourPoints - Math.floor(Math.random() * 500) + 1;
            document.querySelectorAll(".title")[3].innerText = yourPoints.toString();
            victoryOrDefeat();
            return alert("You found Ore [Rolled: " + randomChance + "/10] (You need 5+)");
        } else {
            yourPoints = yourPoints - Math.floor(Math.random() * 500) + 1;
            document.querySelectorAll(".title")[3].innerText = yourPoints.toString();
            victoryOrDefeat();
            return alert("You failed to find Ore [Rolled: " + randomChance + "/10] (You need 5+)");
        }
    } else {
        return alert("You can only Search for between 1-2000 Ore");
    }
})
searchAttack.addEventListener('click', function () {
    if (inputAttack.value > 0 && inputAttack.value != null && inputAttack.value <= 2000) {
        let randomChance = Math.floor(Math.random() * 10) + 1;
        if (randomChance >= 7) {
            attackPower = attackPower + parseInt(inputAttack.value);
            document.querySelectorAll(".title")[2].innerText = attackPower.toString();
            yourPoints = yourPoints - Math.floor(Math.random() * 500) + 1;
            document.querySelectorAll(".title")[3].innerText = yourPoints.toString();
            victoryOrDefeat();
            return alert("You found Attack Power [Rolled: " + randomChance + "/10] (You need 7+)");
        } else {
            yourPoints = yourPoints - Math.floor(Math.random() * 500) + 1;
            document.querySelectorAll(".title")[3].innerText = yourPoints.toString();
            victoryOrDefeat();
            return alert("You failed to find Attack Power [Rolled: " + randomChance + "/10] (You need 7+)");
        }
    } else {
        return alert("You can only Search for between 1-2000 Ore");
    }
})
gatherOre.addEventListener('click', function () {
    ore = ore + 1000;
    document.querySelectorAll(".title")[1].innerText = ore.toString();
    yourPoints = yourPoints - Math.floor(Math.random() * 500) + 1;
    document.querySelectorAll(".title")[3].innerText = yourPoints.toString();
    victoryOrDefeat();
})
cannonFodder.addEventListener('click', function () {
    if (ore >= 10) {
        ore = ore - 10;
    } else {
        return alert("Not Enough Ore")
    }
    document.querySelectorAll(".title")[1].innerText = ore.toString();
    attackPower = attackPower + 10;
    document.querySelectorAll(".title")[2].innerText = attackPower.toString();
    yourPoints = yourPoints - Math.floor(Math.random() * 5) + 1;
    document.querySelectorAll(".title")[3].innerText = yourPoints.toString();
    victoryOrDefeat();
})
blindOverseers.addEventListener('click', function () {
    if (ore >= 30) {
        ore = ore - 30;
    } else {
        return alert("Not Enough Ore")
    }
    document.querySelectorAll(".title")[1].innerText = ore.toString();
    attackPower = attackPower + 25;
    document.querySelectorAll(".title")[2].innerText = attackPower.toString();
    yourPoints = yourPoints - Math.floor(Math.random() * 10) + 1;
    document.querySelectorAll(".title")[3].innerText = yourPoints.toString();
    victoryOrDefeat();
})
eviserators.addEventListener('click', function () {
    if (ore >= 50) {
        ore = ore - 50;
    } else {
        return alert("Not Enough Ore")
    }
    document.querySelectorAll(".title")[1].innerText = ore.toString();
    attackPower = attackPower + 45;
    document.querySelectorAll(".title")[2].innerText = attackPower.toString();
    yourPoints = yourPoints - Math.floor(Math.random() * 20) + 1;
    document.querySelectorAll(".title")[3].innerText = yourPoints.toString();
    victoryOrDefeat();
})
masterminds.addEventListener('click', function () {
    if (ore >= 75) {
        ore = ore - 75;
    } else {
        return alert("Not Enough Ore")
    }
    document.querySelectorAll(".title")[1].innerText = ore.toString();
    attackPower = attackPower + 60;
    document.querySelectorAll(".title")[2].innerText = attackPower.toString();
    yourPoints = yourPoints - Math.floor(Math.random() * 30) + 1;
    document.querySelectorAll(".title")[3].innerText = yourPoints.toString();
    victoryOrDefeat();
})
adjudicators.addEventListener('click', function () {
    if (ore >= 100) {
        ore = ore - 100;
    } else {
        return alert("Not Enough Ore")
    }
    document.querySelectorAll(".title")[1].innerText = ore.toString();
    attackPower = attackPower + 80;
    document.querySelectorAll(".title")[2].innerText = attackPower.toString();
    yourPoints = yourPoints - Math.floor(Math.random() * 40) + 1;
    document.querySelectorAll(".title")[3].innerText = yourPoints.toString();
    victoryOrDefeat();
})
enslavers.addEventListener('click', function () {
    if (ore >= 500) {
        ore = ore - 500;
    } else {
        return alert("Not Enough Ore")
    }
    document.querySelectorAll(".title")[1].innerText = ore.toString();
    attackPower = attackPower + 250;
    document.querySelectorAll(".title")[2].innerText = attackPower.toString();
    yourPoints = yourPoints - Math.floor(Math.random() * 125) + 1;
    document.querySelectorAll(".title")[3].innerText = yourPoints.toString();
    victoryOrDefeat();
})
subjugators.addEventListener('click', function () {
    if (ore >= 1000) {
        ore = ore - 1000;
    } else {
        return alert("Not Enough Ore")
    }
    document.querySelectorAll(".title")[1].innerText = ore.toString();
    attackPower = attackPower + 500;
    document.querySelectorAll(".title")[2].innerText = attackPower.toString();
    yourPoints = yourPoints - Math.floor(Math.random() * 250) + 1;
    document.querySelectorAll(".title")[3].innerText = yourPoints.toString();
    returnvictoryOrDefeat();
})
ferventDespoilation.addEventListener('click', function () {
    ore = ore + 250;
    document.querySelectorAll(".title")[1].innerText = ore.toString();
    enemyPoints = enemyPoints - 50;
    document.querySelectorAll(".title")[4].innerText = enemyPoints.toString();
    yourPoints = yourPoints - Math.floor(Math.random() * 100) + 1;
    document.querySelectorAll(".title")[3].innerText = yourPoints.toString();
    victoryOrDefeat();
})
spiritOfOblivion.addEventListener('click', function () {
    if (attackPower >= 250) {
        attackPower = attackPower - 250;
    } else {
        return alert("Not Enough Attack Power")
    }
    if (ore >= 250) {
        ore = ore - 250;
    } else {
        return alert("Not Enough Ore")
    }
    document.querySelectorAll(".title")[1].innerText = ore.toString();
    enemyPoints = enemyPoints - 250;
    document.querySelectorAll(".title")[4].innerText = enemyPoints.toString();
    document.querySelectorAll(".title")[2].innerText = attackPower.toString();
    yourPoints = yourPoints - Math.floor(Math.random() * 100) + 1;
    document.querySelectorAll(".title")[3].innerText = yourPoints.toString();
    victoryOrDefeat();
})
marchOfTyranny.addEventListener('click', function () {
    if (attackPower > 0) {
        attackPower = attackPower * 0.5;
    } else {
        return alert("Not Enough Attack Power")
    }
    if (ore >= 500) {
        ore = ore - 500;
    } else {
        return alert("Not Enough Ore")
    }
    document.querySelectorAll(".title")[1].innerText = ore.toString();
    enemyPoints = enemyPoints - (attackPower * 0.5);
    document.querySelectorAll(".title")[4].innerText = enemyPoints.toString();
    document.querySelectorAll(".title")[2].innerText = attackPower.toString();
    yourPoints = yourPoints - Math.floor(Math.random() * 1000) + 1;
    document.querySelectorAll(".title")[3].innerText = yourPoints.toString();
    victoryOrDefeat();
})
edictOfAnnihilation.addEventListener('click', function () {
    if (attackPower > 0) {
        enemyPoints = enemyPoints - attackPower;
    } else {
        return alert("Not Enough Attack Power")
    }
    if (ore >= 0) {
        ore = 0;
    } else {
        return alert("Not Enough Ore")
    }
    document.querySelectorAll(".title")[1].innerText = ore.toString();
    document.querySelectorAll(".title")[4].innerText = enemyPoints.toString();
    attackPower = 0;
    document.querySelectorAll(".title")[2].innerText = attackPower.toString();
    yourPoints = yourPoints - Math.floor(Math.random() * 2000) + 1;
    document.querySelectorAll(".title")[3].innerText = yourPoints.toString();
    victoryOrDefeat();
});
