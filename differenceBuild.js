//Ryan Postma
//CMP237
//3/19/2015
//function for displaying the difference in dats between two tanks.

load("tanks.js");

var x, y;

for(var i = 0; i < TANKS.length; i++) {
	print(TANKS[i].name);
}

function difference(x, y) {
	print(TANK[x].name + " build date minus " + TANK[y].name + " build date");
	var tank1 = new Date(TANK[x].built).getTime();
	var tank2 = new Date(TANK[y].built).getTime();
	var result = (tank1 - tank2)/86400000);
	return (result + " days apart");
}

difference(2,4);

/*
print("pick one");

x = readline();

print("pick another to find a difference in built dates");

y = readline();

print(x,y);
*/
