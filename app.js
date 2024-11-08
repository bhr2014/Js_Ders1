console.log("Ben app.js den geldim");



//-----------NUMBER DEĞİŞKENLER (VAR, LET, CONST)--------
// let sayi1 = prompt("1.sayıyı giriniz");
// const sayi2 = prompt("2.sayıyı giriniz");
// var sayi3 = prompt("3.sayıyı giriniz");

// sayi1 = 10;
// sayi2 = 15; // const a 2.kez bir atama veremeyiz verdiğimizde hata alırız.
// sayi3 =
// console.log("Sayı 1", sayi1);
// console.log("Sayı 2", sayi2);
// console.log("Sayı 3", sayi3);
//-------------------------------------------

// let sayi1 = 5;
// const sayi2 = 10;
// var sayi3 = 20;

// sayi1 = 10;
// sayi3 = 30
// console.log("Sayı 1", sayi1);
// console.log("Sayı 2", sayi2);
// console.log("Sayı 3", sayi3);

// ----------------------DEĞİŞKENLER----------------------

// let str = "Merhaba";
// let array = [];
// let num = 1 ;

// str = "Merhaba";

// console.log("str", str);
// console.log("Array", array);
// console.log("Number", num);

//-------------

// let dersler = [];
// console.log("Dersler", dersler, "Dersler uzunluğu", dersler.length);
//  dersler.push("PHP");
//  dersler.push("HTML");
//  dersler.push("CSS");
//  dersler.unshift("C#"); //unshift arrayın başına yeni eleman olarak ekler push ise arrayın sonuna eleman ekler

//  console.log("Dersler", dersler, "Dersler uzunluğu", dersler.length);

//----------------

// let dersler = [];
// console.log("Dersler", dersler, "Dersler uzunluğu", dersler.length);
// dersler.push("PHP", "HTML", "CSS"); //ARRAYIN SONUNA EKLER
// dersler.unshift("C#", "SWİFT", ".NET CORE"); // ARRAYIN BAŞINA EKLER

// console.log("Dersler", dersler, "Dersler uzunluğu", dersler.length);

// dersler.pop(); // pop en sondaki elemanı siler
// dersler.shift(); // shift en baştaki elemanı siler
// console.log("Dersler", dersler, "Dersler uzunluğu", dersler.length);

// dersler.push("Java", "Python");

// console.log("Dersler", dersler, "Dersler uzunluğu", dersler.length);

//----array ile veri bulms işlrmi-----
// let javaIndex = dersler.findIndex(ders =>{
//     console.log("Taranan Ders:", ders)
//     if(ders == "Java") return true;
// });

// console.log("java Index", javaIndex);
//---------

// let cSharpIndex = dersler.findIndex(ders =>{
//     console.log("Taranan Ders:", ders)
//     if(ders == "C#") return true;
// });

// if (cSharpIndex != -1) {
//     console.log("C# Dersi bulundu", cSharpIndex);
// }else{
//     console.log("C# Dersi bulunamadı");
// }

//--------------------------------

// const yas = 18;
// if (yas <= 18) {
//     console.log("Yaşınız 18 veya 18'den küçüktür. Giremezsiniz");
// }else if(yas <= 35){
//     console.log("Yaşınız 18 veya 35 arasındadır.");
// }else{
//     console.log("Yaşınız 35'den büyüktür.");
// }

//----------------------DÖNGÜLER-----------------------

// let dersler = [];

// dersler.push("PHP", "HTML", "CSS"); 
// dersler.unshift("C#", "SWİFT", ".NET CORE");
// dersler.push("Java", "Python");
// console.log("Dersler", dersler, "Dersler uzunluğu", dersler.length);

// for(let i= 0; i < dersler.length; i++){
//     console.log("Ders:", dersler[i]);
// }

// dersler.forEach(function (ders, index){
//     console.log("Ders:", ders, "Ders Index");
// })

// let sayi1 = 1;
// sayi1++;
// console.log(sayi1);

// console.log("Dersler uzunluğu:", dersler.length)
// let i = 0;
// while (i <= dersler.length){
//     console.log("Ders", dersler[8]);
//     i++;
// }


// let metin = "ders",
// sayi1 = 1;
// console.log("metin", metin);
// console.log("sayı", sayi1);









