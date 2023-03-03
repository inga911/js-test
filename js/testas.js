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

let x = 0;
while (x !== 6) {
    randNum = Math.floor(Math.random() * 10) + 1; 
} 
console.log(randNum);


