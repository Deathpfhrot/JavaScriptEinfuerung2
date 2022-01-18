// var x = "Hello ";
// var y = "World<br>";

// var z = x + y;

// document.write(z)

// var n = x + " " + y;
// document.write(n)

//Guter Witz: Der Fussbuss fährt immer

var wetter = "regen";
let himmel = "wolken";
const millenniumFalke = "300.000 km/s"

var allesZusammen = "Egal ob " + wetter + " oder " + himmel + " der Millenium Falke fliegt immer " + millenniumFalke

document.write(allesZusammen);

//Modolu
console.log(25 % 6); // 25 / 6 = (4 x 6) = 24 // Rest = 1

// ----------- comparison ----------
// less: <
// greater: >
// less equal: <=
// greater equal: >=
// equal: == (compare value) inhaltswert wird vergliechen
// on point equal: === (compare value and type) inhaltswert + datatyp ist gleich
// not equal: !== // nicht gleich
// strict not equal: !== // nicht gleicher wert + datatyp
// not: ! // nicht
// shortcut log pfeiltaste runter für console.log

console.log
console.log();

console.log(1 == true); //true
console.log(0 == false); //true
console.log(1 === true); // false
console.log(0 === false); // false
console.log(0 === true); // false

// input feld ergebnis ist ein "String"


// console.log + typeof() gibt den datentyp wieder
x = 90;
y = "hallo";
z = true;
a = false;

console.log(typeof (x));
console.log(typeof (y));
console.log(typeof (z));
console.log(typeof (a));


document.getElementById("bsp").innerHTML = "JS Script";

var meintext = document.getElementById("bsp3").innerHTML = "texttest"

console.log(meintext);

function numbers(){ //function + name ()
    // function body
    let u = 5
    let i = 6
    console.log("u + i = " + u + i);
}
// eine function muss mit ihrem function name ausgeführt werden
numbers()