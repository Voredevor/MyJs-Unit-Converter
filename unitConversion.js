// declare all variables 
let getVal = document.getElementById("number-el").value;
let MtF = document.getElementById("meterToFeet-el")
let FtM = document.getElementById("feetToMeter-el")
let LtG = document.getElementById("litreToGallon-el")
let GlT = document.getElementById("gallonToLitre-el")
let KtP = document.getElementById("kiloToPound-el")
let PtK = document.getElementById("poundToKilo-el")

console.log(getVal)
function converter(valNum) {
    

    valN = valNum 
    valN = valN * 3.2808 
    MtF.textContent = valNum + " Meters = " + valN.toFixed(3) + " Feet"

    valN = valNum
    valN = valN / 3.2808
     FtM.textContent = valNum + " Feet = " + valN.toFixed(3) + " Meters"

     valN = valNum
     valN = valN * 0.264172
     LtG.textContent = valNum + " Litres = " + valN.toFixed(3) + " Gallon"

     valN = valNum
     valN = valN * 3.785412
     GlT.textContent = valNum + " Gallon = " + valN.toFixed(3) + " Litres"

     valN = valNum
     valN = valN * 2.2046
     KtP.textContent = valNum + " Kilos = " + valN.toFixed(3) + " Pounds"

     valN = valNum
     valN = valN / 2.2046
     PtK.textContent = valNum + " Pounds = " + valN.toFixed(3) + " Kilos"
}
converter()