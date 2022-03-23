// Udělej losování klasické Sportky
// Máš osudí čísel od 1 do 48
// Náhodně z tohoto osudí vyber 7 čísel
// Žádné číslo se nesmí v tahu opakovat
// (je vyjmuté z osudí, takže už ho nemůžeš znovu vylosovat)
// Z každého vylosovaného čísla vygeneruj následující HTML kód:
// <span class="cislo">8</span>
// ... který pak přidej dovnitř prvku <div id="vyherni-cisla">:

let osudi = [];
for (let i=1; i <48; i = i+1) {
    osudi.push(i);
}

//z osudi vyberu 7 nahodnych cisel
let tazenaCisla = [];

for (let i =0; i < 7; i++) {
    let vyherniIndex = Math.floor(Math.random() * osudi.length);
    let vyherniCislo = osudi[vyherniIndex];

    tazenaCisla.push(vyherniCislo);
    osudi.splice(vyherniIndex, 1);
}

//vypis do html

let vyherniCisla = document.querySelector('#vyherni-cisla');

for (let j = 0; j < tazenaCisla.length; j++) {
    vyherniCisla.innerHTML += '<span class="cislo">' + tazenaCisla[j] + '</span>';
}

//Uprav losování tak, že se čísla vygenerují až na tlačítko “losuj”.
//Uprav výběr čísel tak, že mezi vylosováním každého bude 2 sekundy pauza.
//Po ukončení losování umožni losovat znovu, ale předchozí hru zapiš do nového elementu “historie her”.
