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
  }else if(jikir > 0 && jikir < 33){
    let remaining = 33 - jikir;
    totalText.innerText = `আপনার এখনো ${remaining} বার জিকির করা বাকি...`
  }
  else if(jikir == 33) {
    totalText.innerText = `মাশাআল্লাহ!!! আপনি ৩৩ বার জিকির করেছেন`
  } else if(jikir > 33){
    let extra = jikir - 33
    totalText.innerText = `আপনি ${extra} বার বেশি জিকির করেছেন সুতরাং আপনি ${jikir} বার জিকির করেছেন`;
  }
})