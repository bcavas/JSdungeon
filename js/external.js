var x = 100; //hero HP
var y = 200; //monster HP
var z = 10; //hero MP
var heroAtk = Math.floor((Math.random() * 10) + 2);
var monsterAtk = Math.floor((Math.random() * 10) + 1);
var critTrigger;


$(document).ready(function() {
	$("#heroHP").html(x);
	$("#creepHP").html(y);
	$("#heroMP").html(z);
});

function attack() {
	var heroAtk = Math.floor((Math.random() * 10) + 2);
	var monsterAtk = Math.floor((Math.random() * 10) + 1);
	var critTrigger = Math.random();
	var heroCrit = 2 * heroAtk;
	
	
	if (critTrigger<=0.25) {
		y -= heroCrit;
		document.getElementById("creepHP").innerHTML = y;
		document.getElementById("consoleHero").innerHTML = "Critical hit! You struck the goblin for " + heroCrit + " damage.";
	} else {
		y -= heroAtk;
		document.getElementById("creepHP").innerHTML = y;
		document.getElementById("consoleHero").innerHTML = "You lashed out and hit the goblin for " + heroAtk + " damage.";
	}
	x -= monsterAtk;
	document.getElementById("heroHP").innerHTML = x;
	document.getElementById("consoleMonster").innerHTML = "The goblin struck you for " + monsterAtk + " damage.";
	end();
}

function items() {
	alert("You have no items yet! Loot vanquished enemies first.")
}

function heal() {
	var heroAtk = Math.floor((Math.random() * 10) + 2);
	var monsterAtk = Math.floor((Math.random() * 10) + 1);
	var critTrigger = Math.random();
	

	if (critTrigger<=0.30 && z>0) {
		x += 40;
		z -= 5;
		document.getElementById("heroHP").innerHTML = x;
		document.getElementById("heroMP").innerHTML = z;
		document.getElementById("consoleHero").innerHTML = "Critical heal! Your focus for this round doubled your healing ability. You recovered 40 health."
	} else if (critTrigger>0.30 && z>0) {
		x += 20;
		z -= 5;
		document.getElementById("heroHP").innerHTML = x;
		document.getElementById("heroMP").innerHTML = z;
		document.getElementById("consoleHero").innerHTML = "You cast a healing spell and recovered 20 health."
	} else if (z==0) {
		alert("Not enough mana!");
	}
	x -= monsterAtk;
	document.getElementById("heroHP").innerHTML = x;
	document.getElementById("consoleMonster").innerHTML = "The goblin is unrelenting in its assault! It attacked you for " + monsterAtk + " damage!"
}

function flee() {
	alert("You have fled Jabba Skripp's castle. The people of Tuitt are doomed to suffer his wrath for all eternity.")
}


function end() {
		if (x<=0) {
		alert("You vowed to free Tuitt from Jabba Skripp's reign or die trying. You died trying. Game over.")
	}

		if (y<=0) {
		alert("Thank you for trying out Dicey Dungeon's demo! You have defeated Jabba Skripp's first minion but many more await to take his place. Expect to see loot, xp, hero levels, skill trees, and many more cool features in the final release. Stay tuned!")
	}
}


