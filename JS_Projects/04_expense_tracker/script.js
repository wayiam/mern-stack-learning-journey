

document.addEventListener('DOMContentLoaded',
    () => {
        let expenseForm = document.getElementById('expense-form');
        let expenseName = document.getElementById('expense-name');
        let expenseAmount = document.getElementById('expense-amount');
        let expenseList = document.getElementById('expense-list');
        let totalExpense = document.getElementById('total');
        let totalAmountDisplay = document.getElementById('total-amount');

        let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
        start();
        function start() {
            calculateTotal();
            renderExpenses();
        }
        //take expense detail from form
        expenseForm.addEventListener('submit',
            (e) => {
                e.preventDefault();
                let name = expenseName.value.trim();
                let amount = parseFloat(expenseAmount.value.trim());

                if (name !== "" && !isNaN(amount) && amount > 0) {
                    const newExpense = {
                        id: Date.now(),
                        name: name,
                        amount: amount,
                    }
                    expenses.push(newExpense)
                    saveExpensesToLocalStorage()
                    calculateTotal();
                }
                expenseName.value = "";
                expenseAmount.value = "";
                renderExpenses();
            }

        )

        function renderExpenses() {
            expenseList.innerHTML = ""
            expenses.forEach(expense => {
                const expenseItem = document.createElement("li");
                expenseItem.innerHTML = `
                ${expense.name} : ${expense.amount} 
                <button data-id="${expense.id}"> Delete </button>
                `
                expenseList.appendChild(expenseItem)
            });
        }

        function calculateTotal() {
            let totalPrice = 0;
            expenses.forEach(expense => {
                totalPrice += Number(expense.amount)
            });
            totalAmountDisplay.textContent = `${totalPrice}`
        }

        //Save Expenses to LocalStorage
        function saveExpensesToLocalStorage() {
            localStorage.setItem("expenses", JSON.stringify(expenses))
        }

        expenseList.addEventListener('click',
            (e) => {
                if (e.target.tagName === 'BUTTON') {
                    let expenseid = parseInt(e.target.getAttribute('data-id'));
                    expenses = expenses.filter((expense) => expense.id !== expenseid);
                    saveExpensesToLocalStorage();
                    start();
                }
            }
        )
    }
)
