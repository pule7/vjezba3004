/*1.Kreiraj objekt koji reprezentira neki specificni auto, sa bar 8 svojstava,
    od kojih su 3 funkcije(npr. ubrzaj, zakoci...), a jedna je takoder objekt.
    Probajte referencirati druge vrijednosti objekta u funkcijama.
    Svaka funkcija mora primati argumente i vracati neku vrijednost */

var auto = {
    boja: "crna",
    marka: { tip: "BMW", model: "ff30" },
    cijena: 22000,
    brzina: 10,
    maxBrzina: 220,
    registriran: true,
    ubrzaj: function (vrijeme) {
        //this brzina = vrijeme * 5;
        let tmpVrijeme = 1;
        while (this.brzina <= this.maxBrzina) {
            this.brzina = this.brzina + 5;
            if (tmpVrijeme == vrijeme) {
                break;
            }
            tmpVrijeme++;
        }
        return this.brzina;
    },
    zakoci: function (vrijeme) {
        while (this.brzina >= 0) {
            this.brzina = this.brzina - 20;
            vrijeme--;
            if (vrijeme == 0 || this.brzina == 0) {
                break;
            }
        }
        return this.brzina;
    },
    promijeniBoju: function (novaBoja) {
        this.boja = novaBoja;
        return this.boja;
    },
}


/*2.pozovite funkcije svog objekta s argumentima i ispisite rezultat */

console.log("Pocetna brzina: " + auto.brzina);

console.log("Auto ce ubrzati na: " + auto.ubrzaj(2)); //jer tmpVrijeme ide od 0

console.log("Brzina nakon ubrzanja: " + auto.brzina);

console.log("Auto ce ubrzati nakon 41sec na " + auto.ubrzaj(41));

console.log("Trenutna boja auta je: " + 
             auto.boja + 
             ", a nakon promjene boje je " +
             auto.promijeniBoju("crvena"));


/*3.Sa petljom pristupi svim brojivim svojstvima tvog auto objekta i ispisi vrijednosti u konzoli */

for(kljuc in auto){
    let tmpKljuc = auto[kljuc];
    //console.log("---> provjeravamo" + tmpKljuc);
    if(typeof tmpKljuc == "number"){
        console.log(kljuc + " : " + tmpKljuc);
    }
}

/*4.pretvori svoj objekt u JSON string  */

console.log("auto JSON -->" + JSON.stringify(auto));
