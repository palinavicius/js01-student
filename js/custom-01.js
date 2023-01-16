/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/


/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/

let vardas = "Andrius";
let pava = "P";
let gmetai = 1983;
let dmetai = new Date().getFullYear();
console.log("Aš esu" + " " + vardas + " " + pava + "." + " " + "Man yra" + " " + (gmetai - dmetai) + " " + "metai" + ".");





/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/

let aa = Math.random() * 4;
let b = Math.random() * 4;
let result;

if (aa > b) {
    result = aa / b;
} else {
    result = b / aa;
}

console.log(result.toFixed(2));

/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/


let num1 = Math.random() * 25;
let num2 = Math.random() * 25;
let num3 = Math.random() * 25;

let numbers = [num1, num2, num3];
numbers.sort();
console.log(numbers[1]);



/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/

let kr1 = Math.random() * 10;
let kr2 = Math.random() * 10;
let kr3 = Math.random() * 10;

function isTriangle(kr1, kr2, kr3 ) {
    if (kr1 + kr2 > kr3 && kr1 + kr3 > kr2 && kr2 + kr3 > kr1) {
        return true;
    } else {
        return false;
    }
}
console.log(kr1 + kr2 > kr3 && kr1 + kr3 > kr2 && kr2 + kr3 > kr1);

/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/
let vienas = Math.random() * 2;
let du = Math.random() * 2;
let trys = Math.random() * 2;
let keturi = Math.random() * 2;
let nuliai = (vienas, du, trys, keturi);
let vienetai = (vienas, du, trys, keturi)
let dvejetai = (vienas, du, trys, keturi)

let nuliaiString = nuliai.toString();
let count0 = (nuliaiString.split("0").length - 1);
console.log("nuliu" + " " + "-" + " " + count0); 

let vienetaiString = vienetai.toString();
let count1 = (vienetaiString.split("1").length - 1);
console.log("vienetu" + " " + "-" + " " +  count1);


let dvejetaiString = dvejetai.toString();
let count2 = (dvejetaiString.split("2").length - 1);
console.log("dvejetu"  + " " + "-" + " " + count2);



/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/

vienas = Math.floor(Math.random() * (10 - (-10) +1) + (-10));
du = Math.floor(Math.random() * (10 - (-10) +1) + (-10));
trys = vienas = Math.floor(Math.random() * (10 - (-10) +1) + (-10));

if ((vienas) < 0) {
    console.log([vienas]);
}
else {
    console.log({vienas}); 
}

if ((du) < 0) {
    console.log([du]);
}
else {
    console.log({du}); 
}

if ((trys) < 0) {
    console.log([trys]);
}
else {
    console.log({trys}); 
}
    

/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/

let kaina = 1;
let kiekis = Math.floor(Math.random() * (3000 - 5 +1) + 5);
let gkaina = kaina * kiekis;


if (kiekis < 1000){
    console.log("Zvakiu kiekis" + ":" + kiekis + "/" + "Galutine kaina" + ":" + ((gkaina) / kiekis));

}

if ((kiekis > 2000) * 0.04) {
    console.log("Zvakiu kiekis" + ":" + kiekis + "/" + "Galutine kaina"  + ":" + ((gkaina - (gkaina * 0.04)) / kiekis));
}
if ((kiekis > 1000 && kiekis < 2000)) {
     console.log("Zvakiu kiekis" + ":" + kiekis + "/" + "Galutine kaina" + ":" + ((gkaina - (gkaina * 0.03)) / kiekis));
}
/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/



/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/



/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/