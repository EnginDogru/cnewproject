// function selamver(isim){
//     return "merhaba " +isim;
// }
// selamver(["engin","derin"]); // ne kullanacağımızı bilmemiz gerekir, typescriptte bu gerekmez??
function slmvr(isim) {
    return "merhaba " + isim;
}
var mesaj = slmvr("engin");
console.log("mesaj");
// nodemon; paketleri kaydettiğimizde izliyor, değişiklikleri izliyor.
var sayi; // tipi number olan bir sayı tanımlandı
sayi = 10;
sayi = 10.4;
var sehir;
sehir = "istanbul";
var sayilar = [1, 2, 3, 4, 5];
var sayilar2 = [1, 2, 3, 4, 5];
var dizi = [1, "ankara"];
var Renk;
(function (Renk) {
    Renk[Renk["Kirmizi"] = 1] = "Kirmizi";
    Renk[Renk["siyah"] = 2] = "siyah";
    Renk[Renk["mavi"] = 3] = "mavi";
})(Renk || (Renk = {}));
var renk = Renk.Kirmizi;
var deger = "ankara";
deger = 18;
