console.log("text");
let city = ["hamburg", "berlin", "neuruppin"];
console.log(city);

let cityUpp = city.map((elt) => {
    return elt.charAt(0).toUpperCase() + elt.slice(1);

})
console.log(cityUpp);

let cityUpp1 = city.map((elt) => {
    return elt[0].toUpperCase() + elt.slice(1);

})
console.log(cityUpp1);


/*----------------LEV 1.1 ARRAY---------*/

let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

let sortierung = () => {
    languages.sort();
}

console.log(languages.sort()); //? welcher Fehler?

/*-------------LEV 1.2 ----------------*/

let sortierung2 = () => {
    languages.sort();
}

console.log(languages.reverse());

/*-------------LEV 1.13 ----------------*/

let meinText1 = ["Hello", "World"];
let meinText2 = ["Anass", "Elaine", "Eric", "Georg"];
let meinText3 = ["Superman", "Wonderwoman", "Hulk", "Batman", "Spiderman"];

let join = meinText1.join();
let join2 = meinText1.join("");
let join3 = meinText1.join(" ");
let join4 = meinText1.join("+");

let join5 = meinText2.join("");
let join6 = meinText3.join("+");

console.log(meinText1.join(" "));
console.log(meinText2.join(""));
console.log(meinText3.join("+"));
console.log(meinText1.join());

/*-------------LEV 2.2 LEV---------*/

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

numArray2.sort((a, b) => a - b);
console.log(numArray2.sort()); //? 

/*-------------LEV 1.1 FOR EACH-------*/


let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]

getraenke.sort();

let myDrinks = getraenke.forEach((drinks) => {
    document.write(`<p>${drinks}</p>`);
})


/*---------LEV 1.2 MAP---------------*/

let upperDrinks = getraenke.map((elt) => {
    return elt.toUpperCase();
});

console.log(upperDrinks);

/*--------LEV 1.3 MAP--------------*/

let array = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

let number = array.map((multi) => {
    return multi * 2;
});

number.sort((a, b) => a - b);

console.log(number);

/*------------LEV 1.4-------*/

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

let celsius = fahrenheit.map((berechnung) => {
    return berechnung - 1.8;
});

console.log(celsius);

/*
Gefrierpunkt von Wasser genau 180 Grad auseinander
toFixed() || Math.round()
celsius = (℉ - 32) / 1.8*/

/*-----------------LEV 1.5---------------*/

let checkNumber = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

let wenn = checkNumber.forEach((dann) => {
    if (checkNumber % 3 === 0) {
        checkNumber + 100;
        return dann.push();
    }
});

console.log(wenn);

