class ExpenseService {
    constructor(){
        this.expenses = (JSON.parse(localStorage.getItem("expenses")) ||[]).map(
            expense => new Expense(expense)
        );
        console.log(`ExpenseService controler ${this.expenses.length}`);
        
    }

    bindExpenseListChanged(callback){
        this.onEditListChanged = callback;
    }

    _commit(expenses){
        this.onEditListChanged(expenses);
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }

    addExpense(text, amount) {
        console.log(`text: ${text}, ${amount} €`);
        this.expenses.push(new Expense({text, amount}));

        this._commit(this.expenses);

        console.log(`after commit expense: ${this.expenses}`);
    }

    editExpense(id, updatedText, updatetAmount){
        this.expenses = this.expenses.map(expense => expense.id === id ?
            new Expense({...expense, text: updatedText, amount: updatetAmount}) : expense);
    
            this._commit(this.expenses);
    
    }

    deleteExpense(_id){
        console.log(`service: deleteExpense ${_id}`);
        this.expenses = this.expenses.filter(({id}) => id !== _id);

        this._commit(this.expenses);
    }



}