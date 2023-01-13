let vard = "Andrius";
let pav = "p";
let abu = vard + " " + pav;

console.log(vard)

let x = 5;
let y = "5"

if (x == y) {
    console.log("lygu");

} else {
    console.log("ne lygu");

}

console.log(x + y);

console.log(vard.length);

let tekstas = "pirmas";
console.log(tekstas.length);
console.log(tekstas.toUpperCase());
console.log(tekstas.toLowerCase());
console.log(tekstas.charAt(1));
console.log(tekstas.indexOf("m"));

tekstas = "Cia gali buti jusu reklama";
console.log(tekstas.replace("gali buti", "yra"))
console.log(tekstas.substring(4, 14));
console.log(tekstas.substring(14));
console.log(tekstas.substr(4, 9));

x = 6.34;
console.log(Math.round(x));
console.log(Math.ceil(x));
console.log(Math.floor(x));

y = 5.8
let z = 9;

console.log(Math.max(x, y, z));
console.log(Math.min(x, y, z));

let i = Math.round(Math.random() * 30);
console.log(i);

let a = Math.floor(Math.random() * (50 - 10 + 1) + 10);
console.log(a);


num1 = 1;
while (num1 <= 10) {
    console.log(num1);
    num1++;

}

let suma = 0;
for (let t = 1; t <= 10; t++) {
    suma += t;
}

console.log(suma);

// suma = 0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55
// t = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10


suma = 0;
let skaiciai = [10, 20, 30, 40, 50, 60, 70, 80];
for (let w = 0; w < skaiciai.length; w++) {
    suma = suma + skaiciai[w];
}
console.log(suma);

if (4 < 7 && 8 < 10) {
    console.log("labas");
}


//alert("You have a virus!");

//confirm("Ar tikrai nori atidaryti?");
//prompt("koks tavo vardas?");

/*let turimVarda = false;


while (turimVarda == false) {
    let userVardas = prompt("Koks tavo vardas?");

    if (userVardas) {
        if (confirm(`Ar tikrai tavo vardas ${userVardas}?`)) {
            alert(`Labas, ${userVardas}!`);
            turimVarda = true;
        } else {
            alert("Bandyk dar kart.");
        }
    } else {
        alert("Bandyk dar kart.");
    }
}
*/

/*
function sumOfCubes(a, b){
    return a * a * a + b * b * b;
}
let mySum = sumOfCubes(4, 9);
console.log(mySum);

document.getElementById("heading"). innerText = "Labas"
*/
/*
let studentai = ["Algis", "Alex", "Andrius", "Laurynas"];
for(let i = 0; i < studentai.length; i++) {
    if(i % 2 == 0) {
console.log(studentai[i]);
    }
}

console.log(studentai[2]);
studentai[2] = "tomas";
console.log(studentai[2]);
studentai.pop();
console.log(studentai);
studentai.push("lukas");
console.log(studentai);
*/

let pienoProduktai = ["pienas", "kefyras", "suris"];
let kitiProduktai = ["sausainiai", "kruopos", "alus"];
let produktai = [pienoProduktai, kitiProduktai];
console.log(produktai);
console.log(produktai[1][1]);

let numberList = (2, 3,5, 8, 4, 7, 6, 9, 1, 12);

let lyginiuKiekis = 0;
for(let i =0; i < numberList.length; i++) {
    if (numberList[i] % 2 == 0) {
        lyginiuKiekis++;
        } else{
            numberList[i] = undefined;
        }
}
console.log(lyginiuKiekis);
console.log(numberList);



