var counterContainer = document.querySelector(".counter");
var resetButton = document.querySelector("#reset");
var alertme = document.querySelector("#alertme");
var visitCount = localStorage.getItem("count");

if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("count", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("count", 1);
}
counterContainer.innerHTML = visitCount;

resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("count", 1);
  counterContainer.innerHTML = visitCount;
});
alertme.addEventListener("click", () => {
alert("Nos of time you have visited "+visitCount)
});