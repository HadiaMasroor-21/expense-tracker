const form = document.getElementById("transaction form")
const description = document.getElementById("description")
const amount = document.getElementById("amount")

const type = document.getElementById("type")
const income = document.getElementById("income")
const expense = document.getElementById("expense")

const transactionlist = document.getElementById("transaction-list")

const balance = document.getElementById("balance")

let totalIncome = 0;
let totalExpense = 0;

let transactions = [];


form.addEventListener("submit" , function(event){
    event.preventDefault();
    const descriptionvalue = description.value
    const amountvalue = amount.value
    const typevalue = type.value

      if (descriptionvalue === "" || amountvalue === "") {
        alert("Please fill all fields");
        return;
    }
 transactions.push({
        description: descriptionvalue,
        amount: Number(amountvalue),
        type: typevalue
    });

    

    if(typevalue == "income"){
        totalIncome = totalIncome + Number(amountvalue);
    }
    else{
        totalExpense = totalExpense + Number(amountvalue);
    }

    income.innerText = totalIncome;
    expense.innerText = totalExpense;
    balance.innerText = totalIncome - totalExpense;






    console.log(descriptionvalue)
    console.log(amountvalue)
    console.log(typevalue)

    const li = document.createElement("li")   //for history
    li.innerHTML = `${descriptionvalue} <span>${typevalue === "income" ? "+" : "-"}Rs. ${amountvalue}</span>`;
    li.classList.add(typevalue);
    transactionlist.appendChild(li)
})
