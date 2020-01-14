import {useIndexedDb} from "./indexdb";


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
const submit3 = document.getElementById("submit3");

// require functions here
const calc = require("./calculations");

function addToList(name, price) {
  expensesListEl.innerHTML += `<li class="list-group-item" placeholder="unamed">Name: ${name}
    <span class="ml-4">Price: ${price}</span></li>`;
}
//still need to build this out
function addToMoneyList(name, price) {
  budgetListEl.innerHTML += `<li class="list-group-item">Name: ${name}
    <span class="ml-4">Price: ${price}</span></li>`;
}

function currentBal(price) {
  balanceEl.innerHTML = `${price}`;
}




function deposit(e) {
  e.preventDefault();
  addToMoneyList(budgetName.value, dollarAmount.value);
  var bal = parseInt(balanceEl.innerText);
  var dollAm = parseInt(dollarAmount.value);
  const total = calc.add(Number(bal), dollAm);
  balanceEl.innerText = total;
  useIndexedDb("budget", "budgetStore", "put", {
    name: budgetName.value,
    value: dollarAmount.value,
    type: "deposit",
    balance: total
  });
  budgetName.value = "";
  dollarAmount.value = "";
}


function expense(e) {
  e.preventDefault();
  addToList(expenseEl.value, priceEl.value);
  const total = calc.subtract(Number(balanceEl.innerText), priceEl.value);
  balanceEl.innerText = total;
  useIndexedDb("budget", "budgetStore", "put", {
    name: expenseEl.value,
    value: priceEl.value,
    type: "expense",
    balance: total
  });
  expenseEl.value = "";
  priceEl.value = "";
  
}

function reset(e) {
  useIndexedDb("budget", "budgetStore", "clear")
  location.reload();
}

submit1.onclick = deposit;
submit2.onclick = expense;
submit3.onclick = reset;

useIndexedDb("budget", "budgetStore", "get").then(results => {
  results.forEach(expense => {
    if (expense.type === "expense"){
      addToList(expense.name, expense.value);
    } else if (expense.type === "deposit") {
      addToMoneyList(expense.name, expense.value);
    } 
    currentBal(expense.balance);
  });
});
