class ExpenseController {
    constructor(service, view){
        this.service = service;
        this.view = view;
        console.log('ExpenseController constructor');
        this.service.bindExpenseListChanged(this.onExpenseListChanged);


    }

    onExpenseListChanged = expenses =>{
        console.log('onExpenseListChanged');
        this.view.displayExpenses(expenses);
    };

    // handleAddExpense = expense => {
    //     this.service.addExpense(expense);
    //   };
    
    //   handleEditTodo = (id, todoText) => {
    //     this.service.editTodo(id, todoText);
    //   };
    
    //   handleDeleteTodo = id => {
    //     this.service.deleteTodo(id);
    //   };
    
    //   handleToggleTodo = id => {
    //     this.service.toggleTodo(id);
    //   };


}