console.log("merhaba");

//JS type safe değildir

let dolarBugun = 9.30

//var dolarDun=9.20 //var ile global bir değişken tanımlıyor

let dolarDun = 9.20
dolarDun = "Ankara" //dolarDun let de iken de var da iken de typenin değişmesi javascript işin sorun olmuyor 
dolarDun = "9.20" //veri bu şekilde string şekilde de gelebilir sıkıntı çıkarma diyor js
{
    // var dolarDun=9.10 // var ile en son daki değeri kabul ediyor
    let dolarDun = 9.10 // let ile yeni yeni değişken şeklinde tanımlanıyor
}

console.log(dolarDun)

const euroDun = 11.2 //const ile sabit değişken tanımlanır
//euroDun = 11 //sonradan değiştirilemez

console.log(euroDun)

//array dizi köşeli parantez
//camelCasing
//PascalCasing
let konutKredileri = [12, "kredi2", ["a", "b", "c"]]
console.log(konutKredileri)

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>")
}
console.log("</ul>")