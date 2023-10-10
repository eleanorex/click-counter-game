console.clear()
let counter = 0;
let target = document.querySelector(".target");
target.addEventListener('dblclick', play)
let score = document.querySelector(".score")
let topPos = 0
let leftPos = 0

function play(){
  counter++;
  score.textContent = counter;
  target.style.top = topPos + "px"
  target.style.left = leftPos + "px"
  topPos = Math.random() * (540 - 240)
  leftPos = Math.random() * (640 - 200)
}