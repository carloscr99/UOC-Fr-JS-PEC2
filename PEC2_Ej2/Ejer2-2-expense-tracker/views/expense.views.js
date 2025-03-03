class ExpenseView {
    constructor(){

        this.app = this.getElement("#root");
        this.title = this.createElement("h2");
        this.title.textContent = "Expense Tracker";
        this.container = this.createElement("div", "container");

        this.balanceContainer = this.createElement("div");
       
        this.titleYouBalance = this.createElement("h4");
        this.titleYouBalance.textContent = "Your Balance";
        this.total_balance = this.createElement("h1");
        this.total_balance.textContent = "$0.00";
        this.total_balance.id = "balance";

        this.inc_exp_container = this.createElement("div","inc-exp-container");
        this.inc_total_div_income = this.createElement("div");
        this.inc_total_income_title = this.createElement("h4");
        this.inc_total_income_title.textContent = "Income";
        this.inc_total_income_value = this.createElement("p", "money");
        this.inc_total_income_value.classList.add("plus");
        this.inc_total_income_value.textContent = "+$0.00";
        this.inc_total_income_value.id = "money-plus";

        this.inc_total_div_exp = this.createElement("div");
        this.inc_total_exp_title = this.createElement("h4");
        this.inc_total_exp_title.textContent = "Expense";
        this.inc_total_exp_value = this.createElement("p", "money");
        this.inc_total_exp_value.classList.add("minus");
        this.inc_total_exp_value.textContent = "-$0.00";
        this.inc_total_exp_value.id = "money-minus";

        this.inc_total_div_income.append(this.inc_total_income_title, this.inc_total_income_value);

        this.inc_total_div_exp.append(this.inc_total_exp_title, this.inc_total_exp_value);


        this.inc_exp_container.append(this.inc_total_div_income, this.inc_total_div_exp);

        this.balanceContainer.append(this.titleYouBalance, this.total_balance, this.inc_exp_container);

        this.historyContainer = this.createElement("div");

        this.titleHistory = this.createElement("h3");
        this.titleHistory.textContent = "History";
        this.historyList = this.createElement("ul", "list");
        this.historyList.id = "list";

        this.historyContainer.append(this.titleHistory, this.historyList);

        this.newTransactionContainer = this.createElement("div");

        this.titleNewTransaction = this.createElement("h3");
        this.titleNewTransaction.textContent = "Add new transaction";

        this.formNewTransaction = this.createElement("form");
        this.formNewTransaction.id = "form";

        this.containerTextTransaction = this.createElement("div", "form-control");
        
        this.labelTextTransaction = this.createElement("label");
        this.labelTextTransaction.textContent = "Text";
        this.labelTextTransaction.htmlFor = "text";

        this.inputTextTransaction = this.createElement("input");
        this.inputTextTransaction.type = "text";
        this.inputTextTransaction.id = "text";
        this.inputTextTransaction.placeholder = "Enter Text...";

        this.containerTextTransaction.append(this.labelTextTransaction, this.inputTextTransaction);

        this.containerAmountTransaction = this.createElement("div", "form-control");

        this.labelAmountTransaction = this.createElement("label");
        this.labelAmountTransaction.textContent = "Amount (negative - expense, positive - income)";
        this.labelAmountTransaction.htmlFor = "amount";
    
        this.inputAmountTransaction = this.createElement("input");
        this.inputAmountTransaction.type = "number";
        this.inputAmountTransaction.id = "amount";
        this.inputAmountTransaction.placeholder = "Enter amount...";


        this.containerAmountTransaction.append(this.labelAmountTransaction, this.inputAmountTransaction);


        this.btnAddTransaction = this.createElement("button", "btn");
        this.btnAddTransaction.textContent = "Add Transaction";


        this.formNewTransaction.append(this.containerTextTransaction, this.containerAmountTransaction, this.btnAddTransaction);

        this.newTransactionContainer.append(this.titleNewTransaction, this.formNewTransaction);
        
        this.container.append(this.title, this.balanceContainer, this.historyContainer, this.newTransactionContainer);

        this.app.append(this.container);
    }
    
    getElement(selector) {
        const element = document.querySelector(selector);
    
        return element;
    }

    createElement(tag, className) {
        const element = document.createElement(tag);
    
        if (className) element.classList.add(className);
    
        return element;
    }

    get _expenseText(){
        return this.inputTextTransaction.value;
    }
    

    get _expenseAmount(){
        return this.inputAmountTransaction.value; 
    }

    _resetValues(){
        this.inputTextTransaction.value = "";
        this.inputAmountTransaction.value = "";
    }

    displayExpenses(expenses){
    
        while (this.historyList.firstChild) {
            this.historyList.removeChild(this.historyList.firstChild);
        }

        if(expenses.length !== 0){
            expenses.forEach(expense => {

                this.addExpenseToList(expense);

            })
        }
        

    }

    updateValues(expenses){

        
        const amounts = expenses.map(exp => Number(exp.amount)); 

        const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

        const income = amounts
            .filter(item => item > 0)
            .reduce((acc, item) => (acc += item), 0)
            .toFixed(2);

        const expense = (
            amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
            -1
        ).toFixed(2);

        this.total_balance.textContent = `$${total}`;
        this.inc_total_income_value.textContent = `$${income}`;
        this.inc_total_exp_value.textContent = `$${expense}`;

    }

    addExpenseToList(expense){

        const sign = expense.amount < 0 ? '-' : '+';

        const item = this.createElement("li");
        item.classList.add(expense.amount < 0 ? 'minus' : 'plus');
        item.textContent = `${expense.text}`;

        const span = this.createElement("span");
   
        span.textContent = `${sign}${Math.abs(expense.amount)}`;
        item.append(span);
        item.id = expense.id;

        const deleteBtn = this.createElement("button", "delete-btn");
        deleteBtn.textContent = "x";

        item.append(deleteBtn);

        const editBtn = this.createElement("button", "edit-btn");
        editBtn.textContent = "Edit";

        item.append(editBtn);
        
        this.historyList.appendChild(item);

    }

    _initLocalListeners(){
        this.historyList.addEventListener("input", event =>{
            if(event.target.className === "editable"){
                this._temporaryExpenseText = event.target.innerText;
            }
        });
    }

    bindAddExpense(handler){
        this.formNewTransaction.addEventListener("submit", event =>{
            event.preventDefault();

            if(this._expenseText && this._expenseAmount){
                handler(this._expenseText, this._expenseAmount);
                this._resetValues();
            }

        });
    }

    bindDeleteExpense(handler){
        this.historyList.addEventListener("click", event =>{
            if(event.target.className === 'delete-btn'){
                const id = event.target.parentElement.id;
                
                handler(id);
            }
        });
    }

    bindEditExpense(handler){
        this.historyList.addEventListener("click", event =>{
            if(event.target.className === 'edit-btn'){
                if(this._expenseText && this._expenseAmount){
                    const id = event.target.parentElement.id;
                   
                    handler(id, this._expenseText, this._expenseAmount);
                    this._resetValues();
                }
             
            }
        });
    }
      
}