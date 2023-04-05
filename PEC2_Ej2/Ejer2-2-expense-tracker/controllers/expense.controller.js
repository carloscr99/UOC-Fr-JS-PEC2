class ExpenseController {
    constructor(service, view){
        this.service = service;
        this.view = view;
        this.service.bindExpenseListChanged(this.onExpenseListChanged);
        this.view.bindAddExpense(this.handleAddExpense);
        this.view.bindEditExpense(this.handleEditExpense);
        this.view.bindDeleteExpense(this.handleDeleteExpense);
        

        this.onExpenseListChanged(this.service.expenses);


    }

    onExpenseListChanged = expenses =>{
        this.view.displayExpenses(expenses);
        this.view.updateValues(expenses);
    };

    handleAddExpense = (expense, amount) => {
        this.service.addExpense(expense, amount);
      };
    
      handleEditExpense = (id, expenseText, expenseAmount) => {
        this.service.editExpense(id, expenseText, expenseAmount);
      };
    
      handleDeleteExpense = id => {
        this.service.deleteExpense(id);
      };

}