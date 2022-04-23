//Dakika ve Saniye
var dakika = document.getElementById("dakika");
var saniye = document.getElementById("saniye");

//İnputlar
var secilenDk = document.getElementById("secilenDk");
var secilenSn = document.getElementById("secilenSn");
var secilenTur = document.getElementById("secilenTur")

var dur = false;

//Butonlar
var baslatButonu = document.getElementById("baslat");
var sifirlaButonu = document.getElementById("sifirla");

secilenSn.addEventListener("change", () => {
    saniye.textContent = secilenSn.value < 10 ? "0" + secilenSn.value : secilenSn.value;
})
secilenDk.addEventListener("change", () => {
    dakika.textContent = secilenDk.value < 10 ? "0" + secilenDk.value : secilenDk.value;
})
baslatButonu.addEventListener("click", startTimer);
function startTimer() {
    var tur = secilenTur.value;
    tur++;
    tur = tur < 10 ? "0" + tur : tur;
    secilenTur.value = tur;
    var dk = dakika.textContent;
    var sn = saniye.textContent;
    var interval = setInterval(() => {
        sn--;
        sn = sn < 10 ? "0" + sn : sn;
        if (sn == "0-1") {
            dk--;
            sn = 59;
        }
        if ((dk == 00 && sn == 00) || (dk == 0 && sn == 0)) {
            clearInterval(interval);
            window.alert("Süre Doldu");
        } if (dur) {
            clearInterval(interval);
            return;
        }
        saniye.textContent = sn;
        dakika.textContent = dk;
    }, 1000);
}
sifirlaButonu.addEventListener("click", () => {
    dur = true;
    dakika.textContent = "00";
    saniye.textContent = "00";
    secilenDk.value = "00";
    secilenSn.value = "00";
    secilenTur.value="00";
})
