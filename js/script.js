
//var name = document.getElementById("name");

var generaBtn = document.getElementById("genera");

generaBtn.addEventListener("click", function(){
  console.log("stampa di prova");

  var name = document.getElementById("name").value;
  console.log(name);
  var km = document.getElementById("km").value;
console.log(km);
  var fasciaEta = document.getElementById("fascia-eta").value;
console.log(fasciaEta);

  var carrozza = Math.floor(Math.random()*9)+1;

  var codiceTreno = Math.floor(Math.random()*10000)+90000;

  var prezzoBase = km * 0.21;

  var sconto;

  if (fasciaEta == "discountYoung"){
    sconto = prezzoBase * 0.2;

  } else if (fasciaEta == "discountOld"){
    sconto = prezzoBase * 0.4;

  } else {
    sconto = 0;
  }

  var prezzoBiglietto = prezzoBase - sconto;
  console.log(prezzoBiglietto);

});
