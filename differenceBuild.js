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
	print(tank1);
	print(tank2);
	var result = Math.floor((tank1 - tank2) / -86400000);
	//print(result);
	return (result + " days apart");
}
//print(new Date(TANKS[0].built).getTime());
print(difference(2,4));

/*
print("pick one");

x = readline();

print("pick another to find a difference in built dates");

y = readline();

print(x,y);
*/
