class ExpenseView {
    constructor(){
        console.log(`ExpenseView Constructor ${this}` );
        this.app = this.getElement("#root");
        this.title = this.createElement("h2");
        this.title.textContent = "Expense Tracker";
        this.container = this.createElement("div", "container");
       
        this.titleYouBalance = this.createElement("h4");
        this.titleYouBalance.textContent = "Your Balance";
        this.balance = this.createElement("h1");
        this.balance.textContent = "$0.00";

        this.inc_total = this.createElement("div","inc-exp-container");
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


        this.inc_total.append(this.inc_total_div_income, this.inc_total_div_exp);


        this.container.append(this.title, this.titleYouBalance, this.balance, this.inc_total);

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

    

      
}