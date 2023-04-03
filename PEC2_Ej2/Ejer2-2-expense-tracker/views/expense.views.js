class ExpenseView {
    constructor(){
        console.log(`ExpenseView Constructor ${this}` );
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
        this.inc_total_exp_value.id = "money-plus";

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

    displayExpenses(expenses){

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

    addClassName(className){
        console.log(this);
        this.classList.add(className);
    }

    _resetValues(){
        this.inputTextTransaction.value = "";
        this.inputAmountTransaction.value = "";
    }

    
    

      
}