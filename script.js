let lbsInput = document.getElementById("lbsInput");
let gram = document.getElementById("gramsOutput");
let kg = document.getElementById("kgOutput");
let ounces = document.getElementById("ozOutput");

lbsInput.addEventListener("input", calculate);

function calculate() {
  let lbs = document.getElementById("lbsInput").value;
  gram.innerHTML = lbs / 0.0022046;

  kg.innerHTML = lbs / 2.205;

  ounces.innerHTML = lbs / 16;
}
