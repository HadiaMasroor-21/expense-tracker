const form = document.getElementById("transaction form")
const description = document.getElementById("description")
const amount = document.getElementById("amount")

const type = document.getElementById("type")
const income = document.getElementById("income")
const expense = document.getElementById("expense")

const transactionlist = document.getElementById("transaction-list")

const balance = document.getElementById("balance")

form.addEventListener("submit" , function(event){
    event.preventDefault();
    const descriptionvalue = description.value
    const amountvalue = amount.value
    const typevalue = type.value

    console.log(descriptionvalue)
    console.log(amountvalue)
    console.log(typevalue)

    const li = document.createElement("li")
    li.innerHTML = `${descriptionvalue} <span>Rs. ${amountvalue}</span>`;
    transactionlist.appendChild(li)
})
