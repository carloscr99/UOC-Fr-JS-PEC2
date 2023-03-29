class ExpenseService {
    constructor(){
        this.expenses = (JSON.parse(localStorage.getItem("expenses")) ||[]).map(
            expense => new Expense(expense)
        );
    }

    bindExpenseListChanged(callback){
        this.onEditListChanged = callback;
    }

    _commit(expenses){
        this.onEditListChanged(expenses);
        localStorage.setItem("expenses", JSON.stringify(ExpenseService));
    }

    addExpense(text, amount) {
        this.expenses.push(new Expense({text, amount}));

        this._commit(this.expenses);
    }

    editTodo(id, updatedText, updatetAmount){
        this.expenses = this.expenses.map(expense => expense.id === id ?
            new Expense({...expense, text: updatedText, amount: updatetAmount}) : expense);
    
            this._commit(this.expenses);
    
    }

    deleteExpense(_id){
        this.expenses = this.expenses.filter(({id}) => id !== _id);

        this._commit(this.expenses);
    }



}