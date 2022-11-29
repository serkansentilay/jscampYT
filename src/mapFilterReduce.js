let cart = [
    { id: 1, productName: "Telefon", quantity: 3, unitPrice: 4000 },
    { id: 2, productName: "Teflon Tava", quantity: 2, unitPrice: 40 },
    { id: 3, productName: "Yumurta", quantity: 6, unitPrice: 40 },
    { id: 4, productName: "Kitap", quantity: 4, unitPrice: 20 },
    { id: 5, productName: "Elma", quantity: 2, unitPrice: 6 },
    { id: 6, productName: "Askı", quantity: 7, unitPrice: 400 },
]

// her bir eleman için product adında takma isim verdik 
cart.map(product => {
    console.log(product.productName + " : " + product.unitPrice * product.quantity)
})

// toplama acc başlangıç değer  acc sondaki 0 dedik 0 dan başlattık daha sonra ürünün fiyat ve adet çarpıp acc ye ekledik 
let total = cart.reduce((acc, product) => acc + product.unitPrice * product.quantity, 0)
console.log(total)

// filtreleme
let quantityOver2 = cart.filter(product => product.quantity > 2)
console.log(quantityOver2)

function addToCart(sepet) {
    sepet.push({ id: 7, productName: "Bardak", quantity: 7, unitPrice: 10 })
}

// referans tiplerde içindeki datayı göndermiyoruz adrese gönderiyor kartın bellekteki adresine yolluyor
addToCart(cart)
console.log(cart)


// değer tiplerde direkt sayıyı atadı bitti
let sayi = 10

function sayiTopla(number) {
    number += 1
}

sayiTopla(sayi)
console.log(sayi)
// çıktı 10