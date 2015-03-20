//Ryan Postma
//CMP237
//3/19/2015
//days since the beginning of WW2 that the tank was made.

load("tanks.js");

//display tank list
for(var i = 0; i < TANKS.length; i++) {
	print(i + " " + TANKS[i].name);
}

//function that shows how many days passed since hte start of WW2 and the day the tank was built
function diffWW2(x) {
	var tank = new Date(TANKS[x].built).getTime();
	var ww2 = new Date("8/1/1939").getTime();
	var result = Math.floor((tank - ww2) / 86400000);
	return ("The " + TANKS[x].name + " was built " + result + " Days after WW2 started");
}

//run func
print(diffWW2(1));

