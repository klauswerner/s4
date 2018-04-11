//alert("Hello World");

let nachricht = "Hallo Welt";
//alert(nachricht);
nachricht = "neue Welt";
//alert(nachricht);
console.log(nachricht);
const linkColor ="#ff0000";
let neue_variable="test";
console.log("Variable: eine_variable: ", neue_variable);
let highscore = 452.532;
console.log("Mein Highscore:", highscore/10);
let stringi = "String1";
console.log(stringi);
stringi ="String2";
console.log(stringi);
stringi = `Stringi3 
2te Zeile
3te Zeile`;
console.log(stringi);
let theDude = 'Jeffery "The Dude" Lebowsky';
console.log(theDude);
let isOver18 = true;
console.log("Sind Sie über 18: ", isOver18);
let age = 17;
console.log("age über 18", age > 18);

let zahlenliste = [2, 11, 24, 33];
console.log(zahlenliste);

let zeichenliste = ["a","b","c","d"];
console.log(zeichenliste);
console.log(zeichenliste[0]);
console.log("Anzahl der Strings: ", zeichenliste.length);

//Zuweisungssyntax beachten!!
let benutzer = {
    vorname: "John",
    nachname: "Doe",
    alter: 29
};
console.log("Benutzer Alter: ", benutzer.alter);
console.log("Benutzer: ", benutzer);

benutzer.bestzeit = 100;
console.log("Benutzer Bestzeit: ", benutzer.bestzeit);
console.log("Benutzer: ", benutzer);

benutzer["bestzeit ever"] = 300;
console.log("Benutzer: ", benutzer);

let test = {};
test.test = 2;
console.log(test.test);


//Benutzer Eingabe
prompt("Wie alt bist du?");