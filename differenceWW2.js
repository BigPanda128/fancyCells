//Ryan Postma
//CMP237
//3/19/2015
//days since the beginning of WW2 that the tank was made.

load("tanks.js");

for(var i = 0; i < TANKS.length; i++) {
	print(i + " " + TANKS[i].name);
}

function diffWW2(x) {
	var tank = new Date(TANKS[x].built).getTime();
	var ww2 = new Date("8/1/1939").getTime();
	var result = Math.floor((tank - ww2) / 86400000);
	return ("The " + TANKS[x].name + " was built " + result + " Days after WW2 started");
}

print(diffWW2(1));

