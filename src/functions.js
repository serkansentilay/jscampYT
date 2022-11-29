// parametreli fonksiyonlarda default değer olacaksa onu SONA yaz ki çıktı doğru olsun

function addToCart(quantity, productName = "Elma") {
    console.log("Sepete Eklendi : ürün: " + productName + " adet : " + quantity)
}

addToCart(10) //parametre eksik gönderdiğimizde 

let sayHello = () => {
    console.log("Hello World")
}
sayHello()

let sayHello2 = function () {
    console.log("Hello World 2")
}
sayHello2()

//array fonk ile normal fonk arasındaki fark this keyword ünü kulllanmakla değişiklik gösteriyor

function addToCart2(productName, quantity, unitPrice) {
    console.log("Ürün: " + productName + " Adet: " + quantity + " Fiyat: " + unitPrice)
}
addToCart2("Elma", 5, 10)
addToCart2("Armut", 3, 5)
addToCart2("Limon", 2, 7)

let product1 = { productName: "Elma", unitPrice: 10, quantity: 5 }
function addToCart3(product) {
    console.log("Ürün: " + product.productName)
    console.log("Adet: " + product.quantity)
    console.log("Fiyat: " + product.unitPrice)
}
addToCart3(product1)

// veriler object ise  REFERANS TİPİ
// referansdaki bellekteki değeri atıyor = işlemi ile artık 3 dekini değeri 2 ye eşitleniyor olduğu gibi aynı hepsi
// referans tiplerinde veriyi atamıyorsun bellekteki adresi atıyorsun 
let product2 = { productName: "Elma", unitPrice: 10, quantity: 5 }
let product3 = { productName: "Elma", unitPrice: 10, quantity: 5 }
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)
//çıktı: KARPUZ

// sayısal veriler  DEĞER TİPİ
let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)
//çıktı: 20

//sebebi bunlar bellekte tanımlanıyor bunlar STACK VE HEAP
// sayısal veri tanımlandığında STACK de gerçekleşiyor

function addToCart4(x) {
    console.log(products)  // func paramtersinde x variken console.log products çağırırken önce scope ilgili kısma bakıyor  
    console.log(x)          // olmassa bir sonraki globaldekine bakıyor ordakini çağırıyor
}

let products = [
    { productName: "Elma", unitPrice: 10, quantity: 5 },
    { productName: "Armut", unitPrice: 10, quantity: 5 },
    { productName: "Karpuz", unitPrice: 10, quantity: 5 }
]

addToCart4(products)

// ...numbers gönderilen bütün değerleri üzerine al
// başka parametre olacaksa onu BAŞA yaz
function add(bisey, ...numbers) { //rest
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
}
// ...numbers let numbers = [20,30] gibi array tutuyor arka tarafta 
add(20, 30)
//add(20, 30, 50)
//add(20, 30, 50, 70)

let numbers = [30, 10, 40, 600, 300]
console.log(numbers) // çıktı (5) [30, 10, 40, 600, 300]
console.log(...numbers) // çıktı 30 10 40 600 300
//...numbers ile dizideki değerli ayırıyor Spread
//Spread ayırır , rest toparlar
console.log(Math.max(...numbers))

//1.değeri icAnadolu ya atadı 2.ciyi 2.cye
// Destructuring ediyoruz                // tekrar içindekini atadık 1.cye Destructuring ettik
let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri]] = [
    { name: "İç Anadolu", population: "20M" },
    { name: "Marmara", population: "30M" },
    { name: "Karadeniz", population: "10m" },
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Sinop", "Trabzon"],
    ]
]
//console.log(icAnadolu)
//console.log(marmara.population)
console.log(icAnadoluSehirleri)

//productName adında objeyi newProcutName atadık 
// object olarak belirttiğiiz {} süslü parantezdekini yine süslü parantez olarak atayabiliriz 
// üstteki kodda [] dizidekini yaptık bunda da {} ile yapılıyor 
//{} süslü parantezi ayrı bir blok olarak gördüğü içinde parantez içine aldığında hatalar gider
let newProductName, newUnitPrice, newQuantity
({ productName: newProductName, unitPrice: newUnitPrice, quantity: newQuantity }
    = { productName: "Elma", unitPrice: 10, quantity: 5 })
console.log(newProductName)