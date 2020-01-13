
const balanceEl = document.getElementById("balance");
const budgetName = document.getElementById("budgetName");
const dollarAmount = document.getElementById("dollarAmount");
const expenseEl = document.getElementById("expense");
const priceEl = document.getElementById("price");

//Where the info will be shown
const expensesListEl = document.getElementById("expenses-list");
const budgetListEl = document.getElementById("budget-list");

//submit buttons
const submit1 = document.getElementById("submit1");
const submit2 = document.getElementById("submit2");

// require functions here
const calc = require("./calculations");

function addToList(name, price) {
  expensesListEl.innerHTML += `<li class="list-group-item">Name: ${name}
    <span class="ml-4">Price: ${price}</span></li>`;
}
//still need to build this out
function addToMoneyList(name, price) {
  budgetListEl.innerHTML += `<li class="list-group-item">Name: ${name}
    <span class="ml-4">Price: ${price}</span></li>`;
}


function reset(e) {
  e.preventDefault();
  addToMoneyList(budgetName.value, dollarAmount.value);
  var bal = parseInt(balanceEl.innerText);
  var dollAm = parseInt(dollarAmount.value);
  const total = calc.add(Number(bal), dollAm);
  console.log(balanceEl.innerText,);
  balanceEl.innerText = total;
  budgetName.value = "";
  dollarAmount.value = "";
}


function submit(e) {
  e.preventDefault();
  addToList(expenseEl.value, priceEl.value);
  const total = calc.subtract(Number(balanceEl.innerText), priceEl.value);
  balanceEl.innerText = total;
  expenseEl.value = "";
  priceEl.value = "";
}



submit1.onclick = reset;
submit2.onclick = submit;