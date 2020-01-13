const priceEl = document.getElementById("price");
const balanceEl = document.getElementById("balance");
const expenseEl = document.getElementById("expense");

//Where the info will be shown
const expensesListEl = document.getElementById("expenses-list");
const expensesListEl = document.getElementById("expenses-list");

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
  expensesListEl.innerHTML += `<li class="list-group-item">Name: ${name}
    <span class="ml-4">Price: ${price}</span></li>`;
}

function submit(e) {
  e.preventDefault();
  const total = calc.subtract(Number(balanceEl.innerText), priceEl.value);
  balanceEl.innerText = total;
  addToList(expenseEl.value, priceEl.value);
  console.log(e);
  expenseEl.value = "";
  priceEl.value = "";
}

function reset(e) {
  e.preventDefault();
  addToMoneyList(expenseEl.value, priceEl.value);
  expenseEl.value = "";
  priceEl.value = "";
}

submit1.onclick = reset;
submit2.onclick = submit;

//