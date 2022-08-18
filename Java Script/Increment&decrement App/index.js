let btn1 = document.getElementById("reset");
let btn2 = document.getElementById("increase");
let btn3 = document.getElementById("decrease");
let score = document.getElementById("score");
  var count = 0;
btn1.addEventListener("click", ()=>{
    
   var increment = document.getElementById("reset");
   increment.value = count;
   count = 0;
   score.textContent= count;
})
btn2.addEventListener("click", ()=>{
    
  var increment = document.getElementById("score");
  increment.value = count;
  count++;
  score.textContent= count;
})
btn3.addEventListener("click", ()=>{
    var decrement = document.getElementById("score");
    decrement.value = count;
    count--;
    score.textContent = count;
})

















