const jikirNumber = document.getElementById("jikirNumber");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");
const decreaseBtn = document.getElementById("decrease");
const total = document.getElementById("total");
const totalText = document.getElementById("totalText");
let counter = 0;
let jikir = 0;

increaseBtn.addEventListener("click", increaseNumber)
function increaseNumber() {
  counter++
  jikirNumber.innerText = counter
}


resetBtn.addEventListener("click", resetNumber)
function resetNumber() {
  counter = 0
  jikirNumber.innerText = counter
}


decreaseBtn.addEventListener("click", decreaseNumber)
function decreaseNumber() {
  if (counter > 0) {
    counter--;
  }
  jikirNumber.innerText = counter
}

total.addEventListener("click", function(){
  jikir = jikirNumber.textContent;
  if(jikir == 0){
    totalText.innerText = `দুঃখিত আপনি এখনো জিকির করেননি`
  }else {
    totalText.innerText = `মাশাআল্লাহ!! আপনি ${jikir} বার জিকির করেছেন..`
  }
})