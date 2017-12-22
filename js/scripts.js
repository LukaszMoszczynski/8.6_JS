alert("Wprowadź 'a' i 'b' w celu obliczenia =a^2-2ab+b^2 ");
var a = prompt( "Wprowadź a");
var b = prompt( "Wprowadź b");

value = (a * a) - (2 * a * b) + ( b* b);

console.log ("Wynik działania a^2-2ab+b^2 wynosi " + value);

if (value > 0) {
	console.log ("wynik jest wartością dodatnią");
} else if (value < 0) {
	console.log ("wynik jest wartością ujemną");
} else {
	console.log ("wynik jest równy zero");
}


if (value > 0) {
	alert("Wynik wynosi " + value + ", wynik jest wartością dodatnią");
} else if (value < 0) {
	alert("Wynik wynosi " + value + ",  wynik jest wartością ujemną" );
} else {
	alert("Wynik wynosi " + value + ",  wynik jest równy zero" );
}