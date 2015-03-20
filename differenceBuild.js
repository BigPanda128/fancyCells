//Ryan Postma
//CMP237
//3/19/2015
//function for displaying the difference in dats between two tanks.

load("tanks.js");


for(var i = 0; i < TANKS.length; i++) {
	print(i + " " + TANKS[i].name);
}

function difference(x, y) {
	print(TANKS[x].name + " build date minus " + TANKS[y].name + " build date");
	var tank1 = new Date(TANKS[x].built).getTime();
	var tank2 = new Date(TANKS[y].built).getTime();
	var result = Math.floor((tank1 - tank2) / -86400000);
	return ("The " + TANKS[x].name + " and " + TANKS[y].name + " were built " + result + " days apart");
}
print(difference(2,4));
