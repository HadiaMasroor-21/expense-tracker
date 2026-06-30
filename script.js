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
    alert("Transaction Added")
})