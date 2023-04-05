class ExpenseController {
    constructor(service, view){
        this.service = service;
        this.view = view;
        console.log('ExpenseController constructor');
        this.service.bindExpenseListChanged(this.onExpenseListChanged);
        this.view.bindAddExpense(this.handleAddExpense);
        this.view.bindEditExpense(this.handleEditExpense);
        this.view.bindDeleteExpense(this.handleDeleteExpense);
        

        this.onExpenseListChanged(this.service.expenses);


    }

    onExpenseListChanged = expenses =>{
        console.log(`onExpenseListChanged ${JSON.stringify(expenses)}`);
        this.view.displayExpenses(expenses);
        this.view.updateValues(expenses);
    };

    handleAddExpense = (expense, amount) => {
        console.log(`expenseController: addExpense ${expense}, ${amount} €`);
        this.service.addExpense(expense, amount);
      };
    
      handleEditExpense = (id, expenseText) => {
        this.service.editExpense(id, any);
      };
    
      handleDeleteExpense = id => {
        this.service.deleteExpense(id);
      };
    
    //   handleToggleTodo = id => {
    //     this.service.toggleTodo(id);
    //   };


}