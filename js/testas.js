console.log('------1------');
// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
const a = 9;
const b = 9;

if (a > b) {
    console.log('Didesnis a');
} else if (b > a) {
    console.log('Didesnis b');
} else {
    console.log('Yra lygus');
}
console.log('------2------');

// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
for (i = 1; i <= 10; i++) {
    console.log(i);
}

console.log('------3------');
// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
for (i = 0; i <= 10; i = i+2) {
    console.log(i);
}

console.log('------4------');
// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
for (let i = 0; i < 5; i++) {
    const randomNum = Math.floor(Math.random() * 10) + 1; 
    console.log(randomNum); 
  }

  console.log('------5------');
// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
const maxSk = 10;
const minSk = 1;

let randomSk = 0;
while (randomSk !== 5) {
    randNum = Math.floor(Math.random() * (maxSk - minSk + 1) + minSk); 
} 
console.log(randNum);

console.log('------6------');
// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. 
// Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
const masyv = [];
const maxLength = 30;
const minLength = 20;
const maxSkaicius = 10;
const minSkaicius = 20;

const ilgis = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);

for (let i = 0; i < ilgis; i++) {
    const randomSkaicius = Math.floor(Math.random() * (maxSkaicius - minSkaicius + 1) + minSkaicius);
    masyv.push(randomSkaicius);
}
console.log(masyv);



console.log('------7------');
// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. 
// Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
const masyvasR = [];
for (let i = 0; i < 100; i++) {
    raides.random('A', 'B', 'C', 'D');
    masyvasR.push(raides);
}
console.log(masyvasR);

// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. 
// Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. 
// Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
function lygineSuma(l, y){
    if ((typeof l === 'number' && typeof y === 'number') || (Array.isArray(l) && Array.isArray(y))) {
        let numbers = [];
    }
    if (typeof l === 'number' && typeof y === 'number') {
        const sum = l + y;
        return sum;
      } else {
        numbers = l.concat(y);
      }
    
}



// 
// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
// "(XXX) XXX-XXXX". (10 taškų)



