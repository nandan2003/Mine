var count = 0;
var btnSize = 18;

function noFunc() {
  wordArray = ["Serious ga na?", "Po please", "Naaku evaru unnaru cheppu 🥺", "Ego na?", "Ardham chesukovachu ga please", "Nen alcohol taganu", "No cigarettes", "Naku kuda Krishnudu ante chala istam", "Naky Raadha ante kuda istam", "Ni lani ammayi nenu na Wife laga korukunna"];
  document.getElementById("btn2").innerHTML = `${wordArray[count]}`;
  count++;
  document.getElementById("btn1").style.fontSize = `${(btnSize += 20)}px`;
}

function yesFunc() {
  document.getElementById("body").innerHTML = "";
  let img = document.createElement("img");
  img.src =
    "https://www.icegif.com/wp-content/uploads/2024/03/kuromi-icegif-1.gif";
  document.getElementById("body").appendChild(img);
}
